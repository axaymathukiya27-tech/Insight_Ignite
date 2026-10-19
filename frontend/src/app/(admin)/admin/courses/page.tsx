import React from "react";
import Link from "next/link";

export default function AdminCoursesPage() {
  const courses = [
    {
      id: "course-1",
      title: "The 6 Powers of Conscious Parenting",
      instructor: "Dr. Nivedita Ganguli",
      modules: 6,
      status: "Published (Phase 1)",
      cohort: "Founding Cohort (Preview)",
    },
  ];

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-serif text-2xl sm:text-3xl font-bold text-[#2D241E]">
            Course Management
          </h1>
          <p className="text-sm text-[#5C4D42]">
            Monitor masterclass modules, syllabus configurations, and publication states.
          </p>
        </div>

        <Link
          href="/courses/the-6-powers-of-conscious-parenting"
          className="px-5 py-2.5 rounded-full bg-[#8C5E42] text-[#FDFBF7] text-xs font-semibold hover:bg-[#724B34] transition-colors self-start sm:self-auto"
        >
          View Public Course Page
        </Link>
      </div>

      <div className="bg-white rounded-3xl border border-[#E3D8CC] shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-[#FAF5EE] border-b border-[#E3D8CC] text-[#6B5A4E] uppercase tracking-wider font-semibold">
              <tr>
                <th className="py-4 px-6">Course Name</th>
                <th className="py-4 px-6">Instructor</th>
                <th className="py-4 px-6">Modules</th>
                <th className="py-4 px-6">Status</th>
                <th className="py-4 px-6">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#EFE8DF] text-[#3D3127]">
              {courses.map((c) => (
                <tr key={c.id} className="hover:bg-[#FAF8F5]">
                  <td className="py-4 px-6 font-semibold text-[#2D241E]">{c.title}</td>
                  <td className="py-4 px-6">{c.instructor}</td>
                  <td className="py-4 px-6">{c.modules} Modules</td>
                  <td className="py-4 px-6">
                    <span className="px-2.5 py-1 rounded-full bg-[#FAF5EE] text-[#8C5E42] font-semibold border border-[#E4D8CB]">
                      {c.status}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <Link
                      href="/courses/the-6-powers-of-conscious-parenting"
                      className="text-[#8C5E42] font-semibold hover:underline"
                    >
                      Preview Syllabus
                    </Link>
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
