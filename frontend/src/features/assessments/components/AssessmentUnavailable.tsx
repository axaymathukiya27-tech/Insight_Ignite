import React from "react";
import Link from "next/link";

interface Props {
  title?: string;
  message?: string;
}

export default function AssessmentUnavailable({
  title = "Assessment Instrument Under Professional Review",
  message = "This developmental self-assessment is currently undergoing clinical calibration and governance review under the direction of Dr. Nivedita Ganguli. To protect psychological integrity and data fidelity, questionnaires are made available only after formal psychometric approval.",
}: Props) {
  return (
    <div className="max-w-3xl mx-auto my-12 px-4 sm:px-6">
      <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#E3D8CC] shadow-sm text-center space-y-6">
        <div className="w-16 h-16 mx-auto rounded-full bg-[#FAF5EE] text-[#8C5E42] flex items-center justify-center">
          <svg
            className="w-8 h-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1.75"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
        </div>

        <div className="space-y-3">
          <span className="inline-block px-3 py-1 rounded-full bg-[#FAF5EE] text-[#8C5E42] text-xs font-semibold tracking-wide uppercase">
            Clinical Governance Protocol
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#2D241E]">
            {title}
          </h2>
          <p className="text-sm sm:text-base text-[#5C4D42] max-w-xl mx-auto leading-relaxed">
            {message}
          </p>
        </div>

        <div className="bg-[#FAF8F5] rounded-2xl p-5 border border-[#EDE4D8] text-xs text-[#6B5A4E] text-left max-w-xl mx-auto space-y-2">
          <p className="font-semibold text-[#2D241E]">
            Our Professional Standard (ADR-002):
          </p>
          <ul className="list-disc list-inside space-y-1 pl-1">
            <li>No mock, provisional, or unvalidated psychometric questions.</li>
            <li>No automated scoring without verified clinical thresholds.</li>
            <li>Strict privacy and zero third-party commercial data sharing.</li>
          </ul>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/courses"
            className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#8C5E42] text-[#FDFBF7] font-semibold text-sm hover:bg-[#724B34] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8C5E42]"
          >
            Explore Published Courses
          </Link>
          <Link
            href="/programs"
            className="w-full sm:w-auto px-6 py-3 rounded-full bg-white text-[#5C4D42] border border-[#D5C7B8] font-semibold text-sm hover:bg-[#FAF5EE] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8C5E42]"
          >
            Read Our Methodology
          </Link>
        </div>
      </div>
    </div>
  );
}
