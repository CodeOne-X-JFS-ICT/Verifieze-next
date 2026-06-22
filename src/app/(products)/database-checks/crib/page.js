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
    { icon: Star, title: "Financial Integrity Profile", desc: "Evaluates credit scores, active credit facilities, repayment histories, and overall debt-to-income indicators" },
    { icon: CreditCard, title: "Credit Facilities & Repayment History", desc: "Detailed review of loan repayment behaviors and active credit facilities" },
    { icon: Building2, title: "Non-Performing Loans & Defaults", desc: "Flags major payment defaults and non-performing loans that expose your organization to risk" },
    { icon: FileText, title: "Bankruptcy Records", desc: "Identifies any bankruptcy filings or significant financial failures in the candidate's history" },
    { icon: Eye, title: "Debt-to-Income Indicators", desc: "Assesses overall financial liability levels relative to income for suitability screening" }
  ];

  const benefits = [
    { icon: TrendingUp, title: "Protect Your Capital", desc: "Safeguard corporate funds by ensuring financial integrity in roles that handle money" },
    { icon: Shield, title: "Mitigate Insider Threat", desc: "Reduce bribery risks and conflicts of interest from financially distressed employees" },
    { icon: CheckCircle, title: "Ensure Fiscal Responsibility", desc: "Verify that key personnel are financially stable and capable of managing corporate resources" },
    { icon: Lock, title: "Authorized & Compliant", desc: "Conducted via certified local credit bureaus (CRIB Sri Lanka) with full data-privacy compliance" }
  ];

  const verificationSteps = [
    { icon: Database, title: "Certified Bureau Access", desc: "Direct access via the Credit Information Bureau of Sri Lanka (CRIB) or official international financial registries" },
    { icon: FileText, title: "Authenticated Reports", desc: "Verified, official CRIB statements and certificates — not informal or self-reported documents" },
    { icon: Clock, title: "Legally Compliant Process", desc: "Conducted legally and securely with full data-privacy compliance throughout" }
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
                  Protect Your Capital &{" "}
                  <span className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-dark)] bg-clip-text text-transparent">
                    Mitigate Insider Risk
                  </span>{" "}
                  with Credit Report Verification
                </h1>
                <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl leading-relaxed">
                  VERIFIEZE's Credit Report Check provides a comprehensive look into a candidate's credit history, repayment behaviors, and financial liabilities — your strongest defense when hiring for roles handling corporate funds or core management decisions.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <CTA_Buttons
                  primaryText="Start CRIB Check"
                  primaryHref="/contact"
                  secondaryText="Talk to Sales"
                  secondaryHref="/contact"
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
                  src="/images/CRIB.png"
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
                Credit Report{" "}
                <span className="text-[var(--color-primary)]">
                  Verification (CRIB)
                </span>
                
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                For the continued success of a business, financial integrity, insider risk reduction, and corporate accountability are mandatory factors. VERIFIEZE's Credit Report Check provides a comprehensive look into a candidate's credit history, repayment behaviors, and financial liabilities by utilizing verified, official CRIB reports.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                This crucial screening tool is your strongest defense when hiring for roles handling corporate funds, sensitive financial data, or core management decisions.
              </p>
              <div className="bg-[var(--color-primary-light)] rounded-xl p-6 border border-[var(--color-primary)] border-opacity-20">
                <h3 className="font-semibold text-[var(--color-primary)] mb-3">
                  Used-by:
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    {
                      icon: <Landmark className="w-5 h-5" />,
                      text: "Corporate & Financial Roles",
                    },
                    {
                      icon: <Briefcase className="w-5 h-5 " />,
                      text: "Management Positions",
                    },
                    { icon: <Home className="w-5 h-5" />, text: "Fund Handlers" },
                    {
                      icon: <Building2 className="w-5 h-5" />,
                      text: "Senior Leadership",
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
            Roles That Need <span className="text-[var(--color-primary)]" >CRIB Screening</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Building2, title: "Corporate Fund Managers", desc: "Roles directly handling company capital"},
              { icon: Briefcase, title: "Finance & Accounting", desc: "CFOs, accountants, financial controllers" },
              { icon: Home, title: "Senior Management", desc: "C-suite and leadership positions" },
              { icon: Shield, title: "Data & Risk Officers", desc: "Roles with access to sensitive financial data" }
            ].map((item, index) => (
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
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">Product <span className="text-[var(--color-primary)]" >Scope </span></h2>
          <p className="text-center text-gray-600 text-lg mb-16 max-w-3xl mx-auto">A comprehensive financial integrity profile that flags risks before they enter your organization.</p>
          
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
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">Authorized & <span className="text-[var(--color-primary)]">Compliant Access</span></h2>
          <p className="text-center text-gray-600 text-lg mb-16 max-w-3xl mx-auto">Conducted legally and securely through certified local credit bureaus and official international financial registries.</p>
          
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
              <h3 className="text-xl font-semibold text-gray-900 mb-4">CRIB Sri Lanka</h3>
              <p className="text-gray-600">Fully compliant with the Credit Information Bureau of Sri Lanka — the official, authorized source for credit reports</p>
            </div>

            <div className="bg-gradient-to-br from-[var(--color-primary-light)] to-white rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-[var(--color-primary)] rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Data-Privacy Compliant</h3>
              <p className="text-gray-600">Full data-privacy compliance throughout the process, with all access conducted legally and securely</p>
            </div>

            <div className="bg-gradient-to-br from-[var(--color-primary-light)] to-white rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-[var(--color-primary)] rounded-full flex items-center justify-center mx-auto mb-6">
                <Lock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">International Registries</h3>
              <p className="text-gray-600">Also covers official international financial registries for candidates with overseas financial histories</p>
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

export default page;
