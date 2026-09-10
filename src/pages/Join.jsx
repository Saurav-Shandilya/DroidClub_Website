import { useState } from "react";
import {
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  ExternalLink,
  RotateCcw,
  Check,
  User,
  Mail,
  Phone,
  GraduationCap,
  Layers,
  Building2,
  Calendar,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const SHEETDB_URL = "https://sheetdb.io/api/v1/at65dlqnqox36";
const WHATSAPP_INVITE_URL =
  "https://chat.whatsapp.com/FNyf7WIv24LI5EGZ5Pkzf2?s=cl&p=a&mlu=4&ilr=4";

const TEAMS = [
  "Technical Team",
  "Design Team",
  "IOT Team",
  "AI / ML Team",
  "PR & Event Team",
  "Content Team",
  "Game dev",
];

// Academic year restricted strictly to 1st and 2nd year as requested
const ACADEMIC_YEARS = [
  "1st Year",
  "2nd Year",
];

export default function JoinDroidClub() {
  // Step management: 1 = Form, 2 = Confirmation & WhatsApp, 3 = Success
  const [step, setStep] = useState(1);

  // Form fields matching the Google Sheet columns from PDF
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone_whatsapp: "",
    course: "",
    branch: "",
    university_mail: "",
    academic_year: "",
    applying_for: "",
    join_whatsapp: "Yes", // Default to Yes
  });

  const [hasClickedWhatsapp, setHasClickedWhatsapp] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [validationErrors, setValidationErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (validationErrors[name]) {
      setValidationErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  // Validate Step 1 form fields
  const validateForm = () => {
    const errors = {};

    if (!formData.full_name.trim()) {
      errors.full_name = "Full name is required";
    }

    if (!formData.email.trim()) {
      errors.email = "Personal email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errors.email = "Enter a valid email address";
    }

    if (!formData.phone_whatsapp.trim()) {
      errors.phone_whatsapp = "Phone / WhatsApp number is required";
    } else if (!/^\d{10}$/.test(formData.phone_whatsapp.replace(/\D/g, ""))) {
      errors.phone_whatsapp = "Please enter a valid 10-digit number";
    }

    if (!formData.course.trim()) {
      errors.course = "Course is required (e.g. B.Tech, BCA)";
    }

    if (!formData.branch.trim()) {
      errors.branch = "Branch / Specialization is required";
    }

    if (!formData.university_mail.trim()) {
      errors.university_mail = "University email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.university_mail.trim())) {
      errors.university_mail = "Enter a valid university email address";
    }

    if (!formData.academic_year) {
      errors.academic_year = "Please select your academic year";
    }

    if (!formData.applying_for) {
      errors.applying_for = "Please select the team you are applying for";
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Proceed from Step 1 to Step 2 (Confirm Registration)
  const handleProceedToConfirm = (e) => {
    e.preventDefault();
    if (validateForm()) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setStep(2);
    }
  };

  // Final submission to SheetDB
  const handleFinalSubmit = async () => {
    setLoading(true);
    setErrorMessage(null);

    // Indian standard timestamp formatted nicely
    const currentTimestamp = new Date().toLocaleString("en-IN", {
      dateStyle: "short",
      timeStyle: "medium",
    });

    const payload = {
      data: [
        {
          timestamp: currentTimestamp,
          full_name: formData.full_name.trim(),
          email: formData.email.trim(),
          phone_whatsapp: formData.phone_whatsapp.trim(),
          course: formData.course.trim(),
          branch: formData.branch.trim(),
          university_mail: formData.university_mail.trim(),
          academic_year: formData.academic_year,
          join_whatsapp: formData.join_whatsapp || "Yes",
          applying_for: formData.applying_for,
          status: "Pending",
          remark: "",
        },
      ],
    };

    try {
      const response = await fetch(SHEETDB_URL, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (response.ok && (result.created === 1 || result.status === 201 || result.created)) {
        setStep(3);
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else if (result && result.error) {
        throw new Error(result.error);
      } else {
        if (response.ok) {
          setStep(3);
          window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
          throw new Error("Unable to save registration. Please try again.");
        }
      }
    } catch (err) {
      console.error("Submission error:", err);
      setErrorMessage(
        err.message || "Failed to submit registration. Please check your connection and try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setFormData({
      full_name: "",
      email: "",
      phone_whatsapp: "",
      course: "",
      branch: "",
      university_mail: "",
      academic_year: "",
      applying_for: "",
      join_whatsapp: "Yes",
    });
    setHasClickedWhatsapp(false);
    setValidationErrors({});
    setErrorMessage(null);
    setStep(1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="relative w-full min-h-screen text-white overflow-hidden bg-[#000003] flex flex-col items-center justify-start pt-32 pb-24 px-4 sm:px-6">
      {/* Background glow effects */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-10 left-1/4 w-96 h-96 bg-purple-600/15 blur-[160px] rounded-full"></div>
        <div className="absolute top-1/2 right-1/4 w-[28rem] h-[28rem] bg-[#9D4EDD]/15 blur-[180px] rounded-full"></div>
        <div className="absolute bottom-10 left-1/3 w-80 h-80 bg-indigo-600/15 blur-[150px] rounded-full"></div>
      </div>

      <div className="relative z-10 w-full max-w-3xl mx-auto">
        {/* HEADER */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-sm font-medium mb-4 backdrop-blur-md">
            <Sparkles className="w-4 h-4 text-purple-400" />
            Official Recruitment Portal
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight mb-4">
            Join the{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-[#9D4EDD] to-indigo-300">
              Droid Club
            </span>
          </h1>

          <p className="text-gray-400 text-base sm:text-lg max-w-xl mx-auto">
            Become part of GLA University’s premier tech community. Innovate, collaborate, and build impactful technology together.
          </p>
        </div>

        {/* PROGRESS STEPPER */}
        <div className="flex items-center justify-center mb-10">
          <div className="flex items-center space-x-3 sm:space-x-4">
            {/* Step 1 Indicator */}
            <div className="flex items-center space-x-2">
              <div
                className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 ${
                  step === 1
                    ? "bg-[#9D4EDD] text-white shadow-[0_0_15px_rgba(157,78,221,0.6)]"
                    : "bg-emerald-500 text-white"
                }`}
              >
                {step > 1 ? <Check className="w-5 h-5" /> : "1"}
              </div>
              <span
                className={`text-sm font-semibold hidden sm:inline ${
                  step === 1 ? "text-purple-300" : "text-gray-400"
                }`}
              >
                Details
              </span>
            </div>

            <div
              className={`w-10 sm:w-16 h-0.5 transition-colors duration-300 ${
                step >= 2 ? "bg-[#9D4EDD]" : "bg-white/10"
              }`}
            />

            {/* Step 2 Indicator */}
            <div className="flex items-center space-x-2">
              <div
                className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 ${
                  step === 2
                    ? "bg-[#9D4EDD] text-white shadow-[0_0_15px_rgba(157,78,221,0.6)]"
                    : step > 2
                    ? "bg-emerald-500 text-white"
                    : "bg-white/10 text-gray-400 border border-white/10"
                }`}
              >
                {step > 2 ? <Check className="w-5 h-5" /> : "2"}
              </div>
              <span
                className={`text-sm font-semibold hidden sm:inline ${
                  step === 2 ? "text-purple-300" : "text-gray-400"
                }`}
              >
                WhatsApp & Confirm
              </span>
            </div>

            <div
              className={`w-10 sm:w-16 h-0.5 transition-colors duration-300 ${
                step === 3 ? "bg-[#9D4EDD]" : "bg-white/10"
              }`}
            />

            {/* Step 3 Indicator */}
            <div className="flex items-center space-x-2">
              <div
                className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 ${
                  step === 3
                    ? "bg-emerald-500 text-white shadow-[0_0_15px_rgba(16,185,129,0.6)]"
                    : "bg-white/10 text-gray-400 border border-white/10"
                }`}
              >
                3
              </div>
              <span
                className={`text-sm font-semibold hidden sm:inline ${
                  step === 3 ? "text-emerald-400" : "text-gray-400"
                }`}
              >
                Complete
              </span>
            </div>
          </div>
        </div>

        {/* ========================================================
            STEP 1: REGISTRATION FORM
        ======================================================== */}
        {step === 1 && (
          <div className="bg-[#1a1a24]/70 backdrop-blur-xl border border-[#9D4EDD]/30 rounded-3xl p-6 sm:p-10 shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
            <div className="mb-6 border-b border-white/10 pb-4">
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                Candidate Information
              </h2>
              <p className="text-gray-400 text-sm mt-1">
                Recruitment is open for 1st & 2nd year students. Please fill in your academic details.
              </p>
            </div>

            <form onSubmit={handleProceedToConfirm} className="space-y-6">
              {/* Full Name */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Full Name <span className="text-purple-400">*</span>
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    name="full_name"
                    required
                    placeholder="Enter your full name"
                    value={formData.full_name}
                    onChange={handleChange}
                    className={`w-full bg-[#0f0f13] border ${
                      validationErrors.full_name
                        ? "border-red-500"
                        : "border-[#9D4EDD]/30 focus:border-[#9D4EDD]"
                    } rounded-xl pl-12 pr-4 py-3.5 text-white placeholder-gray-500 outline-none transition`}
                  />
                </div>
                {validationErrors.full_name && (
                  <p className="text-red-400 text-xs mt-1.5">
                    {validationErrors.full_name}
                  </p>
                )}
              </div>

              {/* Personal Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Personal Email Address <span className="text-purple-400">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="e.g. yourname@gmail.com"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full bg-[#0f0f13] border ${
                        validationErrors.email
                          ? "border-red-500"
                          : "border-[#9D4EDD]/30 focus:border-[#9D4EDD]"
                      } rounded-xl pl-12 pr-4 py-3.5 text-white placeholder-gray-500 outline-none transition`}
                    />
                  </div>
                  {validationErrors.email && (
                    <p className="text-red-400 text-xs mt-1.5">
                      {validationErrors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Phone / WhatsApp Number <span className="text-purple-400">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="tel"
                      name="phone_whatsapp"
                      required
                      placeholder="10-digit mobile number"
                      value={formData.phone_whatsapp}
                      onChange={handleChange}
                      className={`w-full bg-[#0f0f13] border ${
                        validationErrors.phone_whatsapp
                          ? "border-red-500"
                          : "border-[#9D4EDD]/30 focus:border-[#9D4EDD]"
                      } rounded-xl pl-12 pr-4 py-3.5 text-white placeholder-gray-500 outline-none transition`}
                    />
                  </div>
                  {validationErrors.phone_whatsapp && (
                    <p className="text-red-400 text-xs mt-1.5">
                      {validationErrors.phone_whatsapp}
                    </p>
                  )}
                </div>
              </div>

              {/* University Mail */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  University Email ID <span className="text-purple-400">*</span>
                </label>
                <div className="relative">
                  <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    name="university_mail"
                    required
                    placeholder="e.g. yourname_cs24@gla.ac.in"
                    value={formData.university_mail}
                    onChange={handleChange}
                    className={`w-full bg-[#0f0f13] border ${
                      validationErrors.university_mail
                        ? "border-red-500"
                        : "border-[#9D4EDD]/30 focus:border-[#9D4EDD]"
                    } rounded-xl pl-12 pr-4 py-3.5 text-white placeholder-gray-500 outline-none transition`}
                  />
                </div>
                {validationErrors.university_mail && (
                  <p className="text-red-400 text-xs mt-1.5">
                    {validationErrors.university_mail}
                  </p>
                )}
              </div>

              {/* Course (Text Input) & Branch */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Course <span className="text-purple-400">*</span>
                  </label>
                  <div className="relative">
                    <GraduationCap className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      name="course"
                      required
                      placeholder="e.g. B.Tech, BCA, MCA"
                      value={formData.course}
                      onChange={handleChange}
                      className={`w-full bg-[#0f0f13] border ${
                        validationErrors.course
                          ? "border-red-500"
                          : "border-[#9D4EDD]/30 focus:border-[#9D4EDD]"
                      } rounded-xl pl-12 pr-4 py-3.5 text-white placeholder-gray-500 outline-none transition`}
                    />
                  </div>
                  {validationErrors.course && (
                    <p className="text-red-400 text-xs mt-1.5">
                      {validationErrors.course}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Branch / Specialization <span className="text-purple-400">*</span>
                  </label>
                  <div className="relative">
                    <Layers className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      name="branch"
                      required
                      placeholder="e.g. CSE, CSE AI/ML, BCA, Data Science"
                      value={formData.branch}
                      onChange={handleChange}
                      className={`w-full bg-[#0f0f13] border ${
                        validationErrors.branch
                          ? "border-red-500"
                          : "border-[#9D4EDD]/30 focus:border-[#9D4EDD]"
                      } rounded-xl pl-12 pr-4 py-3.5 text-white placeholder-gray-500 outline-none transition`}
                    />
                  </div>
                  {validationErrors.branch && (
                    <p className="text-red-400 text-xs mt-1.5">
                      {validationErrors.branch}
                    </p>
                  )}
                </div>
              </div>

              {/* Academic Year (1st and 2nd Year only) & Applying For (DROPDOWN) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Academic Year <span className="text-purple-400">*</span>
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                    <select
                      name="academic_year"
                      required
                      value={formData.academic_year}
                      onChange={handleChange}
                      className={`w-full bg-[#0f0f13] border ${
                        validationErrors.academic_year
                          ? "border-red-500"
                          : "border-[#9D4EDD]/30 focus:border-[#9D4EDD]"
                      } rounded-xl pl-12 pr-4 py-3.5 text-white outline-none transition appearance-none cursor-pointer`}
                    >
                      <option value="" disabled className="bg-[#0f0f13] text-gray-500">
                        Select Academic Year
                      </option>
                      {ACADEMIC_YEARS.map((year) => (
                        <option
                          key={year}
                          value={year}
                          className="bg-[#1a1a24] text-white"
                        >
                          {year}
                        </option>
                      ))}
                    </select>
                  </div>
                  {validationErrors.academic_year && (
                    <p className="text-red-400 text-xs mt-1.5">
                      {validationErrors.academic_year}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Applying For (Team) <span className="text-purple-400">*</span>
                  </label>
                  <div className="relative">
                    <Sparkles className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#9D4EDD] pointer-events-none" />
                    <select
                      name="applying_for"
                      required
                      value={formData.applying_for}
                      onChange={handleChange}
                      className={`w-full bg-[#0f0f13] border ${
                        validationErrors.applying_for
                          ? "border-red-500"
                          : "border-[#9D4EDD]/50 focus:border-[#9D4EDD] shadow-[0_0_10px_rgba(157,78,221,0.2)]"
                      } rounded-xl pl-12 pr-4 py-3.5 text-white outline-none transition appearance-none cursor-pointer font-medium`}
                    >
                      <option value="" disabled className="bg-[#0f0f13] text-gray-500">
                        Select Team / Role
                      </option>
                      {TEAMS.map((team) => (
                        <option
                          key={team}
                          value={team}
                          className="bg-[#1a1a24] text-white"
                        >
                          {team}
                        </option>
                      ))}
                    </select>
                  </div>
                  {validationErrors.applying_for && (
                    <p className="text-red-400 text-xs mt-1.5">
                      {validationErrors.applying_for}
                    </p>
                  )}
                </div>
              </div>

              {/* Confirm Registration Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-[#9D4EDD] to-[#7B2CBF] hover:from-[#8b3fd0] hover:to-[#6a22aa] text-white font-bold text-lg py-4 rounded-xl shadow-[0_0_25px_rgba(157,78,221,0.4)] hover:shadow-[0_0_35px_rgba(157,78,221,0.6)] transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  <span>Confirm Registration</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
                <p className="text-center text-xs text-gray-500 mt-3">
                  Clicking "Confirm Registration" will let you review your details and join our official WhatsApp group.
                </p>
              </div>
            </form>
          </div>
        )}

        {/* ========================================================
            STEP 2: CONFIRMATION & WHATSAPP JOIN STEP
        ======================================================== */}
        {step === 2 && (
          <div className="space-y-6">
            {/* REVIEW CARD */}
            <div className="bg-[#1a1a24]/80 backdrop-blur-xl border border-[#9D4EDD]/30 rounded-3xl p-6 sm:p-8 shadow-2xl">
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                    Review Your Registration
                  </h2>
                  <p className="text-gray-400 text-xs sm:text-sm mt-0.5">
                    Please verify that all your information is correct before submitting.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="flex items-center gap-1.5 text-sm text-purple-300 hover:text-white bg-white/5 hover:bg-white/10 border border-purple-500/20 px-3.5 py-1.5 rounded-lg transition"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Edit
                </button>
              </div>

              {/* Data Summary Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div className="bg-[#0f0f13]/80 p-3.5 rounded-xl border border-white/5">
                  <span className="text-gray-400 text-xs block mb-0.5">Full Name</span>
                  <span className="font-semibold text-white">{formData.full_name}</span>
                </div>

                <div className="bg-[#0f0f13]/80 p-3.5 rounded-xl border border-white/5">
                  <span className="text-gray-400 text-xs block mb-0.5">Applying For Team</span>
                  <span className="font-semibold text-purple-400">
                    {formData.applying_for}
                  </span>
                </div>

                <div className="bg-[#0f0f13]/80 p-3.5 rounded-xl border border-white/5">
                  <span className="text-gray-400 text-xs block mb-0.5">Personal Email</span>
                  <span className="font-medium text-gray-200 break-all">{formData.email}</span>
                </div>

                <div className="bg-[#0f0f13]/80 p-3.5 rounded-xl border border-white/5">
                  <span className="text-gray-400 text-xs block mb-0.5">University Email</span>
                  <span className="font-medium text-gray-200 break-all">{formData.university_mail}</span>
                </div>

                <div className="bg-[#0f0f13]/80 p-3.5 rounded-xl border border-white/5">
                  <span className="text-gray-400 text-xs block mb-0.5">Phone / WhatsApp</span>
                  <span className="font-medium text-gray-200">{formData.phone_whatsapp}</span>
                </div>

                <div className="bg-[#0f0f13]/80 p-3.5 rounded-xl border border-white/5">
                  <span className="text-gray-400 text-xs block mb-0.5">Course & Branch</span>
                  <span className="font-medium text-gray-200">
                    {formData.course} • {formData.branch}
                  </span>
                </div>

                <div className="bg-[#0f0f13]/80 p-3.5 rounded-xl border border-white/5 sm:col-span-2">
                  <span className="text-gray-400 text-xs block mb-0.5">Academic Year</span>
                  <span className="font-medium text-gray-200">{formData.academic_year}</span>
                </div>
              </div>
            </div>

            {/* WHATSAPP INVITATION CARD */}
            <div className="relative overflow-hidden bg-gradient-to-br from-[#0c241b] via-[#113829]/60 to-[#1a1a24] border-2 border-emerald-500/40 rounded-3xl p-6 sm:p-8 shadow-[0_0_40px_rgba(16,185,129,0.2)]">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-400 shadow-inner">
                    <FaWhatsapp className="w-7 h-7 text-[#25D366]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white flex items-center gap-2">
                      Join Official WhatsApp Group
                      <span className="text-xs bg-emerald-500/20 text-emerald-300 px-2.5 py-0.5 rounded-full border border-emerald-500/30">
                        Mandatory
                      </span>
                    </h3>
                    <p className="text-gray-300 text-sm">
                      All interviews, test links, and announcements are shared here.
                    </p>
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA Button */}
              <div className="mb-6">
                <a
                  href={WHATSAPP_INVITE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => {
                    setHasClickedWhatsapp(true);
                    setFormData((prev) => ({ ...prev, join_whatsapp: "Yes" }));
                  }}
                  className="w-full inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#20bd5a] hover:to-[#0f776a] text-white font-bold text-lg py-4 px-6 rounded-xl shadow-[0_0_25px_rgba(37,211,102,0.4)] hover:shadow-[0_0_35px_rgba(37,211,102,0.6)] transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  <FaWhatsapp className="w-6 h-6 text-white" />
                  <span>Click Here to Join WhatsApp Group</span>
                  <ExternalLink className="w-5 h-5 text-white/80" />
                </a>
                {hasClickedWhatsapp && (
                  <p className="text-center text-emerald-400 text-xs mt-2.5 flex items-center justify-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4" /> Link opened in new tab.
                  </p>
                )}
              </div>

              {/* QUESTION: Did you join the WhatsApp group? */}
              <div className="bg-[#0b1b15]/90 border border-emerald-500/30 rounded-2xl p-5">
                <label className="block text-sm font-semibold text-white mb-3">
                  Have you joined the Droid Club WhatsApp group? <span className="text-emerald-400">*</span>
                </label>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() =>
                      setFormData((prev) => ({ ...prev, join_whatsapp: "Yes" }))
                    }
                    className={`flex items-center justify-center gap-2.5 py-3 px-4 rounded-xl font-medium text-sm border transition-all ${
                      formData.join_whatsapp === "Yes"
                        ? "bg-emerald-500 text-white border-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.5)]"
                        : "bg-white/5 text-gray-300 border-white/10 hover:border-emerald-500/40 hover:bg-white/10"
                    }`}
                  >
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Yes, I have joined</span>
                  </button>

                  <button
                    type="button"
                    onClick={() =>
                      setFormData((prev) => ({ ...prev, join_whatsapp: "No" }))
                    }
                    className={`flex items-center justify-center gap-2.5 py-3 px-4 rounded-xl font-medium text-sm border transition-all ${
                      formData.join_whatsapp === "No"
                        ? "bg-amber-600/90 text-white border-amber-400 shadow-[0_0_15px_rgba(217,119,6,0.5)]"
                        : "bg-white/5 text-gray-300 border-white/10 hover:border-amber-500/40 hover:bg-white/10"
                    }`}
                  >
                    <span>No, not yet</span>
                  </button>
                </div>

                {formData.join_whatsapp === "No" && (
                  <p className="text-amber-300 text-xs mt-2.5 flex items-center gap-1.5">
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    Note: Joining WhatsApp is required to receive interview calls and recruitment updates.
                  </p>
                )}
              </div>
            </div>

            {/* ERROR BANNER IF ANY */}
            {errorMessage && (
              <div className="bg-red-500/15 border border-red-500/40 rounded-2xl p-4 flex items-start gap-3 text-red-300">
                <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5 text-red-400" />
                <div className="text-sm">
                  <p className="font-semibold text-red-200">Submission Error</p>
                  <p className="mt-0.5">{errorMessage}</p>
                </div>
              </div>
            )}

            {/* ACTION BUTTONS */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
              <button
                type="button"
                onClick={() => setStep(1)}
                disabled={loading}
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 py-3.5 px-6 rounded-xl font-medium transition"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>Back to Edit</span>
              </button>

              <button
                type="button"
                onClick={handleFinalSubmit}
                disabled={loading}
                className="w-full sm:flex-1 flex items-center justify-center gap-3 bg-gradient-to-r from-[#9D4EDD] to-[#7B2CBF] hover:from-[#8b3fd0] hover:to-[#6a22aa] text-white font-bold text-lg py-4 px-8 rounded-xl shadow-[0_0_30px_rgba(157,78,221,0.5)] hover:shadow-[0_0_40px_rgba(157,78,221,0.7)] transition-all transform hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Submitting Registration...</span>
                  </>
                ) : (
                  <>
                    <span>Submit Registration</span>
                    <Sparkles className="w-5 h-5" />
                  </>
                )}
              </button>
            </div>
          </div>
        )}

        {/* ========================================================
            STEP 3: SUCCESS STATE
        ======================================================== */}
        {step === 3 && (
          <div className="bg-[#1a1a24]/80 backdrop-blur-xl border border-emerald-500/40 rounded-3xl p-8 sm:p-12 text-center shadow-[0_0_60px_rgba(16,185,129,0.25)]">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-emerald-500/20 border-2 border-emerald-400 flex items-center justify-center text-emerald-400 shadow-[0_0_30px_rgba(16,185,129,0.5)]">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-white mb-3">
              Registration Successful!
            </h2>

            <p className="text-gray-300 text-base sm:text-lg max-w-lg mx-auto mb-6">
              Thank you, <span className="text-white font-semibold">{formData.full_name}</span>! Your application for the{" "}
              <span className="text-purple-400 font-semibold">{formData.applying_for}</span> has been securely recorded.
            </p>

            {/* WhatsApp Reminder if not joined */}
            <div className="max-w-md mx-auto mb-8 p-5 bg-[#0b1b15]/90 border border-emerald-500/30 rounded-2xl text-left">
              <div className="flex items-center gap-3 mb-2">
                <FaWhatsapp className="w-6 h-6 text-[#25D366] flex-shrink-0" />
                <h4 className="text-white font-bold text-sm">Stay Updated on WhatsApp</h4>
              </div>
              <p className="text-gray-300 text-xs mb-3">
                All shortlist notifications, interview dates, and tasks will be announced in the official community group.
              </p>
              <a
                href={WHATSAPP_INVITE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold py-2.5 px-4 rounded-lg transition shadow-md"
              >
                <span>Open WhatsApp Community</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Details Summary Pill */}
            <div className="inline-flex flex-wrap items-center justify-center gap-2 text-xs text-gray-400 bg-white/5 px-4 py-2 rounded-full border border-white/10 mb-8">
              <span>{formData.university_mail}</span>
              <span>•</span>
              <span>{formData.course}</span>
              <span>•</span>
              <span>{formData.academic_year}</span>
              <span>•</span>
              <span className="text-emerald-400 font-medium">WhatsApp: {formData.join_whatsapp}</span>
            </div>

            {/* Back / Register Another Button */}
            <div>
              <button
                type="button"
                onClick={handleReset}
                className="inline-flex items-center gap-2 text-purple-300 hover:text-white bg-purple-600/20 hover:bg-purple-600/30 border border-purple-500/30 px-6 py-3 rounded-xl font-medium transition"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Submit Another Response</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
