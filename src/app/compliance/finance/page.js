"use client";
import Navbar from "@/components/Navbar";
import React from "react";
import { motion } from "framer-motion";
import { containerVariants } from "@/animations/variants";
import CTA_Buttons from "@/components/CTA_Buttons";
import {
  DollarSign,
  Lock,
  UserCheck,
  PiggyBank,
  FileText
} from "lucide-react";

export default function FinanceCompliancePage() {
  const billingIntegrity = [
    {
      icon: DollarSign,
      title: "Variable Cost Itemization",
      description: "Our financial systems map exact costs per verification pipeline. This guarantees transparent, itemized invoicing for corporate clients, preventing billing discrepancies and ensuring an unalterable trail for annual corporate audits."
    },
    {
      icon: Lock,
      title: "Segmented Financial Access",
      description: "To prevent any overlap with candidate PII, our accounting structures operate under strict, isolated access privileges. Financial profiles and corporate banking records are partitioned entirely from the day-to-day background screening dashboard."
    }
  ];

  const taxAndStatutory = [
    {
      icon: UserCheck,
      title: "Flawless Payroll Allocations",
      description: "Finance compliance intersects directly with labor obligations by ensuring that internal screening teams are registered for mandatory national superannuation programs."
    },
    {
      icon: PiggyBank,
      title: "Statutory Fund Execution",
      description: "Our payroll system systematically processes mandatory monthly contributions, ensuring the exact statutory employer portion is deposited on time, avoiding penal interest or corporate liability risks."
    },
    {
      icon: FileText,
      title: "Corporate Tax Transparency",
      description: "We enforce clean financial documentation for all direct corporate tax filings and local revenue declarations, completely eliminating transaction risk within our service delivery pipeline."
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
            Financial Compliance &
            <br />
            <span className="text-[var(--color-primary)]">Billing Integrity</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
            We combine transparent billing, structured audit controls, and flawless statutory tax execution to deliver secure, reliable background check solutions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <CTA_Buttons
              primaryText="Contact Finance"
              primaryHref="/contact"
              secondaryText="Our Risk Framework"
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
              Our financial pipelines operate under strict corporate auditing rules, ensuring clear itemization of costs, safe separation of candidate data from accounting databases, and direct alignment with national tax laws.
            </p>
          </div>
        </div>
      </section>

      {/* Billing Integrity & Audit Controls */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Billing Integrity & <span className="text-[var(--color-primary)]">Audit Controls</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              How we partition sensitive data and ensure itemized financial transparency for corporate client transactions.
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
          >
            {billingIntegrity.map((item, index) => (
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

      {/* Tax Compliance & Statutory Payroll Allocations */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Tax Compliance & <span className="text-[var(--color-primary)]">Statutory Allocations</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Meeting local revenue obligations and executing flawless payroll and retirement fund management.
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto"
          >
            {taxAndStatutory.map((item, index) => (
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
              Clean Financial Integration
            </h2>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              Our accounting teams are ready to configure custom invoicing integration and compliance mapping for your enterprise audits.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <CTA_Buttons
                primaryText="Contact Finance"
                primaryHref="/contact"
                secondaryText="View FAQs"
                secondaryHref="/contact"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
