"use client";
import Navbar from "@/components/Navbar";
import {
  BadgeCheck,
  BookOpen,
  CheckCircle,
  FileSearch,
  FileText,
  GraduationCap,
  School,
  ShieldAlert,
  ShieldCheck,
  Users,
  Award,
  Calendar,
  User,
  Globe,
  Building,
} from "lucide-react";

import React from "react";
import Image from "next/image";
import CTA_Buttons from "@/components/CTA_Buttons";
import Link from "next/link";
import { motion } from "framer-motion";
import { containerVariants } from "@/animations/variants";
import FeatureCard from "@/components/FeatureCard";

function EducationVerificationPage() {
  return (
    <>
      <Navbar />

      {/* Hero section */}
      <section className="relative bg-[color:var(--color-primary-light)] overflow-hidden">
        <div
          className="absolute inset-0 bg-[url('/images/education-bg.jpg')] bg-cover bg-center opacity-20"
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-[var(--color-primary)] opacity-20"></div>
        </div>

        <div className="container mx-auto px-4 py-20 md:py-28 lg:py-32 text-center relative z-10">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Foundational School-Level
            <br />
            <span className="text-[var(--color-primary)]">
              Educational Verification
            </span>
          </h1>

          <p className="text-xl mb-8 text-gray-600 max-w-4xl mx-auto">
            Verify O/L and A/L results with confidence. VERIFIEZE ensures your potential employee is backed by authentic academic roots — proving their foundational dedication and intellectual competence from day one.
          </p>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <CTA_Buttons
              primaryText="Verify Now"
              primaryHref="/contact"
              secondaryText="Talk to an Expert"
              secondaryHref="/contact"
            />
          </div>
        </div>
      </section>

      {/* What is Education Verification Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Scope &{" "}
              <span className="text-[var(--color-primary)]">
                Coverage
              </span>
            </h2>
            <p className="text-lg text-gray-600">
              Verification of standard local secondary education achievements — specifically GCE Ordinary Level (O/L) and GCE Advanced Level (A/L) examination results — as well as equivalent international secondary school certifications (London/Cambridge O/Ls and A/Ls).
            </p>
          </div>

          {/* Use Cases Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {/* Management Trainees */}
            <FeatureCard
              icon={GraduationCap}
              title="Management Trainees & Entry-Level Talent"
              description="Critical for vetting management trainees and entry-level candidates to confirm foundational academic credentials."
            />

            {/* International Certs */}
            <FeatureCard
              icon={Globe}
              title="Local & International Certificates"
              description="Covers local O/L & A/L as well as equivalent Cambridge/London international secondary school certifications."
            />

            {/* Transparent Pricing */}
            <FeatureCard
              icon={BadgeCheck}
              title="100% Transparent Pricing"
              description="Fast, seamless processing with no hidden margins. Any official processing fees levied by the examination body are fully disclosed and reimbursed by the client."
            />
          </motion.div>
        </div>
      </section>

      {/* What We Verify Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left Column - Content */}
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                What We{" "}
                <span className="text-[var(--color-primary)]">
                  Verify
                </span>
              </h2>

              <div className="space-y-6">
                {/* Exam Type */}
                <div className="flex items-start gap-4">
                  <div className="bg-[var(--color-primary-light)] p-2 rounded-full">
                    <GraduationCap className="w-5 h-5 text-[var(--color-primary)]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold flex items-center gap-2">
                      Exam Type
                      <CheckCircle className="w-5 h-5 text-[var(--color-success)]" />
                    </h3>
                    <p className="text-gray-600 mt-2">
                      G.C.E. Ordinary Level (O/L) or Advanced Level (A/L) examination verification.
                    </p>
                  </div>
                </div>

                {/* Index Number & Year */}
                <div className="flex items-start gap-4">
                  <div className="bg-[var(--color-primary-light)] p-2 rounded-full">
                    <Calendar className="w-5 h-5 text-[var(--color-primary)]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold flex items-center gap-2">
                      Index Number & Year
                      <CheckCircle className="w-5 h-5 text-[var(--color-success)]" />
                    </h3>
                    <p className="text-gray-600 mt-2">
                      Verification of examination index number and year of examination.
                    </p>
                  </div>
                </div>

                {/* Subject Results */}
                <div className="flex items-start gap-4">
                  <div className="bg-[var(--color-primary-light)] p-2 rounded-full">
                    <Award className="w-5 h-5 text-[var(--color-primary)]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold flex items-center gap-2">
                      Subject-wise Results
                      <CheckCircle className="w-5 h-5 text-[var(--color-success)]" />
                    </h3>
                    <p className="text-gray-600 mt-2">
                      Detailed verification of grades obtained in each subject.
                    </p>
                  </div>
                </div>

                {/* Candidate Details */}
                <div className="flex items-start gap-4">
                  <div className="bg-[var(--color-primary-light)] p-2 rounded-full">
                    <User className="w-5 h-5 text-[var(--color-primary)]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold flex items-center gap-2">
                      Candidate Details
                      <CheckCircle className="w-5 h-5 text-[var(--color-success)]" />
                    </h3>
                    <p className="text-gray-600 mt-2">
                      Full name verification, examination medium, and school name validation.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="lg:w-1/2">
              <div className="relative rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/images/Education-Verification.png"
                  alt="Education verification process"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Verification Channel Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left Column - Image */}
            <div className="lg:w-1/2">
              <div className="relative rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/images/Academic-hero.jpg"
                  alt="Verification methods"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Validation{" "}
                <span className="text-[var(--color-primary)]">
                  Channel
                </span>
              </h2>
              <p className="text-gray-600 text-lg mb-8">
                Conducted cleanly and securely through authorized channels to confirm the authenticity of grades, index numbers, and examination years.
              </p>

              <div className="space-y-6">
                {/* Authorized Channels */}
                <div className="flex items-start gap-4">
                  <div className="bg-[var(--color-primary-light)] p-2 rounded-full">
                    <FileSearch className="w-5 h-5 text-[var(--color-primary)]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Authorized Channel Verification</h3>
                    <p className="text-gray-600 mt-1">
                      Direct verification via authorized examination departments and issuing bodies for maximum accuracy and security.
                    </p>
                  </div>
                </div>

                {/* Grades & Index */}
                <div className="flex items-start gap-4">
                  <div className="bg-[var(--color-primary-light)] p-2 rounded-full">
                    <Award className="w-5 h-5 text-[var(--color-primary)]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Grades, Index Numbers & Exam Years</h3>
                    <p className="text-gray-600 mt-1">
                      Thorough confirmation of subject grades, examination index numbers, and the year of examination.
                    </p>
                  </div>
                </div>

                {/* Transparent Fees */}
                <div className="flex items-start gap-4">
                  <div className="bg-[var(--color-primary-light)] p-2 rounded-full">
                    <CheckCircle className="w-5 h-5 text-[var(--color-primary)]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Fully Transparent Fee Structure</h3>
                    <p className="text-gray-600 mt-1">
                      Any official processing fees or administrative charges levied by the examination department or issuing body are fully disclosed — with no hidden margins.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Supported Institutions Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Supported{" "}
              <span className="text-[var(--color-primary)]">
                Institutions
              </span>
            </h2>
            <p className="text-lg text-gray-600">
              We work with trusted educational institutions and examination boards to ensure accurate verification.
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {/* Department of Examinations */}
            <FeatureCard
              icon={Building}
              title="Department of Examinations - Sri Lanka"
              description="Official O/L & A/L examination results verification through government database."
            />

            {/* Cambridge International */}
            <FeatureCard
              icon={Globe}
              title="Cambridge International Examinations"
              description="Verification of Cambridge O/L and A/L qualifications for international students."
            />

            {/* Pearson Edexcel */}
            <FeatureCard
              icon={Award}
              title="Pearson Edexcel"
              description="Authentication of Edexcel examination results and certificates."
            />

            {/* International Schools */}
            <FeatureCard
              icon={School}
              title="International Schools in Sri Lanka"
              description="Direct verification with recognized international schools across the country."
            />

            {/* National Schools */}
            <FeatureCard
              icon={BookOpen}
              title="National Schools"
              description="Manual outreach to national schools for comprehensive verification."
            />

            {/* Private Schools */}
            <FeatureCard
              icon={Users}
              title="Private Schools"
              description="Verification services for private educational institutions and their records."
            />
          </motion.div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Industries That{" "}
              <span className="text-[var(--color-primary)]">
                Rely on This
              </span>
            </h2>
            <p className="text-lg text-gray-600">
              Multiple sectors depend on accurate education verification for their hiring and compliance needs.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              "Government & Public Sector",
              "BPOs & Call Centers",
              "Banking & Insurance",
              "Retail & Sales",
              "Universities & Training Institutes",
              "Hospitality Services",
              "Aviation & Security",
              "Healthcare & Pharmaceuticals"
            ].map((industry, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg text-center">
                <p className="font-medium text-gray-800">{industry}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[var(--color-primary-light)]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to verify G.C.E. results quickly and accurately?
            </h2>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              Start verifying O/L and A/L qualifications with complete confidence — fast, secure, and fully transparent.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <CTA_Buttons
                primaryText="Start Verifying"
                primaryHref="/contact"
                secondaryText="Contact Sales"
                secondaryHref="/contact"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default EducationVerificationPage;