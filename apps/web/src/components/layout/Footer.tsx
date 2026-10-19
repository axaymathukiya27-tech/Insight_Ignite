import React from "react";
import { siteConfig } from "@/config/site";

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#2D231C] text-[#E8DFD5] pt-16 pb-12 border-t border-[#423429]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-[#4A3C32]">
          {/* Brand & Overview Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#8C5E42] flex items-center justify-center text-[#FDFBF7]">
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
                <span className="font-serif text-2xl font-bold tracking-tight text-white">
                  {siteConfig.name}
                </span>
                <span className="text-xs uppercase tracking-wider text-[#C0ADA0]">
                  {siteConfig.author}
                </span>
              </div>
            </div>

            <p className="text-sm text-[#BFB0A3] max-w-sm leading-relaxed">
              A dedicated educational academy providing parents, educators, and mentors with
              conscious parenting principles, restorative repair rituals, and emotional co-regulation frameworks.
            </p>

            <div className="pt-2 text-xs text-[#A8988C]">
              Phase 1 Development Preview • Public Portal Baseline
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Platform Navigation
            </h4>
            <ul className="space-y-2 text-sm text-[#C4B6AA]">
              {siteConfig.navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="hover:text-white transition-colors focus-visible:outline-none focus-visible:underline"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Governance & Policies Links */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Policies & Governance
            </h4>
            <ul className="space-y-2 text-sm text-[#C4B6AA]">
              {siteConfig.policyLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="hover:text-white transition-colors focus-visible:outline-none focus-visible:underline"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  className="hover:text-white transition-colors focus-visible:outline-none focus-visible:underline"
                >
                  Contact & Inquiries: {siteConfig.contactEmail} (Provisional)
                </a>
              </li>
            </ul>

            <div className="pt-3">
              <span className="inline-block px-3 py-1 rounded-md bg-[#3A2D24] text-[11px] text-[#C4B6AA] border border-[#524135]">
                Strict Data Privacy: No Unverified Claims
              </span>
            </div>
          </div>
        </div>

        {/* Disclaimer & Copyright Bottom Bar */}
        <div className="pt-8 space-y-4 text-xs text-[#9E8E81] leading-relaxed">
          <p>
            <strong className="text-[#D1C3B7]">Educational Scope & Limitation Notice:</strong> Insight Ignite content, courses, and educational frameworks authored by Dr. Nivedita Ganguli are intended solely for personal developmental learning, family mentorship, and pedagogical support. They do not constitute a medical, psychiatric, or psychological diagnosis, treatment plan, or therapy. If you or a child are experiencing an acute mental health crisis, please consult an emergency healthcare provider or licensed medical practitioner immediately.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[#3D3026]">
            <p>© 2026 {siteConfig.name} — {siteConfig.author}. All rights reserved.</p>
            <div className="flex items-center gap-6 text-[11px]">
              <a href="#privacy" className="hover:text-white transition-colors">Privacy</a>
              <a href="#terms" className="hover:text-white transition-colors">Terms</a>
              <a href="#refund" className="hover:text-white transition-colors">Refunds</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
