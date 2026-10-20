"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

export default function ResetPasswordPage() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [notice, setNotice] = useState<string | null>(null);
  const [fieldError, setFieldError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFieldError(null);

    if (password.length < 8) {
      setFieldError("Password must be at least 8 characters in length.");
      return;
    }

    if (password !== confirmPassword) {
      setFieldError("Passwords do not match. Please verify.");
      return;
    }

    setNotice(
      "Frontend UI Preview: Single-use password-reset token validation and password hashing are scheduled for Phase 3 backend integration. Your new credentials have not been modified."
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#2D241E]">
      <Navbar />

      <main className="flex-grow flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md">
          <Card className="p-8 sm:p-10 space-y-6">
            <div className="text-center space-y-2">
              <span className="inline-block px-3 py-1 rounded-full bg-[#FAF5EE] text-[#8C5E42] text-xs font-semibold uppercase tracking-wider">
                Account Recovery
              </span>
              <h1 className="font-serif text-3xl font-bold text-[#2D241E]">
                Set New Password
              </h1>
              <p className="text-xs sm:text-sm text-[#6B5A4E]">
                Please enter a secure password for your Insight Ignite learner account.
              </p>
            </div>

            {notice && (
              <div
                role="status"
                className="p-3.5 rounded-xl bg-[#FAF5EE] border border-[#E2D5C7] text-xs text-[#6B4B36] leading-relaxed"
              >
                {notice}
              </div>
            )}

            {fieldError && (
              <div
                role="alert"
                className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-xs text-red-700 leading-relaxed"
              >
                {fieldError}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="password"
                  className="block text-xs font-bold uppercase tracking-wider text-[#5C4D42] mb-1.5"
                >
                  New Password
                </label>
                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    required
                    minLength={8}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Minimum 8 characters"
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

              <div>
                <label
                  htmlFor="confirmPassword"
                  className="block text-xs font-bold uppercase tracking-wider text-[#5C4D42] mb-1.5"
                >
                  Confirm New Password
                </label>
                <input
                  id="confirmPassword"
                  type={showPassword ? "text" : "password"}
                  required
                  minLength={8}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Re-enter your password"
                  className="w-full px-4 py-2.5 rounded-xl border border-[#DCD0C4] bg-[#FAF8F5] text-sm text-[#2D241E] focus:outline-none focus:ring-2 focus:ring-[#8C5E42]/50"
                />
              </div>

              <Button type="submit" variant="primary" className="w-full justify-center">
                Update Password
              </Button>
            </form>

            <div className="pt-4 border-t border-[#EFE8DF] text-center text-xs text-[#6B5A4E]">
              Remember your password?{" "}
              <Link
                href="/login"
                className="font-bold text-[#8C5E42] hover:text-[#724B34] underline"
              >
                Back to Sign In
              </Link>
            </div>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
}
