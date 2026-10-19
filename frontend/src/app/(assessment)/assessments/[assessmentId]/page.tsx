import React from "react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

interface Props {
  params: Promise<{ assessmentId: string }>;
}

export default async function AssessmentDetailPage({ params }: Props) {
  const { assessmentId } = await params;

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#2D241E]">
      <Navbar />

      <main className="flex-grow max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-6">
        <Link
          href="/assessments"
          className="text-xs font-semibold text-[#8C5E42] hover:underline"
        >
          &larr; Back to Assessments
        </Link>

        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E3D8CC] shadow-sm space-y-4">
          <span className="px-3 py-1 rounded-full bg-[#FAF5EE] text-[#8C5E42] text-xs font-semibold">
            Assessment ID: {assessmentId}
          </span>
          <h1 className="font-serif text-3xl font-bold text-[#2D241E]">
            Assessment Battery Overview
          </h1>
          <p className="text-sm text-[#5C4D42] leading-relaxed">
            This assessment instrument is scheduled for Phase 2 deployment under the governance of Dr. Nivedita Ganguli. Detailed rubrics, scoring methodologies, and approved clinical recommendations will appear here.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
