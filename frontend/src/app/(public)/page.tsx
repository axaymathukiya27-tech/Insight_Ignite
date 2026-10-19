import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/features/home/components/Hero";
import PillarsSection from "@/features/home/components/PillarsSection";
import Biography from "@/features/home/components/Biography";
import LearningOutcomes from "@/features/home/components/LearningOutcomes";
import CourseJourney from "@/features/home/components/CourseJourney";
import FAQSection from "@/features/home/components/FAQSection";
import FeaturedCourse from "@/features/courses/components/FeaturedCourse";
import SixPowers from "@/features/courses/components/SixPowers";

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
        {/* 2. Hero Section: Conscious parenting & developmental leadership */}
        <Hero />

        {/* 3. The 5 Pillars of Insight Ignite (Organization Scope) */}
        <PillarsSection />

        {/* 4. Featured Course: The 6 Powers of Conscious Parenting */}
        <FeaturedCourse />

        {/* 5. Six Powers Section (Provisional breakdown) */}
        <SixPowers />

        {/* 6. Learning Outcomes Section */}
        <LearningOutcomes />

        {/* 7. Meet Dr. Nivedita Ganguli (Verified bio & approved portrait frame) */}
        <Biography />

        {/* 8. Simple Course Journey Section */}
        <CourseJourney />

        {/* 9. FAQ Section */}
        <FAQSection />
      </main>

      {/* 10. Footer */}
      <Footer />
    </div>
  );
}
