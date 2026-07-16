"use client";
import Navbar from "@/components/Navbar";
import React from "react";
import { motion } from "framer-motion";
import { containerVariants } from "@/animations/variants";
import CTA_Buttons from "@/components/CTA_Buttons";
import {
  ShieldCheck,
  ClipboardCheck,
  Lock,
  Cpu,
  Key,
  Eye,
  Shield,
  Activity,
  HeartHandshake
} from "lucide-react";

export default function DataProtectionPage() {
  const legalCompliance = [
    {
      icon: ShieldCheck,
      title: "Adherence to Global Standards",
      description: "We align our operations with top-tier international security frameworks, maintaining strict compliance with regulations and standards like ISO 27001: 2022. This ensures our information security management system is continuously audited and optimized."
    },
    {
      icon: ClipboardCheck,
      title: "Explicit Consent Management",
      description: "We operate on a foundation of transparency. No data is collected, processed, or verified without obtaining clear, explicit consent from all involved parties beforehand."
    }
  ];

  const technicalSecurity = [
    {
      icon: Shield,
      title: "Robust Firewall Protection",
      description: "Our network perimeter is guarded by advanced firewalls that monitor and filter incoming and outgoing traffic, blocking malicious attempts and unauthorized access before they reach our systems."
    },
    {
      icon: Cpu,
      title: "Device Security & Endpoint Management",
      description: "Every workstation, server, and device connected to our network is heavily secured. We enforce strict endpoint security policies, including mandatory multi-factor authentication (MFA), full-disk encryption, and continuous monitoring for malware or vulnerabilities."
    }
  ];

  const accessControl = [
    {
      icon: Key,
      title: "Strict Access Control",
      description: "We follow the principle of least privilege. Access to sensitive data is compartmentalized, meaning employees are granted permission only to the specific information required to perform their roles, and all user activity is logged."
    },
    {
      icon: Eye,
      title: "Physical Facility Security",
      description: "Our commitment to security extends beyond software. Our physical offices and data centers are locked down with strict biometric entry systems and are monitored under 24/7 CCTV surveillance to prevent unapproved physical access to infrastructure."
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
            Data Protection &
            <br />
            <span className="text-[var(--color-primary)]">Security Compliance</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
            At VERIFIEZE, data protection and security compliance are built into the fabric of everything we do. We manage sensitive information by combining rigorous adherence to international frameworks with layers of technical and physical safeguards.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <CTA_Buttons
              primaryText="Contact Us"
              primaryHref="/contact"
              secondaryText="View Security Standards"
              secondaryHref="/risk/assessments"
            />
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl text-gray-700 leading-relaxed">
              We secure every step of our background screening services. By integrating regulatory compliance, state-of-the-art endpoint defense, and strict physical security protocols, we ensure candidate and corporate data remains completely secure.
            </p>
          </div>
        </div>
      </section>

      {/* Legal Compliance & Trust */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Legal Compliance & <span className="text-[var(--color-primary)]">Trust</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              How we establish legally sound verification systems built on consent and international compliance.
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
          >
            {legalCompliance.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 flex items-start gap-5"
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

      {/* Technical & Network Security */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Technical & <span className="text-[var(--color-primary)]">Network Security</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our continuous technical safeguards designed to defend against digital threats and data leakage.
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
          >
            {technicalSecurity.map((item, index) => (
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

      {/* Access Control & Physical Safeguards */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Access Control & <span className="text-[var(--color-primary)]">Physical Safeguards</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Restricting data access internally and securing the physical spaces where verification work is conducted.
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
                className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 flex items-start gap-5"
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

      {/* CTA Section */}
      <section className="py-16 bg-[var(--color-primary-light)]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Have Questions About Our{" "}
              <span className="text-[var(--color-primary)]">
                Data Protection Standards?
              </span>
            </h2>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              Our data security officers are available to walk you through our technical architecture and compliance frameworks.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <CTA_Buttons
                primaryText="Contact Us"
                primaryHref="/contact"
                secondaryText="View ISO Certification"
                secondaryHref="/iso"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
