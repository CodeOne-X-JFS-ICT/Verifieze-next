"use client";
import Navbar from "@/components/Navbar";
import React from "react";
import { motion } from "framer-motion";
import { containerVariants } from "@/animations/variants";
import CTA_Buttons from "@/components/CTA_Buttons";
import {
  Armchair,
  HeartPulse,
  ShieldAlert,
  FlameKindling,
  BadgeCheck,
  Lock
} from "lucide-react";

export default function HealthAndSafetyPage() {
  const ergonomics = [
    {
      icon: Armchair,
      title: "Anatomical Support",
      description:
        "Every workstation is equipped with adjustable, high-density mid-back chairs designed to maintain natural spinal alignment, reduce lumbar strain, and prevent upper-body tension."
    }
  ];

  const insurance = [
    {
      icon: HeartPulse,
      title: "Comprehensive Health Cover",
      description:
        "Full medical insurance to handle preventive care as well as unexpected medical needs, ensuring every team member has access to the care they require."
    },
    {
      icon: ShieldAlert,
      title: "Accident & Disability Protection",
      description:
        "Ensuring financial security and continuity for our team members in the face of major life events or emergencies, providing true peace of mind in the workplace."
    }
  ];

  const emergencyPreparedness = [
    {
      icon: FlameKindling,
      title: "Regular Fire & Evacuation Drills",
      description:
        "All members of the staff participate in scheduled, mandatory evacuation drills to ensure clear, rapid, and orderly responses to emergencies."
    },
    {
      icon: BadgeCheck,
      title: "Certified Safety Officers",
      description:
        "Several of our team members are fully licensed first aiders, qualified to provide immediate, compliant medical response in an emergency — a core part of our commitment to safety."
    },
    {
      icon: Lock,
      title: "Secure Infrastructure",
      description:
        "Fire extinguishers, clearly marked emergency exits, and fail-safe power backups keep our people safe and your sensitive verification data secure at all times."
    }
  ];

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-[color:var(--color-primary-light)] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: "url('/images/Employment Checks.jpg')" }}
          aria-hidden="true"
        />
        <div className="container mx-auto px-4 py-20 md:py-28 lg:py-32 text-center relative z-10">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Workplace Health &
            <br />
            <span className="text-[var(--color-primary)]">Safety Compliance</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
            At our core, we verify trust — and that starts with how we take care of our own people. Maintaining a secure, healthy, and compliant workplace ensures our team can focus on delivering the accurate, fast vetting services your business relies on.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <CTA_Buttons
              primaryText="Contact Us"
              primaryHref="/contact"
              secondaryText="View Our Compliance"
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
              Here is how we protect our workforce and ensure complete operational resilience — from ergonomic workspace design and comprehensive insurance to emergency preparedness and certified safety officers.
            </p>
          </div>
        </div>
      </section>

      {/* Ergonomics & Workplace Design */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ergonomics &amp; <span className="text-[var(--color-primary)]">Workplace Design</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Data security and deep research require hours of focus. To minimise health-related problems like fatigue, repetitive strain injuries, and chronic back pain, we invest heavily in ergonomic workspace design.
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-1 gap-8 max-w-3xl mx-auto"
          >
            {ergonomics.map((item, index) => (
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

      {/* Comprehensive Employee Insurance */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive <span className="text-[var(--color-primary)]">Employee Insurance</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A resilient team is a protected team. We provide our employees with robust insurance coverage to ensure peace of mind and swift care when it matters the most.
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
          >
            {insurance.map((item, index) => (
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

      {/* Emergency Preparedness & Fire Safety */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Emergency Preparedness &amp; <span className="text-[var(--color-primary)]">Fire Safety</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Compliance is not just a policy — it is a practice. We maintain a zero-compromise approach to physical security and emergency readiness.
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto"
          >
            {emergencyPreparedness.map((item, index) => (
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

      {/* CTA Section */}
      <section className="py-16 bg-[var(--color-primary-light)]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Have Questions About Our{" "}
              <span className="text-[var(--color-primary)]">
                Workplace Standards?
              </span>
            </h2>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              Our team is happy to walk you through our health and safety frameworks, emergency protocols, and the measures we take to protect our people and your data.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <CTA_Buttons
                primaryText="Contact Us"
                primaryHref="/contact"
                secondaryText="View All Compliance"
                secondaryHref="/compliance/data-protection"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
