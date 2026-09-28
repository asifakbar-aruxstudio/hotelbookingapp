import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser, useClerk } from "@clerk/clerk-react";
import { loadBookings, saveBookings } from "../data/bookingsDummyData";
import location from "../assets/location.png";
import Title from "../components/Title";

// One page, two views, decided by the logged-in user's role:
//   customer     -> only the bookings THEY made
//   hotel_owner  -> only the bookings made at THEIR hotel(s)
//   admin        -> everything
//
// Role: Clerk has no built-in roles, so for now we read it from the Clerk user's
// publicMetadata (set it in Clerk Dashboard -> Users -> your user -> Public
// metadata:  { "role": "hotel_owner" }). Default is "customer".
// Once the backend is connected, get the role from GET /api/v1/users/current-user.
//
// Backend switch (replaces loadBookings/saveBookings below):
//   customer: bookingsAPI.getMyBookings()
//   owner:    bookingsAPI.getHotelBookings(hotelId)  (one call per owned hotel)
//   cancel:   bookingsAPI.cancelBooking(id)
//   status:   bookingsAPI.updateBookingStatus(id, status)

const statusStyles = {
  pending: "bg-amber-100 text-amber-700",
  confirmed: "bg-emerald-100 text-emerald-700",
  completed: "bg-blue-100 text-blue-700",
  cancelled: "bg-red-100 text-red-600",
};

const paymentStyles = {
  paid: "bg-emerald-50 text-emerald-700",
  unpaid: "bg-gray-100 text-gray-600",
  refunded: "bg-purple-50 text-purple-700",
};

const formatDate = (d) =>
  new Date(d).toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" });

const nightsBetween = (a, b) => Math.max(1, Math.ceil((new Date(b) - new Date(a)) / 86400000));

const tabs = [
  { key: "all", label: "All" },
  { key: "upcoming", label: "Upcoming" },
  { key: "completed", label: "Completed" },
  { key: "cancelled", label: "Cancelled" },
];

