"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

export default function RegisterPage() {
  const [role, setRole] = useState("parent");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [notice, setNotice] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setNotice("Passwords do not match. Please verify.");
      return;
    }
    if (!agreeTerms) {
      setNotice("Please accept the terms of service and privacy notice to continue.");
      return;
    }
    setNotice(
      "Frontend UI Preview: Account creation flow is configured for Phase 3 backend integration. Your registration has not been submitted."
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#2D241E]">
      <Navbar />

      <main className="flex-grow flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-lg">
          <Card className="p-8 sm:p-10 space-y-6">
            <div className="text-center space-y-2">
              <span className="inline-block px-3 py-1 rounded-full bg-[#FAF5EE] text-[#8C5E42] text-xs font-semibold uppercase tracking-wider">
                Join Insight Ignite
              </span>
              <h1 className="font-serif text-3xl font-bold text-[#2D241E]">
                Create Your Account
              </h1>
              <p className="text-xs sm:text-sm text-[#6B5A4E]">
                Begin your journey with evidence-informed mentorship and conscious parenting courses.
              </p>
            </div>

            {notice && (
              <div className="p-3.5 rounded-xl bg-[#FAF5EE] border border-[#E2D5C7] text-xs text-[#6B4B36] leading-relaxed">
                {notice}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Role Selection */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#5C4D42] mb-2">
                  I am registering as a
                </label>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  {[
                    { id: "parent", label: "Parent / Caregiver" },
                    { id: "educator", label: "Educator / Teacher" },
                    { id: "mentor", label: "Youth Mentor" },
                    { id: "corporate", label: "Corporate Professional" },
                  ].map((item) => (
                    <button
                      type="button"
                      key={item.id}
                      onClick={() => setRole(item.id)}
                      className={`p-2.5 rounded-xl border text-center font-medium transition-all ${
                        role === item.id
                          ? "border-[#8C5E42] bg-[#FAF5EE] text-[#8C5E42] font-semibold"
                          : "border-[#E4D8CD] bg-white text-[#5C4D42] hover:bg-[#FAF8F5]"
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label
                  htmlFor="name"
                  className="block text-xs font-bold uppercase tracking-wider text-[#5C4D42] mb-1.5"
                >
                  Full Name *
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your full legal or preferred name"
                  className="w-full px-4 py-2.5 rounded-xl border border-[#DCD0C4] bg-[#FAF8F5] text-sm text-[#2D241E] focus:outline-none focus:ring-2 focus:ring-[#8C5E42]/50"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-bold uppercase tracking-wider text-[#5C4D42] mb-1.5"
                >
                  Email Address *
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

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="password"
                    className="block text-xs font-bold uppercase tracking-wider text-[#5C4D42] mb-1.5"
                  >
                    Password *
                  </label>
                  <input
                    id="password"
                    type="password"
                    required
                    minLength={8}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Min 8 characters"
                    className="w-full px-4 py-2.5 rounded-xl border border-[#DCD0C4] bg-[#FAF8F5] text-sm text-[#2D241E] focus:outline-none focus:ring-2 focus:ring-[#8C5E42]/50"
                  />
                </div>

                <div>
                  <label
                    htmlFor="confirmPassword"
                    className="block text-xs font-bold uppercase tracking-wider text-[#5C4D42] mb-1.5"
                  >
                    Confirm Password *
                  </label>
                  <input
                    id="confirmPassword"
                    type="password"
                    required
                    minLength={8}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Repeat password"
                    className="w-full px-4 py-2.5 rounded-xl border border-[#DCD0C4] bg-[#FAF8F5] text-sm text-[#2D241E] focus:outline-none focus:ring-2 focus:ring-[#8C5E42]/50"
                  />
                </div>
              </div>

              <div className="flex items-start gap-2.5 text-xs text-[#5C4D42] pt-1">
                <input
                  id="terms"
                  type="checkbox"
                  checked={agreeTerms}
                  onChange={(e) => setAgreeTerms(e.target.checked)}
                  className="mt-0.5 rounded border-[#C8B8AA] text-[#8C5E42] focus:ring-[#8C5E42]"
                />
                <label htmlFor="terms" className="leading-snug">
                  I agree to the{" "}
                  <Link href="/terms" className="text-[#8C5E42] underline">
                    Terms of Service
                  </Link>{" "}
                  and acknowledge the{" "}
                  <Link href="/privacy" className="text-[#8C5E42] underline">
                    Privacy Policy
                  </Link>
                  .
                </label>
              </div>

              <Button type="submit" variant="primary" className="w-full justify-center">
                Register Account
              </Button>
            </form>

            <div className="pt-4 border-t border-[#EFE8DF] text-center text-xs text-[#6B5A4E]">
              Already registered?{" "}
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
