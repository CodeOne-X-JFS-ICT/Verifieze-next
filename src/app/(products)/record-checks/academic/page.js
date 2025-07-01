import Navbar from "@/components/Navbar";
import {
  BadgeCheck,
  BookOpen,
  Building2,
  CheckCircle,
  FileSearch,
  FileText,
  GraduationCap,
  Globe,
  Mail,
  Phone,
  Search,
  Shield,
  ShieldCheck,
  Upload,
  Users,
  Zap,
} from "lucide-react";

import React from "react";
import Image from "next/image";
import CTA_Buttons from "@/components/CTA_Buttons";
import Link from "next/link";

function AcademicVerificationPage() {
  return (
    <>
      <Navbar />

      {/* Hero section */}
      <section className="relative bg-[color:var(--color-primary-light)] overflow-hidden">
        <div
          className="absolute inset-0 bg-[url('/images/Academic-hero.jpg')] bg-cover bg-center opacity-20"
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-[var(--color-primary)] opacity-20"></div>
        </div>

        <div className="container mx-auto px-4 py-20 md:py-28 lg:py-32 text-center relative z-10">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Verify Academic Credentials with
            <br />
            <span className="text-[var(--color-primary)]">
              Confidence and Speed
            </span>
          </h1>

          <p className="text-xl mb-8 text-gray-600">
            Ensure the integrity of your hires with verified educational
            background checks from trusted institutions
          </p>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <CTA_Buttons
              primaryText="Sign up"
              primaryHref=""
              secondaryText="Talk to Sales"
              secondaryHref=""
            />
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What is{" "}
              <span className="text-[var(--color-primary)]">
                Academic Verification
              </span>
              ?
            </h2>
            <p className="text-lg text-gray-600">
              Academic verification is the process of confirming a candidate's
              educational qualifications, such as degree, course, institution,
              and graduation year.
            </p>
          </div>

          {/* Use Cases Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Prevent Resume Fraud */}
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-[var(--color-primary-light)] rounded-full flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-[var(--color-primary)]" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Prevent Résumé Fraud
              </h3>
              <p className="text-gray-600">
                Detect false educational claims and protect your organization
                from dishonest candidates.
              </p>
            </div>

            {/* Comply with Regulations */}
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-[var(--color-primary-light)] rounded-full flex items-center justify-center mb-4">
                <BadgeCheck className="w-6 h-6 text-[var(--color-primary)]" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Comply with Industry Regulations
              </h3>
              <p className="text-gray-600">
                Meet regulatory requirements for industries that mandate
                educational verification.
              </p>
            </div>

            {/* Maintain Hiring Standards */}
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-[var(--color-primary-light)] rounded-full flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-[var(--color-primary)]" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Maintain Hiring Standards
              </h3>
              <p className="text-gray-600">
                Ensure all employees meet the educational requirements for their
                roles.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left Column - Content */}
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                What We{" "}
                <span className="text-[var(--color-primary)]">Verify</span>
              </h2>

              <ul className="space-y-6">
                {/* Institution Name */}
                <li className="flex items-start gap-4">
                  <div className="bg-[var(--color-primary-light)] p-2 rounded-full">
                    <Building2 className="w-5 h-5 text-[var(--color-primary)]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Institution Name</h3>
                    <p className="text-gray-600 mt-1">
                      Verify the authenticity and accreditation status of
                      educational institutions.
                    </p>
                  </div>
                </li>

                {/* Degree Type */}
                <li className="flex items-start gap-4">
                  <div className="bg-[var(--color-primary-light)] p-2 rounded-full">
                    <GraduationCap className="w-5 h-5 text-[var(--color-primary)]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Degree Type</h3>
                    <p className="text-gray-600 mt-1">
                      Confirm diploma, bachelor's, master's, doctorate, and
                      professional certifications.
                    </p>
                  </div>
                </li>

                {/* Year of Graduation */}
                <li className="flex items-start gap-4">
                  <div className="bg-[var(--color-primary-light)] p-2 rounded-full">
                    <BadgeCheck className="w-5 h-5 text-[var(--color-primary)]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">
                      Year of Graduation
                    </h3>
                    <p className="text-gray-600 mt-1">
                      Validate completion dates and duration of academic
                      programs.
                    </p>
                  </div>
                </li>

                {/* Enrollment Dates */}
                <li className="flex items-start gap-4">
                  <div className="bg-[var(--color-primary-light)] p-2 rounded-full">
                    <FileText className="w-5 h-5 text-[var(--color-primary)]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Enrollment Dates</h3>
                    <p className="text-gray-600 mt-1">
                      Cross-reference start and end dates of academic enrollment
                      periods.
                    </p>
                  </div>
                </li>

                {/* Country of Education */}
                <li className="flex items-start gap-4">
                  <div className="bg-[var(--color-primary-light)] p-2 rounded-full">
                    <Globe className="w-5 h-5 text-[var(--color-primary)]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">
                      Country of Education
                    </h3>
                    <p className="text-gray-600 mt-1">
                      Verify international qualifications and their local
                      equivalencies.
                    </p>
                  </div>
                </li>
              </ul>

              {/* Action buttons */}
              <div className="flex mt-8 justify-center gap-4">
                <CTA_Buttons
                  primaryText="Sign up"
                  primaryHref=""
                  secondaryText="Talk to Sales"
                  secondaryHref=""
                />
              </div>
            </div>

            <div className="lg:w-1/2">
              <div className="relative rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/images/Academic-2.jpg"
                  alt="Academic verification process"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
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
                Our{" "}
                <span className="text-[var(--color-primary)]">
                  Verification Methods
                </span>
              </h2>

              <div className="space-y-6">
                {/* API-based checks */}
                <div className="flex items-start gap-4">
                  <div className="bg-[var(--color-primary-light)] p-2 rounded-full">
                    <Zap className="w-5 h-5 text-[var(--color-primary)]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold flex items-center gap-2">
                      API-based Automated Checks
                      <CheckCircle className="w-5 h-5 text-[var(--color-success)]" />
                    </h3>
                    <p className="text-gray-600 mt-2">
                      Instant verification through direct integration with
                      university databases.
                    </p>
                  </div>
                </div>

                {/* Email/Phone verification */}
                <div className="flex items-start gap-4">
                  <div className="bg-[var(--color-primary-light)] p-2 rounded-full">
                    <Mail className="w-5 h-5 text-[var(--color-primary)]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold flex items-center gap-2">
                      Email or Phone Verification
                      <CheckCircle className="w-5 h-5 text-[var(--color-success)]" />
                    </h3>
                    <p className="text-gray-600 mt-2">
                      Direct contact with registrar offices for manual
                      verification when needed.
                    </p>
                  </div>
                </div>

                {/* Document verification */}
                <div className="flex items-start gap-4">
                  <div className="bg-[var(--color-primary-light)] p-2 rounded-full">
                    <FileSearch className="w-5 h-5 text-[var(--color-primary)]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold flex items-center gap-2">
                      Document Verification
                      <CheckCircle className="w-5 h-5 text-[var(--color-success)]" />
                    </h3>
                    <p className="text-gray-600 mt-2">
                      Authentication of certificates, transcripts, and official
                      documents.
                    </p>
                  </div>
                </div>

                {/* AI-powered validation */}
                <div className="flex items-start gap-4">
                  <div className="bg-[var(--color-primary-light)] p-2 rounded-full">
                    <Search className="w-5 h-5 text-[var(--color-primary)]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold flex items-center gap-2">
                      AI-powered Document Validation
                      <CheckCircle className="w-5 h-5 text-[var(--color-success)]" />
                    </h3>
                    <p className="text-gray-600 mt-2">
                      Advanced technology to detect fraudulent or altered
                      documents.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              <span className="text-[var(--color-primary)]">
                Global Coverage
              </span>{" "}
              You Can Trust
            </h2>
            <p className="text-lg text-gray-600">
              We verify academic credentials from institutions worldwide with
              comprehensive coverage and reliability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Global Coverage */}
            <div className="bg-white p-6 rounded-xl border border-gray-100 hover:shadow-md transition-all text-center">
              <div className="w-16 h-16 bg-[var(--color-primary-light)] rounded-full flex items-center justify-center mb-4 mx-auto">
                <Globe className="w-8 h-8 text-[var(--color-primary)]" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Global Coverage</h3>
              <p className="text-gray-600 text-sm">100+ countries supported</p>
            </div>

            {/* University Databases */}
            <div className="bg-white p-6 rounded-xl border border-gray-100 hover:shadow-md transition-all text-center">
              <div className="w-16 h-16 bg-[var(--color-primary-light)] rounded-full flex items-center justify-center mb-4 mx-auto">
                <Building2 className="w-8 h-8 text-[var(--color-primary)]" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                University & College Databases
              </h3>
              <p className="text-gray-600 text-sm">
                Accredited and non-accredited institutions
              </p>
            </div>

            {/* Professional Institutions */}
            <div className="bg-white p-6 rounded-xl border border-gray-100 hover:shadow-md transition-all text-center">
              <div className="w-16 h-16 bg-[var(--color-primary-light)] rounded-full flex items-center justify-center mb-4 mx-auto">
                <GraduationCap className="w-8 h-8 text-[var(--color-primary)]" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Professional & Vocational
              </h3>
              <p className="text-gray-600 text-sm">
                Specialized training institutions
              </p>
            </div>

            {/* Manual Outreach */}
            <div className="bg-white p-6 rounded-xl border border-gray-100 hover:shadow-md transition-all text-center">
              <div className="w-16 h-16 bg-[var(--color-primary-light)] rounded-full flex items-center justify-center mb-4 mx-auto">
                <Phone className="w-8 h-8 text-[var(--color-primary)]" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Manual Outreach</h3>
              <p className="text-gray-600 text-sm">
                Lesser-known institutions handled personally
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Simple{" "}
              <span className="text-[var(--color-primary)]">
                Verification Workflow
              </span>
            </h2>
            <p className="text-lg text-gray-600">
              Our streamlined process ensures quick and accurate academic
              verification in just a few steps.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-[var(--color-primary)] text-white rounded-full flex items-center justify-center mb-4 mx-auto text-xl font-bold">
                1
              </div>
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                <Upload className="w-8 h-8 text-[var(--color-primary)] mx-auto mb-3" />
                <h3 className="text-lg font-semibold mb-2">Upload Details</h3>
                <p className="text-gray-600 text-sm">
                  Submit academic details or upload documents for verification
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-[var(--color-primary)] text-white rounded-full flex items-center justify-center mb-4 mx-auto text-xl font-bold">
                2
              </div>
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                <Search className="w-8 h-8 text-[var(--color-primary)] mx-auto mb-3" />
                <h3 className="text-lg font-semibold mb-2">System Match</h3>
                <p className="text-gray-600 text-sm">
                  Our system performs automated matching with official records
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-[var(--color-primary)] text-white rounded-full flex items-center justify-center mb-4 mx-auto text-xl font-bold">
                3
              </div>
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                <CheckCircle className="w-8 h-8 text-[var(--color-primary)] mx-auto mb-3" />
                <h3 className="text-lg font-semibold mb-2">Get Status</h3>
                <p className="text-gray-600 text-sm">
                  Receive verification status: Verified, Mismatch, or Pending
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-[var(--color-primary)] text-white rounded-full flex items-center justify-center mb-4 mx-auto text-xl font-bold">
                4
              </div>
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                <FileText className="w-8 h-8 text-[var(--color-primary)] mx-auto mb-3" />
                <h3 className="text-lg font-semibold mb-2">Generate Report</h3>
                <p className="text-gray-600 text-sm">
                  Get detailed report with timestamp and verification source
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our{" "}
              <span className="text-[var(--color-primary)]">
                Academic Verification
              </span>
              ?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Prevents Fraud */}
            <div className="bg-white p-6 rounded-xl border border-gray-100 hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-[var(--color-primary-light)] rounded-full flex items-center justify-center mb-4">
                <ShieldCheck className="w-6 h-6 text-[var(--color-primary)]" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Prevents Fraudulent Claims
              </h3>
              <p className="text-gray-600">
                Identify and eliminate false academic credentials from your
                hiring process.
              </p>
            </div>

            {/* Saves Time */}
            <div className="bg-white p-6 rounded-xl border border-gray-100 hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-[var(--color-primary-light)] rounded-full flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-[var(--color-primary)]" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Saves HR Time</h3>
              <p className="text-gray-600">
                Automate verification processes and reduce manual effort for
                your HR team.
              </p>
            </div>

            {/* Ensures Trust */}
            <div className="bg-white p-6 rounded-xl border border-gray-100 hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-[var(--color-primary-light)] rounded-full flex items-center justify-center mb-4">
                <BadgeCheck className="w-6 h-6 text-[var(--color-primary)]" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Ensures Trust & Credibility
              </h3>
              <p className="text-gray-600">
                Build confidence in your hiring decisions with verified
                educational backgrounds.
              </p>
            </div>

            {/* Compliance */}
            <div className="bg-white p-6 rounded-xl border border-gray-100 hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-[var(--color-primary-light)] rounded-full flex items-center justify-center mb-4">
                <FileText className="w-6 h-6 text-[var(--color-primary)]" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Regulatory Compliance
              </h3>
              <p className="text-gray-600">
                Meet visa, emigration, and industry regulatory requirements with
                ease.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Industries That{" "}
              <span className="text-[var(--color-primary)]">Rely on Us</span>
            </h2>
            <p className="text-lg text-gray-600">
              Trusted by leading organizations across various sectors for
              reliable academic verification.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {/* Staffing & Recruitment */}
            <div className="bg-gray-50 p-4 rounded-lg text-center hover:shadow-md transition-all">
              <Users className="w-8 h-8 text-[var(--color-primary)] mx-auto mb-2" />
              <p className="text-sm font-medium">Staffing & Recruitment</p>
            </div>

            {/* Finance & Banking */}
            <div className="bg-gray-50 p-4 rounded-lg text-center hover:shadow-md transition-all">
              <Building2 className="w-8 h-8 text-[var(--color-primary)] mx-auto mb-2" />
              <p className="text-sm font-medium">Finance & Banking</p>
            </div>

            {/* Healthcare */}
            <div className="bg-gray-50 p-4 rounded-lg text-center hover:shadow-md transition-all">
              <Shield className="w-8 h-8 text-[var(--color-primary)] mx-auto mb-2" />
              <p className="text-sm font-medium">Healthcare & Pharma</p>
            </div>

            {/* Government & Legal */}
            <div className="bg-gray-50 p-4 rounded-lg text-center hover:shadow-md transition-all">
              <BadgeCheck className="w-8 h-8 text-[var(--color-primary)] mx-auto mb-2" />
              <p className="text-sm font-medium">Government & Legal</p>
            </div>

            {/* IT & Tech */}
            <div className="bg-gray-50 p-4 rounded-lg text-center hover:shadow-md transition-all">
              <Zap className="w-8 h-8 text-[var(--color-primary)] mx-auto mb-2" />
              <p className="text-sm font-medium">IT & Tech Companies</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[var(--color-primary-light)]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            {/* Main CTA */}
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Want to verify academic records with ease and accuracy?
            </h2>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              Start verifying educational credentials from institutions
              worldwide with confidence and speed using Verifieze.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <CTA_Buttons
                primaryText="Start Verifying"
                primaryHref=""
                secondaryText="Contact Sales"
                secondaryHref=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AcademicVerificationPage;
