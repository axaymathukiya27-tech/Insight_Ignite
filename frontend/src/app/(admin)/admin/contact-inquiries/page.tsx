import React from "react";

export const metadata = {
  title: "Contact & Institutional Inquiries — Admin Portal",
};

export default function AdminContactInquiriesPage() {
  const inquiries = [
    {
      id: "inq-1",
      name: "Radhika Sharma",
      email: "radhika@example.com",
      organization: "Individual Parent",
      inquiryType: "Course Inquiry (The 6 Powers)",
      date: "2026-10-19",
      message: "Interested in enrolling in the upcoming conscious parenting cohort. Would love details on the schedule.",
      status: "Unread",
    },
    {
      id: "inq-2",
      name: "St. Jude Educational Trust",
      email: "principal@stjude.edu",
      organization: "School Administration",
      inquiryType: "School & Educator Mentorship",
      date: "2026-10-18",
      message: "Requesting Dr. Nivedita Ganguli for a two-day faculty development workshop on pedagogical empathy.",
      status: "In Review",
    },
  ];

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-serif text-2xl sm:text-3xl font-bold text-[#2D241E]">
            Contact & Institutional Inquiries
          </h1>
          <p className="text-sm text-[#5C4D42]">
            Review messages submitted from the public contact page and partnership requests.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-[#EAE3D9] text-[#78543B] text-xs font-semibold">
            Total Submissions: {inquiries.length}
          </span>
        </div>
      </div>

      <div className="bg-white rounded-3xl border border-[#E3D8CC] shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-[#FAF5EE] border-b border-[#E3D8CC] text-[#6B5A4E] uppercase tracking-wider font-semibold">
              <tr>
                <th className="py-4 px-6">Sender Name</th>
                <th className="py-4 px-6">Email Address</th>
                <th className="py-4 px-6">Organization</th>
                <th className="py-4 px-6">Category</th>
                <th className="py-4 px-6">Message Excerpt</th>
                <th className="py-4 px-6">Date</th>
                <th className="py-4 px-6">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#EFE8DF] text-[#3D3127]">
              {inquiries.map((inq) => (
                <tr key={inq.id} className="hover:bg-[#FAF8F5]">
                  <td className="py-4 px-6 font-semibold text-[#2D241E] whitespace-nowrap">
                    {inq.name}
                  </td>
                  <td className="py-4 px-6 text-[#5C4D42]">{inq.email}</td>
                  <td className="py-4 px-6 text-[#7A6A5E]">{inq.organization}</td>
                  <td className="py-4 px-6 font-medium text-[#8C5E42] whitespace-nowrap">
                    {inq.inquiryType}
                  </td>
                  <td className="py-4 px-6 text-[#5C4D42] max-w-xs truncate" title={inq.message}>
                    {inq.message}
                  </td>
                  <td className="py-4 px-6 text-[#7A6A5E] whitespace-nowrap">{inq.date}</td>
                  <td className="py-4 px-6 whitespace-nowrap">
                    <span
                      className={`px-2.5 py-1 rounded-full font-semibold border ${
                        inq.status === "Unread"
                          ? "bg-amber-50 text-amber-800 border-amber-200"
                          : "bg-[#FAF5EE] text-[#8C5E42] border-[#E4D8CB]"
                      }`}
                    >
                      {inq.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
