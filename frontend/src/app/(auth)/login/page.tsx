"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [notice, setNotice] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setNotice(
      "Frontend UI Preview: Authentication service integration is scheduled for Phase 1 deployment. Your credentials have not been sent."
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#2D241E]">
      <Navbar />

      <main className="flex-grow flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md">
          {/* Card */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E3D8CC] shadow-md space-y-6">
            <div className="text-center space-y-2">
              <span className="inline-block px-3 py-1 rounded-full bg-[#FAF5EE] text-[#8C5E42] text-xs font-semibold uppercase tracking-wider">
                Learner Portal
              </span>
              <h1 className="font-serif text-3xl font-bold text-[#2D241E]">
                Welcome Back
              </h1>
              <p className="text-xs sm:text-sm text-[#6B5A4E]">
                Log in to access your courses, journals, and progress.
              </p>
            </div>

            {notice && (
              <div className="p-3.5 rounded-xl bg-[#FAF5EE] border border-[#E2D5C7] text-xs text-[#6B4B36] leading-relaxed">
                {notice}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-bold uppercase tracking-wider text-[#5C4D42] mb-1.5"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  className="w-full px-4 py-2.5 rounded-xl border border-[#DCD0C4] bg-[#FAF8F5] text-sm text-[#2D241E] focus:outline-none focus:ring-2 focus:ring-[#8C5E42]/50"
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label
                    htmlFor="password"
                    className="block text-xs font-bold uppercase tracking-wider text-[#5C4D42]"
                  >
                    Password
                  </label>
                  <Link
                    href="/forgot-password"
                    className="text-xs font-semibold text-[#8C5E42] hover:text-[#724B34] transition-colors"
                  >
                    Forgot Password?
                  </Link>
                </div>
                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    className="w-full px-4 py-2.5 rounded-xl border border-[#DCD0C4] bg-[#FAF8F5] text-sm text-[#2D241E] focus:outline-none focus:ring-2 focus:ring-[#8C5E42]/50"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#7B6A5F] hover:text-[#2D241E]"
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-full bg-[#8C5E42] text-[#FDFBF7] font-bold text-sm hover:bg-[#724B34] transition-colors shadow-sm"
              >
                Sign In
              </button>
            </form>

            <div className="pt-4 border-t border-[#EFE8DF] text-center text-xs text-[#6B5A4E]">
              Don&apos;t have an account yet?{" "}
              <Link
                href="/register"
                className="font-bold text-[#8C5E42] hover:text-[#724B34] underline"
              >
                Create Account
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
