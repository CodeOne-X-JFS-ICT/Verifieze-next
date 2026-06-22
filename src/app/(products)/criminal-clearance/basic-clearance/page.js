"use client";
import CTA_Buttons from "@/components/CTA_Buttons";
import Navbar from "@/components/Navbar";
import React from "react";
import { motion } from "framer-motion";
import { containerVariants } from "@/animations/variants";
import FeatureCard from "@/components/FeatureCard";
import {
  ShieldCheck,
  FileCheck,
  Building,
  UserCheck,
  Search,
  CheckCircle,
  Briefcase
} from "lucide-react";

function BasicClearancePage() {
  return (
    <>
      <Navbar />
      {/* Hero section */}
      <section className="relative bg-[color:var(--color-primary-light)] overflow-hidden">
        <div
          className="absolute inset-0 bg-[url('/images/Basic-police-clearence.jpg')] bg-cover bg-center opacity-15"
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-[var(--color-primary)] opacity-10"></div>
        </div>

        <div className="container mx-auto px-4 py-20 md:py-28 lg:py-32 text-center relative z-10">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Basic Criminal Record
            <br />
            <span className="text-[var(--color-primary)]">
              Verification
            </span>
          </h1>

          <p className="text-xl mb-8 text-gray-600 max-w-3xl mx-auto">
            Safeguard your workplace, protect your company culture, and hire with total peace of mind. VERIFIEZE offers a Basic Criminal Record Verification which combines community-level insights with official law enforcement data to deliver an airtight profile of your candidate's integrity.
          </p>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <CTA_Buttons
              primaryText="Start Verifying"
              primaryHref="/contact"
              secondaryText="Talk to Sales"
              secondaryHref="/contact"
            />
          </div>
        </div>
      </section>

      {/* Proactive Approach Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              A <span className="text-[var(--color-primary)]">Proactive</span> Approach
            </h2>
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 shadow-sm">
              <p className="text-xl text-gray-700 leading-relaxed font-medium">
                We don't just wait for paperwork; our proactive team actively guides candidates through the process to ensure your onboarding timeline never stalls.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Dual-Layered Screening Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Robust <span className="text-[var(--color-primary)]">Dual-Layered</span> Screening
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive verification combining local administrative insights and law enforcement records.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Layer 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-[var(--color-primary)]">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-[var(--color-primary)] rounded-full flex items-center justify-center text-white font-bold text-xl">1</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Basic GS Verification</h3>
                  <span className="text-sm text-[var(--color-primary)] font-medium">Grama Niladhari Level</span>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed mb-6">
                Provides essential grassroots verification through Sri Lanka's local administrative system to confirm residential standing and local character.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="bg-[var(--color-primary-light)] p-1.5 rounded-full mt-0.5">
                    <Building className="w-4 h-4 text-[var(--color-primary)]" />
                  </div>
                  <span className="text-gray-700">Confirms residential standing</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-[var(--color-primary-light)] p-1.5 rounded-full mt-0.5">
                    <UserCheck className="w-4 h-4 text-[var(--color-primary)]" />
                  </div>
                  <span className="text-gray-700">Validates local character through administrative channels</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-[var(--color-primary-light)] p-1.5 rounded-full mt-0.5">
                    <Search className="w-4 h-4 text-[var(--color-primary)]" />
                  </div>
                  <span className="text-gray-700">Grassroots-level insights</span>
                </li>
              </ul>
            </div>

            {/* Layer 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-[var(--color-primary-dark)]">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-[var(--color-primary-dark)] rounded-full flex items-center justify-center text-white font-bold text-xl">2</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Basic Police Clearance</h3>
                  <span className="text-sm font-medium" style={{color: 'var(--color-primary-dark)'}}>Certificate Validation</span>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed mb-6">
                The gold standard for corporate compliance and background security. We authenticate official, basic Police Clearance Certificates (issued within 12 months) directly with law enforcement to guarantee the document's legitimacy.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="bg-[var(--color-primary-light)] p-1.5 rounded-full mt-0.5">
                    <ShieldCheck className="w-4 h-4 text-[var(--color-primary)]" />
                  </div>
                  <span className="text-gray-700">Gold standard for corporate compliance</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-[var(--color-primary-light)] p-1.5 rounded-full mt-0.5">
                    <FileCheck className="w-4 h-4 text-[var(--color-primary)]" />
                  </div>
                  <span className="text-gray-700">Authenticates certificates issued within 12 months</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-[var(--color-primary-light)] p-1.5 rounded-full mt-0.5">
                    <CheckCircle className="w-4 h-4 text-[var(--color-primary)]" />
                  </div>
                  <span className="text-gray-700">Direct validation with law enforcement agencies</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-[var(--color-primary-light)]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Hire with Total{" "}
              <span className="text-[var(--color-primary)]">Peace of Mind</span>
            </h2>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              Protect your company culture and secure your workplace with our comprehensive Basic Criminal Record Verification.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <CTA_Buttons
                primaryText="Start Verifying"
                primaryHref="/contact"
                secondaryText="Talk to Sales"
                secondaryHref="/contact"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default BasicClearancePage;
