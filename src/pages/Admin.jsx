import { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  RefreshCw,
  Save,
  CheckCircle2,
  AlertCircle,
  X,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
} from "lucide-react";

const SHEETDB_API_URL =
  import.meta.env.VITE_SHEETDB_API_URL || "https://sheetdb.io/api/v1/at65dlqnqox36";

const STATUS_OPTIONS = ["Pending", "Approved", "Rejected", "Waitlisted"];

const STATUS_STYLES = {
  Pending: "bg-amber-500/15 text-amber-300 border-amber-500/40 focus:border-amber-400",
  Approved: "bg-emerald-500/15 text-emerald-300 border-emerald-500/40 focus:border-emerald-400",
  Rejected: "bg-rose-500/15 text-rose-300 border-rose-500/40 focus:border-rose-400",
  Waitlisted: "bg-purple-500/20 text-purple-300 border-[#9D4EDD]/50 focus:border-[#9D4EDD]",
};

export default function Admin() {
  const [applicants, setApplicants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState(null);

  // Local draft changes: { [id]: { status, remark } }
  const [drafts, setDrafts] = useState({});
  // Set of applicant IDs currently saving to SheetDB
  const [savingIds, setSavingIds] = useState(new Set());
  // Toast notifications
  const [toast, setToast] = useState(null);

  // Search & Filter
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(15);

  const showToast = (message, type = "success") => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3500);
  };

  // Fetch applicant records from SheetDB
  const fetchApplications = async (isManual = false) => {
    if (isManual) setRefreshing(true);
    else setLoading(true);
    setError(null);

    try {
      const response = await fetch(SHEETDB_API_URL, {
        method: "GET",
        headers: { Accept: "application/json" },
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: Failed to fetch data`);
      }

      const rawData = await response.json();

      if (Array.isArray(rawData)) {
        // Enforce: Empty or unassigned status defaults to "Pending"
        const normalized = rawData.map((item, index) => {
          const rawStatus = (item.status || "").trim();
          let finalStatus = "Pending";

          if (rawStatus) {
            const matched = STATUS_OPTIONS.find(
              (opt) => opt.toLowerCase() === rawStatus.toLowerCase()
            );
            if (matched) finalStatus = matched;
          }

          return {
            id: item.email || item.phone_whatsapp || `app-${index}-${Date.now()}`,
            name: (item.full_name || "Applicant").trim(),
            email: (item.email || "").trim(),
            phone: (item.phone_whatsapp || "").trim(),
            college: (item.course || item.branch)
              ? `${item.course || ""} ${item.branch || ""}`.trim()
              : "GLA University",
            year: (item.academic_year || "-").trim(),
            role: (item.applying_for || "General").trim(),
            appliedDate: item.timestamp || "-",
            status: finalStatus,
            remark: item.remark || "",
          };
        });

        setApplicants(normalized);
        setDrafts({});

        if (isManual) {
          showToast(`Refreshed ${normalized.length} records.`);
        }
      } else {
        setApplicants([]);
      }
    } catch (err) {
      console.error("Fetch Error:", err);
      setError(err.message || "Failed to fetch from SheetDB.");
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    document.title = "2026 Hiring Applications for Droid Club";
    fetchApplications();
  }, []);

  // Update draft changes locally
  const handleFieldChange = (id, field, value) => {
    setDrafts((prev) => {
      const currentDraft = prev[id] || {};
      const currentApplicant = applicants.find((a) => a.id === id);

      return {
        ...prev,
        [id]: {
          status:
            field === "status"
              ? value
              : currentDraft.status ?? currentApplicant?.status ?? "Pending",
          remark:
            field === "remark"
              ? value
              : currentDraft.remark ?? currentApplicant?.remark ?? "",
        },
      };
    });
  };

  // Check if a row has unsaved modifications
  const hasRowChanged = (applicant) => {
    const draft = drafts[applicant.id];
    if (!draft) return false;
    return draft.status !== applicant.status || draft.remark !== applicant.remark;
  };

  // Save changes for a single applicant to SheetDB API via PATCH
  const handleSaveRow = async (applicant) => {
    const draft = drafts[applicant.id];
    if (!draft) return;

    const newStatus = draft.status ?? applicant.status;
    const newRemark = draft.remark ?? applicant.remark;

    setSavingIds((prev) => new Set(prev).add(applicant.id));

    try {
      const column = applicant.email ? "email" : "timestamp";
      const value = applicant.email || applicant.appliedDate;
      const targetUrl = `${SHEETDB_API_URL}/${column}/${encodeURIComponent(value)}`;

      const response = await fetch(targetUrl, {
        method: "PATCH",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: {
            status: newStatus,
            remark: newRemark,
          },
        }),
      });

      const resJson = await response.json();

      if (response.ok && (resJson.updated !== undefined || !resJson.error)) {
        setApplicants((prev) =>
          prev.map((app) =>
            app.id === applicant.id
              ? { ...app, status: newStatus, remark: newRemark }
              : app
          )
        );

        setDrafts((prev) => {
          const updated = { ...prev };
          delete updated[applicant.id];
          return updated;
        });

        showToast(`Saved changes for ${applicant.name}`);
      } else {
        throw new Error(resJson.error || "SheetDB rejected update.");
      }
    } catch (err) {
      console.error("Save Error:", err);
      showToast(`Error saving: ${err.message}`, "error");
    } finally {
      setSavingIds((prev) => {
        const next = new Set(prev);
        next.delete(applicant.id);
        return next;
      });
    }
  };

  // Filter & search
  const filteredApplicants = useMemo(() => {
    return applicants.filter((app) => {
      if (statusFilter !== "All" && app.status !== statusFilter) return false;

      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const draft = drafts[app.id];
        const remark = draft?.remark ?? app.remark;

        return (
          app.name.toLowerCase().includes(q) ||
          app.email.toLowerCase().includes(q) ||
          app.phone.toLowerCase().includes(q) ||
          app.college.toLowerCase().includes(q) ||
          app.year.toLowerCase().includes(q) ||
          app.role.toLowerCase().includes(q) ||
          remark.toLowerCase().includes(q)
        );
      }

      return true;
    });
  }, [applicants, statusFilter, searchQuery, drafts]);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, statusFilter, rowsPerPage]);

  // Pagination calculations
  const totalEntries = filteredApplicants.length;
  const totalPages = Math.ceil(totalEntries / rowsPerPage) || 1;
  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = Math.min(startIndex + rowsPerPage, totalEntries);
  const paginatedApplicants = filteredApplicants.slice(startIndex, endIndex);

  return (
    <div className="relative min-h-screen bg-[#0f0f13] text-gray-100 p-4 sm:p-8 font-sans antialiased selection:bg-[#9D4EDD] selection:text-white">
      {/* Ambient Droid Club Purple Background Glows */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-10 left-1/4 w-96 h-96 bg-purple-600/10 blur-[160px] rounded-full"></div>
        <div className="absolute top-1/2 right-1/4 w-[28rem] h-[28rem] bg-[#9D4EDD]/10 blur-[180px] rounded-full"></div>
        <div className="absolute bottom-10 left-1/3 w-80 h-80 bg-indigo-600/10 blur-[150px] rounded-full"></div>
      </div>

      {/* Toast Notification */}
      {toast && (
        <div
          className={`fixed bottom-5 right-5 z-50 flex items-center gap-2 px-4 py-2.5 rounded-xl shadow-[0_0_25px_rgba(157,78,221,0.35)] border text-xs font-semibold backdrop-blur-md ${
            toast.type === "error"
              ? "bg-rose-950/95 text-rose-200 border-rose-500/50"
              : "bg-[#1a1a24]/95 text-emerald-300 border-[#9D4EDD]/50"
          }`}
        >
          {toast.type === "error" ? (
            <AlertCircle className="w-4 h-4 text-rose-400 flex-shrink-0" />
          ) : (
            <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
          )}
          <span>{toast.message}</span>
          <button onClick={() => setToast(null)} className="ml-2 text-gray-400 hover:text-white">
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      <div className="relative z-10 max-w-7xl mx-auto space-y-4">
        {/* ================= TOP HEADER ================= */}
        <header className="flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4 pb-4 border-b border-[#9D4EDD]/25">
          {/* Left-top corner: Droid Club with logo */}
          <div className="flex items-center justify-between w-full md:w-auto md:min-w-[220px]">
            <Link
              to="/"
              className="flex items-center gap-2.5 group transition"
              title="Droid Club Website"
            >
              <img
                src="/droid.png"
                alt="Droid Club Logo"
                className="h-8 w-8 sm:h-9 sm:w-9 object-contain drop-shadow-[0_0_12px_rgba(157,78,221,0.5)]"
              />
              <span className="font-bold text-xl tracking-wide text-white group-hover:text-[#9D4EDD] transition-colors">
                Droid Club
              </span>
            </Link>

            {/* Mobile-only Sync Button */}
            <div className="md:hidden">
              <button
                onClick={() => fetchApplications(true)}
                disabled={refreshing || loading}
                className="px-3 py-1.5 rounded-full bg-[#1a1a24] hover:bg-[#9D4EDD] text-white border border-[#9D4EDD]/40 text-xs font-semibold flex items-center gap-1.5 transition disabled:opacity-50 shadow-[0_0_15px_rgba(157,78,221,0.2)]"
                title="Refresh SheetDB data"
              >
                <RefreshCw
                  className={`w-3.5 h-3.5 ${refreshing ? "animate-spin text-[#9D4EDD]" : ""}`}
                />
                <span>{refreshing ? "Syncing..." : "Sync"}</span>
              </button>
            </div>
          </div>

          {/* Middle: Centered Heading */}
          <div className="flex-1 text-center px-2">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight text-white">
              2026 Hiring Applications for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-[#9D4EDD] to-indigo-300">
                Droid Club
              </span>
            </h1>
          </div>

          {/* Right-top corner: Desktop Actions */}
          <div className="hidden md:flex items-center justify-end md:min-w-[220px]">
            <button
              onClick={() => fetchApplications(true)}
              disabled={refreshing || loading}
              className="px-4 py-2 rounded-full bg-[#1a1a24] hover:bg-[#9D4EDD] text-white border border-[#9D4EDD]/40 hover:border-[#9D4EDD] text-xs font-semibold flex items-center gap-2 transition-all shadow-[0_0_15px_rgba(157,78,221,0.2)] hover:shadow-[0_0_25px_rgba(157,78,221,0.5)] disabled:opacity-50"
              title="Refresh SheetDB data"
            >
              <RefreshCw
                className={`w-3.5 h-3.5 ${refreshing ? "animate-spin text-[#9D4EDD]" : ""}`}
              />
              <span>{refreshing ? "Syncing..." : "Sync Sheet"}</span>
            </button>
          </div>
        </header>

        {/* ================= SEARCH & STATUS FILTER ================= */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5">
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-[#9D4EDD] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by name, email, phone, role, remarks..."
              className="w-full pl-9 pr-8 py-2 bg-[#1a1a24]/90 border border-[#9D4EDD]/30 rounded-xl text-xs text-white placeholder-gray-400 focus:outline-none focus:border-[#9D4EDD] focus:ring-1 focus:ring-[#9D4EDD]/40 transition shadow-inner"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          <div className="flex items-center gap-2">
            {/* Status Filter */}
            <div className="relative">
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="px-3.5 py-2 pr-8 bg-[#1a1a24] border border-[#9D4EDD]/30 rounded-xl text-xs font-medium text-gray-200 focus:outline-none focus:border-[#9D4EDD] focus:ring-1 focus:ring-[#9D4EDD]/40 cursor-pointer appearance-none transition"
              >
                <option value="All" className="bg-[#1a1a24] text-white">All Statuses</option>
                {STATUS_OPTIONS.map((opt) => (
                  <option key={opt} value={opt} className="bg-[#1a1a24] text-white">
                    {opt}
                  </option>
                ))}
              </select>
              <ChevronDown className="w-3.5 h-3.5 text-[#9D4EDD] absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>

            {/* Rows Per Page */}
            <div className="relative">
              <select
                value={rowsPerPage}
                onChange={(e) => setRowsPerPage(Number(e.target.value))}
                className="px-3 py-2 pr-7 bg-[#1a1a24] border border-[#9D4EDD]/30 rounded-xl text-xs font-medium text-gray-200 focus:outline-none focus:border-[#9D4EDD] focus:ring-1 focus:ring-[#9D4EDD]/40 cursor-pointer appearance-none transition"
              >
                <option value={10} className="bg-[#1a1a24] text-white">10 / page</option>
                <option value={15} className="bg-[#1a1a24] text-white">15 / page</option>
                <option value={25} className="bg-[#1a1a24] text-white">25 / page</option>
                <option value={50} className="bg-[#1a1a24] text-white">50 / page</option>
              </select>
              <ChevronDown className="w-3.5 h-3.5 text-[#9D4EDD] absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* ================= CLEAN EXCEL/SHEETS TABLE ================= */}
        <div className="bg-[#13131a]/95 rounded-xl border border-[#9D4EDD]/30 overflow-hidden shadow-[0_0_35px_rgba(157,78,221,0.12)] backdrop-blur-md flex flex-col">
          {loading ? (
            <div className="py-24 text-center space-y-3">
              <RefreshCw className="w-7 h-7 text-[#9D4EDD] animate-spin mx-auto drop-shadow-[0_0_10px_rgba(157,78,221,0.5)]" />
              <p className="text-xs text-gray-300 font-medium tracking-wide">Loading applications from SheetDB...</p>
            </div>
          ) : error ? (
            <div className="py-16 text-center space-y-3 px-4">
              <AlertCircle className="w-8 h-8 text-rose-400 mx-auto" />
              <p className="text-xs text-rose-300 font-medium">{error}</p>
              <button
                onClick={() => fetchApplications()}
                className="px-4 py-1.5 bg-[#9D4EDD] hover:bg-[#7B2CBF] text-white rounded-lg text-xs font-semibold shadow-[0_0_15px_rgba(157,78,221,0.4)] transition"
              >
                Retry
              </button>
            </div>
          ) : filteredApplicants.length === 0 ? (
            <div className="py-16 text-center text-gray-400 text-xs space-y-1">
              <p className="font-semibold text-gray-200">No applications found</p>
              <p>Try adjusting your search or status filter.</p>
            </div>
          ) : (
            /* Horizontally scrollable table container */
            <div className="overflow-x-auto max-w-full">
              <table className="w-full text-left border-collapse min-w-[1000px] text-xs">
                {/* Excel style sticky table header */}
                <thead className="sticky top-0 bg-[#1a1a24] border-b border-[#9D4EDD]/30 text-purple-200 font-bold uppercase tracking-wider text-[11px] select-none z-10">
                  <tr className="divide-x divide-[#9D4EDD]/20">
                    <th className="py-3 px-3 w-12 text-center text-purple-300">#</th>
                    <th className="py-3 px-3">Name</th>
                    <th className="py-3 px-3">Email</th>
                    <th className="py-3 px-3">Phone</th>
                    <th className="py-3 px-3">College</th>
                    <th className="py-3 px-2 text-center w-20">Year</th>
                    <th className="py-3 px-3">Position / Role</th>
                    <th className="py-3 px-3 w-32">Applied Date</th>
                    <th className="py-3 px-3 w-36">Status</th>
                    <th className="py-3 px-3 min-w-[200px]">Remarks</th>
                    <th className="py-3 px-2 text-center w-20">Save</th>
                  </tr>
                </thead>

                {/* Table rows */}
                <tbody className="divide-y divide-[#9D4EDD]/15 text-gray-200">
                  {paginatedApplicants.map((applicant, idx) => {
                    const draft = drafts[applicant.id];
                    const currentStatus = draft?.status ?? applicant.status;
                    const currentRemark = draft?.remark ?? applicant.remark;
                    const isChanged = hasRowChanged(applicant);
                    const isSaving = savingIds.has(applicant.id);
                    const statusClass =
                      STATUS_STYLES[currentStatus] || STATUS_STYLES.Pending;

                    return (
                      <tr
                        key={applicant.id}
                        className={`divide-x divide-[#9D4EDD]/15 transition ${
                          isChanged
                            ? "bg-[#9D4EDD]/20"
                            : idx % 2 === 0
                            ? "bg-[#13131a] hover:bg-[#9D4EDD]/10"
                            : "bg-[#181822]/60 hover:bg-[#9D4EDD]/10"
                        }`}
                      >
                        {/* Row Index */}
                        <td className="py-2.5 px-2 text-center text-gray-500 font-mono text-[11px]">
                          {startIndex + idx + 1}
                        </td>

                        {/* 1. Name */}
                        <td className="py-2.5 px-3 font-semibold text-white whitespace-nowrap">
                          {applicant.name}
                        </td>

                        {/* 2. Email */}
                        <td className="py-2.5 px-3 font-mono text-gray-300 whitespace-nowrap">
                          <a
                            href={`mailto:${applicant.email}`}
                            className="hover:text-[#9D4EDD] hover:underline transition-colors"
                          >
                            {applicant.email}
                          </a>
                        </td>

                        {/* 3. Phone */}
                        <td className="py-2.5 px-3 font-mono text-gray-300 whitespace-nowrap">
                          {applicant.phone}
                        </td>

                        {/* 4. College */}
                        <td className="py-2.5 px-3 whitespace-nowrap text-gray-300">
                          {applicant.college}
                        </td>

                        {/* 5. Year */}
                        <td className="py-2.5 px-2 text-center whitespace-nowrap text-gray-400">
                          {applicant.year}
                        </td>

                        {/* 6. Position / Role */}
                        <td className="py-2.5 px-3 whitespace-nowrap">
                          <span className="px-2.5 py-1 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/30 font-semibold text-[11px]">
                            {applicant.role}
                          </span>
                        </td>

                        {/* 7. Applied Date */}
                        <td className="py-2.5 px-3 font-mono text-[11px] text-gray-400 whitespace-nowrap">
                          {applicant.appliedDate}
                        </td>

                        {/* 8. Status (Dropdown with default Pending) */}
                        <td className="py-2 px-3 whitespace-nowrap">
                          <div className="relative inline-block w-full">
                            <select
                              value={currentStatus}
                              disabled={isSaving}
                              onChange={(e) =>
                                handleFieldChange(applicant.id, "status", e.target.value)
                              }
                              className={`w-full px-2.5 py-1 rounded-lg text-xs font-semibold border cursor-pointer appearance-none pr-6 focus:outline-none transition ${statusClass}`}
                            >
                              {STATUS_OPTIONS.map((opt) => (
                                <option
                                  key={opt}
                                  value={opt}
                                  className="bg-[#1a1a24] text-white"
                                >
                                  {opt}
                                </option>
                              ))}
                            </select>
                            <ChevronDown className="w-3 h-3 text-purple-300 absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" />
                          </div>
                        </td>

                        {/* 9. Remarks (Directly editable input) */}
                        <td className="py-2 px-2">
                          <input
                            type="text"
                            value={currentRemark}
                            disabled={isSaving}
                            placeholder="Add remarks..."
                            onChange={(e) =>
                              handleFieldChange(applicant.id, "remark", e.target.value)
                            }
                            className={`w-full px-2.5 py-1 bg-[#1a1a24]/90 border rounded-lg text-xs text-white placeholder-gray-500 focus:outline-none transition ${
                              isChanged
                                ? "border-[#9D4EDD] bg-[#9D4EDD]/20 focus:border-[#9D4EDD]"
                                : "border-[#9D4EDD]/25 focus:border-[#9D4EDD] focus:ring-1 focus:ring-[#9D4EDD]/40"
                            }`}
                          />
                        </td>

                        {/* Action - Save Row */}
                        <td className="py-2 px-2 text-center whitespace-nowrap">
                          <button
                            onClick={() => handleSaveRow(applicant)}
                            disabled={!isChanged || isSaving}
                            className={`px-3 py-1 rounded-lg text-xs font-semibold transition flex items-center justify-center gap-1 mx-auto ${
                              isSaving
                                ? "bg-[#9D4EDD]/50 text-white cursor-wait"
                                : isChanged
                                ? "bg-gradient-to-r from-[#9D4EDD] to-[#7B2CBF] hover:from-[#8b3fd0] hover:to-[#6a22aa] text-white shadow-[0_0_15px_rgba(157,78,221,0.5)] cursor-pointer"
                                : "bg-[#1a1a24] text-gray-500 border border-white/5 cursor-default"
                            }`}
                            title={isChanged ? "Save row to SheetDB" : "No changes"}
                          >
                            {isSaving ? (
                              <RefreshCw className="w-3 h-3 animate-spin text-white" />
                            ) : (
                              <Save className="w-3 h-3" />
                            )}
                            <span className="hidden sm:inline">Save</span>
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}

          {/* ================= PAGINATION CONTROLS ================= */}
          {!loading && !error && filteredApplicants.length > 0 && (
            <div className="p-3.5 bg-[#1a1a24] border-t border-[#9D4EDD]/30 flex flex-col sm:flex-row items-center justify-between gap-2.5 text-xs text-gray-400">
              <div>
                Showing <span className="font-bold text-white">{startIndex + 1}</span> to{" "}
                <span className="font-bold text-white">{endIndex}</span> of{" "}
                <span className="font-bold text-purple-300">{totalEntries}</span> applications
              </div>

              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                  disabled={currentPage === 1}
                  className="p-1.5 rounded-lg bg-[#13131a] hover:bg-[#9D4EDD]/20 text-gray-300 hover:text-white border border-[#9D4EDD]/30 disabled:opacity-30 disabled:cursor-not-allowed transition"
                  title="Previous Page"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>

                <span className="px-3 py-1 font-semibold text-gray-200">
                  Page {currentPage} of {totalPages}
                </span>

                <button
                  onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className="p-1.5 rounded-lg bg-[#13131a] hover:bg-[#9D4EDD]/20 text-gray-300 hover:text-white border border-[#9D4EDD]/30 disabled:opacity-30 disabled:cursor-not-allowed transition"
                  title="Next Page"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
