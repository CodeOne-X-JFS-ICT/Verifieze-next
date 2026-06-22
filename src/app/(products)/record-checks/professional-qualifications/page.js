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
            Academic Degrees Only Tell
            <br />
            <span className="text-[var(--color-primary)]">
              Half the Story
            </span>
          </h1>

          <p className="text-xl mb-8 text-gray-600 max-w-3xl mx-auto">
            For roles requiring specialized technical, financial, or management expertise, VERIFIEZE validates professional credentials directly with issuing bodies — ensuring your hire holds genuine, recognized authority in their field.
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

      {/* What is Professional Qualification Verification */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Product{" "}
              <span className="text-[var(--color-primary)]">
                Scope
              </span>
            </h2>
            <p className="text-lg text-gray-600">
              Direct credential checks for professional certifications, memberships, and licensures — such as CIMA, ACCA, CA Sri Lanka, CIM, BCS, SLASSCOM, or other chartered and technical institutes.
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
            {/* Lapsed memberships */}
            <FeatureCard
              icon={ShieldCheck}
              title="Detect Lapsed Memberships"
              description="Protect your organization from hiring individuals with expired or lapsed professional memberships they still claim."
            />

            {/* Falsified Grades */}
            <FeatureCard
              icon={BadgeCheck}
              title="Expose Falsified Technical Grades"
              description="Validate that examination completions and technical grades are genuine and match the candidate's claims."
            />

            {/* Disciplinary Standing */}
            <FeatureCard
              icon={Building2}
              title="Uncover Disciplinary Standing"
              description="Identify undisclosed disciplinary actions or sanctions with the relevant professional body."
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
              Active membership status, examination completions, and disciplinary standing with the relevant local or international professional body operating within Sri Lanka.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {/* Finance & Accounting */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-[var(--color-primary-light)] p-3 rounded-full w-fit mb-4">
                <Award className="w-6 h-6 text-[var(--color-primary)]" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Finance & Accounting Bodies
              </h3>
              <p className="text-gray-600 mb-3">
                CIMA, ACCA, CA Sri Lanka, and other chartered finance & accounting institutes
              </p>
              <div className="flex items-center text-sm text-[var(--color-primary)]">
                <CheckCircle className="w-4 h-4 mr-2" />
                Verified with issuing professional body
              </div>
            </div>

            {/* Management & Marketing */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-[var(--color-primary-light)] p-3 rounded-full w-fit mb-4">
                <FileCheck className="w-6 h-6 text-[var(--color-primary)]" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Management & Marketing</h3>
              <p className="text-gray-600 mb-3">
                CIM and other chartered management & marketing professional qualifications
              </p>
              <div className="flex items-center text-sm text-[var(--color-primary)]">
                <CheckCircle className="w-4 h-4 mr-2" />
                Active membership status confirmed
              </div>
            </div>

            {/* IT & Tech */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-[var(--color-primary-light)] p-3 rounded-full w-fit mb-4">
                <Search className="w-6 h-6 text-[var(--color-primary)]" />
              </div>
              <h3 className="text-xl font-semibold mb-3">IT & Technology</h3>
              <p className="text-gray-600 mb-3">BCS, SLASSCOM, and other technology and computing professional bodies</p>
              <div className="flex items-center text-sm text-[var(--color-primary)]">
                <CheckCircle className="w-4 h-4 mr-2" />
                Certification & grade validation
              </div>
            </div>

            {/* Other Professional Bodies */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-[var(--color-primary-light)] p-3 rounded-full w-fit mb-4">
                <Users className="w-6 h-6 text-[var(--color-primary)]" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Other Chartered Institutes</h3>
              <p className="text-gray-600 mb-3">Any other currently existing local or international professional body operating within Sri Lanka</p>
              <div className="flex items-center text-sm text-[var(--color-primary)]">
                <CheckCircle className="w-4 h-4 mr-2" />
                Membership status verification
              </div>
            </div>

            {/* Examination Completions */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-[var(--color-primary-light)] p-3 rounded-full w-fit mb-4">
                <GraduationCap className="w-6 h-6 text-[var(--color-primary)]" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Examination Completions</h3>
              <p className="text-gray-600 mb-3">Verification of specific examination passes, grades, and technical qualification levels</p>
              <div className="flex items-center text-sm text-[var(--color-primary)]">
                <CheckCircle className="w-4 h-4 mr-2" />
                Directly confirmed with the body
              </div>
            </div>

            {/* Disciplinary Standing */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-[var(--color-primary-light)] p-3 rounded-full w-fit mb-4">
                <Wrench className="w-6 h-6 text-[var(--color-primary)]" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Disciplinary Standing</h3>
              <p className="text-gray-600 mb-3">Check for any undisclosed disciplinary actions or sanctions recorded by the professional body</p>
              <div className="flex items-center text-sm text-[var(--color-primary)]">
                <CheckCircle className="w-4 h-4 mr-2" />
                Confidential standing review
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
                Authenticity{" "}
                <span className="text-[var(--color-primary)]">
                  Check
                </span>
              </h2>

              <div className="space-y-6">
                {/* Step 1 */}
                <div className="flex items-start gap-4">
                  <div className="bg-[var(--color-primary)] text-white p-2 rounded-full min-w-[40px] h-10 flex items-center justify-center font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Active Membership Status</h3>
                    <p className="text-gray-600 mt-1">
                      We confirm whether the candidate's membership is currently active and in good standing with the professional body.
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex items-start gap-4">
                  <div className="bg-[var(--color-primary)] text-white p-2 rounded-full min-w-[40px] h-10 flex items-center justify-center font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Examination Completions & Grades</h3>
                    <p className="text-gray-600 mt-1">
                      Validate that specific examination passes and technical grades are genuine and correspond to the candidate's stated level.
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex items-start gap-4">
                  <div className="bg-[var(--color-primary)] text-white p-2 rounded-full min-w-[40px] h-10 flex items-center justify-center font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Disciplinary Standing</h3>
                    <p className="text-gray-600 mt-1">
                      Check for any undisclosed disciplinary records or sanctions held by the professional body against the candidate.
                    </p>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="flex items-start gap-4">
                  <div className="bg-[var(--color-primary)] text-white p-2 rounded-full min-w-[40px] h-10 flex items-center justify-center font-bold">
                    4
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Transparent Fee Disclosure</h3>
                    <p className="text-gray-600 mt-1">
                      Any official verification or registry fees levied by the professional body are fully disclosed upfront — no hidden margins.
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
            {/* Chartered Financial Bodies */}
            <FeatureCard
              icon={Award}
              title="Chartered Financial Bodies"
              description="CIMA, ACCA, CA Sri Lanka, and all major chartered finance and accounting institutes"
            />

            {/* Management & Tech */}
            <FeatureCard
              icon={Building2}
              title="Management & Technology"
              description="CIM, BCS, SLASSCOM, and chartered management, marketing, and IT professional institutes"
            />

            {/* Other Local Bodies */}
            <FeatureCard
              icon={Users}
              title="All Local Professional Bodies"
              description="Any currently existing local or international professional body with active operations within Sri Lanka"
            />

            {/* Direct Verification */}
            <FeatureCard
              icon={Search}
              title="Direct Body Verification"
              description="All checks conducted directly with the relevant professional body — no intermediaries"
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

export default ProfessionalQualificarions;
