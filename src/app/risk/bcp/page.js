"use client";
import Navbar from "@/components/Navbar";
import React from "react";
import { motion } from "framer-motion";
import { containerVariants } from "@/animations/variants";
import CTA_Buttons from "@/components/CTA_Buttons";
import {
  ShieldCheck,
  Users,
  TrendingDown,
  Lock,
  Scale,
  Search,
  Cpu,
  BookOpen,
  FlaskConical,
  Activity,
  RefreshCw,
  Home,
  Database,
  MessageSquare,
  Truck,
  ClipboardCheck,
  TrendingUp,
  HeartHandshake,
} from "lucide-react";

export default function BCPPage() {
  const commitments = [
    {
      icon: ShieldCheck,
      text: "Maintaining continuity of critical business services during disruptive events.",
    },
    {
      icon: Users,
      text: "Protecting the safety and well-being of employees, clients, and stakeholders.",
    },
    {
      icon: TrendingDown,
      text: "Minimizing operational, financial, and reputational impacts.",
    },
    {
      icon: Lock,
      text: "Preserving the confidentiality, integrity, and availability of information assets.",
    },
    {
      icon: Scale,
      text: "Meeting applicable legal, regulatory, and contractual obligations.",
    },
  ];

  const approach = [
    {
      icon: Search,
      title: "Critical Functions",
      description:
        "Identification of critical business functions and supporting processes.",
    },
    {
      icon: Cpu,
      title: "Risk Assessment",
      description:
        "Assessment of potential operational, technological, cyber security, and environmental risks.",
    },
    {
      icon: BookOpen,
      title: "Recovery Strategies",
      description:
        "Development of recovery strategies and contingency arrangements.",
    },
    {
      icon: Activity,
      title: "Incident Response",
      description: "Incident response and crisis management procedures.",
    },
    {
      icon: FlaskConical,
      title: "Testing & Training",
      description:
        "Regular testing, training, and awareness activities.",
    },
    {
      icon: RefreshCw,
      title: "Continuous Monitoring",
      description:
        "Continuous monitoring and improvement of business continuity capabilities.",
    },
  ];

  const recoveryStrategies = [
    {
      icon: Home,
      title: "Alternative Working Arrangements",
      description:
        "Flexible and remote working solutions to keep operations running during disruptions.",
    },
    {
      icon: Database,
      title: "Data Backup & Recovery",
      description:
        "Robust data backup and recovery capabilities to restore information assets rapidly.",
    },
    {
      icon: MessageSquare,
      title: "Communication Procedures",
      description:
        "Clear communication and stakeholder notification procedures for all incident scenarios.",
    },
    {
      icon: Truck,
      title: "Supplier Continuity",
      description:
        "Supplier and service provider continuity measures to protect the supply chain.",
    },
    {
      icon: ClipboardCheck,
      title: "DR Testing Programs",
      description:
        "Business continuity and disaster recovery testing programs to validate preparedness.",
    },
  ];

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-[color:var(--color-primary-light)] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: "url('/images/Business-continuation.jpg')" }}
          aria-hidden="true"
        />
        <div className="container mx-auto px-4 py-20 md:py-28 lg:py-32 text-center relative z-10">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Business Continuity
            <br />
            <span className="text-[var(--color-primary)]">Plan</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
            At VERIFIEZE, we recognize the importance of maintaining reliable
            services and protecting the interests of our clients, employees, and
            stakeholders during unexpected disruptions.
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
      </section>

      {/* Framework Intro */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl text-gray-700 leading-relaxed">
              Our{" "}
              <span className="font-semibold text-[var(--color-primary)]">
                Business Continuity Management
              </span>{" "}
              framework is designed to ensure that critical business operations
              remain available and can recover efficiently from incidents that
              may affect service delivery.
            </p>
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our{" "}
              <span className="text-[var(--color-primary)]">Commitment</span>
            </h2>
          </div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="max-w-4xl mx-auto space-y-4"
          >
            {commitments.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 flex items-start gap-4 hover:shadow-md transition-shadow duration-300"
              >
                <div className="bg-[var(--color-primary-light)] p-2.5 rounded-lg shrink-0">
                  <item.icon className="w-5 h-5 text-[var(--color-primary)]" />
                </div>
                <p className="text-gray-700 leading-relaxed pt-0.5">{item.text}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Business Continuity Approach */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Business Continuity{" "}
              <span className="text-[var(--color-primary)]">Approach</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our business continuity program includes six interconnected pillars.
            </p>
          </div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
          >
            {approach.map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 flex items-start gap-4"
              >
                <div className="bg-[var(--color-primary-light)] p-3 rounded-xl shrink-0">
                  <item.icon className="w-6 h-6 text-[var(--color-primary)]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">
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

      {/* Resilience & Recovery */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Resilience &{" "}
              <span className="text-[var(--color-primary)]">Recovery</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              To support operational resilience, we maintain recovery strategies
              that enable the restoration of critical services, technology
              platforms, communications, and business processes within defined
              objectives.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {recoveryStrategies.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border-t-4 border-[var(--color-primary)]"
              >
                <div className="bg-[var(--color-primary-light)] p-3 rounded-xl w-fit mb-4">
                  <item.icon className="w-6 h-6 text-[var(--color-primary)]" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Governance + Continuous Improvement */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Governance */}
            <div className="bg-gray-50 rounded-2xl p-8 shadow-lg border-t-4 border-[var(--color-primary)]">
              <div className="bg-[var(--color-primary-light)] p-3 rounded-xl w-fit mb-5">
                <Scale className="w-7 h-7 text-[var(--color-primary)]" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Governance & Compliance
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Our Business Continuity Management practices are aligned with
                internationally recognized standards, including{" "}
                <span className="font-semibold text-[var(--color-primary)]">
                  ISO 22301
                </span>{" "}
                for Business Continuity Management and support our Information
                Security Management System based on{" "}
                <span className="font-semibold text-[var(--color-primary)]">
                  ISO/IEC 27001
                </span>
                .
              </p>
            </div>

            {/* Continuous Improvement */}
            <div className="bg-gray-50 rounded-2xl p-8 shadow-lg border-t-4 border-[var(--color-primary-dark)]">
              <div className="bg-[var(--color-primary-light)] p-3 rounded-xl w-fit mb-5">
                <TrendingUp className="w-7 h-7 text-[var(--color-primary-dark)]" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Continuous Improvement
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Business continuity is an ongoing commitment. We regularly
                review, test, and improve our resilience capabilities to address
                evolving risks, business requirements, and stakeholder
                expectations. Through proactive planning and preparedness,
                VERIFIEZE strives to deliver dependable services under a wide
                range of operational conditions.
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
              Want to Learn More About Our{" "}
              <span className="text-[var(--color-primary)]">
                Business Continuity Practices?
              </span>
            </h2>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              Our team is happy to answer any questions about how we protect
              our clients' interests and maintain service resilience.
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
