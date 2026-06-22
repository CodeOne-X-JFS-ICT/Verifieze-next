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
  BookOpen,
} from "lucide-react";

import React from "react";
import Image from "next/image";
import CTA_Buttons from "@/components/CTA_Buttons";
import Link from "next/link";
import { motion } from "framer-motion";
import { containerVariants } from "@/animations/variants";
import FeatureCard from "@/components/FeatureCard";
import { blogs } from "@/data/blogs";

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

        <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight uppercase">
              Hire with absolute certainty,
              <br />
              <span className="text-[var(--color-primary)]">
                build on bulletproof trust.
              </span>
            </h1>

            <p className="text-sm md:text-base mb-8 text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Trust should never be left to assumption. At Verifieze, we help organizations make confident hiring and business decisions through fast, accurate, and compliant background verification solutions. From validating credentials and employment history to identifying potential risks, we deliver the trusted insights businesses need to hire smarter, protect their reputation, and remain compliant. Because when facts are verified, confidence follows.
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="bg-white px-6 py-3 rounded-full shadow-lg flex items-center gap-3">
                <Award className="w-6 h-6 text-[var(--color-primary)] shrink-0" />
                <span className="text-gray-700 font-semibold text-sm md:text-base">
                  Backed by HRTECHZ - Sri Lanka's Most Promising HRTech Entity
                </span>
              </div>
              <div className="bg-white px-6 py-3 rounded-full shadow-lg flex items-center gap-3 border border-gray-50">
                <Shield className="w-6 h-6 text-[var(--color-success)] shrink-0" />
                <span className="text-gray-700 font-semibold text-sm md:text-base">
                  ISO 27001 Certified
                </span>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <CTA_Buttons
                primaryText="Get Started Today"
                primaryHref="/contact"
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

      {/* About Us Section */}
      {/* About Us Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-[var(--color-primary-light)] rounded-full blur-3xl opacity-50 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-[var(--color-primary-light)] rounded-full blur-3xl opacity-50 pointer-events-none"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            {/* Left Content */}
            <div className="lg:w-1/2 space-y-8">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-primary-light)] text-[var(--color-primary)] font-semibold text-sm mb-6">
                  <Shield className="w-4 h-4" />
                  ABOUT VERIFIEZE
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  Discover exactly <span className="text-[var(--color-primary)]">who they are.</span>
                </h2>
              </div>
              
              <div className="text-lg text-gray-600 leading-relaxed space-y-6">
                <p>
                  In today's rapidly evolving business environment, a resume tells you who a candidate <em>wants</em> to be. We tell you exactly who they <em>are</em>.
                </p>
                <p>
                  Organizations face increasing challenges with fraudulent credentials, identity misrepresentation, and compliance risks. VERIFIEZE addresses these by delivering comprehensive verification solutions that enable employers, HR professionals, and businesses to verify information with absolute confidence.
                </p>
                <p>
                  Whether you are onboarding new talent, evaluating business partners, or safeguarding your organization from risks, we deliver the trusted intelligence you need to move forward.
                </p>
              </div>

              {/* Quote block */}
              <div className="pl-6 border-l-4 border-[var(--color-primary)] bg-gradient-to-r from-[var(--color-primary-light)] to-transparent p-6 rounded-r-xl">
                <p className="font-semibold text-gray-900 text-xl italic mb-2">
                  "We eliminate the guesswork, ensuring your next hire is a proven asset—not a hidden risk."
                </p>
                <p className="text-[var(--color-primary)] font-medium">
                  Because every trusted decision begins with verified truth.
                </p>
              </div>
            </div>

            {/* Right Content - Services Card */}
            <div className="lg:w-1/2 w-full">
              <motion.div 
                className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100 p-8 md:p-10"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <Database className="w-6 h-6 text-[var(--color-primary)]" />
                  Our Verification Scope
                </h3>
                
                <p className="text-gray-600 mb-8">
                  As the leading Background Verification service provider in Sri Lanka, our services encompass:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {[
                    "Address Verification",
                    "Academic",
                    "Professional Qualifications",
                    "Employment",
                    "Education",
                    "Identity",
                    "Driving Qualifications",
                    "CRIB",
                    "Anti Money Laundering",
                    "Basic Criminal Clearance",
                    "Advanced Criminal Clearance",
                    "Referees",
                    "Character Confirmations"
                  ].map((service, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[var(--color-success)] mt-0.5 shrink-0" />
                      <span className="text-gray-700 font-medium">{service}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                  <p className="text-sm text-gray-600 leading-relaxed">
                    <span className="font-semibold text-gray-900">Advanced Technology & Security:</span> Powered by secure verification processes and rigorous quality standards, we transform critical data into actionable insights for informed decision making.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 uppercase">
              Why <span className="text-[var(--color-primary)]">VERIFIEZE</span>?
            </h2>
            <div className="text-lg text-gray-600 text-justify mb-10 space-y-4">
              <p>
                At VERIFIEZE, accuracy, confidentiality, compliance, and operational excellence form the foundation of everything we do. Our verification specialists combine industry expertise with technology-driven workflows to deliver reliable results, faster turnaround times, and a seamless client experience without compromising quality or data security.
              </p>
              <p>
                More than a background verification provider, we serve as a trusted partner in building safer workplaces, protecting organizational reputation, reducing hiring risks, and strengthening compliance frameworks. Every verification we conduct is guided by our commitment to integrity, transparency, and factual accuracy.
              </p>
            </div>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {/* Efficient and Timely Results */}
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="bg-[var(--color-primary-light)] p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Clock className="w-8 h-8 text-[var(--color-primary)]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 uppercase">
                Efficient and Timely Results
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Through streamlined processes and experienced professionals, VERIFIEZE consistently provides efficient and timely outcomes while maintaining the highest standards of quality and reliability.
              </p>
            </div>

            {/* Confidentiality and Professionalism */}
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="bg-[var(--color-primary-light)] p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Lock className="w-8 h-8 text-[var(--color-primary)]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 uppercase">
                Confidentiality and Professionalism
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                As an ISO 27001:2022 certified organization, VERIFIEZE maintains a comprehensive Information Security Management System that aligns with global best practices for safeguarding the confidentiality, integrity, and availability of information for Data Security.
              </p>
            </div>

            {/* Talented Staff */}
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="bg-[var(--color-primary-light)] p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Users className="w-8 h-8 text-[var(--color-primary)]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 uppercase">
                Talented Staff
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                VERIFIEZE's team of highly skilled and experienced professionals brings deep industry expertise, enabling the delivery of accurate, reliable, and high-quality services to clients.
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
                Backed by HRTECHZ, Sri Lanka's most promising HRTech entity, 
                VERIFIEZE brings enterprise-grade security and reliability to businesses 
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

            </div>
          </div>
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
              Join hundreds of companies that trust VERIFIEZE for their verification needs.
              Experience the power of automated, secure, and instant verification.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
              <CTA_Buttons
                primaryText="Get Started Today"
                primaryHref="/contact"
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

      {/* Blog Preview Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-primary-light)] text-[var(--color-primary)] font-semibold text-sm mb-4">
                <BookOpen className="w-4 h-4" />
                FROM THE BLOG
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Insights &{" "}
                <span className="text-[var(--color-primary)]">Resources</span>
              </h2>
            </div>
            <Link href="/blog" className="inline-flex items-center gap-2 text-[var(--color-primary)] font-semibold hover:gap-3 transition-all shrink-0">
              View all articles <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.slice(0, 3).map((blog) => (
              <Link
                key={blog.slug}
                href={`/blog/${blog.slug}`}
                className="group flex flex-col bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={blog.coverImage}
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  <span className="absolute top-4 left-4 inline-block bg-white/90 backdrop-blur-sm text-[var(--color-primary)] font-semibold text-xs px-3 py-1.5 rounded-full">
                    {blog.category}
                  </span>
                </div>
                <div className="flex flex-col flex-1 p-6">
                  <div className="flex items-center gap-3 text-xs text-gray-400 mb-3">
                    <span>{blog.date}</span>
                    <span>·</span>
                    <span>{blog.readTime}</span>
                  </div>
                  <h3 className="text-base font-bold text-gray-900 mb-2 leading-snug group-hover:text-[var(--color-primary)] transition-colors flex-1">
                    {blog.title}
                  </h3>
                  <div className="flex items-center gap-2 mt-4 text-[var(--color-primary)] font-semibold text-sm">
                    Read More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}