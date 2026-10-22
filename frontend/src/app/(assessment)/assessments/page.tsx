import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AssessmentRunner from "@/features/assessments/components/AssessmentRunner";
import AssessmentUnavailable from "@/features/assessments/components/AssessmentUnavailable";
import { getActiveAssessment } from "@/features/assessments/api";

export const metadata = {
  title: "Parent Growth Self-Assessment — Insight Ignite",
  description:
    "An evidence-informed, reflective assessment of co-regulation, emotional presence, and repair practices for parents and caregivers, led by Dr. Nivedita Ganguli.",
};

export default async function AssessmentsPage() {
  let instrument = null;
  let errorNotice: string | null = null;

  try {
    instrument = await getActiveAssessment("parent-growth-self-assessment");
  } catch (err: unknown) {
    errorNotice =
      err instanceof Error
        ? err.message
        : "Unable to connect to the assessment service. Please check back shortly.";
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#2D241E]">
      <Navbar />

      <main className="flex-grow py-8 sm:py-12">
        {instrument ? (
          <AssessmentRunner instrument={instrument} />
        ) : (
          <AssessmentUnavailable
            message={
              errorNotice ||
              "This developmental self-assessment is currently undergoing clinical calibration and governance review under the direction of Dr. Nivedita Ganguli. To protect psychological integrity and data fidelity, questionnaires are made available only after formal psychometric approval."
            }
          />
        )}
      </main>

      <Footer />
    </div>
  );
}