const MyBookings = () => {
  const navigate = useNavigate();
  const { isLoaded, isSignedIn, user } = useUser();
  const { openSignIn } = useClerk();

  const [bookings, setBookings] = useState(loadBookings);
  const [activeTab, setActiveTab] = useState("all");

  const role = user?.publicMetadata?.role || "customer";
  const isOwner = role === "hotel_owner";
  const isAdmin = role === "admin";

  // each person only sees their own slice of the data
  const visibleBookings = useMemo(() => {
    if (!user) return [];
    if (isAdmin) return bookings;
    if (isOwner) {
      return bookings.filter((b) => b.hotel.ownerId === user.id || b.hotel.ownerId === "demo");
    }
    return bookings.filter((b) => b.customerId === user.id || b.customerId === "demo");
  }, [bookings, user, isOwner, isAdmin]);

  const tabbedBookings = useMemo(() => {
    if (activeTab === "upcoming") {
      return visibleBookings.filter((b) => b.status === "pending" || b.status === "confirmed");
    }
    if (activeTab === "completed") return visibleBookings.filter((b) => b.status === "completed");
    if (activeTab === "cancelled") return visibleBookings.filter((b) => b.status === "cancelled");
    return visibleBookings;
  }, [visibleBookings, activeTab]);

  const stats = useMemo(() => {
    const active = visibleBookings.filter((b) => b.status !== "cancelled");
    return {
      total: visibleBookings.length,
      confirmed: visibleBookings.filter((b) => b.status === "confirmed").length,
      // owner earns the room price only; the 10% booking charge goes to the platform
      earnings: active.filter((b) => b.paymentStatus === "paid").reduce((s, b) => s + b.roomPrice, 0),
      spent: active.filter((b) => b.paymentStatus === "paid").reduce((s, b) => s + b.totalPrice, 0),
    };
  }, [visibleBookings]);

  const updateStatus = (id, status, extra = {}) => {
    setBookings((prev) => {
      const next = prev.map((b) => (b._id === id ? { ...b, status, ...extra } : b));
      saveBookings(next);
      return next;
    });
  };

  const handleCancel = (booking) => {
    if (window.confirm("Are you sure you want to cancel this booking?")) {
      updateStatus(booking._id, "cancelled", {
        paymentStatus: booking.paymentStatus === "paid" ? "refunded" : booking.paymentStatus,
      });
    }
  };

  if (!isLoaded) {
    return <div className="pt-28 px-4 md:px-16 lg:px-24 text-gray-500">Loading...</div>;
  }

  if (!isSignedIn) {
    return (
      <div className="pt-28 md:pt-35 px-4 md:px-16 lg:px-24 text-center">
        <Title
          Title="My Bookings"
          SubTitle="Please sign up and log in to see your bookings."
        />
        <button
          onClick={() => openSignIn()}
          className="mt-5 px-8 py-2.5 bg-emerald-500 text-white rounded-full hover:bg-emerald-600 transition-colors"
        >
          Login
        </button>
      </div>
    );
  }

  return (
    <div className="pt-28 md:pt-35 px-4 md:px-16 lg:px-24 pb-16">
      <div className="mb-8">
        <Title
          Title={isOwner || isAdmin ? "Hotel Bookings" : "My Bookings"}
          SubTitle={
            isOwner
              ? "Bookings made at your hotels. You only see guests who booked with you."
              : isAdmin
              ? "All bookings across the platform."
              : "All the bookings you made with your account. Only you can see these."
          }
          align="left"
        />
      </div>

      {/* Summary cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8 max-w-3xl">
        <div className="border rounded-xl p-4">
          <p className="text-xs text-gray-500">Total bookings</p>
          <p className="text-2xl font-medium text-gray-800">{stats.total}</p>
        </div>
        <div className="border rounded-xl p-4">
          <p className="text-xs text-gray-500">Confirmed</p>
          <p className="text-2xl font-medium text-gray-800">{stats.confirmed}</p>
        </div>
        <div className="border rounded-xl p-4 col-span-2 md:col-span-1">
          <p className="text-xs text-gray-500">{isOwner || isAdmin ? "Earnings (room price)" : "Total paid"}</p>
          <p className="text-2xl font-medium text-emerald-600">
            ${isOwner || isAdmin ? stats.earnings : stats.spent}
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mb-6 overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`px-4 py-1.5 rounded-full text-sm whitespace-nowrap border transition-colors ${
              activeTab === tab.key
                ? "bg-emerald-500 text-white border-emerald-500"
                : "text-gray-600 border-gray-300 hover:bg-gray-50"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Empty state */}
      {tabbedBookings.length === 0 && (
        <div className="border rounded-xl p-10 text-center max-w-3xl">
          <p className="text-gray-500">No bookings found.</p>
          {!isOwner && !isAdmin && (
            <button
              onClick={() => navigate("/rooms")}
              className="mt-4 px-6 py-2 bg-emerald-500 text-white rounded-full text-sm hover:bg-emerald-600 transition-colors"
            >
              Browse rooms
            </button>
          )}
        </div>
      )}

      {/* Booking cards */}
      <div className="flex flex-col gap-6 max-w-4xl">
        {tabbedBookings.map((b) => {
          const nights = nightsBetween(b.checkInDate, b.checkOutDate);
          const canCancel = !isOwner && !isAdmin && (b.status === "pending" || b.status === "confirmed");

          return (
            <div key={b._id} className="border rounded-xl p-4 flex flex-col md:flex-row gap-5">
              <img
                src={b.room.images?.[0]}
                alt={b.room.roomType}
                className="w-full md:w-56 h-40 object-cover rounded-lg"
              />

              <div className="flex-1 flex flex-col gap-1.5">
                <div className="flex flex-wrap items-center gap-2">
                  <p className="font-playfair text-xl text-gray-800">{b.hotel.name}</p>
                  <span className="text-sm text-gray-500">({b.room.roomType})</span>
                  <span className={`px-2.5 py-0.5 rounded-full text-xs capitalize ${statusStyles[b.status]}`}>
                    {b.status}
                  </span>
                  <span className={`px-2.5 py-0.5 rounded-full text-xs capitalize ${paymentStyles[b.paymentStatus]}`}>
                    {b.paymentStatus}
                  </span>
                </div>

                <div className="flex items-center gap-2 text-gray-500 text-sm">
                  <img src={location} alt="Location" className="w-3.5" />
                  <span>{b.hotel.address}</span>
                </div>

                {/* owner/admin see WHO booked */}
                {(isOwner || isAdmin) && (
                  <div className="flex items-center gap-2 mt-1">
                    {b.user.avatar ? (
                      <img src={b.user.avatar} alt={b.user.fullName} className="w-8 h-8 rounded-full object-cover" />
                    ) : (
                      <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 text-xs font-medium flex items-center justify-center">
                        {b.user.fullName.split(" ").map((p) => p[0]).join("").slice(0, 2).toUpperCase()}
                      </div>
                    )}
                    <div>
                      <p className="text-sm text-gray-800 leading-tight">{b.user.fullName}</p>
                      <p className="text-xs text-gray-500 leading-tight">{b.user.email}</p>
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-2 text-sm">
                  <div>
                    <p className="text-xs text-gray-500">Check-in</p>
                    <p className="text-gray-800">{formatDate(b.checkInDate)}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Check-out</p>
                    <p className="text-gray-800">{formatDate(b.checkOutDate)}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Nights</p>
                    <p className="text-gray-800">{nights}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Guests</p>
                    <p className="text-gray-800">{b.guests}</p>
                  </div>
                </div>

                <div className="text-sm text-gray-600 mt-2">
                  Room ${b.roomPrice} + booking charge ${b.bookingCharge} ={" "}
                  <span className="font-semibold text-emerald-600">${b.totalPrice}</span>
                </div>

                <div className="flex flex-wrap gap-2 mt-3">
                  <button
                    onClick={() => navigate(`/rooms/${b.room._id}`)}
                    className="px-4 py-1.5 border border-gray-300 rounded-full text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    View room
                  </button>

                  {canCancel && (
                    <button
                      onClick={() => handleCancel(b)}
                      className="px-4 py-1.5 border border-red-300 text-red-600 rounded-full text-sm hover:bg-red-50 transition-colors"
                    >
                      Cancel booking
                    </button>
                  )}

                  {!isOwner && !isAdmin && b.status === "completed" && (
                    <button
                      onClick={() => navigate(`/rooms/${b.room._id}`)}
                      className="px-4 py-1.5 bg-emerald-500 text-white rounded-full text-sm hover:bg-emerald-600 transition-colors"
                    >
                      Leave a review
                    </button>
                  )}

                  {(isOwner || isAdmin) && b.status === "pending" && (
                    <button
                      onClick={() => updateStatus(b._id, "confirmed")}
                      className="px-4 py-1.5 bg-emerald-500 text-white rounded-full text-sm hover:bg-emerald-600 transition-colors"
                    >
                      Confirm
                    </button>
                  )}

                  {(isOwner || isAdmin) && b.status === "confirmed" && (
                    <button
                      onClick={() => updateStatus(b._id, "completed")}
                      className="px-4 py-1.5 bg-blue-500 text-white rounded-full text-sm hover:bg-blue-600 transition-colors"
                    >
                      Mark completed
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MyBookings;