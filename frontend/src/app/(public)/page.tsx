import React from "react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/features/home/components/Hero";
import PillarsSection from "@/features/home/components/PillarsSection";
import Biography from "@/features/home/components/Biography";
import FeaturedCourse from "@/features/courses/components/FeaturedCourse";
import FAQSection from "@/features/home/components/FAQSection";

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
        {/* 2. Hero Section: Broad institutional mentorship mission */}
        <Hero />

        {/* 3. The 5 Pillars of Insight Ignite (Organization Scope) */}
        <PillarsSection />

        {/* 4. Founder & Leadership Profile (Verified bio & philosophy) */}
        <Biography />

        {/* 5. Featured Course Spotlight: The 6 Powers of Conscious Parenting */}
        <FeaturedCourse />

        {/* 6. Institutional Inquiries & Collaboration Callout */}
        <section className="py-16 sm:py-20 bg-gradient-to-br from-[#8C5E42] to-[#5C3925] text-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <span className="inline-block px-3.5 py-1 rounded-full bg-white/20 text-xs font-semibold tracking-wider uppercase">
              Partnerships & Mentorship
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold tracking-tight max-w-2xl mx-auto">
              Collaborate With Dr. Nivedita Ganguli
            </h2>
            <p className="text-sm sm:text-base text-white/90 max-w-2xl mx-auto leading-relaxed">
              Whether you are a parent seeking guidance, an educational institution planning faculty development workshops, or an organization building emotional resilience, our team welcomes your inquiry.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white text-[#5C3925] font-bold text-sm hover:bg-[#F5EFE8] transition-colors shadow-md"
              >
                Submit an Inquiry &rarr;
              </Link>
              <Link
                href="/programs"
                className="w-full sm:w-auto px-7 py-3.5 rounded-full border border-white/40 text-white font-semibold text-sm hover:bg-white/10 transition-colors"
              >
                Explore All 5 Programs
              </Link>
            </div>
          </div>
        </section>

        {/* 7. FAQ Section */}
        <FAQSection />
      </main>

      {/* 8. Footer */}
      <Footer />
    </div>
  );
}
