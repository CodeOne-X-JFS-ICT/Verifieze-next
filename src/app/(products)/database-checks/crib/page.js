import CTA_Buttons from "@/components/CTA_Buttons";
import Navbar from "@/components/Navbar";
import {
  Briefcase,
  Building2,
  CheckCircle,
  Clock,
  CreditCard,
  Database,
  Eye,
  FileText,
  Home,
  Landmark,
  Lock,
  Shield,
  Star,
  TrendingUp,
  Users,
} from "lucide-react";
import Image from "next/image";
import React from "react";




function page() {

    const usedByItems = [
    { icon: Building2, title: "Banks & Lenders", desc: "Financial institutions"},
    { icon: Briefcase, title: "Employers", desc: "For financial roles" },
    { icon: Home, title: "Landlords", desc: "Leasing agents" },
    { icon: Shield, title: "Insurance", desc: "Insurance companies" }
];

const checkItems = [
    { icon: Star, title: "Credit Score and Rating", desc: "Comprehensive credit assessment" },
    { icon: CreditCard, title: "Credit Card & Loan History", desc: "Detailed repayment patterns" },
    { icon: Building2, title: "Bank Loans & Facilities", desc: "Overdrafts and credit facilities" },
    { icon: FileText, title: "Default Records", desc: "Historical payment defaults" },
    { icon: Eye, title: "Institution Inquiries", desc: "Other financial institution checks" }
  ];

  const benefits = [
    { icon: TrendingUp, title: "Smarter Decisions", desc: "Make informed lending and hiring choices" },
    { icon: Shield, title: "Reduce Fraud Risk", desc: "Minimize financial fraud exposure" },
    { icon: CheckCircle, title: "Role Suitability", desc: "Ensure financial position compatibility" },
    { icon: Lock, title: "Stay Compliant", desc: "Meet finance-sector regulations" }
  ];

  const verificationSteps = [
    { icon: Database, title: "Official Integration", desc: "Direct CRIB database/API access" },
    { icon: FileText, title: "Consent-Based Access", desc: "Digital signature authorization" },
    { icon: Clock, title: "Real-Time Processing", desc: "Instant request and retrieval" }
  ];
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[var(--color-primary-light)] to-white py-24">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight tracking-tight mb-6">
                  Access Accurate{" "}
                  <span className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-dark)] bg-clip-text text-transparent">
                    CRIB Reports
                  </span>{" "}
                  for Informed Financial Decisions
                </h1>
                <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl leading-relaxed">
                  Verify an individual's credit history, outstanding loans, and
                  financial behavior from trusted national credit bureaus.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <CTA_Buttons
                  primaryText="Start CRIB Check"
                  primaryHref=""
                  secondaryText="Request Access"
                  secondaryHref=""
                />
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-[var(--color-primary-light)] rounded-full flex items-center justify-center">
                      <Shield className="w-6 h-6 text-[var(--color-primary)]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        CRIB Verification
                      </h3>
                      <p className="text-sm text-gray-600">Credit Information Bureau</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {[
                      "Credit Score: 750",
                      "Loan History: Clean",
                      "Default Records: None",
                    ].map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-3 p-3 bg-green-50 rounded-lg"
                      >
                        <CheckCircle className="w-5 h-5 text-[var(--color-success)]" />
                        <span className="text-sm text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is CRIB */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-square">
              <div className="absolute inset-0 bg-[var(--color-primary-light)] rounded-2xl transform rotate-6"></div>
              <div className="relative bg-white rounded-2xl border border-gray-200 p-8 shadow-sm h-full flex items-center">
                <Image
                  src="/images/"
                  alt="Financial Report"
                  fill
                  className="object-contain p-8"
                />
              </div>
            </div>
            <div>
              {/* <div className="w-14 h-14 rounded-xl bg-[var(--color-primary-light)] flex items-center justify-center mb-6 text-[var(--color-primary)]">
                <FileSearch className="w-6 h-6" />
              </div> */}
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                What is{" "}
                <span className="text-[var(--color-primary)]">
                  CRIB Verification
                </span>
                
              </h2>
              <p className="text-lg text-gray-600 mb-6 max-w-3xl mx-auto">
                CRIB (Credit Information Bureau) verification provides a report
                on a person's or entity's financial reliability, loan repayment
                behavior, and existing liabilities through official credit
                bureau data.
              </p>
              <div className="bg-[var(--color-primary-light)] rounded-xl p-6 border border-[var(--color-primary)] border-opacity-20">
                <h3 className="font-semibold text-[var(--color-primary)] mb-3">
                  Used-by:
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    {
                      icon: <Landmark className="w-5 h-5" />,
                      text: "Banks & lenders",
                    },
                    {
                      icon: <Briefcase className="w-5 h-5 " />,
                      text: "Employers",
                    },
                    { icon: <Home className="w-5 h-5" />, text: "Landlords" },
                    {
                      icon: <Building2 className="w-5 h-5" />,
                      text: "Insurance",
                    },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="text-[var(--color-primary)]">
                        {item.icon}
                      </div>
                      <span className="text-gray-700">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Used By Section */}
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16" >
            Trusted By <span className="text-[var(--color-primary)]" >Industry Leaders </span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {usedByItems.map((item, index) => (
                <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow text-center group">
                     <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[var(--color-primary)] transition-colors">
                  <item.icon className="w-8 h-8 text-[var(--color-primary)] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
                </div>
            ))}
        </div>
      </div>
    </section>

    {/* What We Check Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">Comprehensive <span className="text-[var(--color-primary)]" >Financial Verification </span></h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              {checkItems.map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors">
                  <div className="w-12 h-12 bg-[var(--color-primary)] rounded-lg flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-[var(--color-primary-dark)] to-[var(--color-primary)] rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Sample CRIB Report</h3>
                <div className="space-y-4">
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm">Credit Score</span>
                      <span className="font-bold">750/850</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2">
                      <div className="bg-green-400 h-2 rounded-full" style={{width: '88%'}}></div>
                    </div>
                  </div>
                  
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Payment History</span>
                      <span className="text-green-400 font-semibold">Excellent</span>
                    </div>
                  </div>
                  
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Total Inquiries</span>
                      <span className="font-semibold">3 (Last 12 months)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Verification Methods */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">How We <span className="text-[var(--color-primary)]">Verify</span></h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {verificationSteps.map((step, idx) => (
              <div key={idx} className="relative">
                <div className="bg-white rounded-xl p-8 shadow-lg text-center h-full">
                  <div className="w-16 h-16 bg-[var(--color-primary)] rounded-full flex items-center justify-center mx-auto mb-6">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-gray-600">{step.desc}</p>
                </div>
                
                {idx < verificationSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-[var(--color-primary-light)] transform -translate-y-1/2"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">Why Choose Our <span className="text-[var(--color-primary)]">CRIB Verification</span></h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-[var(--color-primary-dark)] to-[var(--color-primary)] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <benefit.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Needs This */}
      <section className="py-20 bg-gradient-to-r from-[var(--color-primary-dark)] to-[var(--color-primary)] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-16">Who Needs <span className="text-[var(--color-primary-light)]">CRIB Verification</span></h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              "Banks & Microfinance Institutions",
              "Financial Service Providers", 
              "Leasing Companies",
              "Employers (Finance/Accounting Roles)"
            ].map((item, idx) => (
              <div key={idx} className="bg-white/10 rounded-xl p-6 text-center backdrop-blur-sm">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security & Compliance */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Security & Compliance</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your data security and regulatory compliance are our top priorities
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-[var(--color-primary-light)] to-white rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-[var(--color-primary)] rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Local Regulations</h3>
              <p className="text-gray-600">Fully compliant with CRIB Act in Sri Lanka and local financial regulations</p>
            </div>

            <div className="bg-gradient-to-br from-[var(--color-primary-light)] to-white rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-[var(--color-primary)] rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Privacy Protection</h3>
              <p className="text-gray-600">GDPR & CCPA-aligned consent workflow ensures user privacy protection</p>
            </div>

            <div className="bg-gradient-to-br from-[var(--color-primary-light)] to-white rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-[var(--color-primary)] rounded-full flex items-center justify-center mx-auto mb-6">
                <Lock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Data Encryption</h3>
              <p className="text-gray-600">AES-256 encryption ensures maximum security for all financial data</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}

      <section className="py-16 bg-gradient-to-br from-[var(--color-primary-light)] to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to Start {" "}
              <span className="text-[var(--color-primary)]">CRIB Verification</span>
              ?
            </h2>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              Join thousands of businesses making smarter financial decisions with accurate CRIB reports.
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

export default page;
