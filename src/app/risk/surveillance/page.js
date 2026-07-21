"use client";
import Navbar from "@/components/Navbar";
import React from "react";
import { motion } from "framer-motion";
import { containerVariants } from "@/animations/variants";
import CTA_Buttons from "@/components/CTA_Buttons";
import {
  Cctv,
  Eye,
  Archive,
  ShieldAlert,
  Fingerprint,
  LogIn,
  ShieldOff,
  ClipboardCheck,
  ScanSearch,
} from "lucide-react";

export default function SurveillancePage() {
  const cctvFeatures = [
    {
      icon: Eye,
      title: "Zero Blind Spots",
      description:
        "Cameras cover all critical areas, including entry and exit points, verification processing floors, data servers, and archive rooms — ensuring complete visual coverage at all times."
    },
    {
      icon: Archive,
      title: "Continuous Recording & Archival",
      description:
        "All video feeds are recorded 24/7 and securely archived with restricted, audited access. This creates an unalterable visual log of every action taken within our office."
    },
    {
      icon: ShieldAlert,
      title: "Proactive Deterrence",
      description:
        "Visible cameras ensure that our staff operates under the highest standards of professional accountability, dramatically reducing the risk of internal data mishandling."
    }
  ];

  const accessControl = [
    {
      icon: Fingerprint,
      title: "Biometric Entry Barriers",
      description:
        "Our processing floors are restricted exclusively to authorized personnel actively working on your verification files. No visitors, unvetted staff, or unauthorized personnel can physically enter data-sensitive zones."
    },
    {
      icon: LogIn,
      title: "Electronic Access Logging",
      description:
        "Every single entry and exit is logged electronically and cross-referenced with our CCTV timestamps to prevent unauthorized access and maintain a complete, auditable trail."
    }
  ];

  const clientBenefits = [
    {
      icon: ShieldOff,
      title: "Zero Leakage",
      description:
        "Candidate background files, national identity numbers, and credit histories remain strictly within our digital systems and never leak into physical space.",
      color: "text-[var(--color-primary)]",
      bg: "bg-[var(--color-primary-light)]",
      border: "border-[var(--color-primary)]"
    },
    {
      icon: ClipboardCheck,
      title: "Regulatory Compliance",
      description:
        "Our physical security protocols align with global standards and local data protection acts, keeping your business fully compliant at all times.",
      color: "text-blue-600",
      bg: "bg-blue-50",
      border: "border-blue-500"
    },
    {
      icon: ScanSearch,
      title: "Complete Accountability",
      description:
        "In the highly unlikely event of an anomaly, our extensive CCTV archives and access logs allow us to investigate, isolate, and audit any physical event with absolute precision.",
      color: "text-amber-600",
      bg: "bg-amber-50",
      border: "border-amber-500"
    }
  ];

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-[color:var(--color-primary-light)] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: "url('/images/Address Checks.jpg')" }}
          aria-hidden="true"
        />
        <div className="container mx-auto px-4 py-20 md:py-28 lg:py-32 text-center relative z-10">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            On-Site Surveillance &amp;
            <br />
            <span className="text-[var(--color-primary)]">Physical Security</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
            When you partner with a background verification provider, you trust them with highly sensitive Personally Identifiable Information, financial records, and confidential candidate data. We protect it — not just in the cloud, but in the physical space where the work actually happens.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <CTA_Buttons
              primaryText="Contact Us"
              primaryHref="/contact"
              secondaryText="View Data Protection"
              secondaryHref="/compliance/data-protection"
            />
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl text-gray-700 leading-relaxed">
              A digital breach is only one half of the threat landscape. Physical security breaches — such as unauthorized personnel accessing data floors or the photographing of sensitive documents — pose an equally catastrophic risk to your organization&rsquo;s compliance and reputation. To completely eliminate these vulnerabilities, we maintain strict{" "}
              <span className="font-semibold text-[var(--color-primary)]">24/7 internal physical security and active surveillance</span>{" "}
              across all our office premises.
            </p>
          </div>
        </div>
      </section>

      {/* Active CCTV */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="bg-[var(--color-primary-light)] p-3 rounded-xl">
                <Cctv className="w-7 h-7 text-[var(--color-primary)]" />
              </div>
              <span className="text-sm font-semibold text-[var(--color-primary)] uppercase tracking-widest">Section 01</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Active CCTV in{" "}
              <span className="text-[var(--color-primary)]">Continuous Operation</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our entire facility is under constant, high-definition CCTV monitoring — 24 hours a day, 7 days a week, with no exceptions.
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto"
          >
            {cctvFeatures.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col gap-4"
              >
                <div className="bg-[var(--color-primary-light)] p-3 rounded-xl w-fit">
                  <item.icon className="w-6 h-6 text-[var(--color-primary)]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Biometric Access Control */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="bg-[var(--color-primary-light)] p-3 rounded-xl">
                <Fingerprint className="w-7 h-7 text-[var(--color-primary)]" />
              </div>
              <span className="text-sm font-semibold text-[var(--color-primary)] uppercase tracking-widest">Section 02</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Biometric &amp; <span className="text-[var(--color-primary)]">Multi-Tiered Access Control</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Physical surveillance is paired with strict access barriers. Our processing floors are restricted only to authorized personnel actively working on your verification files.
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
          >
            {accessControl.map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 flex items-start gap-5"
              >
                <div className="bg-[var(--color-primary-light)] p-3 rounded-xl shrink-0">
                  <item.icon className="w-6 h-6 text-[var(--color-primary)]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why This Matters to Clients */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Our Security Measures{" "}
              <span className="text-[var(--color-primary)]">Matter to Your Business</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              By ensuring our physical offices are under constant surveillance, we mitigate your risk in three critical ways.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {clientBenefits.map((item, index) => (
              <div
                key={index}
                className={`rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border-t-4 ${item.border} bg-white flex flex-col gap-4`}
              >
                <div className={`${item.bg} p-3 rounded-xl w-fit`}>
                  <item.icon className={`w-6 h-6 ${item.color}`} />
                </div>
                <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                  {item.description}
                </p>
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
              Choosing a Partner That Respects{" "}
              <span className="text-[var(--color-primary)]">
                Data Security — Everywhere
              </span>
            </h2>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              Our team is happy to walk you through our physical security architecture, CCTV protocols, and the measures we take to keep your sensitive data safe at every level.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <CTA_Buttons
                primaryText="Contact Us"
                primaryHref="/contact"
                secondaryText="View All Risk Measures"
                secondaryHref="/risk/assessments"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
