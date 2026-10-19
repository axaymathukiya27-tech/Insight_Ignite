"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";

interface NavbarProps {
  onExploreClick?: () => void;
}

export default function Navbar({ onExploreClick }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#FAF8F5]/95 backdrop-blur-md shadow-xs border-b border-[#E7DFD5]"
          : "bg-[#FAF8F5] border-b border-[#EFE8DE]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Brand Identity */}
          <Link
            href="#"
            className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8C5E42] rounded-lg p-1"
            aria-label="Insight Ignite — Home"
          >
            <div className="w-10 h-10 rounded-full bg-[#8C5E42] flex items-center justify-center text-[#FDFBF7] shadow-xs group-hover:bg-[#724B34] transition-colors">
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M12 2v8" />
                <path d="m4.93 10.93 1.41 1.41" />
                <path d="M2 18h2" />
                <path d="M20 18h2" />
                <path d="m19.07 10.93-1.41 1.41" />
                <path d="M22 22H2" />
                <path d="m16 6-4 4-4-4" />
                <path d="M16 18a4 4 0 0 0-8 0" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#2D241E] group-hover:text-[#8C5E42] transition-colors">
                {siteConfig.name}
              </span>
              <span className="text-[11px] font-sans font-medium uppercase tracking-wider text-[#7A6B5F]">
                {siteConfig.author}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            className="hidden md:flex items-center gap-1 lg:gap-2 text-sm font-medium text-[#4A3E36]"
            aria-label="Main Navigation"
          >
            {siteConfig.navItems.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3 py-2 rounded-md hover:text-[#8C5E42] hover:bg-[#F2EBE1]/60 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8C5E42]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={siteConfig.links.login}
              className="px-3.5 py-2 text-sm font-semibold text-[#5A493D] hover:text-[#2D241E] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8C5E42] rounded-md"
              title="Portal authentication will be activated in Phase 2"
            >
              Log In
            </a>
            <a
              href={siteConfig.links.exploreCourse}
              onClick={onExploreClick}
              className="inline-flex items-center justify-center px-4.5 py-2.5 text-sm font-semibold text-[#FDFBF7] bg-[#8C5E42] hover:bg-[#724B34] active:bg-[#5C3C29] rounded-full shadow-xs transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#8C5E42]"
            >
              Explore Courses
              <svg
                className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-0.5"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={siteConfig.links.exploreCourse}
              className="text-xs font-semibold px-3 py-1.5 rounded-full bg-[#8C5E42] text-[#FDFBF7]"
            >
              Courses
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#4A3E36] hover:bg-[#F0EAE0] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8C5E42]"
              aria-controls="mobile-navigation"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                aria-hidden="true"
              >
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown panel */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          className="md:hidden border-t border-[#E7DFD5] bg-[#FAF8F5] px-4 pt-3 pb-6 space-y-2 shadow-lg animate-in slide-in-from-top-2 duration-200"
        >
          <div className="flex flex-col space-y-1">
            {siteConfig.navItems.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg text-base font-medium text-[#3D322A] hover:bg-[#F2EBE1] hover:text-[#8C5E42] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="pt-4 border-t border-[#E7DFD5] flex flex-col gap-2">
            <a
              href={siteConfig.links.login}
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 px-4 text-sm font-semibold text-[#4A3E36] border border-[#D5C7B8] rounded-full hover:bg-[#F0EAE0] transition-colors"
            >
              Log In (Phase 2 Portal)
            </a>
            <a
              href={siteConfig.links.exploreCourse}
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 px-4 text-sm font-semibold text-[#FDFBF7] bg-[#8C5E42] rounded-full hover:bg-[#724B34] transition-colors shadow-xs"
            >
              Explore Featured Course
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
