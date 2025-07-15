"use client";
import Navbar from "@/components/Navbar";
import {
  Building,
  User,
  ArrowRight,
  CheckCircle,
  Shield,
  Zap,
  Users,
  Star,
  Clock,
  Award,
} from "lucide-react";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { containerVariants } from "@/animations/variants";

export default function SignUp() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const businessFeatures = [
    "Bulk verification processing",
    "API integration access",
    "Custom reporting dashboard",
    "Dedicated account manager",
    "Priority support",
    "Volume-based pricing"
  ];

  const individualFeatures = [
    "Personal background checks",
    "Address verification",
    "Identity validation",
    "Instant results",
    "Secure document storage",
    "Pay-per-use pricing"
  ];

  const signUpOptions = [
    {
      id: 'business',
      title: 'Sign up as a Business',
      subtitle: 'Perfect for companies and organizations',
      icon: Building,
      features: businessFeatures,
      href: '/signup/business',
      popular: true,
      description: 'Streamline your hiring process with bulk verification capabilities and enterprise-grade features.',
      bgColor: 'bg-white',
      hoverBg: 'group-hover:bg-[var(--color-primary-light)]',
      iconBg: 'bg-[var(--color-primary-light)]',
      iconColor: 'text-[var(--color-primary)]',
      hoverIconBg: 'group-hover:bg-[var(--color-primary)]',
      hoverIconColor: 'group-hover:text-white'
    },
    {
      id: 'individual',
      title: 'Sign up as an Individual',
      subtitle: 'For personal verification needs',
      icon: User,
      features: individualFeatures,
      href: '/signup/individual',
      popular: false,
      description: 'Quick and easy verification services for personal use with instant results.',
      bgColor: 'bg-white',
      hoverBg: 'group-hover:bg-[var(--color-primary-light)]',
      iconBg: 'bg-[var(--color-primary-light)]',
      iconColor: 'text-[var(--color-primary)]',
      hoverIconBg: 'group-hover:bg-[var(--color-primary)]',
      hoverIconColor: 'group-hover:text-white'
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: "Instant Results",
      description: "Get verification results in seconds, not days"
    },
    {
      icon: Shield,
      title: "Secure & Compliant",
      description: "ISO 27001 certified with GDPR & DPA 2022 compliance"
    },
    {
      icon: Users,
      title: "24/7 Support",
      description: "Round-the-clock customer support for all users"
    }
  ];

  return (
    <>
      <Navbar />

      <br/>
      <br/>
      <br/>

      {/* Sign Up Options Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            >
              {signUpOptions.map((option) => (
                <motion.div
                  key={option.id}
                  className="relative group"
                  onMouseEnter={() => setHoveredCard(option.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  {option.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                      <div className="bg-[var(--color-primary)] text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                        <Star className="w-4 h-4" />
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className={`${option.bgColor} ${option.hoverBg} p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 h-full flex flex-col`}>
                    {/* Header */}
                    <div className="text-center mb-8">
                      <div className={`${option.iconBg} ${option.hoverIconBg} p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center transition-all duration-300`}>
                        <option.icon className={`w-10 h-10 ${option.iconColor} ${option.hoverIconColor} transition-colors duration-300`} />
                      </div>
                      
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 group-hover:text-[var(--color-primary)] transition-colors duration-300">
                        {option.title}
                      </h3>
                      
                      <p className="text-lg text-gray-600 mb-4">
                        {option.subtitle}
                      </p>
                      
                      <p className="text-gray-700 leading-relaxed">
                        {option.description}
                      </p>
                    </div>

                    {/* Features */}
                    <div className="flex-1 mb-8">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">
                        What's included:
                      </h4>
                      <ul className="space-y-3">
                        {option.features.map((feature, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-[var(--color-success)] mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA Button */}
                    <Link
                      href={option.href}
                      className="w-full bg-[var(--color-primary)] text-white py-4 px-6 rounded-xl font-semibold text-lg hover:bg-[var(--color-primary-dark)] transition-colors duration-300 flex items-center justify-center gap-3 group/btn"
                    >
                      Get Started
                      <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose{" "}
              <span className="text-[var(--color-primary)]">Verifieze</span>?
            </h2>
            <p className="text-lg text-gray-600">
              Experience the advantages of our cutting-edge verification platform
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
                <div className="bg-[var(--color-primary-light)] p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <benefit.icon className="w-8 h-8 text-[var(--color-primary)]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Trust & Security Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Trusted & Secure Platform
            </h2>
            <p className="text-lg text-gray-600 mb-10">
              Your data security is our top priority. We maintain the highest standards 
              of security and compliance to protect your information.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
              <div className="text-center">
                <div className="text-2xl font-bold text-[var(--color-primary)] mb-2">
                  ISO 27001
                </div>
                <div className="text-gray-600">Certified</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[var(--color-primary)] mb-2">
                  GDPR
                </div>
                <div className="text-gray-600">Compliant</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[var(--color-primary)] mb-2">
                  99.9%
                </div>
                <div className="text-gray-600">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[var(--color-primary)] mb-2">
                  24/7
                </div>
                <div className="text-gray-600">Support</div>
              </div>
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

      {/* FAQ Section */}
      <section className="py-16 bg-[var(--color-primary-light)]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Have Questions?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Our team is here to help you get started with the right verification solution.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/contact"
                className="bg-[var(--color-primary)] text-white py-3 px-8 rounded-xl font-semibold hover:bg-[var(--color-primary-dark)] transition-colors duration-300 flex items-center justify-center gap-3"
              >
                Contact Sales
                <ArrowRight className="w-5 h-5" />
              </Link>
              
              <Link
                href="/faq"
                className="bg-white text-[var(--color-primary)] py-3 px-8 rounded-xl font-semibold border-2 border-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white transition-colors duration-300"
              >
                View FAQ
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}