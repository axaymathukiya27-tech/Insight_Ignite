import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Admin Portal — Insight Ignite",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col bg-[#F6F4F0] text-[#2D241E]">
      {/* Admin Header */}
      <header className="sticky top-0 z-40 bg-[#2D241E] text-white border-b border-[#40342B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="/admin" className="flex items-center gap-2">
              <span className="font-serif text-lg font-bold text-white">
                Insight Ignite
              </span>
              <span className="px-2 py-0.5 rounded-full bg-[#8C5E42] text-[10px] font-bold uppercase tracking-wider text-white">
                Admin Console
              </span>
            </Link>

            <nav className="hidden md:flex items-center gap-2 text-xs font-medium text-white/80">
              <Link
                href="/admin"
                className="px-3 py-1.5 rounded-lg hover:text-white hover:bg-white/10 transition-colors"
              >
                Overview
              </Link>
              <Link
                href="/admin/courses"
                className="px-3 py-1.5 rounded-lg hover:text-white hover:bg-white/10 transition-colors"
              >
                Courses
              </Link>
              <Link
                href="/admin/users"
                className="px-3 py-1.5 rounded-lg hover:text-white hover:bg-white/10 transition-colors"
              >
                Users & Learners
              </Link>
              <Link
                href="/admin/orders"
                className="px-3 py-1.5 rounded-lg hover:text-white hover:bg-white/10 transition-colors"
              >
                Orders & Invoices
              </Link>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="text-xs text-white/70 hover:text-white transition-colors"
            >
              Public Site &rarr;
            </Link>
            <div className="w-8 h-8 rounded-full bg-[#8C5E42] flex items-center justify-center text-xs font-bold text-white">
              A
            </div>
          </div>
        </div>
      </header>

      {/* Main Admin Content */}
      <div className="flex-grow">{children}</div>
    </div>
  );
}
