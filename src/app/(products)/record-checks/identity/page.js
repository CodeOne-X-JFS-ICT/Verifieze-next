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
                  Trust Begins with
                </span>
                <br />
                Absolute Certainty
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl leading-relaxed">
                In an era of digital onboarding, remote workforces, and sophisticated credential fraud, confirming your candidate's true identity is your organization's primary line of defense.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <CTA_Buttons
                  primaryText="Start Verifying"
                  primaryHref="/contact"
                  secondaryText="Talk to Sales"
                  secondaryHref="/contact"
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
              Identity{" "}
              <span className="text-[var(--color-primary)]">
                Verification
              </span>
            </h2>

            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-4">
              VERIFIEZE offers an Identity Verification service to establish a bulletproof foundation for your screening process, ensuring that the individual you are interviewing, onboarding, and paying is exactly who they claim to be.
            </p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We validate key government-issued documentation such as National Identity Cards (NIC), offering two distinct, high-security levels of authentication.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Two Distinct <span className="text-[var(--color-primary)]">Verification Options</span>
            </h2>
            <p className="text-xl text-gray-600">
              Choose the level of authentication that matches your security requirements
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Option 1 */}
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-[var(--color-primary)]">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-[var(--color-primary)] rounded-full flex items-center justify-center text-white font-bold text-xl">1</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Open Record Verification</h3>
                  <span className="text-sm text-[var(--color-primary)] font-medium">Swift & Data-Driven</span>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed mb-6">
                A swift, data-driven audit that cross-checks and authenticates the candidate's exact NIC details directly against official government online databases to ensure immediate data integrity.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="bg-[var(--color-primary-light)] p-1.5 rounded-full mt-0.5">
                    <CreditCard className="w-4 h-4 text-[var(--color-primary)]" />
                  </div>
                  <span className="text-gray-700">NIC details authenticated at source</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-[var(--color-primary-light)] p-1.5 rounded-full mt-0.5">
                    <Zap className="w-4 h-4 text-[var(--color-primary)]" />
                  </div>
                  <span className="text-gray-700">Cross-checked against official government online databases</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-[var(--color-primary-light)] p-1.5 rounded-full mt-0.5">
                    <CheckCircle className="w-4 h-4 text-[var(--color-primary)]" />
                  </div>
                  <span className="text-gray-700">Fast turnaround for immediate data integrity</span>
                </li>
              </ul>
            </div>

            {/* Option 2 */}
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-[var(--color-primary-dark)]">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-[var(--color-primary-dark)] rounded-full flex items-center justify-center text-white font-bold text-xl">2</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Direct System Verification</h3>
                  <span className="text-sm font-medium" style={{color: 'var(--color-primary-dark)'}}>Elite & High-Assurance</span>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed mb-6">
                An elite, high-assurance check where we directly check with the Databases of the Department for Registration of Persons (DRP) to verify the authenticity and records of the candidate's NIC at the source.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="bg-[var(--color-primary-light)] p-1.5 rounded-full mt-0.5">
                    <Shield className="w-4 h-4 text-[var(--color-primary)]" />
                  </div>
                  <span className="text-gray-700">Direct DRP database access — the authoritative source</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-[var(--color-primary-light)] p-1.5 rounded-full mt-0.5">
                    <Fingerprint className="w-4 h-4 text-[var(--color-primary)]" />
                  </div>
                  <span className="text-gray-700">Highest assurance level for sensitive roles</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-[var(--color-primary-light)] p-1.5 rounded-full mt-0.5">
                    <CheckCircle className="w-4 h-4 text-[var(--color-primary)]" />
                  </div>
                  <span className="text-gray-700">Verification at the Department for Registration of Persons</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Identity Verification <span className="text-[var(--color-primary)]">Matters</span>
            </h2>
            <p className="text-xl text-gray-600">
              Protecting your company from severe security breaches starts here
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: "Prevent Security Breaches",
                desc: "Ensure the individual you hire is exactly who they claim to be — protecting your company from severe security risks",
              },
              {
                icon: CheckCircle,
                title: "Bulletproof Screening Foundation",
                desc: "Establish a solid identity baseline before any other background checks proceed",
              },
              {
                icon: Zap,
                title: "Secure Remote Onboarding",
                desc: "Counter sophisticated credential fraud in digital and hybrid onboarding environments",
              },
              {
                icon: Globe,
                title: "Government-Source Authentication",
                desc: "All checks conducted against official government databases — NIC validated at the Department for Registration of Persons",
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

export default IdentityVerificationPage;
