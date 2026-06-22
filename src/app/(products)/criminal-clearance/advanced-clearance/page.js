"use client";
import CTA_Buttons from "@/components/CTA_Buttons";
import Navbar from "@/components/Navbar";
import React from "react";
import { motion } from "framer-motion";
import { containerVariants } from "@/animations/variants";
import FeatureCard from "@/components/FeatureCard";
import {
  ShieldAlert,
  Building2,
  UsersRound,
  CheckCircle,
  FileSearch,
  LockKeyhole
} from "lucide-react";

function AdvancedClearancePage() {
  return (
    <>
      <Navbar />
      {/* Hero section */}
      <section className="relative bg-[color:var(--color-primary-light)] overflow-hidden">
        <div
          className="absolute inset-0 bg-[url('/images/Basic-police-clearence.jpg')] bg-cover bg-center opacity-15"
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-[var(--color-primary-dark)] opacity-20"></div>
        </div>

        <div className="container mx-auto px-4 py-20 md:py-28 lg:py-32 text-center relative z-10">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Advanced Criminal Record
            <br />
            <span className="text-[var(--color-primary)]">
              Verification
            </span>
          </h1>

          <p className="text-xl mb-8 text-gray-600 max-w-3xl mx-auto">
            When hiring for high-stakes leadership, sensitive financial positions, or roles requiring maximum regulatory compliance, basic background checks are not enough. VERIFIEZE's Advanced Criminal Record Verification offers an uncompromised, definitive security audit.
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

      {/* Why Advanced Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              The <span className="text-[var(--color-primary)]">Ultimate</span> Tier of Risk Mitigation
            </h2>
            <div className="bg-gradient-to-r from-gray-50 to-[var(--color-primary-light)] rounded-2xl p-8 border border-gray-100 shadow-sm">
              <p className="text-xl text-gray-800 leading-relaxed font-medium">
                By combining verified grassroots residency data with definitive federal law enforcement records, this service gives your organization ensuring complete workforce safety, corporate integrity, and protection against high-level corporate liabilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Scope Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Product <span className="text-[var(--color-primary)]">Scope</span>
            </h2>
            <p className="text-xl text-gray-600">
              This elite screening package provides a rigorous, multi-layered criminal background check that leaves no stone unturned:
            </p>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          >
            {/* Scope 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-[var(--color-primary-dark)] flex flex-col h-full">
              <div className="w-14 h-14 bg-[var(--color-primary-light)] rounded-xl flex items-center justify-center mb-6">
                <ShieldAlert className="w-7 h-7 text-[var(--color-primary-dark)]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Police Headquarters Authentication</h3>
              <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
                Unlike basic localized checks, this service mandates that the candidate obtain a valid, official Police Clearance Certificate directly from the National Police Headquarters. Once issued, we conduct an official validation check with law enforcement channels to guarantee its absolute legitimacy and accuracy.
              </p>
            </div>

            {/* Scope 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-[var(--color-primary)] flex flex-col h-full">
              <div className="w-14 h-14 bg-[var(--color-primary-light)] rounded-xl flex items-center justify-center mb-6">
                <Building2 className="w-7 h-7 text-[var(--color-primary)]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Comprehensive GS Integration</h3>
              <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
                To ensure full geographic and community-level tracking, this service seamlessly integrates a verified Grama Niladhari character and residency report. We validate the local officer's findings to ensure the candidate has a completely clean, undisputed standing at the grassroots level.
              </p>
            </div>

            {/* Scope 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-gray-800 flex flex-col h-full">
              <div className="w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center mb-6">
                <UsersRound className="w-7 h-7 text-gray-800" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Executive Risk Mitigation</h3>
              <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
                Highly recommended for C-suite executives, directors, treasury managers, and employees handling sensitive intellectual property or high-value corporate assets. Ensure your leadership team meets the highest standards of integrity.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-[var(--color-primary-light)]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready for an Uncompromised{" "}
              <span className="text-[var(--color-primary)]">Security Audit</span>?
            </h2>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              Secure your high-stakes roles with the ultimate tier of criminal record verification and risk mitigation.
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

export default AdvancedClearancePage;
