"use client";
import CTA_Buttons from "@/components/CTA_Buttons";
import Navbar from "@/components/Navbar";
import React from "react";
import { motion } from "framer-motion";
import { containerVariants } from "@/animations/variants";
import FeatureCard from "@/components/FeatureCard";
import {
  BadgeCheck,
  Building2,
  ShieldCheck,
  Award,
  CheckCircle,
  FileCheck,
  GraduationCap,
  Users,
  Wrench,
  Stethoscope,
  Search,
} from "lucide-react";
import Image from "next/image";
function ProfessionalQualificarions() {
  return (
    <>
      <Navbar />
      {/* Hero section */}
      <section className="relative bg-[color:var(--color-primary-light)] overflow-hidden">
        <div
          className="absolute inset-0 bg-[url('/images/Professional-qualifications.jpg')] bg-cover bg-center opacity-15"
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-[var(--color-primary)] opacity-10"></div>
          
        </div>

        <div className="container mx-auto px-4 py-20 md:py-28 lg:py-32 text-center relative z-10">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Validate Professional Certifications and
            <br />
            <span className="text-[var(--color-primary)]">
              Licenses with Confidence
            </span>
          </h1>

          <p className="text-xl mb-8 text-gray-600 max-w-3xl mx-auto">
            Ensure your candidates meet industry standards by verifying their
            claimed professional qualifications and certifications across all
            sectors.
          </p>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <CTA_Buttons
              primaryText="Verify Qualifications"
              primaryHref=""
              secondaryText="Schedule a Demo"
              secondaryHref=""
            />
          </div>
        </div>
      </section>

      {/* What is Professional Qualification Verification */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What is{" "}
              <span className="text-[var(--color-primary)]">
                Professional Qualification Verification
              </span>
              ?
            </h2>
            <p className="text-lg text-gray-600">
              This service confirms the legitimacy of licenses, certificates, or
              professional memberships claimed by individuals across various
              industries, ensuring authenticity and compliance.
            </p>
          </div>

          {/* Why it matters Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {/* Prevents Fraud */}
            <FeatureCard
              icon={ShieldCheck}
              title="Prevents Fraudulent Claims"
              description="Protect your organization from fake credentials and unqualified candidates."
            />

            {/* Regulated Industries */}
            <FeatureCard
              icon={Building2}
              title="Essential for Regulated Industries"
              description="Critical for healthcare, finance, engineering, and other compliance-heavy sectors."
            />

            {/* Operational Safety */}
            <FeatureCard
              icon={BadgeCheck}
              title="Supports Compliance & Safety"
              description="Ensures operational safety and meets regulatory requirements across industries."
            />
          </motion.div>
        </div>
      </section>

      {/* What We Verify */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What We{" "}
              <span className="text-[var(--color-primary)]">Verify</span>
            </h2>
            <p className="text-lg text-gray-600">
              Comprehensive verification across all professional credentials and
              certifications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {/* Professional Licenses */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-[var(--color-primary-light)] p-3 rounded-full w-fit mb-4">
                <Award className="w-6 h-6 text-[var(--color-primary)]" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Professional Licenses
              </h3>
              <p className="text-gray-600 mb-3">
                CPA, RN, PMP, Legal Bar, and other professional licenses
              </p>
              <div className="flex items-center text-sm text-[var(--color-primary)]">
                <CheckCircle className="w-4 h-4 mr-2" />
                Verified with issuing authorities
              </div>
            </div>
            {/* IT Certifications */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-[var(--color-primary-light)] p-3 rounded-full w-fit mb-4">
                <FileCheck className="w-6 h-6 text-[var(--color-primary)]" />
              </div>
              <h3 className="text-xl font-semibold mb-3">IT Certifications</h3>
              <p className="text-gray-600 mb-3">
                AWS, Cisco, Oracle, Microsoft, and other tech certifications
              </p>
              <div className="flex items-center text-sm text-[var(--color-primary)]">
                <CheckCircle className="w-4 h-4 mr-2" />
                Real-time database verification
              </div>
            </div>
            {/* Healthcare Credentials */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-[var(--color-primary-light)] p-3 rounded-full w-fit mb-4">
                <Stethoscope className="w-6 h-6 text-[var(--color-primary)]" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Healthcare Credentials</h3>
              <p className="text-gray-600 mb-3">Medical Board Licenses, nursing certifications, and specialized credentials</p>
              <div className="flex items-center text-sm text-[var(--color-primary)]">
                <CheckCircle className="w-4 h-4 mr-2" />
                Medical board verification
              </div>
            </div>

            {/* Trade Skills */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-[var(--color-primary-light)] p-3 rounded-full w-fit mb-4">
                <Wrench className="w-6 h-6 text-[var(--color-primary)]" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Trade Skills & Vocational</h3>
              <p className="text-gray-600 mb-3">Electrician licenses, plumbing certifications, and skilled trade credentials</p>
              <div className="flex items-center text-sm text-[var(--color-primary)]">
                <CheckCircle className="w-4 h-4 mr-2" />
                Trade authority validation
              </div>
            </div>

            {/* Professional Memberships */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-[var(--color-primary-light)] p-3 rounded-full w-fit mb-4">
                <Users className="w-6 h-6 text-[var(--color-primary)]" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Professional Memberships</h3>
              <p className="text-gray-600 mb-3">IEEE, CFA Institute, Bar Associations, and other professional bodies</p>
              <div className="flex items-center text-sm text-[var(--color-primary)]">
                <CheckCircle className="w-4 h-4 mr-2" />
                Membership status verification
              </div>
            </div>

            {/* Academic Credentials */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-[var(--color-primary-light)] p-3 rounded-full w-fit mb-4">
                <GraduationCap className="w-6 h-6 text-[var(--color-primary)]" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Academic Credentials</h3>
              <p className="text-gray-600 mb-3">Degrees, diplomas, and academic certifications from institutions</p>
              <div className="flex items-center text-sm text-[var(--color-primary)]">
                <CheckCircle className="w-4 h-4 mr-2" />
                Institution verification
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Verification Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left Column - Image */}
            <div className="lg:w-1/2">
              <div className="relative rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/images/Professional-qualifications.jpg"
                  alt="Professional qualification verification process"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Right Column - Process Steps */}
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                Our{" "}
                <span className="text-[var(--color-primary)]">
                  Verification Process
                </span>
              </h2>

              <div className="space-y-6">
                {/* Step 1 */}
                <div className="flex items-start gap-4">
                  <div className="bg-[var(--color-primary)] text-white p-2 rounded-full min-w-[40px] h-10 flex items-center justify-center font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Collect Credentials</h3>
                    <p className="text-gray-600 mt-1">
                      Gather credential information via candidate input or API integration
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex items-start gap-4">
                  <div className="bg-[var(--color-primary)] text-white p-2 rounded-full min-w-[40px] h-10 flex items-center justify-center font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Cross-Check with Authorities</h3>
                    <p className="text-gray-600 mt-1">
                      Verify against issuing authorities and official databases
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex items-start gap-4">
                  <div className="bg-[var(--color-primary)] text-white p-2 rounded-full min-w-[40px] h-10 flex items-center justify-center font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Validate Details</h3>
                    <p className="text-gray-600 mt-1">
                      Confirm license number, status, and expiration dates
                    </p>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="flex items-start gap-4">
                  <div className="bg-[var(--color-primary)] text-white p-2 rounded-full min-w-[40px] h-10 flex items-center justify-center font-bold">
                    4
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Flag Discrepancies</h3>
                    <p className="text-gray-600 mt-1">
                      Identify mismatches, expired, or inactive status
                    </p>
                  </div>
                </div>

                {/* Step 5 */}
                <div className="flex items-start gap-4">
                  <div className="bg-[var(--color-primary)] text-white p-2 rounded-full min-w-[40px] h-10 flex items-center justify-center font-bold">
                    5
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Generate Digital Report</h3>
                    <p className="text-gray-600 mt-1">
                      Provide comprehensive report with verification outcome
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Supported Bodies & Sources */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Supported{" "}
              <span className="text-[var(--color-primary)]">
                Bodies & Sources
              </span>
            </h2>
            <p className="text-lg text-gray-600">
              We work with a comprehensive network of certification bodies and authorities worldwide
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {/* Global Certifying Bodies */}
            <FeatureCard
              icon={Award}
              title="Global Certifying Bodies"
              description="PMI, AWS, Microsoft, Oracle, and other international certification providers"
            />

            {/* Government Authorities */}
            <FeatureCard
              icon={Building2}
              title="Government Licensing Authorities"
              description="State boards, federal agencies, and regulatory bodies across jurisdictions"
            />

            {/* Industry Associations */}
            <FeatureCard
              icon={Users}
              title="Industry Associations"
              description="Professional boards, trade associations, and membership organizations"
            />

            {/* Direct Verification */}
            <FeatureCard
              icon={Search}
              title="Direct Outreach"
              description="Direct contact with issuers for rare, legacy, or specialized certificates"
            />
          </motion.div>

          {/* Trust Indicators */}
          <div className="mt-16 bg-white rounded-xl p-8 shadow-lg">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Trusted by Industry Leaders</h3>
              <p className="text-gray-600">Our verification network covers 95% of professional certifications globally</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-[var(--color-primary)] mb-2">500+</div>
                <div className="text-sm text-gray-600">Certification Bodies</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[var(--color-primary)] mb-2">95%</div>
                <div className="text-sm text-gray-600">Coverage Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[var(--color-primary)] mb-2">24/7</div>
                <div className="text-sm text-gray-600">Verification Access</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[var(--color-primary)] mb-2">99.9%</div>
                <div className="text-sm text-gray-600">Accuracy Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-[var(--color-primary-light)]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Want to Protect Your Team with Verified Professionals?
            </h2>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              Ensure your candidates have legitimate qualifications and protect your 
              organization from credential fraud with our comprehensive verification service.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              
              <CTA_Buttons 
                primaryText="Start Verifying"
                primaryHref=""
                secondaryText="Talk to Sales"
                secondaryHref=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProfessionalQualificarions;
