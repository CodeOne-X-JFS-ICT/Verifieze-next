import CTA_Buttons from '@/components/CTA_Buttons';
import ImageContainer from '@/components/ImageContainer';
import Navbar from '@/components/Navbar';
import { BadgeCheck, Car, CheckCircle, Clock, FileSearch, Gauge, Globe, ShieldCheck } from 'lucide-react';
import React from 'react'

function DrivingQualification() {
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
                Driving License & Record Checks for {" "}
                <span className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-dark)] bg-clip-text text-transparent">
                   Safe and Compliant
                </span> Hiring
                
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl leading-relaxed">
                Verify candidates' driving qualifications, license status, and motor vehicle records (MVRs) instantly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <CTA_Buttons
                  primaryText="Verify Driver"
                  primaryHref=""
                  secondaryText="Schedule Demo"
                  secondaryHref=""
                />
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-80 h-80 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)] rounded-3xl p-8 transform rotate-6 shadow-2xl">
                  <div className="w-full h-full bg-white rounded-2xl p-6 transform -rotate-6 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <Car className="w-8 h-8 text-[var(--color-primary)]" />
                        <span className="font-bold text-gray-900">DRIVER LICENSE</span>
                      </div>
                      <div className="space-y-2">
                        <div className="h-3 bg-gray-200 rounded w-3/4"></div>
                        <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                        <div className="h-3 bg-gray-200 rounded w-2/3"></div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <BadgeCheck className="w-8 h-8 text-[var(--color-success)]" />
                      <span className="text-sm text-gray-500">VERIFIED</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

{/* What is Driving Qualification Verification */}

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-[var(--color-primary-dark)] to-[var(--color-primary)] rounded-full flex items-center justify-center">
                <BadgeCheck className="w-10 h-10 text-white" />
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What is{" "}
              <span className="text-[var(--color-primary)]">
                Driving Qualification Verification
              </span>
              ?
            </h2>

            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Driving qualification verification is a comprehensive background check process that validates a candidate's 
            driving credentials, license status, and motor vehicle history. This essential screening ensures that 
            employees who will be driving for business purposes are legally qualified, have clean records, and 
            pose minimal risk to your organization and the public.
            </p>
          </div>
        </div>
      </section>

      {/* What We Verify */}
      <section className="py-16 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What We <span className="text-[var(--color-primary)]">Verify</span></h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive checks across all critical driving qualification data
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <BadgeCheck className="w-8 h-8" />, title: "License Number & Authority", desc: "Verify license number and issuing government authority" },
              { icon: <Clock className="w-8 h-8" />, title: "Issue & Expiry Dates", desc: "Confirm license validity period and expiration status" },
              { icon: <ShieldCheck className="w-8 h-8" />, title: "Violations & Suspensions", desc: "Check for DUIs, traffic violations, and license suspensions" },
              { icon: <FileSearch className="w-8 h-8" />, title: "Endorsements", desc: "Verify special driving privileges and restrictions" },
              { icon: <Gauge className="w-8 h-8" />, title: "MVR Reports", desc: "Complete Motor Vehicle Record history" },
              { icon: <Globe className="w-8 h-8" />, title: "International Licenses", desc: "Validate foreign driving permits and IDPs" }
            ].map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-all hover:-translate-y-1">
                <div className="w-14 h-14 rounded-lg bg-[#E0F7FB] flex items-center justify-center mb-6 text-[var(--color-primary)]">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

       {/* Regions Supported */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <Globe className="w-full h-full text-[var(--color-primary)]" />
        </div>
        
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Regions Supported
            </h2>
            <p className="text-lg text-gray-600">
              Access comprehensive driving records from multiple jurisdictions
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl border-2 border-gray-100 hover:border-[var(--color-primary)] transition-colors duration-300">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="w-6 h-6 text-[var(--color-success)]" />
                <h3 className="text-lg font-semibold text-gray-900">United States</h3>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li>• All 50 states MVR databases</li>
                <li>• CDLIS (Commercial Driver License Information System)</li>
                <li>• State DMV integrations</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-xl border-2 border-gray-100 hover:border-[var(--color-primary)] transition-colors duration-300">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="w-6 h-6 text-[var(--color-success)]" />
                <h3 className="text-lg font-semibold text-gray-900">Canada</h3>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li>• Provincial motor vehicle records</li>
                <li>• Transport Canada databases</li>
                <li>• Provincial licensing authorities</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-xl border-2 border-gray-100 hover:border-[var(--color-primary)] transition-colors duration-300">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="w-6 h-6 text-[var(--color-success)]" />
                <h3 className="text-lg font-semibold text-gray-900">International</h3>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li>• UK DVLA records</li>
                <li>• European Union databases</li>
                <li>• Additional markets available</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefit Section */}

      <ImageContainer
        reverse={false}
        imageSrc="/images/Driving-qualification.png"
        imageAlt="Driving Qualification illustration"
        title="Key Benefits of Driving Qualification Checks"
        highlightText=""
        features={[
          {
            icon: <ShieldCheck className="w-5 h-5 text-[var(--color-primary)]" />,
            title: "Verify Roadworthiness",
            description:
              "Ensure drivers meet your safety standards before they get behind the wheel",
          },
          {
            icon: <FileSearch className="w-5 h-5 text-[var(--color-primary)]" />,
            title: "Reduce Accident Risk",
            description:
              "Identify high-risk drivers with history of violations or suspensions",
          },
          {
            icon: <BadgeCheck className="w-5 h-5 text-[var(--color-primary)]" />,
            title: "Maintain Compliance",
            description:
              "Meet DOT, FMCSA, and insurance requirements for driver screening",
          },
          {
            icon: <Clock className="w-5 h-5 text-[var(--color-primary)]" />,
            title: "Automated Reports",
            description:
              "Get instant MVR reports without manual verification processes",
          },
          
        ]}
      />

      {/* Final CTA Section */}

      <section className="py-16 bg-gradient-to-br from-[var(--color-primary-light)] to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to Verify{" "}
              <span className="text-[var(--color-primary)]">Driving qualifications</span>
              ?
            </h2>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              Start screening driving qualifications today and protect your business with comprehensive verification.
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
  )
}

export default DrivingQualification;
