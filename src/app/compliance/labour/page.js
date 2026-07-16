"use client";
import Navbar from "@/components/Navbar";
import React from "react";
import { motion } from "framer-motion";
import { containerVariants } from "@/animations/variants";
import CTA_Buttons from "@/components/CTA_Buttons";
import {
  Scale,
  ShieldAlert,
  Globe,
  Clock,
  PiggyBank,
  HeartHandshake
} from "lucide-react";

export default function LabourCompliancePage() {
  const verificationProcess = [
    {
      icon: Scale,
      title: "Legal Basis for Screening",
      description: "VERIFIEZE’s verification protocols are aligned with statutory guidelines regarding what an employer can legally request. For instance, inquiring into restricted personal characteristics or executing criminal/medical checks always requires mandatory, explicit candidate consent."
    },
    {
      icon: ShieldAlert,
      title: "Verification Limits",
      description: "Background scoring respect the anti-discrimination laws. The screening metrics are not being used to filter or bias candidates based on protected characteristics like age, gender, race, or religion."
    },
    {
      icon: Globe,
      title: "Adherence to National Standards",
      description: "Verification processes reflect the local legal requirements of where the candidate is being hired. For example, ensuring that a client's incoming hires meet statutory minimum employment age limits or verifying valid work permits and residence visas for foreign nationals."
    }
  ];

  const internalOperations = [
    {
      icon: Clock,
      title: "Wage and Hours Infrastructure",
      description: "Standard workflows are explicitly tracked and managed regulated shifts. For desk and office-bound screeners, this involves enforcing standard statutory limitations with systematic overtime tracking for any additional hours."
    },
    {
      icon: PiggyBank,
      title: "Statutory Deductions & Contributions",
      description: "Full compliance means executing flawless payroll auditing. From day one, all internal team members are securely registered for mandatory national social security and retirement funds (such as EPF and ETF contributions), ensuring zero liability risks."
    },
    {
      icon: HeartHandshake,
      title: "Workplace Well-being",
      description: "Aligning physical space operations with basic labor mandates such as providing clean, separate sanitary facilities, dedicated dining/rest areas, and maintaining strict anti-harassment policies in the company handbook."
    }
  ];

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-[color:var(--color-primary-light)] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: "url('/images/Academic-hero.jpg')" }}
          aria-hidden="true"
        />
        <div className="container mx-auto px-4 py-20 md:py-28 lg:py-32 text-center relative z-10">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Labour Rights &
            <br />
            <span className="text-[var(--color-primary)]">Operational Compliance</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
            When conducting background checks, VERIFIEZE consistently maintains the highest standards of labor rights compliance in order to deliver fully compliant and risk mitigated results to our clients.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <CTA_Buttons
              primaryText="Contact Our Team"
              primaryHref="/contact"
              secondaryText="Learn About Our Process"
              secondaryHref="/products"
            />
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl text-gray-700 leading-relaxed">
              We ensure our screening practices protect candidate rights at every turn while enforcing fair, safe, and legally compliant workplace operations within our own internal organization.
            </p>
          </div>
        </div>
      </section>

      {/* Compliance in the Verification Process */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Compliance in the <span className="text-[var(--color-primary)]">Verification Process</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              How we construct legally sound and anti-discriminatory checks aligned with national statutory screening rules.
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto"
          >
            {verificationProcess.map((item, index) => (
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

      {/* Internal Operations */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Internal <span className="text-[var(--color-primary)]">Operations & HR</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              At VERIFIEZE, our internal HR and operational practices are entirely above board. We can assure our clients that our workplace standards are developed to maintain a safe, compliant and highly ethical work environment.
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto"
          >
            {internalOperations.map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col gap-4"
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

      {/* CTA Section */}
      <section className="py-16 bg-[var(--color-primary-light)]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ensuring <span className="text-[var(--color-primary)]">Ethical Hiring Operations</span>
            </h2>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              Discover how our compliant workflows protect your organization from regulatory liabilities while keeping candidate experiences transparent and respectful.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
