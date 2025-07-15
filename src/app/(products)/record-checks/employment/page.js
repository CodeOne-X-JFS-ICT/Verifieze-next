import CTA_Buttons from "@/components/CTA_Buttons";
import FeatureCard from "@/components/FeatureCard";
import ImageContainer from "@/components/ImageContainer";
import Navbar from "@/components/Navbar";
import PricingSection from "@/components/PricingSection";
import {
  AlertCircle,
  AlertTriangle,
  Award,
  BadgeCheck,
  Brain,
  CheckCircle,
  Clock,
  FileSearch,
  FileText,
  Globe,
  Mail,
  Phone,
  Search,
  Shield,
  TrendingUp,
  Upload,
  Users,
  Zap,
} from "lucide-react";
import Image from "next/image";
import React from "react";

function EmploymentVerificationPage() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[var(--color-primary-light)] to-white py-24">
        <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-[radial-gradient(circle,_rgba(0,155,181,0.15)_0%,_transparent_70%)] rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight tracking-tight mb-6">
                <span className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-dark)] bg-clip-text text-transparent">
                  Verify Past Employment History
                </span>
                <br />
                to Ensure Honest Hiring
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl leading-relaxed">
                Confirm your candidates' job experience, roles, and tenure
                across local and global employers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <CTA_Buttons
                  primaryText="Start Verifying"
                  primaryHref=""
                  secondaryText="Book a Demo"
                  secondaryHref=""
                />
              </div>
            </div>

            {/* Visual Card */}
            <div className="reltive animate-fade-in-up delay-200">
              <div className="bg-white rounded-2xl shadow-xl p-8 hover:rotate-0 transition-transform duration-500 transform rotate-2 hover:scale-105">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-[var(--color-primary)] rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-gray 900">
                      Resume Verification
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Automated screening process
                    </p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center text-[var(--color-success)] text-sm">
                    <CheckCircle className="w-5 h-5 mr-2" />
                    Employment verified
                  </div>
                  <div className="flex items-center text-[var(--color-success)] text-sm">
                    <CheckCircle className="w-5 h-5 mr-2" />
                    Dates confirmed
                  </div>
                  <div className="flex items-center text-[var(--color-success)] text-sm">
                    <CheckCircle className="w-5 h-5 mr-2" />
                    Position validated
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is Employment Verification? */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What is{" "}
              <span className="text-[var(--color-primary)]">
                Employment Verification
              </span>
              ?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Employment verification is the process of confirming a candidate's
              work history, job titles, employment dates, and other relevant
              details with their previous employers to ensure the accuracy of
              their resume and claims.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-[var(--color-primary-light)] rounded-full flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-[var(--color-primary)]" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Detect Fraud</h3>
              <p className="text-gray-600">
                Identify false claims and fabricated work history before making
                hiring decisions.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-[var(--color-primary-light)] rounded-full flex items-center justify-center mb-4">
                <FileText className="w-6 h-6 text-[var(--color-primary)]" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Regulatory Compliance
              </h3>
              <p className="text-gray-600">
                Meet industry standards and legal requirements for thorough
                background screening.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-[var(--color-primary-light)] rounded-full flex items-center justify-center mb-4">
                <AlertTriangle className="w-6 h-6 text-[var(--color-primary)]" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Reduce Liability</h3>
              <p className="text-gray-600">
                Minimize legal risks and protect your organization from
                negligent hiring claims.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Verify Section */}

      <ImageContainer
        reverse={false}
        imageSrc="/images/Employment-1.jpg"
        imageAlt="Employment verification illustration"
        title="What We"
        highlightText="Verify"
        features={[
          {
            icon: <Users className="w-5 h-5 text-[var(--color-primary)]" />,
            title: "Employer Name & Address",
            description:
              "We verify the organization name and address where the candidate claimed to have worked.",
          },
          {
            icon: (
              <BadgeCheck className="w-5 h-5 text-[var(--color-primary)]" />
            ),
            title: "Job Title & Position",
            description:
              "Cross-check the role and responsibilities held by the candidate during their employment.",
          },
          {
            icon: <Clock className="w-5 h-5 text-[var(--color-primary)]" />,
            title: "Employment Duration",
            description:
              "Validate the start and end dates of employment to prevent date manipulation.",
          },
          {
            icon: <FileText className="w-5 h-5 text-[var(--color-primary)]" />,
            title: "Employment Type",
            description:
              "Confirm whether the employment was full-time, part-time, or contractual/freelance.",
          },
          {
            icon: (
              <AlertCircle className="w-5 h-5 text-[var(--color-primary)]" />
            ),
            title: "Reason for Leaving",
            description:
              "Understand the context behind the departure (if provided) to spot potential issues.",
          },
          {
            icon: <Phone className="w-5 h-5 text-[var(--color-primary)]" />,
            title: "Manager or HR Contact Validation",
            description:
              "Optional contact verification of HR or reporting managers to ensure source authenticity.",
          },
        ]}
      />

      {/* Verification Methods Section */}

      <section className="relative py-20 bg-gradient-to-br from-white to-[var(--color-primary-light)] overflow-hidden ">
        <div className="relative max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[var(--color-primary)] mb-4 animate-fade-in-up">
              Verification Methods
            </h2>
            <p className="text-xl text-gray-500  animate-fade-in-up-delay">
              Multiple verification channels for comprehensive coverage
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group relative">
              <div className="absolute inset-0 bg-white rounded-2xl transition-all duration-300 shadow-xl"></div>
              <div className="relative text-center p-8 rounded-2xl bg-white hover-shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="w-20 h-20 bg-[var(--color-primary-light)] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-opacity-20 transition-all duration-300 animate-bounce-on-hover">
                  <div className="flex">
                    <Mail className="w-7 h-7 text-[var(--color-primary)] mr-1" />
                    <Phone className="w-7 h-7 text-[var(--color-primary)]" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Email & Phone
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Direct contact with HR departments and managers for real-time
                  verification
                </p>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute inset-0 bg-white rounded-2xl transition-all duration-300 shadow-xl"></div>
              <div className="relative text-center p-8 rounded-2xl bg-white hover-shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="w-20 h-20 bg-[var(--color-primary-light)] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-opacity-20 transition-all duration-300 animate-bounce-on-hover">
                  <div className="flex">
                    <Users className="w-7 h-7 text-[var(--color-primary)]" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  HR Integration
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Seamless integration with HRIS and payroll systems for
                  automated checks
                </p>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute inset-0 bg-white rounded-2xl transition-all duration-300 shadow-xl"></div>
              <div className="relative text-center p-8 rounded-2xl bg-white hover-shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="w-20 h-20 bg-[var(--color-primary-light)] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-opacity-20 transition-all duration-300 animate-bounce-on-hover">
                  <div className="flex">
                    <Upload className="w-7 h-7 text-[var(--color-primary)]" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Document Upload
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Secure document submission and verification with encrypted
                  storage
                </p>
              </div>
            </div>

            <div className="group relative ">
              <div className="absolute inset-0 bg-white rounded-2xl transition-all duration-300 shadow-xl"></div>
              <div className="relative text-center p-8 rounded-2xl bg-white hover-shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="w-20 h-20 bg-[var(--color-primary-light)]  rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-opacity-20 transition-all duration-300 animate-bounce-on-hover">
                  <div className="flex">
                    <Brain className="w-7 h-7 text-[var(--color-primary)]" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  AI-Based Checks
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Advanced algorithms for pattern recognition and anomaly
                  detection
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Section */}
      <section className="py-16 bg-[var(--color-primary)] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-8">
              <Globe className="w-24 h-24 mx-auto mb-6 opacity-90 animate-[spin_10s_linear_infinite]" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Global Coverage</h2>
            <p className="text-xl text-blue-100 mb-8">
              Covers 100+ countries – corporates, startups, government agencies,
              and freelancers
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-[var(--color-primary-dark)]">
              {[
                "USA",
                "UK",
                "Canada",
                "Australia",
                "Germany",
                "France",
                "India",
                "Singapore",
                "UAE",
                "Brazil",
              ].map((country) => (
                <span
                  key={country}
                  className="bg-white bg-opacity-20 px-3 py-1 rounded-full"
                >
                  {country}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our{" "}
              <span className="text-[var(--color-primary)]">
                Employment Verification
              </span>
              ?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Trusted by leading organizations worldwide for accurate, compliant
              verification services
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start bg-white border-[var(--color-primary)] border-l-5 rounded-2xl p-2 h-25">
                <div className="w-12 h-12 bg-[var(--color-primary-light)] rounded-lg flex items-center justify-center mr-4">
                  <CheckCircle className="w-6 h-6 text-[var(--color-primary)]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Complete Transparency
                  </h3>
                  <p className="text-gray-600">
                    Full visibility into the verification process with detailed
                    reporting and audit trails.
                  </p>
                </div>
              </div>

              <div className="flex items-start bg-white border-[var(--color-primary)] border-l-5 rounded-2xl p-2 h-25">
                <div className="w-12 h-12 bg-[var(--color-primary-light)] rounded-lg flex items-center justify-center mr-4">
                  <Shield className="w-6 h-6 text-[var(--color-primary)]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Fraud Prevention
                  </h3>
                  <p className="text-gray-600">
                    Advanced detection algorithms identify inconsistencies and
                    potential red flags.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="flex items-start bg-white border-[var(--color-primary)] border-l-5 rounded-2xl p-2 h-25">
                <div className="w-12 h-12 bg-[var(--color-primary-light)] rounded-lg flex items-center justify-center mr-4">
                  <Award className="w-6 h-6 text-[var(--color-primary)]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Regulatory Compliance
                  </h3>
                  <p className="text-gray-600">
                    Meet FCRA, GDPR, and other regulatory requirements with
                    confidence.
                  </p>
                </div>
              </div>

              <div className="flex items-start bg-white border-[var(--color-primary)] border-l-5 rounded-2xl p-2 h-25">
                <div className="w-12 h-12 bg-[var(--color-primary-light)] rounded-lg flex items-center justify-center mr-4">
                  <TrendingUp className="w-6 h-6 text-[var(--color-primary)]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Hiring Confidence
                  </h3>
                  <p className="text-gray-600">
                    Make informed decisions with verified employment data and
                    risk assessments.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sample Report Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Sample Verification Report
            </h2>
            <p className="text-lg text-gray-600">
              Detailed, professional reports for informed hiring decisions
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="border-b pb-6 mb-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">
                    Employment Verification Report
                  </h3>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    Verified
                  </span>
                </div>
                <div className="text-sm text-gray-600">
                  <p>
                    <strong>Candidate:</strong> Lakmal Perera
                  </p>
                  <p>
                    <strong>Generated:</strong> March 15, 2024
                  </p>
                  <p>
                    <strong>Report ID:</strong> VR-2024-0315-001
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-gray-900">
                    Tech Solutions Inc.
                  </h4>
                  <p className="text-gray-600">Senior Software Engineer</p>
                  <p className="text-sm text-gray-500">Jan 2020 - Dec 2023</p>
                  <span className="inline-block bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium mt-2">
                    ✓ Verified
                  </span>
                </div>

                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-gray-900">StartupXYZ</h4>
                  <p className="text-gray-600">Full Stack Developer</p>
                  <p className="text-sm text-gray-500">Jun 2018 - Dec 2019</p>
                  <span className="inline-block bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium mt-2">
                    ✓ Verified
                  </span>
                </div>

                <div className="border-l-4 border-yellow-500 pl-4">
                  <h4 className="font-semibold text-gray-900">
                    Digital Agency Pro
                  </h4>
                  <p className="text-gray-600">Junior Developer</p>
                  <p className="text-sm text-gray-500">Mar 2017 - May 2018</p>
                  <span className="inline-block bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs font-medium mt-2">
                    ⏳ Pending
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <PricingSection />

      {/* Final CTA Section */}

      <section className="py-16 bg-gradient-to-br from-[var(--color-primary-light)] to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Start Verifying{" "}
              <span className="text-[var(--color-primary)]">Employment</span>{" "}
              Now
            </h2>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              Join thousands of companies that trust our employment verification
              services
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

export default EmploymentVerificationPage;
