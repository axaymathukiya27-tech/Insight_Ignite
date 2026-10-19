"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#2D241E]">
      <Navbar />

      <main className="flex-grow flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E3D8CC] shadow-md space-y-6">
            <div className="text-center space-y-2">
              <span className="inline-block px-3 py-1 rounded-full bg-[#FAF5EE] text-[#8C5E42] text-xs font-semibold uppercase tracking-wider">
                Account Recovery
              </span>
              <h1 className="font-serif text-3xl font-bold text-[#2D241E]">
                Reset Password
              </h1>
              <p className="text-xs sm:text-sm text-[#6B5A4E]">
                Enter your account email and we&apos;ll send you instructions to reset your password.
              </p>
            </div>

            {submitted ? (
              <div className="p-4 rounded-2xl bg-[#FAF5EE] border border-[#E3D8CC] text-center space-y-3">
                <div className="w-10 h-10 mx-auto rounded-full bg-[#EAE2D8] flex items-center justify-center text-[#8C5E42] font-bold">
                  ✓
                </div>
                <h4 className="font-serif font-bold text-[#2D241E]">
                  Recovery Email Dispatched
                </h4>
                <p className="text-xs text-[#5C4D42] leading-relaxed">
                  If an account exists for <strong className="text-[#2D241E]">{email}</strong>, you will receive password reset instructions within moments.
                </p>
                <div className="pt-2">
                  <Link
                    href="/login"
                    className="inline-block px-5 py-2 rounded-full bg-[#8C5E42] text-[#FDFBF7] font-semibold text-xs hover:bg-[#724B34] transition-colors"
                  >
                    Back to Sign In
                  </Link>
                </div>
              </div>
            ) : (
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

                <button
                  type="submit"
                  className="w-full py-3 rounded-full bg-[#8C5E42] text-[#FDFBF7] font-bold text-sm hover:bg-[#724B34] transition-colors shadow-sm"
                >
                  Send Reset Link
                </button>
              </form>
            )}

            <div className="pt-4 border-t border-[#EFE8DF] text-center text-xs text-[#6B5A4E]">
              Remember your password?{" "}
              <Link
                href="/login"
                className="font-bold text-[#8C5E42] hover:text-[#724B34] underline"
              >
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
