import React from "react";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import { siteConfig } from "@/config/site";

export default function PillarsSection() {
  return (
    <section id="pillars" className="py-16 sm:py-20 lg:py-24 bg-[#F8F5F0] border-b border-[#E8DFD3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Areas of Developmental Work"
          title="The 5 Pillars of Insight Ignite"
          subtitle="Insight Ignite provides evidence-informed mentorship, capacity-building, and developmental resources across five core focus areas."
          className="mb-12 sm:mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteConfig.programs.map((prog, idx) => (
            <div
              key={prog.slug}
              className="bg-white rounded-2xl p-7 border border-[#E3D8CC] shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group hover:border-[#8C5E42]/50"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-bold text-[#8C5E42] bg-[#FAF5EF] px-2.5 py-1 rounded-md border border-[#EADBCE]">
                    Pillar 0{idx + 1}
                  </span>
                  <span className="text-[11px] uppercase tracking-wider text-[#7A6B5F] font-semibold">
                    {prog.subtitle}
                  </span>
                </div>

                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#2D241E] mb-2 group-hover:text-[#8C5E42] transition-colors">
                  {prog.title}
                </h3>
                <p className="text-xs font-medium text-[#7A6B5F] mb-3">
                  {prog.tagline}
                </p>
                <p className="text-sm text-[#5C4D42] leading-relaxed mb-4">
                  {prog.description}
                </p>

                <div className="pt-2 border-t border-[#F2ECE4]">
                  <span className="block text-[11px] font-semibold uppercase tracking-wider text-[#796758] mb-1.5">
                    Focus Areas:
                  </span>
                  <ul className="space-y-1">
                    {prog.focusAreas.slice(0, 3).map((area, aIdx) => (
                      <li key={aIdx} className="text-xs text-[#524338] flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#8C5E42]" />
                        <span>{area}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#F2ECE4]">
                <Link
                  href={`/programs/${prog.slug}`}
                  className="inline-flex items-center text-sm font-semibold text-[#8C5E42] hover:text-[#68412B] group-hover:underline"
                >
                  <span>{prog.ctaLabel}</span>
                  <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
