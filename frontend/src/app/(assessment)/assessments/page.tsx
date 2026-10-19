import React from "react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata = {
  title: "Assessments — Insight Ignite",
};

export default function AssessmentsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#2D241E]">
      <Navbar />

      <main className="flex-grow">
        <section className="py-16 sm:py-20 bg-gradient-to-b from-[#F3EDE6] to-[#FAF8F5] border-b border-[#E6DCD1]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <SectionHeading
              badge="Phase 2 Roadmap"
              title="Individual & Clinical Assessments"
              subtitle="Professionally governed psychological and developmental assessment tools for parents, teachers, and adolescents."
            />
          </div>
        </section>

        <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E3D8CC] shadow-sm text-center space-y-4">
            <span className="px-3 py-1 rounded-full bg-[#FAF5EE] text-[#8C5E42] text-xs font-semibold">
              Future Roadmap Preview
            </span>
            <h2 className="font-serif text-2xl font-bold text-[#2D241E]">
              Governed Assessment Protocols in Development
            </h2>
            <p className="text-sm text-[#5C4D42] max-w-xl mx-auto leading-relaxed">
              Assessment batteries for parent emotional attunement, adolescent stress resilience, and classroom observation rubrics will launch following full clinical advisory review in Phase 2.
            </p>
            <div className="pt-4">
              <Link
                href="/courses"
                className="px-6 py-2.5 rounded-full bg-[#8C5E42] text-[#FDFBF7] font-semibold text-xs hover:bg-[#724B34] transition-colors"
              >
                Explore Current Courses
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
