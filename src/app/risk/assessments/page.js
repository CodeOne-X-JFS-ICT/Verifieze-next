"use client";
import Navbar from "@/components/Navbar";
import React from "react";
import { motion } from "framer-motion";
import { containerVariants } from "@/animations/variants";
import CTA_Buttons from "@/components/CTA_Buttons";
import {
  ShieldCheck,
  Search,
  BarChart3,
  Lock,
  Activity,
  RefreshCw,
  ArrowRight,
  Minimize2,
  XCircle,
  Repeat2,
  CheckCircle,
  TrendingUp,
  HeartHandshake,
} from "lucide-react";

export default function RiskAssessmentsPage() {
  const ourApproach = [
    {
      icon: Search,
      title: "Identify",
      description: "Identify information assets and business-critical systems.",
    },
    {
      icon: ShieldCheck,
      title: "Assess",
      description: "Assess potential threats and vulnerabilities.",
    },
    {
      icon: BarChart3,
      title: "Evaluate",
      description:
        "Evaluate risks based on their likelihood and business impact.",
    },
    {
      icon: Lock,
      title: "Implement",
      description:
        "Implement appropriate security controls to reduce risk.",
    },
    {
      icon: Activity,
      title: "Monitor",
      description: "Monitor the effectiveness of security measures.",
    },
    {
      icon: RefreshCw,
      title: "Review",
      description:
        "Review risks periodically and whenever significant business or technology changes occur.",
    },
  ];

  const riskTreatment = [
    {
      icon: Minimize2,
      title: "Mitigate",
      description:
        "Mitigate risks through technical and organizational controls.",
      color: "text-[var(--color-primary)]",
      bg: "bg-[var(--color-primary-light)]",
      border: "border-[var(--color-primary)]",
    },
    {
      icon: XCircle,
      title: "Avoid",
      description: "Avoid risks by modifying business processes.",
      color: "text-amber-600",
      bg: "bg-amber-50",
      border: "border-amber-500",
    },
    {
      icon: Repeat2,
      title: "Transfer",
      description:
        "Transfer risks through contractual or insurance arrangements.",
      color: "text-blue-600",
      bg: "bg-blue-50",
      border: "border-blue-500",
    },
    {
      icon: CheckCircle,
      title: "Accept",
      description:
        "Accept residual risks where appropriate and approved by management.",
      color: "text-gray-600",
      bg: "bg-gray-100",
      border: "border-gray-400",
    },
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
            Information Security
            <br />
            <span className="text-[var(--color-primary)]">Risk Management</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
            At VERIFIEZE, we are committed to protecting the confidentiality,
            integrity, and availability of information entrusted to us by our
            customers, employees, and business partners.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <CTA_Buttons
              primaryText="Talk to Sales"
              primaryHref="/contact"
              secondaryText="Learn More"
              secondaryHref="/contact"
            />
          </div>
        </div>
      </section>

      {/* ISMS Intro */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl text-gray-700 leading-relaxed">
              Our{" "}
              <span className="font-semibold text-[var(--color-primary)]">
                Information Security Management System (ISMS)
              </span>{" "}
              incorporates a structured risk assessment and treatment process
              aligned with the principles of{" "}
              <span className="font-semibold">ISO/IEC 27001</span>. This
              ensures a consistent, repeatable, and auditable approach to
              managing information security risk across our entire organisation.
            </p>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our{" "}
              <span className="text-[var(--color-primary)]">Approach</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We regularly follow a structured, six-step cycle to manage
              information security risk.
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
          >
            {ourApproach.map((step, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 flex items-start gap-4"
              >
                <div className="bg-[var(--color-primary-light)] p-3 rounded-xl shrink-0">
                  <step.icon className="w-6 h-6 text-[var(--color-primary)]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Risk Treatment */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Risk{" "}
              <span className="text-[var(--color-primary)]">Treatment</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Where risks are identified, we apply one or more of the following
              strategies:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {riskTreatment.map((item, index) => (
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

      {/* Continuous Improvement + Commitment side-by-side */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Continuous Improvement */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border-t-4 border-[var(--color-primary)]">
              <div className="bg-[var(--color-primary-light)] p-3 rounded-xl w-fit mb-5">
                <TrendingUp className="w-7 h-7 text-[var(--color-primary)]" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Continuous Improvement
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Risk management is an ongoing process. We continuously review
                and improve our security controls, policies, and procedures to
                address evolving cyber threats and business requirements.
              </p>
            </div>

            {/* Commitment to Security */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border-t-4 border-[var(--color-primary-dark)]">
              <div className="bg-[var(--color-primary-light)] p-3 rounded-xl w-fit mb-5">
                <HeartHandshake className="w-7 h-7 text-[var(--color-primary-dark)]" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Commitment to Security
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Our risk management practices support our commitment to
                maintaining a secure environment for customer data, business
                operations, and service delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[var(--color-primary-light)]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Have Questions About Our{" "}
              <span className="text-[var(--color-primary)]">
                Security Practices?
              </span>
            </h2>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              Our team is happy to walk you through our ISO/IEC 27001-aligned
              risk management framework and how it protects your data.
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
