"use client";
import Navbar from "@/components/Navbar";
import {
  Shield,
  Zap,
  Users,
  CheckCircle,
  ArrowRight,
  Database,
  Lock,
  Clock,
  Award,
  TrendingUp,
  FileCheck,
  Search,
  MapPin,
  Phone,
  Building,
  Star,
} from "lucide-react";

import React from "react";
import Image from "next/image";
import CTA_Buttons from "@/components/CTA_Buttons";
import Link from "next/link";
import { motion } from "framer-motion";
import { containerVariants } from "@/animations/variants";
import FeatureCard from "@/components/FeatureCard";

export default function Home() {
  const services = [
    {
      icon: FileCheck,
      title: "Background Verification",
      description: "Comprehensive employment and criminal background checks",
      href: "/background-verification"
    },
    {
      icon: MapPin,
      title: "Address Verification",
      description: "Instant residential and business address validation",
      href: "/address-verification"
    },
    {
      icon: Phone,
      title: "Phone Verification",
      description: "Real-time mobile and landline number validation",
      href: "/phone-verification"
    },
    {
      icon: Building,
      title: "Company Verification",
      description: "Business registration and corporate validation",
      href: "/company-verification"
    }
  ];

  const stats = [
    { number: "500K+", label: "Verifications Completed" },
    { number: "99.9%", label: "Accuracy Rate" },
    { number: "24/7", label: "Support Available" },
    { number: "2 Sec", label: "Average Response Time" }
  ];

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-[color:var(--color-primary-light)] overflow-hidden">
        <div
          className="absolute inset-0 bg-[url('/images/map.jpg')] bg-cover bg-center opacity-10"
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-[var(--color-primary)] opacity-30"></div>
        </div>

        <div className="container mx-auto px-4 py-20 md:py-28 lg:py-32 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Streamline Your Verification
              <br />
              <span className="text-[var(--color-primary)]">
                Process with Verifieze
              </span>
            </h1>

            <p className="text-xl md:text-2xl mb-8 text-gray-600 max-w-3xl mx-auto">
              Comprehensive background checks, address verification, and identity validation 
              powered by automated processes and uncompromising data privacy
            </p>

            {/* Trust Badge */}
            <div className="flex justify-center mb-8">
              <div className="bg-white px-6 py-3 rounded-full shadow-lg flex items-center gap-3">
                <Award className="w-6 h-6 text-[var(--color-primary)]" />
                <span className="text-gray-700 font-semibold">
                  Backed by JFS Holdings - Sri Lanka's Most Promising HRTech Entity
                </span>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <CTA_Buttons
                primaryText="Get Started Today"
                primaryHref="/get-started"
                secondaryText="View Our Services"
                secondaryHref="#services"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[var(--color-primary)] mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose{" "}
              <span className="text-[var(--color-primary)]">Verifieze</span>?
            </h2>
            <p className="text-lg text-gray-600">
              Built on three fundamental pillars that ensure reliability, security, and efficiency
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {/* Prompt Responses */}
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="bg-[var(--color-primary-light)] p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Zap className="w-8 h-8 text-[var(--color-primary)]" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Prompt Responses
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Get instant verification results with our lightning-fast processing. 
                Most checks completed within seconds, not days.
              </p>
            </div>

            {/* Data Privacy */}
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="bg-[var(--color-primary-light)] p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Shield className="w-8 h-8 text-[var(--color-primary)]" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Data Privacy is Utmost
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Your data security is our top priority. ISO 27001 certified with 
                GDPR & DPA 2022 compliance ensuring maximum protection.
              </p>
            </div>

            {/* Automated Process */}
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="bg-[var(--color-primary-light)] p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Database className="w-8 h-8 text-[var(--color-primary)]" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Automated Process
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Streamlined workflows with minimal human intervention. 
                Automated systems ensure consistency and eliminate manual errors.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our{" "}
              <span className="text-[var(--color-primary)]">
                Verification Services
              </span>
            </h2>
            <p className="text-lg text-gray-600">
              Comprehensive verification solutions designed to meet all your compliance 
              and security needs
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {services.map((service, index) => (
              <Link
                key={index}
                href={service.href}
                className="group bg-gray-50 p-8 rounded-xl hover:bg-[var(--color-primary-light)] transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex items-start gap-6">
                  <div className="bg-white p-3 rounded-lg group-hover:bg-[var(--color-primary)] transition-colors duration-300">
                    <service.icon className="w-8 h-8 text-[var(--color-primary)] group-hover:text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[var(--color-primary)]">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="flex items-center text-[var(--color-primary)] font-semibold">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Trust & Security Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left Column - Image */}
            <div className="lg:w-1/2">
              <div className="relative rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/images/Address Checks.jpg"
                  alt="Secure verification process"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Trusted by{" "}
                <span className="text-[var(--color-primary)]">
                  Industry Leaders
                </span>
              </h2>

              <p className="text-lg text-gray-600 mb-8">
                Backed by JFS Holdings, Sri Lanka's most promising HRTech entity, 
                Verifieze brings enterprise-grade security and reliability to businesses 
                of all sizes.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-[var(--color-success)]" />
                  <span className="text-gray-700">ISO 27001 Security Certification</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-[var(--color-success)]" />
                  <span className="text-gray-700">GDPR & DPA 2022 Compliant</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-[var(--color-success)]" />
                  <span className="text-gray-700">99.9% Uptime Guarantee</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-[var(--color-success)]" />
                  <span className="text-gray-700">24/7 Technical Support</span>
                </div>
              </div>

              <div className="flex mt-8 gap-4">
                <CTA_Buttons
                  primaryText="Start Your Verification"
                  primaryHref="/get-started"
                  secondaryText="Talk to Sales"
                  secondaryHref="/contact"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How{" "}
              <span className="text-[var(--color-primary)]">It Works</span>
            </h2>
            <p className="text-lg text-gray-600">
              Simple, automated process that delivers results in seconds
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {/* Step 1 */}
            <div className="text-center relative">
              <div className="bg-[var(--color-primary)] text-white rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Submit Information
              </h3>
              <p className="text-gray-600">
                Upload candidate details or integrate via our API for seamless data transfer
              </p>
              {/* Connector Line */}
              <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gray-200 -translate-x-1/2 z-0"></div>
            </div>

            {/* Step 2 */}
            <div className="text-center relative">
              <div className="bg-[var(--color-primary)] text-white rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Automated Processing
              </h3>
              <p className="text-gray-600">
                Our AI-powered system cross-references multiple databases instantly
              </p>
              {/* Connector Line */}
              <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gray-200 -translate-x-1/2 z-0"></div>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="bg-[var(--color-primary)] text-white rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Instant Results
              </h3>
              <p className="text-gray-600">
                Receive comprehensive verification reports within seconds
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-[var(--color-primary-light)]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to Transform Your Verification Process?
            </h2>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              Join hundreds of companies that trust Verifieze for their verification needs. 
              Experience the power of automated, secure, and instant verification.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
              <CTA_Buttons
                primaryText="Start Free Trial"
                primaryHref="/get-started"
                secondaryText="Schedule Demo"
                secondaryHref="/demo"
              />
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-yellow-500" />
                <span>No Setup Fees</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[var(--color-primary)]" />
                <span>2-Second Average Response</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-[var(--color-primary)]" />
                <span>Bank-Grade Security</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}