import React from "react";
import Link from "next/link";

export default function FeaturedCourse() {
  return (
    <section id="featured-course" className="py-16 sm:py-20 lg:py-24 bg-[#FAF7F2] border-b border-[#E8DFD3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAE0D4] text-[#634533] text-xs font-semibold tracking-wide uppercase mb-3">
            Sole Featured Course • Phase 1
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2D241E] tracking-tight">
            The 6 Powers of Conscious Parenting
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#615247] leading-relaxed">
            The foundational masterclass designed to guide parents, educators, and guardians
            toward rooted presence, calm co-regulation, and compassionate boundaries.
          </p>
        </div>

        {/* Featured Course Card */}
        <div className="bg-white rounded-3xl border border-[#E3D8CC] shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Visual Header / Banner on Left/Top */}
            <div className="lg:col-span-5 bg-gradient-to-br from-[#8C5E42] via-[#7B4E35] to-[#5C3925] p-8 sm:p-10 text-[#FDFBF7] flex flex-col justify-between relative overflow-hidden">
              {/* Background ambient pattern */}
              <div
                className="absolute inset-0 opacity-10 bg-[radial-gradient(#FFF_1px,transparent_1px)] [background-size:16px_16px]"
                aria-hidden="true"
              />

              <div className="relative z-10 space-y-4">
                <span className="inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur-xs text-xs font-medium text-white/90">
                  Comprehensive Masterclass
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold leading-tight">
                  The 6 Powers of Conscious Parenting
                </h3>
                <p className="text-sm text-white/85 leading-relaxed font-sans">
                  A structured learning journey bridging everyday family realities with conscious,
                  restorative emotional practices.
                </p>
              </div>

              {/* Course Meta Info */}
              <div className="relative z-10 pt-8 mt-6 border-t border-white/20 space-y-3 text-xs text-white/80">
                <div className="flex items-center justify-between">
                  <span>Instructor:</span>
                  <span className="font-semibold text-white">Dr. Nivedita Ganguli</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Delivery Format:</span>
                  <span className="font-semibold text-white">Online Self-Paced Modules</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Language:</span>
                  <span className="font-semibold text-white">English</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Target Audience:</span>
                  <span className="font-semibold text-white">Parents, Guardians & Educators</span>
                </div>
              </div>
            </div>

            {/* Course Details & Provisional Disclosures on Right */}
            <div className="lg:col-span-7 p-8 sm:p-10 flex flex-col justify-between space-y-8 bg-white">
              {/* What the course covers */}
              <div className="space-y-6">
                <div>
                  <h4 className="font-serif text-lg font-bold text-[#2D241E] mb-2">
                    Course Scope & Curriculum Overview
                  </h4>
                  <p className="text-sm text-[#615247] leading-relaxed">
                    This course explores each of the six conscious parenting powers through structured
                    developmental reflections, everyday parent-child dialogue examples, and sustainable
                    emotional connection habits.
                  </p>
                </div>

                {/* Core Areas */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  {[
                    "Presence & Mindful Grounding",
                    "Emotional Attunement & Needs",
                    "Clarity in Boundary-Setting",
                    "Co-Regulation during Tantrums",
                    "Restorative Repair Rituals",
                    "Healthy Developmental Autonomy",
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-xs sm:text-sm font-medium text-[#4D3F35] bg-[#FAF7F2] p-2.5 rounded-lg border border-[#EDE4D9]"
                    >
                      <span className="w-5 h-5 rounded-full bg-[#EAE0D4] text-[#7A543C] flex items-center justify-center text-xs font-bold">
                        {idx + 1}
                      </span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Important Content Integrity Callout */}
                <div className="p-4 rounded-xl bg-[#F6F8FA] border border-[#D8E2E8] text-xs text-[#3E5567] space-y-1.5">
                  <div className="flex items-center gap-2 font-semibold text-[#2D4558]">
                    <svg className="w-4 h-4 text-[#4E768C]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Phase 1 Development Notice — Pricing & Enrollment</span>
                  </div>
                  <p className="leading-relaxed">
                    Official course pricing, lesson counts, and registration schedules will be finalized
                    by Dr. Nivedita Ganguli prior to formal public release. No placeholder discounts or unverified claims are published.
                  </p>
                </div>
              </div>

              {/* Action & Enrollment CTA */}
              <div className="pt-4 border-t border-[#EDE4D9] flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <span className="block text-xs font-semibold text-[#7E6E62] uppercase tracking-wider">
                    Enrollment Status
                  </span>
                  <span className="font-serif text-lg font-bold text-[#2D241E]">
                    Development Preview (Phase 1)
                  </span>
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <a
                    href="#six-powers"
                    className="w-full sm:w-auto text-center px-6 py-3 text-sm font-semibold text-[#FDFBF7] bg-[#8C5E42] hover:bg-[#724B34] active:bg-[#5C3C29] rounded-full shadow-xs transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#8C5E42]"
                  >
                    View The 6 Powers Breakdown
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
