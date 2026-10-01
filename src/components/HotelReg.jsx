import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser, useClerk } from "@clerk/clerk-react";
import {
  FaTimes,
  FaArrowLeft,
  FaArrowRight,
  FaCheckCircle,
  FaWifi,
  FaSwimmingPool,
  FaParking,
  FaUtensils,
  FaSnowflake,
  FaTv,
  FaDumbbell,
  FaCoffee,
  FaCloudUploadAlt,
  FaLock,
  FaCreditCard,
} from "react-icons/fa";

// Side image — using an online Unsplash photo so no local asset file is needed.
// Swap this for your own hosted image any time.
const regImage =
  "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80";

// NOTE: this is a MODAL — render it only when open, e.g. from your Navbar:
//
//   const [showHotelReg, setShowHotelReg] = useState(false);
//   {showHotelReg && <HotelReg onClose={() => setShowHotelReg(false)} />}
//
// Backend switch (replaces the dummy submit in handleSubmit):
//
//   import { hotelsAPI } from "../api";
//
//   const newHotel = await hotelsAPI.createHotel(
//     { name, description, address, city, country, phone, amenities: selectedAmenities },
//     imageFiles // array of File objects — registerHotel on the backend
//                // uploads these to Cloudinary via Multer automatically
//   );
//   // the hotel is created as unapproved/unpaid — send the owner to pay
//   // the $5000 registration fee next, e.g.:
//   // navigate(`/owner/pay-registration/${newHotel._id}`);

const amenityOptions = [
  { label: "WiFi", icon: FaWifi },
  { label: "Swimming Pool", icon: FaSwimmingPool },
  { label: "Parking", icon: FaParking },
  { label: "Restaurant", icon: FaUtensils },
  { label: "Air Conditioning", icon: FaSnowflake },
  { label: "TV", icon: FaTv },
  { label: "Gym", icon: FaDumbbell },
  { label: "Breakfast Included", icon: FaCoffee },
];

const steps = ["Basic Info", "Location", "Amenities", "Photos", "Review", "Payment"];

const REGISTRATION_FEE = 5000;

