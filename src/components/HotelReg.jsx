import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Hotel,
  User,
  MapPin,
  Building2,
  ShieldCheck,
  Eye,
  EyeOff,
} from "lucide-react";

const steps = [
  {
    title: "Owner Information",
    icon: User,
  },
  {
    title: "Hotel Information",
    icon: Hotel,
  },
  {
    title: "Location",
    icon: MapPin,
  },
  {
    title: "Hotel Details",
    icon: Building2,
  },
  {
    title: "Verification",
    icon: ShieldCheck,
  },
  {
    title: "Review",
    icon: Check,
  },
];

const HotelReg = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [formData, setFormData] = useState({
    // Owner
    ownerName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",

    // Hotel
    hotelName: "",
    hotelType: "",
    description: "",

    // Location
    country: "Pakistan",
    province: "",
    city: "",
    address: "",
    postalCode: "",

    // Details
    rooms: "",
    checkIn: "14:00",
    checkOut: "12:00",
    facilities: [],

    // Verification
    cnic: "",
    businessEmail: "",
    website: "",
    terms: false,
  });

  const [errors, setErrors] = useState({});

  const provinces = {
    Sindh: [
      "Karachi",
      "Hyderabad",
      "Sukkur",
      "Larkana",
      "Nawabshah",
      "Mirpurkhas",
      "Thatta",
      "Jacobabad",
    ],
    Punjab: [
      "Lahore",
      "Rawalpindi",
      "Faisalabad",
      "Multan",
      "Gujranwala",
      "Sialkot",
      "Bahawalpur",
    ],
    "Khyber Pakhtunkhwa": [
      "Peshawar",
      "Abbottabad",
      "Mardan",
      "Swat",
      "Kohat",
      "Dera Ismail Khan",
    ],
    Balochistan: [
      "Quetta",
      "Gwadar",
      "Turbat",
      "Khuzdar",
      "Chaman",
    ],
    "Islamabad Capital Territory": ["Islamabad"],
    "Gilgit-Baltistan": [
      "Gilgit",
      "Skardu",
      "Hunza",
    ],
    "Azad Kashmir": [
      "Muzaffarabad",
      "Mirpur",
      "Rawalakot",
    ],
  };

  const facilityOptions = [
    "Free WiFi",
    "Free Parking",
    "Swimming Pool",
    "Restaurant",
    "Room Service",
    "Air Conditioning",
    "Gym",
    "Spa",
    "Airport Shuttle",
    "24/7 Reception",
  ];

  const updateField = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [field]: "",
    }));
  };

  const toggleFacility = (facility) => {
    setFormData((prev) => {
      const exists = prev.facilities.includes(facility);

      return {
        ...prev,
        facilities: exists
          ? prev.facilities.filter((item) => item !== facility)
          : [...prev.facilities, facility],
      };
    });
  };

  const validateStep = () => {
    const newErrors = {};

    if (currentStep === 0) {
      if (!formData.ownerName.trim()) {
        newErrors.ownerName = "Owner name is required";
      }

      if (!formData.email.trim()) {
        newErrors.email = "Email is required";
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = "Enter a valid email";
      }

      if (!formData.phone.trim()) {
        newErrors.phone = "Phone number is required";
      }

      if (!formData.password) {
        newErrors.password = "Password is required";
      } else if (formData.password.length < 8) {
        newErrors.password = "Password must be at least 8 characters";
      }

      if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = "Passwords do not match";
      }
    }

    if (currentStep === 1) {
      if (!formData.hotelName.trim()) {
        newErrors.hotelName = "Hotel name is required";
      }

      if (!formData.hotelType) {
        newErrors.hotelType = "Select hotel type";
      }

      if (!formData.description.trim()) {
        newErrors.description = "Hotel description is required";
      }
    }

    if (currentStep === 2) {
      if (!formData.province) {
        newErrors.province = "Select province";
      }

      if (!formData.city) {
        newErrors.city = "Select city";
      }

      if (!formData.address.trim()) {
        newErrors.address = "Hotel address is required";
      }
    }

    if (currentStep === 3) {
      if (!formData.rooms) {
        newErrors.rooms = "Enter number of rooms";
      }

      if (formData.facilities.length === 0) {
        newErrors.facilities = "Select at least one facility";
      }
    }

    if (currentStep === 4) {
      if (!formData.cnic.trim()) {
        newErrors.cnic = "CNIC / ID number is required";
      }

      if (!formData.businessEmail.trim()) {
        newErrors.businessEmail = "Business email is required";
      }

      if (!formData.terms) {
        newErrors.terms =
          "You must agree to Hotelify terms and conditions";
      }
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (!validateStep()) return;

    if (currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateStep()) return;

    console.log("Hotel Registration Data:", formData);

    alert(
      "Hotel registration submitted successfully! Backend will be connected next."
    );
  };

  const inputClass = (field) =>
    `w-full rounded-xl border ${
      errors[field]
        ? "border-red-400 bg-red-50"
        : "border-gray-200 bg-gray-50"
    } px-4 py-3.5 text-sm outline-none transition focus:border-[#00987e] focus:bg-white focus:ring-4 focus:ring-[#00987e]/10`;

  const renderError = (field) => {
    if (!errors[field]) return null;

    return (
      <p className="mt-1.5 text-xs text-red-500">
        {errors[field]}
      </p>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50/40 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <div className="mb-8 text-center">
          <div className="mb-4 inline-flex items-center gap-2">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#00987e] text-white shadow-lg shadow-[#00987e]/20">
              <Hotel size={23} />
            </div>

            <span className="text-2xl font-bold tracking-tight text-slate-800">
              Hotel<span className="text-[#00987e]">ify</span>
            </span>
          </div>

          <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            Register Your Hotel
          </h1>

          <p className="mx-auto mt-2 max-w-xl text-sm text-slate-500 sm:text-base">
            Join Hotelify and manage your hotel, rooms and bookings
            from one powerful dashboard.
          </p>
        </div>

        <div className="grid overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl shadow-slate-200/50 lg:grid-cols-[280px_1fr]">

          {/* Sidebar */}
          <aside className="hidden bg-slate-900 p-7 lg:block">
            <div className="sticky top-8">
              <p className="mb-7 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                Registration
              </p>

              <div className="space-y-1">
                {steps.map((step, index) => {
                  const Icon = step.icon;
                  const active = index === currentStep;
                  const completed = index < currentStep;

                  return (
                    <div
                      key={step.title}
                      className={`relative flex items-center gap-3 rounded-xl px-3 py-3 transition ${
                        active
                          ? "bg-white/10 text-white"
                          : completed
                          ? "text-emerald-400"
                          : "text-slate-500"
                      }`}
                    >
                      <div
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border ${
                          active
                            ? "border-[#00987e] bg-[#00987e] text-white"
                            : completed
                            ? "border-emerald-500 bg-emerald-500/10"
                            : "border-slate-700"
                        }`}
                      >
                        {completed ? (
                          <Check size={17} />
                        ) : (
                          <Icon size={17} />
                        )}
                      </div>

                      <div>
                        <p className="text-xs text-slate-500">
                          Step {index + 1}
                        </p>

                        <p className="text-sm font-medium">
                          {step.title}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-10 rounded-2xl border border-slate-700 bg-slate-800 p-5">
                <p className="text-sm font-semibold text-white">
                  Why join Hotelify?
                </p>

                <ul className="mt-3 space-y-2 text-xs leading-5 text-slate-400">
                  <li>✓ Manage rooms easily</li>
                  <li>✓ Receive online bookings</li>
                  <li>✓ Track your earnings</li>
                  <li>✓ Professional hotel profile</li>
                </ul>
              </div>
            </div>
          </aside>

          {/* Main Form */}
          <main className="p-5 sm:p-8 lg:p-10">

            {/* Mobile Progress */}
            <div className="mb-7 lg:hidden">
              <div className="mb-3 flex items-center justify-between">
                <span className="text-sm font-semibold text-slate-800">
                  Step {currentStep + 1} of {steps.length}
                </span>

                <span className="text-sm text-slate-500">
                  {steps[currentStep].title}
                </span>
              </div>

              <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                <div
                  className="h-full rounded-full bg-[#00987e] transition-all duration-500"
                  style={{
                    width: `${
                      ((currentStep + 1) / steps.length) * 100
                    }%`,
                  }}
                />
              </div>
            </div>

            <form onSubmit={handleSubmit}>

              {/* STEP 1 */}
              {currentStep === 0 && (
                <section>
                  <StepHeading
                    number="01"
                    title="Owner Information"
                    description="Tell us about the person who will manage this hotel."
                  />

                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Full Name" required>
                      <input
                        type="text"
                        placeholder="e.g. Asif Akbar"
                        className={inputClass("ownerName")}
                        value={formData.ownerName}
                        onChange={(e) =>
                          updateField("ownerName", e.target.value)
                        }
                      />
                      {renderError("ownerName")}
                    </Field>

                    <Field label="Email Address" required>
                      <input
                        type="email"
                        placeholder="owner@example.com"
                        className={inputClass("email")}
                        value={formData.email}
                        onChange={(e) =>
                          updateField("email", e.target.value)
                        }
                      />
                      {renderError("email")}
                    </Field>

                    <Field label="Phone Number" required>
                      <input
                        type="tel"
                        placeholder="+92 300 1234567"
                        className={inputClass("phone")}
                        value={formData.phone}
                        onChange={(e) =>
                          updateField("phone", e.target.value)
                        }
                      />
                      {renderError("phone")}
                    </Field>

                    <Field label="Password" required>
                      <div className="relative">
                        <input
                          type={
                            showPassword ? "text" : "password"
                          }
                          placeholder="Minimum 8 characters"
                          className={`${inputClass(
                            "password"
                          )} pr-12`}
                          value={formData.password}
                          onChange={(e) =>
                            updateField(
                              "password",
                              e.target.value
                            )
                          }
                        />

                        <button
                          type="button"
                          onClick={() =>
                            setShowPassword(!showPassword)
                          }
                          className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700"
                        >
                          {showPassword ? (
                            <EyeOff size={18} />
                          ) : (
                            <Eye size={18} />
                          )}
                        </button>
                      </div>
                      {renderError("password")}
                    </Field>

                    <Field
                      label="Confirm Password"
                      required
                      full
                    >
                      <div className="relative sm:max-w-[calc(50%-10px)]">
                        <input
                          type={
                            showConfirmPassword
                              ? "text"
                              : "password"
                          }
                          placeholder="Re-enter your password"
                          className={`${inputClass(
                            "confirmPassword"
                          )} pr-12`}
                          value={formData.confirmPassword}
                          onChange={(e) =>
                            updateField(
                              "confirmPassword",
                              e.target.value
                            )
                          }
                        />

                        <button
                          type="button"
                          onClick={() =>
                            setShowConfirmPassword(
                              !showConfirmPassword
                            )
                          }
                          className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
                        >
                          {showConfirmPassword ? (
                            <EyeOff size={18} />
                          ) : (
                            <Eye size={18} />
                          )}
                        </button>
                      </div>
                      {renderError("confirmPassword")}
                    </Field>
                  </div>
                </section>
              )}

              {/* STEP 2 */}
              {currentStep === 1 && (
                <section>
                  <StepHeading
                    number="02"
                    title="Hotel Information"
                    description="Add the basic information guests will see about your hotel."
                  />

                  <div className="space-y-5">
                    <Field label="Hotel Name" required>
                      <input
                        type="text"
                        placeholder="e.g. Hotelify Grand Hotel"
                        className={inputClass("hotelName")}
                        value={formData.hotelName}
                        onChange={(e) =>
                          updateField(
                            "hotelName",
                            e.target.value
                          )
                        }
                      />
                      {renderError("hotelName")}
                    </Field>

                    <Field label="Hotel Type" required>
                      <select
                        className={inputClass("hotelType")}
                        value={formData.hotelType}
                        onChange={(e) =>
                          updateField(
                            "hotelType",
                            e.target.value
                          )
                        }
                      >
                        <option value="">
                          Select hotel type
                        </option>
                        <option value="hotel">Hotel</option>
                        <option value="resort">Resort</option>
                        <option value="guest-house">
                          Guest House
                        </option>
                        <option value="boutique">
                          Boutique Hotel
                        </option>
                        <option value="motel">Motel</option>
                        <option value="hostel">Hostel</option>
                        <option value="apartment">
                          Hotel Apartment
                        </option>
                      </select>
                      {renderError("hotelType")}
                    </Field>

                    <Field
                      label="Hotel Description"
                      required
                    >
                      <textarea
                        rows="6"
                        placeholder="Describe your hotel, rooms, atmosphere and what makes it special..."
                        className={`${inputClass(
                          "description"
                        )} resize-none`}
                        value={formData.description}
                        onChange={(e) =>
                          updateField(
                            "description",
                            e.target.value
                          )
                        }
                      />
                      {renderError("description")}
                    </Field>
                  </div>
                </section>
              )}

              {/* STEP 3 */}
              {currentStep === 2 && (
                <section>
                  <StepHeading
                    number="03"
                    title="Hotel Location"
                    description="Where can guests find your hotel?"
                  />

                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Country">
                      <input
                        disabled
                        value="Pakistan"
                        className={`${inputClass(
                          "country"
                        )} cursor-not-allowed opacity-70`}
                      />
                    </Field>

                    <Field label="Province / Region" required>
                      <select
                        className={inputClass("province")}
                        value={formData.province}
                        onChange={(e) => {
                          updateField(
                            "province",
                            e.target.value
                          );

                          updateField("city", "");
                        }}
                      >
                        <option value="">
                          Select province
                        </option>

                        {Object.keys(provinces).map(
                          (province) => (
                            <option
                              key={province}
                              value={province}
                            >
                              {province}
                            </option>
                          )
                        )}
                      </select>
                      {renderError("province")}
                    </Field>

                    <Field label="City" required>
                      <select
                        disabled={!formData.province}
                        className={`${inputClass(
                          "city"
                        )} disabled:cursor-not-allowed disabled:opacity-50`}
                        value={formData.city}
                        onChange={(e) =>
                          updateField(
                            "city",
                            e.target.value
                          )
                        }
                      >
                        <option value="">
                          Select city
                        </option>

                        {(provinces[formData.province] || []).map(
                          (city) => (
                            <option key={city} value={city}>
                              {city}
                            </option>
                          )
                        )}
                      </select>
                      {renderError("city")}
                    </Field>

                    <Field label="Postal Code">
                      <input
                        type="text"
                        placeholder="e.g. 65200"
                        className={inputClass("postalCode")}
                        value={formData.postalCode}
                        onChange={(e) =>
                          updateField(
                            "postalCode",
                            e.target.value
                          )
                        }
                      />
                    </Field>

                    <Field label="Complete Address" required full>
                      <textarea
                        rows="4"
                        placeholder="Street, area, landmark..."
                        className={`${inputClass(
                          "address"
                        )} resize-none`}
                        value={formData.address}
                        onChange={(e) =>
                          updateField(
                            "address",
                            e.target.value
                          )
                        }
                      />
                      {renderError("address")}
                    </Field>
                  </div>
                </section>
              )}

              {/* STEP 4 */}
              {currentStep === 3 && (
                <section>
                  <StepHeading
                    number="04"
                    title="Hotel Details"
                    description="Configure your rooms, timings and facilities."
                  />

                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field
                      label="Number of Rooms"
                      required
                    >
                      <input
                        type="number"
                        min="1"
                        placeholder="e.g. 25"
                        className={inputClass("rooms")}
                        value={formData.rooms}
                        onChange={(e) =>
                          updateField(
                            "rooms",
                            e.target.value
                          )
                        }
                      />
                      {renderError("rooms")}
                    </Field>

                    <Field label="Check-in Time">
                      <input
                        type="time"
                        className={inputClass("checkIn")}
                        value={formData.checkIn}
                        onChange={(e) =>
                          updateField(
                            "checkIn",
                            e.target.value
                          )
                        }
                      />
                    </Field>

                    <Field label="Check-out Time">
                      <input
                        type="time"
                        className={inputClass("checkOut")}
                        value={formData.checkOut}
                        onChange={(e) =>
                          updateField(
                            "checkOut",
                            e.target.value
                          )
                        }
                      />
                    </Field>
                  </div>

                  <div className="mt-7">
                    <label className="mb-3 block text-sm font-semibold text-slate-700">
                      Hotel Facilities{" "}
                      <span className="text-red-500">*</span>
                    </label>

                    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                      {facilityOptions.map((facility) => {
                        const selected =
                          formData.facilities.includes(
                            facility
                          );

                        return (
                          <button
                            type="button"
                            key={facility}
                            onClick={() =>
                              toggleFacility(facility)
                            }
                            className={`rounded-xl border px-3 py-3 text-left text-sm transition ${
                              selected
                                ? "border-[#00987e] bg-[#00987e]/10 font-medium text-[#007e6a]"
                                : "border-slate-200 bg-slate-50 text-slate-600 hover:border-[#00987e]/40"
                            }`}
                          >
                            <span className="mr-2">
                              {selected ? "✓" : "+"}
                            </span>

                            {facility}
                          </button>
                        );
                      })}
                    </div>

                    {renderError("facilities")}
                  </div>
                </section>
              )}

              {/* STEP 5 */}
              {currentStep === 4 && (
                <section>
                  <StepHeading
                    number="05"
                    title="Verification"
                    description="Provide verification details so we can verify your hotel."
                  />

                  <div className="space-y-5">
                    <Field
                      label="Owner CNIC / ID Number"
                      required
                    >
                      <input
                        type="text"
                        placeholder="e.g. 42101-1234567-1"
                        className={inputClass("cnic")}
                        value={formData.cnic}
                        onChange={(e) =>
                          updateField(
                            "cnic",
                            e.target.value
                          )
                        }
                      />
                      {renderError("cnic")}
                    </Field>

                    <Field
                      label="Business Email"
                      required
                    >
                      <input
                        type="email"
                        placeholder="info@yourhotel.com"
                        className={inputClass(
                          "businessEmail"
                        )}
                        value={formData.businessEmail}
                        onChange={(e) =>
                          updateField(
                            "businessEmail",
                            e.target.value
                          )
                        }
                      />
                      {renderError("businessEmail")}
                    </Field>

                    <Field label="Hotel Website">
                      <input
                        type="url"
                        placeholder="https://yourhotel.com"
                        className={inputClass("website")}
                        value={formData.website}
                        onChange={(e) =>
                          updateField(
                            "website",
                            e.target.value
                          )
                        }
                      />
                    </Field>

                    <label className="flex cursor-pointer gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4">
                      <input
                        type="checkbox"
                        checked={formData.terms}
                        onChange={(e) =>
                          updateField(
                            "terms",
                            e.target.checked
                          )
                        }
                        className="mt-1 h-4 w-4 accent-[#00987e]"
                      />

                      <span className="text-sm leading-6 text-slate-600">
                        I agree to Hotelify's{" "}
                        <span className="font-semibold text-[#00987e]">
                          Terms & Conditions
                        </span>{" "}
                        and confirm that the information
                        provided is accurate.
                      </span>
                    </label>

                    {renderError("terms")}
                  </div>
                </section>
              )}

              {/* STEP 6 */}
              {currentStep === 5 && (
                <section>
                  <StepHeading
                    number="06"
                    title="Review & Register"
                    description="Review your information before creating your Hotelify owner account."
                  />

                  <div className="space-y-4">
                    <ReviewCard
                      title="Owner Information"
                      icon={<User size={18} />}
                    >
                      <ReviewRow
                        label="Name"
                        value={formData.ownerName}
                      />
                      <ReviewRow
                        label="Email"
                        value={formData.email}
                      />
                      <ReviewRow
                        label="Phone"
                        value={formData.phone}
                      />
                    </ReviewCard>

                    <ReviewCard
                      title="Hotel Information"
                      icon={<Hotel size={18} />}
                    >
                      <ReviewRow
                        label="Hotel"
                        value={formData.hotelName}
                      />
                      <ReviewRow
                        label="Type"
                        value={formData.hotelType}
                      />
                    </ReviewCard>

                    <ReviewCard
                      title="Location"
                      icon={<MapPin size={18} />}
                    >
                      <ReviewRow
                        label="Province"
                        value={formData.province}
                      />
                      <ReviewRow
                        label="City"
                        value={formData.city}
                      />
                      <ReviewRow
                        label="Address"
                        value={formData.address}
                      />
                    </ReviewCard>

                    <ReviewCard
                      title="Hotel Details"
                      icon={<Building2 size={18} />}
                    >
                      <ReviewRow
                        label="Rooms"
                        value={formData.rooms}
                      />
                      <ReviewRow
                        label="Check-in"
                        value={formData.checkIn}
                      />
                      <ReviewRow
                        label="Check-out"
                        value={formData.checkOut}
                      />

                      <div className="mt-3">
                        <p className="text-xs text-slate-400">
                          Facilities
                        </p>

                        <div className="mt-2 flex flex-wrap gap-2">
                          {formData.facilities.map(
                            (facility) => (
                              <span
                                key={facility}
                                className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-[#007e6a]"
                              >
                                {facility}
                              </span>
                            )
                          )}
                        </div>
                      </div>
                    </ReviewCard>
                  </div>

                  <div className="mt-6 flex items-start gap-3 rounded-2xl bg-[#00987e]/5 p-5">
                    <ShieldCheck
                      className="mt-0.5 shrink-0 text-[#00987e]"
                      size={22}
                    />

                    <div>
                      <p className="font-semibold text-slate-800">
                        Ready to join Hotelify?
                      </p>

                      <p className="mt-1 text-sm leading-6 text-slate-500">
                        Click "Register Hotel" to create your
                        owner account. After registration,
                        you can log in and access your dedicated
                        hotel dashboard.
                      </p>
                    </div>
                  </div>
                </section>
              )}

              {/* Navigation */}
              <div className="mt-10 flex items-center justify-between border-t border-slate-100 pt-6">
                <button
                  type="button"
                  onClick={handleBack}
                  disabled={currentStep === 0}
                  className={`inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition ${
                    currentStep === 0
                      ? "cursor-not-allowed text-slate-300"
                      : "text-slate-600 hover:bg-slate-100"
                  }`}
                >
                  <ArrowLeft size={18} />
                  Back
                </button>

                {currentStep < steps.length - 1 ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="inline-flex items-center gap-2 rounded-xl bg-[#00987e] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#00987e]/20 transition hover:bg-[#007e6a] hover:shadow-xl"
                  >
                    Next
                    <ArrowRight size={18} />
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 rounded-xl bg-[#00987e] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#00987e]/20 transition hover:bg-[#007e6a] hover:shadow-xl"
                  >
                    Register Hotel
                    <Check size={18} />
                  </button>
                )}
              </div>
            </form>
          </main>
        </div>

        <p className="mt-6 text-center text-xs text-slate-400">
          © {new Date().getFullYear()} Hotelify. All rights reserved.
        </p>
      </div>
    </div>
  );
};

/* ---------------- Components ---------------- */

const StepHeading = ({ number, title, description }) => {
  return (
    <div className="mb-8">
      <div className="mb-3 flex items-center gap-3">
        <span className="text-sm font-bold tracking-widest text-[#00987e]">
          {number}
        </span>

        <div className="h-px w-8 bg-[#00987e]/30" />
      </div>

      <h2 className="text-2xl font-bold tracking-tight text-slate-900">
        {title}
      </h2>

      <p className="mt-2 max-w-xl text-sm leading-6 text-slate-500">
        {description}
      </p>
    </div>
  );
};

const Field = ({ label, required, children, full }) => {
  return (
    <div className={full ? "sm:col-span-2" : ""}>
      <label className="mb-2 block text-sm font-semibold text-slate-700">
        {label}

        {required && (
          <span className="ml-1 text-red-500">*</span>
        )}
      </label>

      {children}
    </div>
  );
};

const ReviewCard = ({ title, icon, children }) => {
  return (
    <div className="rounded-2xl border border-slate-200 p-5">
      <div className="mb-4 flex items-center gap-2">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#00987e]/10 text-[#00987e]">
          {icon}
        </div>

        <h3 className="font-semibold text-slate-800">
          {title}
        </h3>
      </div>

      {children}
    </div>
  );
};

const ReviewRow = ({ label, value }) => {
  return (
    <div className="flex flex-col gap-1 border-b border-slate-100 py-2 last:border-0 sm:flex-row sm:items-center sm:justify-between">
      <span className="text-xs text-slate-400">
        {label}
      </span>

      <span className="max-w-[70%] break-words text-sm font-medium text-slate-700 sm:text-right">
        {value || "-"}
      </span>
    </div>
  );
};

export default HotelReg;