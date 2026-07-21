"use client";
import Navbar from "@/components/Navbar";
import {
  BadgeCheck,
  Briefcase,
  CheckCircle,
  FileSearch,
  FileText,
  Fingerprint,
  Home,
  MapPin,
  ShieldAlert,
  ShieldCheck,
  Truck,
} from "lucide-react";

import React from "react";
import Image from "next/image";
import CTA_Buttons from "@/components/CTA_Buttons";
import Link from "next/link";
import { motion } from "framer-motion";
import { containerVariants } from "@/animations/variants";
import FeatureCard from "@/components/FeatureCard";

function AddressVelificationPage() {
  return (
    <>
      <Navbar />

      {/* Hero section */}

      <section className="relative bg-[color:var(--color-primary-light)] overflow-hidden">
        <div
          className="absolute inset-0 bg-[url('/images/map.jpg')] bg-cover bg-center opacity-20"
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-[var(--color-primary)] opacity-20"></div>
        </div>

        {/* <div
          className="absolute inset-0 opacity-20"
          style={{
            background:
              "linear-gradient(135deg, var(--color-primary) 0%, transparent 100%)",
          }}
        ></div> */}

        <div className="container mx-auto px-4 py-20 md:py-28 lg:py-32 text-center relative z-10">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Your First Line of Defense Against
            <br />
            <span className="text-[var(--color-primary)]">
              Identity Theft & Payroll Fraud
            </span>
          </h1>

          <p className="text-xl mb-8 text-gray-600">
            In an era of hybrid setups and remote onboarding, VERIFIEZE's Address Verification service authenticates a candidate's true geographic footprint — giving you a secure foundation for corporate compliance, legal accountability, and risk management.
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

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Address{" "}
              <span className="text-[var(--color-primary)]">
                Verification
              </span>
            </h2>
            <p className="text-lg text-gray-600">
              Ensuring your employee records are 100% accurate is critical in today's hybrid and remote onboarding environment. We verify either the candidate's current residential address or their permanent address to match your specific risk management needs.
            </p>
          </div>

          {/* Use Cases Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {/* Identity Theft */}
            <FeatureCard
              icon={Fingerprint}
              title="Prevent Identity Theft"
              description="Authenticate a candidate's true geographic footprint to guard against synthetic identities."
            />

            {/* Payroll Fraud */}
            <FeatureCard
              icon={ShieldCheck}
              title="Stop Payroll Fraud"
              description="Ensure employee records are accurate and prevent fraudulent payroll claims from fictitious addresses."
            />

            {/* Corporate Compliance */}
            <FeatureCard
              icon={FileSearch}
              title="Corporate Compliance"
              description="Build a secure foundation for corporate compliance, legal accountability, and risk management."
            />

            {/* Current or Permanent */}
            <FeatureCard
              icon={BadgeCheck}
              title="Current or Permanent Address"
              description="Choose to verify the candidate's current residential address or their permanent address based on your needs."
            />
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Two Distinct{" "}
              <span className="text-[var(--color-primary)]">
                Verification Options
              </span>
            </h2>
            <p className="text-lg text-gray-600">
              Choose the option that aligns with your risk management requirements — swift data-driven or thorough on-site verification.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Option 1 */}
            <div className="flex-1 bg-white rounded-2xl shadow-lg p-8 border-t-4 border-[var(--color-primary)]">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-[var(--color-primary)] rounded-full flex items-center justify-center text-white font-bold text-lg">1</div>
                <h3 className="text-2xl font-bold text-gray-900">Record Verification</h3>
              </div>
              <p className="text-gray-600 mb-6 text-base leading-relaxed">
                A swift, data-driven audit that cross-checks and authenticates the candidate's address against a minimum of two highly reliable government sources, including official records and other authoritative state databases.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="bg-[var(--color-primary-light)] p-1.5 rounded-full mt-0.5">
                    <ShieldAlert className="w-4 h-4 text-[var(--color-primary)]" />
                  </div>
                  <span className="text-gray-700">Minimum two government sources cross-checked</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-[var(--color-primary-light)] p-1.5 rounded-full mt-0.5">
                    <FileText className="w-4 h-4 text-[var(--color-primary)]" />
                  </div>
                  <span className="text-gray-700">Official records and authoritative state databases</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-[var(--color-primary-light)] p-1.5 rounded-full mt-0.5">
                    <CheckCircle className="w-4 h-4 text-[var(--color-primary)]" />
                  </div>
                  <span className="text-gray-700">Fast turnaround — ideal for high-volume screening</span>
                </li>
              </ul>
            </div>

            {/* Option 2 */}
            <div className="flex-1 bg-white rounded-2xl shadow-lg p-8 border-t-4 border-[var(--color-primary-dark)]">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-[var(--color-primary-dark)] rounded-full flex items-center justify-center text-white font-bold text-lg">2</div>
                <h3 className="text-2xl font-bold text-gray-900">Physical Verification</h3>
              </div>
              <p className="text-gray-600 mb-6 text-base leading-relaxed">
                An on-site field audit where a professional agent physically visits the location to confirm residency and local standing. The most thorough form of address verification available.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="bg-[var(--color-primary-light)] p-1.5 rounded-full mt-0.5">
                    <MapPin className="w-4 h-4 text-[var(--color-primary)]" />
                  </div>
                  <span className="text-gray-700">Professional agent physically visits the location</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-[var(--color-primary-light)] p-1.5 rounded-full mt-0.5">
                    <Home className="w-4 h-4 text-[var(--color-primary)]" />
                  </div>
                  <span className="text-gray-700">Confirms residency and local community standing</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-[var(--color-primary-light)] p-1.5 rounded-full mt-0.5">
                    <Truck className="w-4 h-4 text-[var(--color-primary)]" />
                  </div>
                  <span className="text-gray-700">Fully available across the Western Province (WP)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left Column - Image */}
            <div className="lg:w-1/2">
              <div className="relative rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/images/Address Checks.jpg"
                  alt="Address verification coverage"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Right Column - Coverage */}
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Coverage &{" "}
                <span className="text-[var(--color-primary)]">
                  Geographic Scope
                </span>
              </h2>
              <p className="text-gray-600 text-lg mb-8">
                Physical Verification is fully available across the Western Province (WP). Custom coverage and pricing for other provinces is provided upon request.
              </p>

              <div className="space-y-6">
                {/* Western Province */}
                <div className="flex items-start gap-4">
                  <div className="bg-[var(--color-primary-light)] p-2 rounded-full">
                    <MapPin className="w-5 h-5 text-[var(--color-primary)]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold flex items-center gap-2">
                      Western Province — Fully Covered
                      <CheckCircle className="w-5 h-5 text-[var(--color-success)]" />
                    </h3>
                    <p className="text-gray-600 mt-2">
                      Full physical verification coverage across Colombo, Gampaha, and Kalutara districts.
                    </p>
                  </div>
                </div>

                {/* Other Provinces */}
                <div className="flex items-start gap-4">
                  <div className="bg-[var(--color-primary-light)] p-2 rounded-full">
                    <Truck className="w-5 h-5 text-[var(--color-primary)]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold flex items-center gap-2">
                      Other Provinces — On Request
                      <CheckCircle className="w-5 h-5 text-[var(--color-success)]" />
                    </h3>
                    <p className="text-gray-600 mt-2">
                      Custom coverage and pricing for all other provinces provided upon request.
                    </p>
                  </div>
                </div>

                {/* Record Verification */}
                <div className="flex items-start gap-4">
                  <div className="bg-[var(--color-primary-light)] p-2 rounded-full">
                    <Home className="w-5 h-5 text-[var(--color-primary)]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold flex items-center gap-2">
                      Record Verification — Nationwide
                      <CheckCircle className="w-5 h-5 text-[var(--color-success)]" />
                    </h3>
                    <p className="text-gray-600 mt-2">
                      Data-driven record checks available for addresses nationwide via official government databases.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[var(--color-primary-light)]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            {/* Trust Badges */}
            {/* <div className="flex flex-wrap justify-center gap-6 mb-8">
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>ISO 27001 Certified</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <ShieldCheck className="w-5 h-5 text-[var(--color-primary)]" />
                <span>GDPR & DPA 2022 Compliant</span>
              </div>
            </div> */}

            {/* Main CTA */}
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to Streamline Your Address Verification?
            </h2>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              Start verifying residential, business, and utility addresses with
              ease and confidence using VERIFIEZE.
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

export default AddressVelificationPage;
