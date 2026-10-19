import React from "react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Verify Your Email — Insight Ignite",
  description: "Email verification notice and instructions for Insight Ignite learners.",
};

export default function VerifyEmailPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#2D241E]">
      <Navbar />

      <main className="flex-grow flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E3D8CC] shadow-md text-center space-y-6">
            <div className="w-16 h-16 mx-auto rounded-full bg-[#FAF0E6] flex items-center justify-center text-[#8C5E42] text-2xl font-bold">
              ✉
            </div>

            <div className="space-y-2">
              <span className="inline-block px-3 py-1 rounded-full bg-[#FAF5EE] text-[#8C5E42] text-xs font-semibold uppercase tracking-wider">
                Account Activation
              </span>
              <h1 className="font-serif text-3xl font-bold text-[#2D241E]">
                Verify Your Email
              </h1>
              <p className="text-sm text-[#5C4D42] leading-relaxed">
                We have sent an activation link to your registered email address. Please click the link inside that email to confirm your account and begin your learning path.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#FAF5EE] border border-[#E4D8CB] text-xs text-[#6B5A4E] text-left space-y-2">
              <p className="font-semibold text-[#2D241E]">Didn&apos;t receive the email?</p>
              <ul className="list-disc pl-4 space-y-1">
                <li>Check your spam or promotions folder.</li>
                <li>Ensure you typed the correct email address during sign-up.</li>
                <li>Wait 2-3 minutes for the delivery server to complete transmission.</li>
              </ul>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <Link
                href="/login"
                className="w-full py-2.5 rounded-full bg-[#8C5E42] text-[#FDFBF7] font-bold text-sm hover:bg-[#724B34] transition-colors text-center"
              >
                Return to Login
              </Link>
              <Link
                href="/contact"
                className="w-full py-2.5 rounded-full border border-[#D5C6B5] text-[#4A3C32] font-semibold text-sm hover:bg-[#F2ECE4] transition-colors text-center"
              >
                Need Help?
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
