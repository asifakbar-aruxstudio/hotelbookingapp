import { useEffect, useState } from "react";

const Dashboard = () => {
  // ───── Mock hotel (replace with API: /api/owner/hotel) ─────
  const [hotel, setHotel] = useState(null);
  const [stats, setStats] = useState({
    totalBookings: 0,
    totalEarnings: 0,
    pendingBookings: 0,
    totalRooms: 0,
    paidAmount: 0,
    unpaidAmount: 0,
  });
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all"); // all | pending | approved | rejected

  // ───── Fetch owner's hotel data ─────
  useEffect(() => {
    setTimeout(() => {
      setHotel({
        name: "Grand Palace Hotel",
        city: "Lahore, Pakistan",
        address: "12 Mall Road, Lahore",
        rating: 4.6,
        totalRooms: 24,
        image:
          "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
      });

      setStats({
        totalBookings: 132,
        totalEarnings: 24580,
        pendingBookings: 3,
        totalRooms: 24,
        paidAmount: 19250,
        unpaidAmount: 5330,
      });

      setBookings([
        {
          id: "#BK-1042",
          guest: "Ahmed Khan",
          email: "ahmed@example.com",
          phone: "+92 300 1234567",
          room: "Deluxe Suite",
          checkIn: "2025-01-12",
          checkOut: "2025-01-15",
          guests: 2,
          amount: 450,
          status: "Pending",
          paymentStatus: "Unpaid",
          paymentMethod: "Cash on arrival",
          avatar: "https://i.pravatar.cc/150?img=12",
        },
        {
          id: "#BK-1041",
          guest: "Sarah Lee",
          email: "sarah@example.com",
          phone: "+92 301 2345678",
          room: "Sea Facing Room",
          checkIn: "2025-01-11",
          checkOut: "2025-01-14",
          guests: 1,
          amount: 620,
          status: "Approved",
          paymentStatus: "Paid",
          paymentMethod: "Credit Card",
          avatar: "https://i.pravatar.cc/150?img=45",
        },
        {
          id: "#BK-1040",
          guest: "Michael Brown",
          email: "michael@example.com",
          phone: "+92 302 3456789",
          room: "Standard Room",
          checkIn: "2025-01-10",
          checkOut: "2025-01-12",
          guests: 3,
          amount: 280,
          status: "Approved",
          paymentStatus: "Paid",
          paymentMethod: "Stripe",
          avatar: "https://i.pravatar.cc/150?img=33",
        },
        {
          id: "#BK-1039",
          guest: "Ayesha Malik",
          email: "ayesha@example.com",
          phone: "+92 303 4567890",
          room: "Executive Suite",
          checkIn: "2025-01-09",
          checkOut: "2025-01-11",
          guests: 2,
          amount: 510,
          status: "Pending",
          paymentStatus: "Unpaid",
          paymentMethod: "Bank Transfer",
          avatar: "https://i.pravatar.cc/150?img=48",
        },
        {
          id: "#BK-1038",
          guest: "David Chen",
          email: "david@example.com",
          phone: "+92 304 5678901",
          room: "Family Room",
          checkIn: "2025-01-08",
          checkOut: "2025-01-13",
          guests: 4,
          amount: 890,
          status: "Rejected",
          paymentStatus: "Unpaid",
          paymentMethod: "—",
          avatar: "https://i.pravatar.cc/150?img=15",
        },
      ]);

      setLoading(false);
    }, 500);
  }, []);

  // ───── Approve / Reject handlers ─────
  const updateBookingStatus = (id, newStatus) => {
    setBookings((prev) =>
      prev.map((b) => (b.id === id ? { ...b, status: newStatus } : b))
    );
    // TODO: PATCH /api/owner/bookings/:id { status }
  };

  // ───── Mark payment as Paid ─────
  const markAsPaid = (id) => {
    setBookings((prev) =>
      prev.map((b) =>
        b.id === id ? { ...b, paymentStatus: "Paid" } : b
      )
    );
    // TODO: PATCH /api/owner/bookings/:id { paymentStatus: "Paid" }
  };

  const statusStyle = (status) => {
    switch (status) {
      case "Approved":
        return "bg-green-100 text-green-700 border border-green-200";
      case "Pending":
        return "bg-yellow-100 text-yellow-700 border border-yellow-200";
      case "Rejected":
        return "bg-red-100 text-red-700 border border-red-200";
      default:
        return "bg-gray-100 text-gray-700 border border-gray-200";
    }
  };

  const paymentStyle = (p) => {
    return p === "Paid"
      ? "bg-emerald-100 text-emerald-700 border border-emerald-200"
      : "bg-rose-100 text-rose-700 border border-rose-200";
  };

  const filteredBookings =
    filter === "all"
      ? bookings
      : bookings.filter((b) => b.status.toLowerCase() === filter);

  return (
    <div className="w-full min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
      {/* ───── Page Header ───── */}
      <div className="mb-6 sm:mb-8">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800">
          Owner Dashboard
        </h1>
        <p className="text-sm sm:text-base text-gray-500 mt-1">
          Manage your hotel, rooms, bookings, and payments in one place.
        </p>
      </div>

      {/* ───── Hotel Info Card ───── */}
      {loading ? (
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-6 flex items-center justify-center">
          <i className="fa-solid fa-spinner fa-spin text-2xl text-gray-400"></i>
        </div>
      ) : (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-6 sm:mb-8">
          <div className="flex flex-col md:flex-row">
            <img
              src={hotel.image}
              alt={hotel.name}
              className="w-full md:w-72 h-48 md:h-auto object-cover"
            />
            <div className="flex-1 p-5 sm:p-6 flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
                    {hotel.name}
                  </h2>
                  <span className="inline-flex items-center gap-1 text-xs sm:text-sm bg-yellow-100 text-yellow-700 border border-yellow-200 px-2.5 py-1 rounded-full font-medium">
                    <i className="fa-solid fa-star"></i> {hotel.rating}
                  </span>
                </div>
                <p className="text-sm text-gray-500 flex items-center gap-2 mb-1">
                  <i className="fa-solid fa-location-dot text-gray-400"></i>
                  {hotel.address}
                </p>
                <p className="text-sm text-gray-500 flex items-center gap-2">
                  <i className="fa-solid fa-bed text-gray-400"></i>
                  {hotel.totalRooms} rooms in total
                </p>
              </div>

              <div className="flex flex-wrap gap-3 mt-4">
                <button className="text-sm font-medium text-white bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400 px-4 py-2 rounded-lg shadow-sm transition-all flex items-center gap-2">
                  <i className="fa-solid fa-pen"></i> Edit Hotel
                </button>
                <button className="text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-lg transition-all flex items-center gap-2">
                  <i className="fa-solid fa-door-open"></i> Manage Rooms
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ───── Stat Cards ───── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8">
        {/* Total Bookings */}
        <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-lg transition-all border border-gray-100 relative overflow-hidden group">
          <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-50 rounded-full opacity-60 group-hover:scale-110 transition-transform"></div>
          <div className="relative flex items-center justify-between">
            <div>
              <p className="text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wide">
                Total Bookings
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mt-2">
                {loading ? "—" : stats.totalBookings}
              </h2>
            </div>
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-lg sm:text-xl">
              <i className="fa-solid fa-calendar-check"></i>
            </div>
          </div>
        </div>

        {/* Total Earnings */}
        <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-lg transition-all border border-gray-100 relative overflow-hidden group">
          <div className="absolute -top-6 -right-6 w-24 h-24 bg-green-50 rounded-full opacity-60 group-hover:scale-110 transition-transform"></div>
          <div className="relative flex items-center justify-between">
            <div>
              <p className="text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wide">
                Total Earnings
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mt-2">
                {loading ? "—" : `$${stats.totalEarnings.toLocaleString()}`}
              </h2>
            </div>
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-lg sm:text-xl">
              <i className="fa-solid fa-dollar-sign"></i>
            </div>
          </div>
        </div>

        {/* Pending Bookings */}
        <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-lg transition-all border border-gray-100 relative overflow-hidden group">
          <div className="absolute -top-6 -right-6 w-24 h-24 bg-yellow-50 rounded-full opacity-60 group-hover:scale-110 transition-transform"></div>
          <div className="relative flex items-center justify-between">
            <div>
              <p className="text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wide">
                Pending Requests
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mt-2">
                {loading ? "—" : stats.pendingBookings}
              </h2>
            </div>
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600 text-lg sm:text-xl">
              <i className="fa-solid fa-clock"></i>
            </div>
          </div>
        </div>

        {/* Total Rooms */}
        <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-lg transition-all border border-gray-100 relative overflow-hidden group">
          <div className="absolute -top-6 -right-6 w-24 h-24 bg-orange-50 rounded-full opacity-60 group-hover:scale-110 transition-transform"></div>
          <div className="relative flex items-center justify-between">
            <div>
              <p className="text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wide">
                Total Rooms
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mt-2">
                {loading ? "—" : stats.totalRooms}
              </h2>
            </div>
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 text-lg sm:text-xl">
              <i className="fa-solid fa-bed"></i>
            </div>
          </div>
        </div>
      </div>

      {/* ───── Payment Summary Cards ───── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
        {/* Paid Amount */}
        <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-lg transition-all border border-gray-100 relative overflow-hidden group">
          <div className="absolute -top-6 -right-6 w-24 h-24 bg-emerald-50 rounded-full opacity-60 group-hover:scale-110 transition-transform"></div>
          <div className="relative flex items-center justify-between">
            <div>
              <p className="text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wide">
                Paid Amount
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-emerald-600 mt-2">
                {loading ? "—" : `$${stats.paidAmount.toLocaleString()}`}
              </h2>
              <p className="text-xs text-gray-500 mt-2 flex items-center gap-1">
                <i className="fa-solid fa-circle-check text-emerald-500"></i>
                Received from guests
              </p>
            </div>
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 text-lg sm:text-xl">
              <i className="fa-solid fa-wallet"></i>
            </div>
          </div>
        </div>

        {/* Unpaid Amount */}
        <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-lg transition-all border border-gray-100 relative overflow-hidden group">
          <div className="absolute -top-6 -right-6 w-24 h-24 bg-rose-50 rounded-full opacity-60 group-hover:scale-110 transition-transform"></div>
          <div className="relative flex items-center justify-between">
            <div>
              <p className="text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wide">
                Unpaid Amount
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-rose-600 mt-2">
                {loading ? "—" : `$${stats.unpaidAmount.toLocaleString()}`}
              </h2>
              <p className="text-xs text-gray-500 mt-2 flex items-center gap-1">
                <i className="fa-solid fa-circle-exclamation text-rose-500"></i>
                Pending from guests
              </p>
            </div>
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-rose-100 flex items-center justify-center text-rose-600 text-lg sm:text-xl">
              <i className="fa-solid fa-money-bill-wave"></i>
            </div>
          </div>
        </div>
      </div>

      {/* ───── Bookings Section ───── */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        {/* Header + Filter Tabs */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 px-5 sm:px-6 py-4 sm:py-5 border-b border-gray-100">
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-800">
              Bookings
            </h3>
            <p className="text-xs sm:text-sm text-gray-500">
              Approve, reject, and track payment status
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {["all", "pending", "approved", "rejected"].map((tab) => (
              <button
                key={tab}
                onClick={() => setFilter(tab)}
                className={`text-xs sm:text-sm px-3.5 py-1.5 rounded-full font-medium capitalize transition-all
                  ${
                    filter === tab
                      ? "bg-gradient-to-r from-yellow-500 to-orange-500 text-white shadow"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Empty state */}
        {!loading && filteredBookings.length === 0 && (
          <div className="p-10 text-center text-gray-500">
            <i className="fa-solid fa-inbox text-3xl mb-3 text-gray-300"></i>
            <p className="text-sm">No {filter} bookings found.</p>
          </div>
        )}

        {/* Desktop Table */}
        {!loading && filteredBookings.length > 0 && (
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-gray-50 text-gray-600 uppercase text-xs tracking-wider">
                <tr>
                  <th className="px-6 py-3">Guest</th>
                  <th className="px-6 py-3">Room</th>
                  <th className="px-6 py-3">Check In</th>
                  <th className="px-6 py-3">Check Out</th>
                  <th className="px-6 py-3">Guests</th>
                  <th className="px-6 py-3">Amount</th>
                  <th className="px-6 py-3">Payment</th>
                  <th className="px-6 py-3">Booking</th>
                  <th className="px-6 py-3 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filteredBookings.map((bk) => (
                  <tr
                    key={bk.id}
                    className="hover:bg-gray-50 transition-colors"
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <img
                          src={bk.avatar}
                          alt={bk.guest}
                          className="w-9 h-9 rounded-full object-cover"
                        />
                        <div>
                          <p className="font-medium text-gray-800">
                            {bk.guest}
                          </p>
                          <p className="text-xs text-gray-500">{bk.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-700">{bk.room}</td>
                    <td className="px-6 py-4 text-gray-700">{bk.checkIn}</td>
                    <td className="px-6 py-4 text-gray-700">{bk.checkOut}</td>
                    <td className="px-6 py-4 text-gray-700">{bk.guests}</td>
                    <td className="px-6 py-4 font-semibold text-gray-800">
                      ${bk.amount}
                    </td>

                    {/* 💳 Payment Status Column */}
                    <td className="px-6 py-4">
                      <div className="flex flex-col gap-1">
                        <span
                          className={`inline-flex items-center gap-1 w-fit px-2.5 py-1 rounded-full text-xs font-medium ${paymentStyle(
                            bk.paymentStatus
                          )}`}
                        >
                          <i
                            className={`fa-solid ${
                              bk.paymentStatus === "Paid"
                                ? "fa-circle-check"
                                : "fa-circle-xmark"
                            }`}
                          ></i>
                          {bk.paymentStatus}
                        </span>
                        {bk.paymentMethod && bk.paymentMethod !== "—" && (
                          <span className="text-[11px] text-gray-400">
                            {bk.paymentMethod}
                          </span>
                        )}
                      </div>
                    </td>

                    {/* Booking Status Column */}
                    <td className="px-6 py-4">
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${statusStyle(
                          bk.status
                        )}`}
                      >
                        {bk.status}
                      </span>
                    </td>

                    {/* Action Column */}
                    <td className="px-6 py-4 text-right">
                      <div className="flex flex-col items-end gap-2">
                        {bk.status === "Pending" && (
                          <div className="flex justify-end gap-2">
                            <button
                              onClick={() =>
                                updateBookingStatus(bk.id, "Approved")
                              }
                              className="text-xs font-medium text-white bg-green-500 hover:bg-green-600 px-3 py-1.5 rounded-lg transition-all flex items-center gap-1"
                            >
                              <i className="fa-solid fa-check"></i> Approve
                            </button>
                            <button
                              onClick={() =>
                                updateBookingStatus(bk.id, "Rejected")
                              }
                              className="text-xs font-medium text-white bg-red-500 hover:bg-red-600 px-3 py-1.5 rounded-lg transition-all flex items-center gap-1"
                            >
                              <i className="fa-solid fa-xmark"></i> Reject
                            </button>
                          </div>
                        )}

                        {bk.status !== "Rejected" &&
                          bk.paymentStatus === "Unpaid" && (
                            <button
                              onClick={() => markAsPaid(bk.id)}
                              className="text-xs font-medium text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 px-3 py-1.5 rounded-lg transition-all flex items-center gap-1"
                            >
                              <i className="fa-solid fa-money-bill"></i> Mark
                              Paid
                            </button>
                          )}

                        {bk.status !== "Pending" &&
                          (bk.paymentStatus === "Paid" ||
                            bk.status === "Rejected") && (
                            <span className="text-xs text-gray-400 italic">
                              No action
                            </span>
                          )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Mobile Cards */}
        {!loading && filteredBookings.length > 0 && (
          <div className="md:hidden divide-y divide-gray-100">
            {filteredBookings.map((bk) => (
              <div key={bk.id} className="p-4 sm:p-5">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3">
                    <img
                      src={bk.avatar}
                      alt={bk.guest}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold text-gray-800">
                        {bk.guest}
                      </p>
                      <p className="text-xs text-gray-500">{bk.email}</p>
                    </div>
                  </div>
                  <span
                    className={`inline-block px-2.5 py-1 rounded-full text-[10px] font-medium whitespace-nowrap ${statusStyle(
                      bk.status
                    )}`}
                  >
                    {bk.status}
                  </span>
                </div>

                {/* Payment Badge */}
                <div className="mb-3">
                  <span
                    className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-medium ${paymentStyle(
                      bk.paymentStatus
                    )}`}
                  >
                    <i
                      className={`fa-solid ${
                        bk.paymentStatus === "Paid"
                          ? "fa-circle-check"
                          : "fa-circle-xmark"
                      }`}
                    ></i>
                    Payment: {bk.paymentStatus}
                  </span>
                  {bk.paymentMethod && bk.paymentMethod !== "—" && (
                    <span className="text-[11px] text-gray-400 ml-2">
                      via {bk.paymentMethod}
                    </span>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div>
                    <p className="text-gray-400 uppercase">Room</p>
                    <p className="text-gray-700 font-medium">{bk.room}</p>
                  </div>
                  <div>
                    <p className="text-gray-400 uppercase">Guests</p>
                    <p className="text-gray-700 font-medium">{bk.guests}</p>
                  </div>
                  <div>
                    <p className="text-gray-400 uppercase">Check In</p>
                    <p className="text-gray-700 font-medium">{bk.checkIn}</p>
                  </div>
                  <div>
                    <p className="text-gray-400 uppercase">Check Out</p>
                    <p className="text-gray-700 font-medium">{bk.checkOut}</p>
                  </div>
                </div>

                <div className="mt-3 pt-3 border-t border-gray-100">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-base font-bold text-gray-800">
                      ${bk.amount}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {bk.status === "Pending" && (
                      <>
                        <button
                          onClick={() =>
                            updateBookingStatus(bk.id, "Approved")
                          }
                          className="text-xs font-medium text-white bg-green-500 hover:bg-green-600 px-3 py-1.5 rounded-lg transition-all"
                        >
                          <i className="fa-solid fa-check mr-1"></i> Approve
                        </button>
                        <button
                          onClick={() =>
                            updateBookingStatus(bk.id, "Rejected")
                          }
                          className="text-xs font-medium text-white bg-red-500 hover:bg-red-600 px-3 py-1.5 rounded-lg transition-all"
                        >
                          <i className="fa-solid fa-xmark mr-1"></i> Reject
                        </button>
                      </>
                    )}

                    {bk.status !== "Rejected" &&
                      bk.paymentStatus === "Unpaid" && (
                        <button
                          onClick={() => markAsPaid(bk.id)}
                          className="text-xs font-medium text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 px-3 py-1.5 rounded-lg transition-all"
                        >
                          <i className="fa-solid fa-money-bill mr-1"></i> Mark
                          Paid
                        </button>
                      )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;