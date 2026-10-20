"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [notice, setNotice] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setNotice(
      "Frontend UI Preview: Transactional email delivery and expiring reset token generation connect in Phase 3. No email has been dispatched yet."
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
                Reset Password
              </h1>
              <p className="text-xs sm:text-sm text-[#6B5A4E]">
                Enter your account email and we&apos;ll send you instructions to reset your password once email services are configured.
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

              <Button type="submit" variant="primary" className="w-full justify-center">
                Send Reset Link
              </Button>
            </form>

            <div className="pt-4 border-t border-[#EFE8DF] text-center text-xs text-[#6B5A4E]">
              Remember your password?{" "}
              <Link
                href="/login"
                className="font-bold text-[#8C5E42] hover:text-[#724B34] underline"
              >
                Sign In
              </Link>
            </div>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
}
