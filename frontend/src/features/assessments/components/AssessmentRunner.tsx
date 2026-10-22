"use client";

import React, { useState } from "react";
import {
  PublicAssessmentInstrument,
  AssessmentResultDto,
} from "@insight-ignite/shared";
import AssessmentIntro from "./AssessmentIntro";
import ProgressBar from "./ProgressBar";
import QuestionCard from "./QuestionCard";
import AssessmentReportView from "./AssessmentReportView";
import ClaimModal from "./ClaimModal";
import { submitAssessment } from "../api";

interface Props {
  instrument: PublicAssessmentInstrument;
}

type Stage = "INTRO" | "QUESTIONS" | "SUBMITTING" | "RESULT";

export default function AssessmentRunner({ instrument }: Props) {
  const [stage, setStage] = useState<Stage>("INTRO");
  const [consentNoticeVersion, setConsentNoticeVersion] = useState<string>("");
  const [currentIndex, setCurrentIndex] = useState(0);

  // In-memory answer map: itemId -> selectedOptionId
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [validationError, setValidationError] = useState<string | null>(null);

  // Result state
  const [result, setResult] = useState<AssessmentResultDto | null>(null);
  const [claimToken, setClaimToken] = useState<string | undefined>(undefined);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isClaimModalOpen, setIsClaimModalOpen] = useState(false);

  // Sorted items
  const items = [...instrument.items].sort((a, b) => a.orderIndex - b.orderIndex);
  const currentItem = items[currentIndex];

  // Lookup factor info for current item
  const currentFactor = instrument.factors.find(
    (f) => f.code === currentItem?.factorCode
  );

  const handleConsentGiven = (noticeVersion: string) => {
    setConsentNoticeVersion(noticeVersion);
    setStage("QUESTIONS");
  };

  const handleSelectOption = (optionId: string) => {
    setAnswers((prev) => ({
      ...prev,
      [currentItem.id]: optionId,
    }));
    setValidationError(null);
  };

  const handleNext = async () => {
    if (!answers[currentItem.id]) {
      setValidationError("Please select an option to continue.");
      return;
    }

    if (currentIndex < items.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setValidationError(null);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // Final submission
      await executeSubmission();
    }
  };

  const handleBack = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
      setValidationError(null);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      setStage("INTRO");
    }
  };

  const executeSubmission = async () => {
    setStage("SUBMITTING");
    setSubmitError(null);

    const payload = {
      versionId: instrument.versionId,
      consentGiven: true as const,
      consentNoticeVersion,
      answers: items.map((item) => ({
        itemId: item.id,
        selectedOptionId: answers[item.id] || "",
      })),
    };

    try {
      const response = await submitAssessment(payload);
      setResult(response.result);
      if (response.claimToken) {
        setClaimToken(response.claimToken);
      }
      setStage("RESULT");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (err: unknown) {
      setStage("QUESTIONS");
      const msg =
        err instanceof Error
          ? err.message
          : "An unexpected error occurred while scoring your reflection. Please retry.";
      setSubmitError(msg);
    }
  };

  if (stage === "INTRO") {
    return (
      <AssessmentIntro
        instrument={instrument}
        onConsentGiven={handleConsentGiven}
      />
    );
  }

  if (stage === "SUBMITTING") {
    return (
      <div className="max-w-2xl mx-auto my-20 px-4 text-center space-y-6">
        <div className="w-16 h-16 mx-auto rounded-full bg-[#FAF5EE] border border-[#E3D8CC] flex items-center justify-center">
          <div className="w-8 h-8 border-3 border-[#8C5E42] border-t-transparent rounded-full animate-spin" />
        </div>
        <div className="space-y-2">
          <h2 className="font-serif text-2xl font-bold text-[#2D241E]">
            Calculating Your Parenting Reflection
          </h2>
          <p className="text-sm text-[#6B5A4E] max-w-md mx-auto">
            Your responses are being analyzed securely server-side against Dr. Nivedita Ganguli&apos;s approved scoring models...
          </p>
        </div>
      </div>
    );
  }

  if (stage === "RESULT" && result) {
    return (
      <>
        <AssessmentReportView
          result={result}
          onOpenClaimModal={() => setIsClaimModalOpen(true)}
        />
        {claimToken && (
          <ClaimModal
            claimToken={claimToken}
            isOpen={isClaimModalOpen}
            onClose={() => setIsClaimModalOpen(false)}
            onClaimSuccess={() => {
              setResult((prev) => (prev ? { ...prev, isAnonymous: false } : prev));
              setClaimToken(undefined);
            }}
          />
        )}
      </>
    );
  }

  return (
    <div className="max-w-2xl mx-auto my-8 px-4 sm:px-6 space-y-8">
      {/* Top Navigation & Progress */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <button
            type="button"
            onClick={handleBack}
            className="text-xs font-semibold text-[#8C5E42] hover:text-[#724B34] flex items-center gap-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8C5E42] p-1 rounded-md"
          >
            ← {currentIndex === 0 ? "Back to Overview" : "Previous Question"}
          </button>
          <span className="text-xs text-[#8A796E]">
            {instrument.title}
          </span>
        </div>

        <ProgressBar
          current={currentIndex + 1}
          total={items.length}
          factorName={currentFactor?.name}
          factorTagline={currentFactor?.tagline}
        />
      </div>

      {/* Submission Error Banner */}
      {submitError && (
        <div
          role="alert"
          className="p-4 rounded-2xl bg-[#FEF2F2] border border-[#FCA5A5] text-xs text-[#991B1B] flex items-start gap-2.5"
        >
          <svg
            className="w-5 h-5 shrink-0 mt-0.5 text-[#DC2626]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <div className="space-y-1">
            <span className="font-bold">Submission Error:</span> {submitError}
            <p className="text-[11px] text-[#7F1D1D]">
              Your previous selections are safely preserved. Please try submitting again.
            </p>
          </div>
        </div>
      )}

      {/* Active Question Card */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E3D8CC] shadow-sm space-y-6">
        <QuestionCard
          item={currentItem}
          selectedOptionId={answers[currentItem.id]}
          onSelectOption={handleSelectOption}
          error={validationError || undefined}
        />

        {/* Action Controls */}
        <div className="pt-6 border-t border-[#EFE8DF] flex items-center justify-between gap-4">
          <button
            type="button"
            onClick={handleBack}
            className="px-5 py-2.5 rounded-full border border-[#D5C7B8] text-[#5C4D42] font-semibold text-xs hover:bg-[#FAF8F5] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8C5E42]"
          >
            Back
          </button>

          <button
            type="button"
            onClick={handleNext}
            className="px-7 py-3 rounded-full bg-[#8C5E42] text-[#FDFBF7] font-semibold text-xs hover:bg-[#724B34] transition-colors shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8C5E42]"
          >
            {currentIndex === items.length - 1
              ? "Complete & Calculate Reflection →"
              : "Next Question →"}
          </button>
        </div>
      </div>
    </div>
  );
}
