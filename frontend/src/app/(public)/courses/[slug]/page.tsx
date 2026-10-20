import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SectionHeading from "@/components/ui/SectionHeading";
import LearningOutcomes from "@/features/home/components/LearningOutcomes";
import CourseJourney from "@/features/home/components/CourseJourney";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  if (slug === "the-6-powers-of-conscious-parenting") {
    return {
      title: "The 6 Powers of Conscious Parenting — Insight Ignite",
      description:
        "Master presence, attunement, clarity, co-regulation, repair, and autonomy with Dr. Nivedita Ganguli.",
    };
  }
  return {
    title: "Course Details — Insight Ignite",
  };
}

export default async function CourseDetailPage({ params }: Props) {
  const { slug } = await params;

  if (slug !== "the-6-powers-of-conscious-parenting") {
    notFound();
  }

  const modules = [
    {
      number: "Power 01",
      title: "The Power of Presence",
      focus: "Grounding oneself before reacting to high-stress household dynamics.",
      outcomes: [
        "Somatic awareness exercises to interrupt automatic reactive habits",
        "Distinguishing urgent emergencies from emotional outbursts",
        "Creating daily grounding micro-rituals for parent calm",
      ],
    },
    {
      number: "Power 02",
      title: "The Power of Attunement",
      focus: "Listening beneath spoken words and misbehavior to uncover the unmet emotional need.",
      outcomes: [
        "Recognizing early stress behaviors before escalation occurs",
        "Active reflective listening without immediately offering unsolicited solutions",
        "Validating feelings while retaining family boundaries",
      ],
    },
    {
      number: "Power 03",
      title: "The Power of Clarity",
      focus: "Establishing clear, predictable, and shame-free limits.",
      outcomes: [
        "Designing household guidelines together with children",
        "Eliminating punishment-and-reward cycles in favor of natural accountability",
        "Delivering calm, firm boundaries with steady voice and neutral body language",
      ],
    },
    {
      number: "Power 04",
      title: "The Power of Co-Regulation",
      focus: "Anchoring your child's nervous system through your own grounded stability.",
      outcomes: [
        "Understanding autonomic fight, flight, and freeze responses in children",
        "De-escalating tantrums and meltdowns with breath and proximity",
        "Refraining from power struggles during emotional storms",
      ],
    },
    {
      number: "Power 05",
      title: "The Power of Repair",
      focus: "Rebuilding connection, trust, and accountability after rupture.",
      outcomes: [
        "The 4-step restorative apology framework for parents",
        "Overcoming parental guilt and modeling healthy fallibility",
        "Inviting children into collaborative post-conflict problem solving",
      ],
    },
    {
      number: "Power 06",
      title: "The Power of Autonomy",
      focus: "Fostering inner confidence, problem-solving, and healthy age-appropriate separation.",
      outcomes: [
        "Stepping back from over-functioning and micromanagement",
        "Nurturing executive function and independent decision-making",
        "Supporting healthy peer choices and identity formation",
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#2D241E]">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-16 sm:py-24 bg-gradient-to-b from-[#F3ECE4] via-[#F8F4EE] to-[#FAF8F5] border-b border-[#E6DCD1]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#EADFD4] text-[#634836] text-xs font-semibold tracking-wide">
                Phase 1 Featured Masterclass
              </span>
              <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#2D241E] leading-tight max-w-3xl mx-auto">
                The 6 Powers of Conscious Parenting
              </h1>
              <p className="text-base sm:text-lg text-[#5F4E42] max-w-2xl mx-auto">
                A transformational roadmap designed by Dr. Nivedita Ganguli to replace reactive discipline with presence, calm co-regulation, and unbreakable connection.
              </p>
            </div>

            {/* Quick Details Bar */}
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-2xl bg-white border border-[#E3D7CB] shadow-sm text-center">
              <div>
                <span className="text-xs uppercase text-[#8A796E] font-medium tracking-wider">Instructor</span>
                <p className="font-serif font-bold text-[#2D241E] mt-0.5">Dr. Nivedita Ganguli</p>
              </div>
              <div>
                <span className="text-xs uppercase text-[#8A796E] font-medium tracking-wider">Format</span>
                <p className="font-serif font-bold text-[#2D241E] mt-0.5">6 Core Modules + Worksheets</p>
              </div>
              <div>
                <span className="text-xs uppercase text-[#8A796E] font-medium tracking-wider">Language</span>
                <p className="font-serif font-bold text-[#2D241E] mt-0.5">English</p>
              </div>
              <div>
                <span className="text-xs uppercase text-[#8A796E] font-medium tracking-wider">Target Level</span>
                <p className="font-serif font-bold text-[#2D241E] mt-0.5">Parents (Toddler – Teen)</p>
              </div>
            </div>
          </div>
        </section>

        {/* Course Overview & Syllabus */}
        <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Overview */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E3D7CB] shadow-sm space-y-6">
            <h2 className="font-serif text-2xl font-bold text-[#2D241E]">
              About This Masterclass
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-[#57483D] leading-relaxed">
              <p>
                Parenting is often approached as a checklist of behavioural controls. When children struggle, parents are taught to react with threats, rewards, or guilt. Conscious parenting fundamentally shifts the question from <em>&ldquo;How do I control my child?&rdquo;</em> to <em>&ldquo;How do I anchor myself so my child feels safe enough to learn?&rdquo;</em>
              </p>
              <p>
                Led by educator and mentor Dr. Nivedita Ganguli, this course synthesizes decades of pedagogical insight and developmental psychology into six practical, repeatable powers.
              </p>
            </div>
          </div>

          {/* Detailed Syllabus Modules */}
          <div className="space-y-8">
            <SectionHeading
              badge="Curriculum"
              title="The 6 Core Modules"
              subtitle="Each power includes guided instruction, actionable somatic tools, real-life case dialogues, and reflection journals."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {modules.map((m) => (
                <div
                  key={m.number}
                  className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E4D8CD] hover:border-[#8C5E42]/50 shadow-sm transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <span className="text-xs font-bold text-[#8C5E42] uppercase tracking-wider">
                      {m.number}
                    </span>
                    <h3 className="font-serif text-xl font-bold text-[#2D241E]">
                      {m.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#615146] leading-relaxed">
                      {m.focus}
                    </p>
                    <div className="pt-3">
                      <span className="text-xs font-semibold text-[#3C2E24] uppercase tracking-wider">
                        Key Competencies:
                      </span>
                      <ul className="mt-2 space-y-1.5">
                        {m.outcomes.map((outcome, idx) => (
                          <li key={idx} className="text-xs text-[#52443A] flex items-start gap-2">
                            <span className="text-[#8C5E42] mt-0.5">•</span>
                            <span>{outcome}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Learning Outcomes */}
          <LearningOutcomes />

          {/* 4-Stage Reflective Learning Journey */}
          <CourseJourney />

          {/* Enrollment Notice & Pre-registration CTA */}
          <div className="rounded-3xl bg-gradient-to-br from-[#8C5E42] to-[#5C3925] text-[#FDFBF7] p-8 sm:p-12 text-center space-y-6 shadow-md">
            <div className="max-w-2xl mx-auto space-y-3">
              <span className="inline-block px-3 py-1 rounded-full bg-white/20 text-xs font-medium">
                Enrollment Information
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold">
                Join the Founding Cohort
              </h2>
              <p className="text-sm text-white/90 leading-relaxed">
                Official registration schedules, cohort start dates, and payment processing are undergoing final platform verification. You can pre-register your interest today to receive direct notifications and early-access privileges.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <Link
                href="/register"
                className="w-full sm:w-auto px-8 py-3 rounded-full bg-white text-[#5C3925] font-bold text-sm hover:bg-[#F3ECE4] transition-colors"
              >
                Create Learner Account
              </Link>
              <Link
                href="/contact"
                className="w-full sm:w-auto px-7 py-3 rounded-full border border-white/40 text-white font-semibold text-sm hover:bg-white/10 transition-colors"
              >
                Inquire With Mentorship Team
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
