import CTA_Buttons from "@/components/CTA_Buttons";
import ImageContainer from "@/components/ImageContainer";
import Navbar from "@/components/Navbar";
import {
  CheckCircle,
  CreditCard,
  Fingerprint,
  Globe,
  Home,
  IdCardLanyard,
  ScanFace,
  Shield,
  Zap,
} from "lucide-react";
import React from "react";

function IdentityVerificationPage() {
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
                  Instant Identity Verification
                </span>
                <br />
                for Trust and Compliance
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl leading-relaxed">
                Match personal identity documents to real individuals using
                national databases and advanced biometric tools.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <CTA_Buttons
                  primaryText="Verify Identity"
                  primaryHref=""
                  secondaryText="Schedule Demo"
                  secondaryHref=""
                />
              </div>
            </div>

            <div className="relative">
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/10 shadow-xl">
                <div className="bg-white rounded-lg overflow-hidden">
                  <div className="p-6 bg-gray-50 border-b-2 border-gray-300">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-6">
                      <ScanFace className="w-12 h-12 text-[var(--color-primary)]" />
                      <div className="w-16 h-16 rounded-full bg-[var(--color-primary)] bg-opacity-10 flex items-center justify-center">
                        <Fingerprint className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <div className="bg-gray-100 rounded-lg p-4 mb-4">
                      <div className="h-4 bg-gray-300 rounded mb-2 w-3/4"></div>
                      <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                    </div>
                    <div className="bg-[var(--color-primary)] bg-opacity-10 rounded-lg p-4">
                      <div className="h-4 bg-white rounded mb-2 w-full"></div>
                      <div className="h-4 bg-white rounded w-2/3"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is Identity Verification */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-[var(--color-primary-dark)] to-[var(--color-primary)] rounded-full flex items-center justify-center">
                <IdCardLanyard className="w-10 h-10 text-white" />
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What is{" "}
              <span className="text-[var(--color-primary)]">
                Identity Verification
              </span>
              ?
            </h2>

            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Identity verification is the process of confirming that
              individuals are who they claim to be by validating their personal
              information against authoritative sources. Our platform combines
              document authentication, biometric analysis, and database
              cross-referencing to provide comprehensive identity validation
              that meets compliance requirements while delivering a seamless
              user experience.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What We <span className="text-[var(--color-primary)]">Check</span>
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive verification across multiple identity factors
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">
            {[
              {
                icon: CreditCard,
                title: "National ID",
                desc: "Government-issued identification",
              },
              {
                icon: Globe,
                title: "Passport",
                desc: "International travel documents",
              },
              {
                icon: ScanFace,
                title: "Facial Recognition",
                desc: "Biometric facial matching",
              },
              {
                icon: Home,
                title: "Address Match",
                desc: "Residential verification",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 bg-[var(--color-primary-light)] rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <item.icon className="w-8 h-8 text-[var(--color-primary)]" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Platform
            </h2>
            <p className="text-xl text-gray-600">
              Trusted by thousands of businesses worldwide
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: "Prevent Identity Fraud",
                desc: "Advanced ML algorithms detect sophisticated fraud attempts",
              },
              {
                icon: CheckCircle,
                title: "Ensure Compliance",
                desc: "Meet KYC, AML, and regulatory requirements globally",
              },
              {
                icon: Zap,
                title: "Fast Onboarding",
                desc: "Verify identities in seconds, not days",
              },
              {
                icon: Globe,
                title: "Global Reach",
                desc: "Support for documents from 195+ countries",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-white to-gray-50 rounded-xl p-8 shadow-lg hover:shadow-xl transform hover:scale-105 hover:rotate-1 transition-all duration-300 border border-gray-100"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[var(--color-primary-dark)] to-[var(--color-primary)] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <item.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="font-bold text-xl text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}

      <section className="py-16 bg-gradient-to-br from-[var(--color-primary-light)] to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to Verify{" "}
              <span className="text-[var(--color-primary)]">Identities</span>{" "}
              with Confidence?
            </h2>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              Join thousands of businesses securing their onboarding processes
              with our trusted verification platform.
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

export default IdentityVerificationPage;
