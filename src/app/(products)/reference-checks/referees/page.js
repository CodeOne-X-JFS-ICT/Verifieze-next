"use client";
import CTA_Buttons from "@/components/CTA_Buttons";
import Navbar from "@/components/Navbar";
import React from "react";
import { motion } from "framer-motion";
import { containerVariants } from "@/animations/variants";
import FeatureCard from "@/components/FeatureCard";
import {
  Users,
  FileText,
  Clock,
  Briefcase,
  CheckCircle,
  MessageCircle,
  ShieldCheck,
  Target
} from "lucide-react";
import Image from "next/image";

function RefereesPage() {
  return (
    <>
      <Navbar />
      {/* Hero section */}
      <section className="relative bg-[color:var(--color-primary-light)] overflow-hidden">
        <div
          className="absolute inset-0 bg-[url('/images/Business-continuation.jpg')] bg-cover bg-center opacity-15"
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-[var(--color-primary)] opacity-10"></div>
        </div>

        <div className="container mx-auto px-4 py-20 md:py-28 lg:py-32 text-center relative z-10">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Move Past the Standard
            <br />
            <span className="text-[var(--color-primary)]">
              "Good Guy" Recommendations
            </span>
          </h1>

          <p className="text-xl mb-8 text-gray-600 max-w-3xl mx-auto">
            Transform basic testimonials into deep, actionable insights regarding a candidate's soft skills, workplace performance, and true working style. By gathering objective feedback from those who have worked alongside them, we give you a clear, 360-degree view of how your potential hire handles pressure, collaboration, and leadership.
          </p>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <CTA_Buttons
              primaryText="Start Verifying"
              primaryHref="/contact"
              secondaryText="Talk to Sales"
              secondaryHref="/contact"
            />
          </div>
        </div>
      </section>

      {/* Product Scope Header */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Product{" "}
              <span className="text-[var(--color-primary)]">
                Scope
              </span>
            </h2>
            <p className="text-lg text-gray-600">
              A comprehensive approach to reference checking that goes beyond surface-level confirmations to deliver high-value validation.
            </p>
          </div>

          {/* Scope Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
          >
            {/* Dual-Reference Audit */}
            <FeatureCard
              icon={Users}
              title="Dual-Reference Audit"
              description="Includes two comprehensive checks with resident referees via highly responsive telephone or email outreach."
            />

            {/* Tailored Questionnaires */}
            <FeatureCard
              icon={FileText}
              title="Tailored Questionnaires"
              description="Insights are gathered using a structured questionnaire that can be fully customized and amended to match your company's specific competencies and hiring requirements."
            />

            {/* Proactive Delays Mitigation */}
            <FeatureCard
              icon={Clock}
              title="Proactive Delays Mitigation"
              description="If a referee is unreachable, we immediately loop in the Client or Candidate to secure alternative references, ensuring your onboarding timeline never stalls."
            />

            {/* Targeted Managerial Insights */}
            <FeatureCard
              icon={Target}
              title="Targeted Managerial Insights"
              description="Upon request, we can specifically target and appoint the candidate's immediate past supervisors or reporting managers to provide high-value, direct performance validation."
            />
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our 360°{" "}
              <span className="text-[var(--color-primary)]">
                Feedback Process
              </span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6 bg-white p-8 rounded-2xl shadow-lg border-t-4 border-[var(--color-primary)]">
              {/* Step 1 */}
              <div className="flex items-start gap-4">
                <div className="bg-[var(--color-primary)] text-white p-2 rounded-full min-w-[40px] h-10 flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Structured Outreach</h3>
                  <p className="text-gray-600 mt-1">
                    We initiate highly responsive telephone or email outreach to the provided resident referees or targeted immediate past supervisors.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex items-start gap-4">
                <div className="bg-[var(--color-primary)] text-white p-2 rounded-full min-w-[40px] h-10 flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Customized Data Gathering</h3>
                  <p className="text-gray-600 mt-1">
                    Feedback is collected using your tailored questionnaire to capture the exact soft skills, competencies, and performance metrics you care about.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex items-start gap-4">
                <div className="bg-[var(--color-primary)] text-white p-2 rounded-full min-w-[40px] h-10 flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Actionable Insights Delivery</h3>
                  <p className="text-gray-600 mt-1">
                    You receive a clear, comprehensive, and objective 360-degree view of the candidate's true working style, allowing you to hire with confidence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-[var(--color-primary-light)]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to Gain Deep{" "}
              <span className="text-[var(--color-primary)]">Candidate Insights</span>?
            </h2>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              Stop relying on basic testimonials. Uncover how your potential hire truly performs under pressure, collaborates with teams, and leads.
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

export default RefereesPage;