const HotelReg = ({ onClose }) => {
  const { isSignedIn } = useUser();
  const { openSignIn } = useClerk();
  const navigate = useNavigate();

  const [cardDetails, setCardDetails] = useState({ cardNumber: "", expiry: "", cvv: "", nameOnCard: "" });

  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    description: "",
    address: "",
    city: "",
    country: "",
  });
  const [selectedAmenities, setSelectedAmenities] = useState([]);
  const [imageFiles, setImageFiles] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const toggleAmenity = (label) => {
    setSelectedAmenities((prev) =>
      prev.includes(label) ? prev.filter((a) => a !== label) : [...prev, label]
    );
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files).slice(0, 5); // max 5 images
    setImageFiles(files);
    setImagePreviews(files.map((file) => URL.createObjectURL(file)));
  };

  const removeImage = (idx) => {
    setImageFiles((prev) => prev.filter((_, i) => i !== idx));
    setImagePreviews((prev) => prev.filter((_, i) => i !== idx));
  };

  // what each step requires before "Next" is allowed
  const validateStep = () => {
    setError("");
    if (step === 0 && (!formData.name.trim() || !formData.phone.trim())) {
      setError("Hotel name and phone number are required.");
      return false;
    }
    if (step === 1 && (!formData.address.trim() || !formData.city.trim() || !formData.country.trim())) {
      setError("Address, city, and country are required.");
      return false;
    }
    if (step === 3 && imageFiles.length === 0) {
      setError("Please upload at least one hotel image.");
      return false;
    }
    return true;
  };

  const goNext = () => {
    if (!isSignedIn) {
      setError("Please sign up and log in before registering a hotel.");
      openSignIn();
      return;
    }
    if (!validateStep()) return;
    setStep((s) => Math.min(s + 1, steps.length - 1));
  };

  const goBack = () => {
    setError("");
    setStep((s) => Math.max(s - 1, 0));
  };

  const handlePayAndSubmit = async () => {
    setError("");

    if (
      !cardDetails.nameOnCard.trim() ||
      cardDetails.cardNumber.replace(/\s/g, "").length < 12 ||
      !cardDetails.expiry.trim() ||
      cardDetails.cvv.trim().length < 3
    ) {
      setError("Please fill in valid card details to complete the $" + REGISTRATION_FEE + " payment.");
      return;
    }

    setLoading(true);
    try {
      // TODO — real flow once backend is connected:
      // 1) create the hotel:
      //    const hotel = await hotelsAPI.createHotel(
      //      { ...formData, amenities: selectedAmenities }, imageFiles
      //    );
      // 2) charge the registration fee through your payment gateway (Stripe/PayPal),
      //    then record it:
      //    await paymentsAPI.payHotelRegistrationFee({
      //      hotelId: hotel._id, paymentGateway: "stripe", transactionId: <from gateway>,
      //    });
      await new Promise((resolve) => setTimeout(resolve, 1200)); // demo delay
      console.log("Hotel registration + payment submitted:", {
        ...formData,
        amenities: selectedAmenities,
        images: imageFiles.map((f) => f.name),
        registrationFee: REGISTRATION_FEE,
        transactionId: `demo_txn_${Date.now()}`,
      });

      setSuccess(true);
      setTimeout(() => {
        onClose?.();
        navigate("/owner/dashboard");
      }, 1500);
    } catch (err) {
      setError(err.message || "Payment failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
      <div className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh]">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-white/90 hover:bg-gray-100 transition-colors shadow"
          aria-label="Close"
        >
          <FaTimes className="w-4 h-4 text-gray-600" />
        </button>

        {/* Side image */}
        <div className="hidden md:block w-2/5 relative">
          <img src={regImage} alt="Register your hotel" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/30 flex items-end p-6">
            <p className="text-white font-playfair text-xl leading-snug">
              List your hotel and start earning with Hotelify.
            </p>
          </div>
        </div>

        {/* Form side */}
        <div className="w-full md:w-3/5 p-6 md:p-8 overflow-y-auto">
          {success ? (
            <div className="h-full flex flex-col items-center justify-center text-center gap-3 py-10">
              <FaCheckCircle className="w-12 h-12 text-emerald-500" />
              <h2 className="font-playfair text-2xl text-gray-800">Payment received!</h2>
              <p className="text-gray-500 max-w-xs">
                Your hotel has been registered. Taking you to your dashboard — it will go live
                once an admin reviews and approves it.
              </p>
            </div>
          ) : (
            <>
              <h2 className="font-playfair text-2xl text-gray-800 mb-1">Register Your Hotel</h2>
              <p className="text-sm text-gray-500 mb-5">
                A one-time $5000 registration fee applies before your listing goes live.
              </p>

              {/* Step indicator */}
              <div className="flex items-center gap-1 mb-6">
                {steps.map((label, idx) => (
                  <div key={label} className="flex items-center flex-1 last:flex-none">
                    <div className="flex flex-col items-center gap-1">
                      <div
                        className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-medium transition-colors ${
                          idx < step
                            ? "bg-emerald-500 text-white"
                            : idx === step
                            ? "bg-emerald-500 text-white ring-4 ring-emerald-100"
                            : "bg-gray-100 text-gray-400"
                        }`}
                      >
                        {idx < step ? <FaCheckCircle className="w-3.5 h-3.5" /> : idx + 1}
                      </div>
                      <span
                        className={`hidden sm:block text-[10px] ${
                          idx === step ? "text-emerald-600 font-medium" : "text-gray-400"
                        }`}
                      >
                        {label}
                      </span>
                    </div>
                    {idx < steps.length - 1 && (
                      <div
                        className={`flex-1 h-0.5 mx-1 ${idx < step ? "bg-emerald-500" : "bg-gray-200"}`}
                      />
                    )}
                  </div>
                ))}
              </div>

              {error && <p className="text-sm text-red-500 mb-4">{error}</p>}

              <div className="flex flex-col gap-4 min-h-[260px]">
                {/* Step 0 — Basic Info */}
                {step === 0 && (
                  <>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-sm text-gray-600">Hotel Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. The Grand Palace Hotel"
                        className="border border-gray-300 rounded-lg px-3 py-2 outline-none focus:border-emerald-500"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-sm text-gray-600">Phone Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+92 300 1234567"
                        className="border border-gray-300 rounded-lg px-3 py-2 outline-none focus:border-emerald-500"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-sm text-gray-600">Hotel Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="contact@yourhotel.com"
                        className="border border-gray-300 rounded-lg px-3 py-2 outline-none focus:border-emerald-500"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-sm text-gray-600">Description</label>
                      <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        placeholder="Tell guests what makes your hotel special..."
                        rows={3}
                        className="border border-gray-300 rounded-lg px-3 py-2 outline-none focus:border-emerald-500 resize-none"
                      />
                    </div>
                  </>
                )}

                {/* Step 1 — Location */}
                {step === 1 && (
                  <>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-sm text-gray-600">Address *</label>
                      <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        placeholder="Street, area"
                        className="border border-gray-300 rounded-lg px-3 py-2 outline-none focus:border-emerald-500"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex flex-col gap-1.5">
                        <label className="text-sm text-gray-600">City *</label>
                        <input
                          type="text"
                          name="city"
                          value={formData.city}
                          onChange={handleChange}
                          placeholder="Karachi"
                          className="border border-gray-300 rounded-lg px-3 py-2 outline-none focus:border-emerald-500"
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className="text-sm text-gray-600">Country *</label>
                        <input
                          type="text"
                          name="country"
                          value={formData.country}
                          onChange={handleChange}
                          placeholder="Pakistan"
                          className="border border-gray-300 rounded-lg px-3 py-2 outline-none focus:border-emerald-500"
                        />
                      </div>
                    </div>
                  </>
                )}

                {/* Step 2 — Amenities */}
                {step === 2 && (
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm text-gray-600 mb-1">
                      Select the amenities your hotel offers
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      {amenityOptions.map(({ label, icon: Icon }) => {
                        const active = selectedAmenities.includes(label);
                        return (
                          <button
                            type="button"
                            key={label}
                            onClick={() => toggleAmenity(label)}
                            className={`flex items-center gap-2 px-3 py-2.5 rounded-lg border text-sm transition-colors ${
                              active
                                ? "bg-emerald-50 border-emerald-500 text-emerald-700"
                                : "border-gray-300 text-gray-600 hover:bg-gray-50"
                            }`}
                          >
                            <Icon className="w-4 h-4" />
                            {label}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Step 3 — Photos */}
                {step === 3 && (
                  <div className="flex flex-col gap-3">
                    <label className="text-sm text-gray-600">
                      Upload hotel images * (up to 5)
                    </label>
                    <label
                      htmlFor="hotel-images"
                      className="flex flex-col items-center justify-center gap-2 border-2 border-dashed border-gray-300 rounded-xl py-8 cursor-pointer hover:border-emerald-400 hover:bg-emerald-50/40 transition-colors"
                    >
                      <FaCloudUploadAlt className="w-8 h-8 text-gray-400" />
                      <span className="text-sm text-gray-500">Click to upload images</span>
                      <input
                        id="hotel-images"
                        type="file"
                        multiple
                        accept="image/*"
                        onChange={handleImageChange}
                        className="hidden"
                      />
                    </label>

                    {imagePreviews.length > 0 && (
                      <div className="grid grid-cols-3 gap-3 mt-2">
                        {imagePreviews.map((src, idx) => (
                          <div key={idx} className="relative">
                            <img
                              src={src}
                              alt={`Preview ${idx + 1}`}
                              className="w-full h-20 object-cover rounded-lg"
                            />
                            <button
                              type="button"
                              onClick={() => removeImage(idx)}
                              className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-white rounded-full shadow flex items-center justify-center"
                            >
                              <FaTimes className="w-2.5 h-2.5 text-gray-600" />
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {/* Step 4 — Review */}
                {step === 4 && (
                  <div className="flex flex-col gap-3 text-sm">
                    <div className="border rounded-xl p-4 flex flex-col gap-1.5">
                      <p><span className="text-gray-500">Hotel Name:</span> {formData.name}</p>
                      <p><span className="text-gray-500">Phone:</span> {formData.phone}</p>
                      {formData.email && <p><span className="text-gray-500">Email:</span> {formData.email}</p>}
                      <p><span className="text-gray-500">Address:</span> {formData.address}, {formData.city}, {formData.country}</p>
                      {formData.description && (
                        <p><span className="text-gray-500">Description:</span> {formData.description}</p>
                      )}
                      <p>
                        <span className="text-gray-500">Amenities:</span>{" "}
                        {selectedAmenities.length > 0 ? selectedAmenities.join(", ") : "None selected"}
                      </p>
                      <p><span className="text-gray-500">Images:</span> {imageFiles.length} uploaded</p>
                    </div>
                    <p className="text-xs text-gray-500">
                      Next, you'll pay the ${REGISTRATION_FEE} registration fee to complete your
                      hotel listing. Your listing goes live after admin approval.
                    </p>
                  </div>
                )}

                {/* Step 5 — Payment */}
                {step === 5 && (
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between border rounded-xl p-4 bg-gray-50">
                      <span className="text-sm text-gray-600">Registration Fee</span>
                      <span className="text-xl font-semibold text-gray-800">${REGISTRATION_FEE}</span>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-sm text-gray-600">Name on Card *</label>
                      <input
                        type="text"
                        value={cardDetails.nameOnCard}
                        onChange={(e) => setCardDetails({ ...cardDetails, nameOnCard: e.target.value })}
                        placeholder="As shown on your card"
                        className="border border-gray-300 rounded-lg px-3 py-2 outline-none focus:border-emerald-500"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-sm text-gray-600">Card Number *</label>
                      <div className="relative">
                        <FaCreditCard className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                        <input
                          type="text"
                          value={cardDetails.cardNumber}
                          onChange={(e) => setCardDetails({ ...cardDetails, cardNumber: e.target.value })}
                          placeholder="1234 5678 9012 3456"
                          maxLength={19}
                          className="w-full border border-gray-300 rounded-lg pl-9 pr-3 py-2 outline-none focus:border-emerald-500"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex flex-col gap-1.5">
                        <label className="text-sm text-gray-600">Expiry (MM/YY) *</label>
                        <input
                          type="text"
                          value={cardDetails.expiry}
                          onChange={(e) => setCardDetails({ ...cardDetails, expiry: e.target.value })}
                          placeholder="MM/YY"
                          maxLength={5}
                          className="border border-gray-300 rounded-lg px-3 py-2 outline-none focus:border-emerald-500"
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className="text-sm text-gray-600">CVV *</label>
                        <input
                          type="password"
                          value={cardDetails.cvv}
                          onChange={(e) => setCardDetails({ ...cardDetails, cvv: e.target.value })}
                          placeholder="123"
                          maxLength={4}
                          className="border border-gray-300 rounded-lg px-3 py-2 outline-none focus:border-emerald-500"
                        />
                      </div>
                    </div>

                    <p className="flex items-center gap-2 text-xs text-gray-400">
                      <FaLock className="w-3 h-3" /> This is a demo form — no real payment is processed yet.
                    </p>
                  </div>
                )}
              </div>

              {/* Navigation buttons */}
              <div className="flex items-center justify-between mt-6">
                {step > 0 ? (
                  <button
                    type="button"
                    onClick={goBack}
                    className="flex items-center gap-2 px-5 py-2 border border-gray-300 text-gray-600 rounded-full text-sm hover:bg-gray-50 transition-colors"
                  >
                    <FaArrowLeft className="w-3.5 h-3.5" /> Back
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-5 py-2 border border-gray-300 text-gray-600 rounded-full text-sm hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                )}

                {step < steps.length - 1 ? (
                  <button
                    type="button"
                    onClick={goNext}
                    className="flex items-center gap-2 px-6 py-2 bg-emerald-500 text-white rounded-full text-sm hover:bg-emerald-600 transition-colors"
                  >
                    {step === 4 ? "Proceed to Payment" : "Next"} <FaArrowRight className="w-3.5 h-3.5" />
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={handlePayAndSubmit}
                    disabled={loading}
                    className="flex items-center gap-2 px-6 py-2 bg-emerald-500 text-white rounded-full text-sm hover:bg-emerald-600 transition-colors disabled:opacity-60"
                  >
                    <FaLock className="w-3 h-3" />
                    {loading ? "Processing..." : `Pay $${REGISTRATION_FEE} & Register`}
                  </button>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default HotelReg;