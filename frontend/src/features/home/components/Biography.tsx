import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export default function Biography() {
  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 bg-[#F7F3EE] border-b border-[#E7DDD0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Approved Photograph Placeholder Column */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm">
              <div className="relative rounded-3xl bg-white p-4 shadow-lg border border-[#E0D4C5]">
                {/* Approved Portrait Frame Placeholder */}
                <div className="aspect-[4/5] rounded-2xl bg-gradient-to-b from-[#ECE3D8] to-[#DDD2C4] border border-[#D5C6B5] flex flex-col items-center justify-center p-6 text-center relative overflow-hidden">
                  {/* Dignified Silhouette / Profile Icon */}
                  <div className="w-24 h-24 rounded-full bg-[#FAF7F2] border-2 border-[#8C5E42]/30 flex items-center justify-center text-[#8C5E42] mb-4 shadow-xs">
                    <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>
                  </div>

                  <span className="font-serif text-lg font-bold text-[#3B2E24]">
                    {siteConfig.author}
                  </span>
                  <span className="text-xs text-[#6F5F53] mt-1 font-medium">
                    {siteConfig.authorTitle}
                  </span>

                  {/* Explicit Placeholder Label as required by Content Policy */}
                  <div className="mt-6 px-3 py-1.5 rounded-full bg-white/80 border border-[#C5B5A3] text-[11px] font-semibold text-[#664936]">
                    Approved Portrait • Pending Formal Photo Upload
                  </div>
                </div>

                <div className="mt-3 text-center">
                  <p className="text-[11px] text-[#7E6E62]">
                    {siteConfig.name} Platform Founder & Course Author
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Verified Biography Content Column */}
          <div className="lg:col-span-7 space-y-6 text-[#4D3F35]">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAE0D3] text-[#5C3E2A] text-xs font-semibold tracking-wide uppercase">
              Instructor & Founder Profile
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2D241E] tracking-tight">
              Meet {siteConfig.author}
            </h2>

            <div className="space-y-4 text-base sm:text-lg leading-relaxed text-[#56473C] font-sans">
              <p>
                {siteConfig.author} is dedicated to establishing supportive, mindful learning environments
                for children, schools, and families. Her work centers on conscious parenting, empathetic
                teacher-parent collaboration, and emotionally attuned classroom observation systems.
              </p>
              <p>
                With {siteConfig.name}, she is creating a centralized home for reflective, practical family
                education—guiding parents toward deeper self-awareness, co-regulation, and compassionate
                clarity in everyday moments of challenge.
              </p>
            </div>

            {/* Content Verification Callout Box */}
            <div className="p-5 rounded-2xl bg-white border border-[#E2D6C8] shadow-xs space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#8C5E42] uppercase tracking-wider">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span>Credential & Biography Governance Policy</span>
              </div>
              <p className="text-xs text-[#6B5A4E] leading-relaxed">
                In strict adherence to project standards, detailed academic degrees, clinical registrations,
                and institutional affiliations will be added following verified documentation approval by Dr. Ganguli.
                No unverified marketing claims or placeholder credentials are published.
              </p>
            </div>

            {/* Key Focus Areas */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-[#46382E] bg-white/70 p-3 rounded-xl border border-[#E5DACD]">
                <span className="w-2 h-2 rounded-full bg-[#8C5E42]" aria-hidden="true" />
                <span>Parent-Child Co-Regulation</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-[#46382E] bg-white/70 p-3 rounded-xl border border-[#E5DACD]">
                <span className="w-2 h-2 rounded-full bg-[#8C5E42]" aria-hidden="true" />
                <span>Restorative Repair Practices</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-[#46382E] bg-white/70 p-3 rounded-xl border border-[#E5DACD]">
                <span className="w-2 h-2 rounded-full bg-[#8C5E42]" aria-hidden="true" />
                <span>School & Family Support</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-[#46382E] bg-white/70 p-3 rounded-xl border border-[#E5DACD]">
                <span className="w-2 h-2 rounded-full bg-[#8C5E42]" aria-hidden="true" />
                <span>Mindful Boundary Setting</span>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-1.5 font-semibold text-sm text-[#8C5E42] hover:text-[#724B34] transition-colors"
              >
                Read Full Biography & Educational Background &rarr;
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
