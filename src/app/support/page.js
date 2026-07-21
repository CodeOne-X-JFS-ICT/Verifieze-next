import Navbar from "@/components/Navbar";
import React from "react";
import { ArrowRight, Briefcase, User } from "lucide-react";

function page() {
  return (
    <>
      <Navbar />

      <section className="relative overflow-hidden py-24 bg-gray-50">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center">Get In Touch With Support</h1>
        <div className="container mx-auto px-4 flex justify-center">
          <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-12">
            {/* Business Customer Card */}
            <div className="relative group w-full md:w-1/2 max-w-md">
              {/* Outer Rotated Card */}
              <div className="h-full bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)] rounded-3xl p-8 transform rotate-3 group-hover:rotate-6 transition-all duration-300 shadow-2xl">
                {/* Inner Card */}
                <div className="h-full bg-white rounded-2xl p-8 -rotate-3 flex flex-col gap-4 text-center transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-[var(--color-primary-light)] flex items-center justify-center text-[var(--color-primary)] mx-auto">
                    <Briefcase className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    For Existing Business Customers
                  </h2>
                  <p className="text-gray-600 text-base leading-relaxed">
                    I'm a business and have questions about my existing
                    VERIFIEZE account.
                  </p>
                  <button className="mt-auto inline-flex items-center justify-center gap-2 px-5 py-3 text-white font-semibold bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] rounded-lg transition-all shadow-md hover:shadow-lg">
                    Get Customer Support
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Candidate Card */}
            <div className="relative group w-full md:w-1/2 max-w-md">
              {/* Outer Rotated Card */}
              <div className="h-full bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)] rounded-3xl p-8 transform -rotate-3 group-hover:-rotate-6 transition-all duration-300 shadow-2xl">
                {/* Inner Card */}
                <div className="h-full bg-white rounded-2xl p-8 rotate-3 flex flex-col gap-4 text-center transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-[var(--color-primary-light)] flex items-center justify-center text-[var(--color-primary)] mx-auto">
                    <User className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    For Candidates
                  </h2>
                  <p className="text-gray-600 text-base leading-relaxed">
                    I'm a candidate with questions about my background check.
                  </p>
                  <button className="mt-auto inline-flex items-center justify-center gap-2 px-5 py-3 text-white font-semibold bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] rounded-lg transition-all shadow-md hover:shadow-lg">
                    Get Candidate Support
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default page;
