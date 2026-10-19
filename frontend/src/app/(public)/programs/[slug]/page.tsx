import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SectionHeading from "@/components/ui/SectionHeading";
import { siteConfig } from "@/config/site";

interface ProgramPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: ProgramPageProps) {
  const { slug } = await params;
  const program = siteConfig.programs.find((p) => p.slug === slug);
  if (!program) return { title: "Program Not Found" };
  return {
    title: `${program.title} — Insight Ignite`,
    description: program.description,
  };
}

export default async function ProgramDetailPage({ params }: ProgramPageProps) {
  const { slug } = await params;
  const program = siteConfig.programs.find((p) => p.slug === slug);

  if (!program) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#2D241E]">
      <Navbar />

      <main className="flex-grow">
        {/* Header Banner */}
        <section className="py-16 sm:py-20 bg-gradient-to-b from-[#F5EFE8] to-[#FAF8F5] border-b border-[#E7DFD4]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Link
              href="/programs"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#8C5E42] uppercase tracking-wider mb-4 hover:underline"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span>Back to All Programs</span>
            </Link>

            <SectionHeading
              badge={program.subtitle}
              title={program.title}
              subtitle={program.tagline}
            />
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 sm:py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Overview */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E3D8CC] shadow-xs space-y-6">
            <h2 className="font-serif text-2xl font-bold text-[#2D241E]">
              Program Overview & Scope
            </h2>
            <p className="text-base text-[#56473C] leading-relaxed">
              {program.description}
            </p>
            <div className="p-4 rounded-xl bg-[#FAF6F1] border border-[#EBE1D6] text-sm text-[#5C4D42]">
              <strong>Target Participants:</strong> {program.targetAudience}
            </div>
          </div>

          {/* Core Focus Modules */}
          <div className="space-y-6">
            <h3 className="font-serif text-2xl font-bold text-[#2D241E]">
              Core Developmental Pillars
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {program.focusAreas.map((area, idx) => (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-2xl border border-[#E3D8CC] shadow-xs flex items-start gap-3"
                >
                  <div className="w-8 h-8 rounded-full bg-[#EFE7DE] text-[#8C5E42] flex items-center justify-center font-bold text-xs flex-shrink-0">
                    {idx + 1}
                  </div>
                  <div>
                    <h4 className="font-serif text-lg font-bold text-[#2D241E] mb-1">
                      {area}
                    </h4>
                    <p className="text-xs text-[#66564B] leading-relaxed">
                      Structured mentoring sessions, reflective self-evaluations, and evidence-informed frameworks.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Action Callout */}
          <div className="p-8 rounded-3xl bg-gradient-to-r from-[#FAF4ED] to-[#F1E8DC] border border-[#E1D4C4] text-center space-y-4">
            <h3 className="font-serif text-2xl font-bold text-[#2D241E]">
              Participate in this Program
            </h3>
            <p className="text-sm text-[#66564B] max-w-xl mx-auto leading-relaxed">
              Whether you are seeking family mentorship, adolescent guidance, or school-wide faculty development, our team coordinates tailored workshops.
            </p>
            <div className="pt-2 flex flex-wrap justify-center gap-4">
              {slug === "parenting-families" ? (
                <Link
                  href="/courses/the-6-powers-of-conscious-parenting"
                  className="px-6 py-3 rounded-full bg-[#8C5E42] text-[#FDFBF7] font-semibold text-sm hover:bg-[#724B34] transition-colors"
                >
                  Explore The 6 Powers Course
                </Link>
              ) : (
                <Link
                  href="/contact"
                  className="px-6 py-3 rounded-full bg-[#8C5E42] text-[#FDFBF7] font-semibold text-sm hover:bg-[#724B34] transition-colors"
                >
                  Submit Institutional Inquiry
                </Link>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
