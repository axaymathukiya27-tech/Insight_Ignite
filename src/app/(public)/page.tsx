import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/features/home/components/Hero";
import Biography from "@/features/home/components/Biography";
import LearningOutcomes from "@/features/home/components/LearningOutcomes";
import CourseJourney from "@/features/home/components/CourseJourney";
import FAQSection from "@/features/home/components/FAQSection";
import FeaturedCourse from "@/features/courses/components/FeaturedCourse";
import SixPowers from "@/features/courses/components/SixPowers";
import { siteConfig } from "@/config/site";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#2D241E] antialiased selection:bg-[#8C5E42] selection:text-white">
      {/* Accessible Skip Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2 bg-[#8C5E42] text-white rounded-md shadow-lg outline-none ring-2 ring-white"
      >
        Skip to main content
      </a>

      {/* 1. Responsive Navbar */}
      <Navbar />

      {/* Main Content Area */}
      <main id="main-content" className="flex-grow">
        {/* 2. Hero Section with concise conscious parenting headline and warm imagery */}
        <Hero />

        {/* 3. Featured Course: The 6 Powers of Conscious Parenting */}
        <FeaturedCourse />

        {/* 4. Six Powers Section (Presence, Attunement, Clarity, Co-Regulation, Repair, Autonomy) */}
        <SixPowers />

        {/* 5. Learning Outcomes Section */}
        <LearningOutcomes />

        {/* 6. Meet Dr. Nivedita Ganguli (Approved photograph & verified bio) */}
        <Biography />

        {/* 7. Simple Course Journey Section */}
        <CourseJourney />

        {/* 8. FAQ Section */}
        <FAQSection />

        {/* Informational Policy & Placeholder Modals / Target Anchors */}
        <section
          id="login-placeholder"
          className="sr-only target:not-sr-only target:block max-w-4xl mx-auto my-8 p-6 bg-white border border-[#8C5E42] rounded-2xl shadow-xl"
          aria-label="Portal Login Notice"
        >
          <div className="flex items-start justify-between">
            <div>
              <h3 className="font-serif text-xl font-bold text-[#2D241E]">
                Portal Login (Phase 2 Preview)
              </h3>
              <p className="mt-2 text-sm text-[#5C4D42]">
                Authentication for student, parent, school administrator, and teacher dashboards
                is part of Phase 2. Public course registration and account creation will be activated
                upon formal course launch.
              </p>
            </div>
            <a
              href="#"
              className="text-xs px-3 py-1.5 rounded-full bg-[#EAE0D3] text-[#5C3E2A] font-medium hover:bg-[#D9C7B6]"
            >
              Dismiss
            </a>
          </div>
        </section>

        <section
          id="privacy"
          className="sr-only target:not-sr-only target:block max-w-4xl mx-auto my-8 p-6 bg-white border border-[#8C5E42] rounded-2xl shadow-xl"
          aria-label="Privacy Notice"
        >
          <div className="flex items-start justify-between">
            <div>
              <h3 className="font-serif text-xl font-bold text-[#2D241E]">
                Privacy Notice & Child Data Governance
              </h3>
              <p className="mt-2 text-sm text-[#5C4D42] leading-relaxed">
                {siteConfig.name} adheres to strict child privacy, purpose limitation, and role-based data protection principles.
                No sensitive student information is exposed publicly or shared without verified parental and school consent.
                Full privacy documentation is cataloged under the repository governance pack.
              </p>
            </div>
            <a
              href="#"
              className="text-xs px-3 py-1.5 rounded-full bg-[#EAE0D3] text-[#5C3E2A] font-medium hover:bg-[#D9C7B6]"
            >
              Close
            </a>
          </div>
        </section>

        <section
          id="terms"
          className="sr-only target:not-sr-only target:block max-w-4xl mx-auto my-8 p-6 bg-white border border-[#8C5E42] rounded-2xl shadow-xl"
          aria-label="Terms of Service"
        >
          <div className="flex items-start justify-between">
            <div>
              <h3 className="font-serif text-xl font-bold text-[#2D241E]">
                Terms of Service & Platform Governance
              </h3>
              <p className="mt-2 text-sm text-[#5C4D42] leading-relaxed">
                All course materials and educational resources are copyrighted by {siteConfig.author}.
                The platform is designed exclusively for educational mentoring and professional development.
              </p>
            </div>
            <a
              href="#"
              className="text-xs px-3 py-1.5 rounded-full bg-[#EAE0D3] text-[#5C3E2A] font-medium hover:bg-[#D9C7B6]"
            >
              Close
            </a>
          </div>
        </section>

        <section
          id="refund"
          className="sr-only target:not-sr-only target:block max-w-4xl mx-auto my-8 p-6 bg-white border border-[#8C5E42] rounded-2xl shadow-xl"
          aria-label="Refund Policy"
        >
          <div className="flex items-start justify-between">
            <div>
              <h3 className="font-serif text-xl font-bold text-[#2D241E]">
                Refund & Cancellation Policy
              </h3>
              <p className="mt-2 text-sm text-[#5C4D42] leading-relaxed">
                {siteConfig.name} is committed to fair consumer practices. Course purchases will include a documented
                cancellation and refund window once commerce and payment gateway integration are activated in Phase 4.
              </p>
            </div>
            <a
              href="#"
              className="text-xs px-3 py-1.5 rounded-full bg-[#EAE0D3] text-[#5C3E2A] font-medium hover:bg-[#D9C7B6]"
            >
              Close
            </a>
          </div>
        </section>
      </main>

      {/* 9. Footer */}
      <Footer />
    </div>
  );
}
