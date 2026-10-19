import React from "react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata = {
  title: "Course Academy — Insight Ignite",
  description:
    "Explore online masterclasses and guided developmental programs offered by Dr. Nivedita Ganguli. Featured: The 6 Powers of Conscious Parenting.",
};

export default function CoursesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#2D241E]">
      <Navbar />

      <main className="flex-grow">
        {/* Header */}
        <section className="py-16 sm:py-20 bg-gradient-to-b from-[#F5EFE8] to-[#FAF8F5] border-b border-[#E7DFD4]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <SectionHeading
              badge="Learning Academy"
              title="Online Courses & Masterclasses"
              subtitle="Evidence-informed, self-paced learning journeys designed by Dr. Nivedita Ganguli for parents, educators, and developmental mentors."
            />
          </div>
        </section>

        {/* Course Grid */}
        <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Featured Course Card */}
            <div className="bg-white rounded-3xl border border-[#E3D8CC] shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-12">
                <div className="md:col-span-5 bg-gradient-to-br from-[#8C5E42] to-[#5C3925] p-8 text-[#FDFBF7] flex flex-col justify-between">
                  <div className="space-y-3">
                    <span className="inline-block px-3 py-1 rounded-full bg-white/20 text-xs font-semibold">
                      Featured Masterclass
                    </span>
                    <h3 className="font-serif text-2xl font-bold leading-tight">
                      The 6 Powers of Conscious Parenting
                    </h3>
                    <p className="text-xs text-white/85 leading-relaxed">
                      Presence, Attunement, Clarity, Co-Regulation, Repair & Autonomy.
                    </p>
                  </div>

                  <div className="pt-6 border-t border-white/20 text-xs space-y-1.5 text-white/80">
                    <div>Instructor: <strong className="text-white">Dr. Nivedita Ganguli</strong></div>
                    <div>Format: <strong className="text-white">Online Self-Paced</strong></div>
                    <div>Language: <strong className="text-white">English</strong></div>
                  </div>
                </div>

                <div className="md:col-span-7 p-8 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <h4 className="font-serif text-lg font-bold text-[#2D241E]">
                      Course Description
                    </h4>
                    <p className="text-sm text-[#5C4D42] leading-relaxed">
                      A comprehensive foundational program translating mindful psychology into dependable daily habits. Learn how to anchor your child during intense dysregulation, establish clear boundaries without shame, and restore trust after conflict.
                    </p>
                    <div className="p-3.5 rounded-xl bg-[#FAF6F1] border border-[#EBE1D6] text-xs text-[#524338]">
                      <strong>Enrollment Status:</strong> Phase 1 Development Preview (Official fee and registration schedule pending formal approval).
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                    <Link
                      href="/courses/the-6-powers-of-conscious-parenting"
                      className="w-full sm:w-auto text-center px-6 py-2.5 rounded-full bg-[#8C5E42] text-[#FDFBF7] font-semibold text-sm hover:bg-[#724B34] transition-colors"
                    >
                      View Full Syllabus
                    </Link>
                    <Link
                      href="/contact"
                      className="w-full sm:w-auto text-center px-5 py-2.5 rounded-full border border-[#D5C6B5] text-[#4A3C32] font-semibold text-sm hover:bg-[#F2ECE4] transition-colors"
                    >
                      Pre-Register Interest
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Course Roadmap Notice */}
            <div className="mt-12 text-center p-6 rounded-2xl bg-[#FAF5EE] border border-[#E4D8CB]">
              <p className="text-xs text-[#6B5A4E]">
                * Future Course Notice: Additional masterclasses in adolescent mentoring and educator classroom observation will be introduced in subsequent phases following institutional review.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
