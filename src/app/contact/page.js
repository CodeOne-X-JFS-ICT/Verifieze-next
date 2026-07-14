"use client";
import Navbar from "@/components/Navbar";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  Users,
  Headphones,
  CheckCircle,
  ArrowRight,
  Building,
  Globe,
  Shield,
  Award,
  Zap,
  Calendar,
} from "lucide-react";

import React, { useState } from "react";
import CTA_Buttons from "@/components/CTA_Buttons";
import { motion } from "framer-motion";
import { containerVariants } from "@/animations/variants";

export default function Contact() {
  const serviceOptions = [
    'Address Verification',
    'Academic',
    'Professional Qualifications',
    'Employment',
    'Education',
    'Identity',
    'Driving Qualifications',
    'CRIB',
    'Anti Money Laundering',
    'Basic Criminal Clearance',
    'Advanced Criminal Clearance',
    'Referees',
    'Character Confirmations',
  ];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    services: [],
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleServiceToggle = (option) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(option)
        ? prev.services.filter(s => s !== option)
        : [...prev.services, option]
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', company: '', phone: '', services: [], message: '' });
      } else {
        setSubmitStatus('error');
        console.error('Contact form error:', data.error);
      }
    } catch (err) {
      setSubmitStatus('error');
      console.error('Network error:', err);
    } finally {
      setIsSubmitting(false);
      // Auto-clear status after 6 seconds
      setTimeout(() => setSubmitStatus(null), 6000);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone Support",
      details: ["+94 112 746 010"],
      subtitle: "Mon-Fri 9AM-6PM, Sat 9AM-2PM"
    },
    {
      icon: Mail,
      title: "Email Support",
      details: ["checks@verifieze.com"],
      subtitle: "24/7 Email Support"
    },
    {
      icon: MapPin,
      title: "Head Office",
      details: ["01 Lake Cres, Colombo 02, Sri Lanka"],
      subtitle: "Visit us for in-person consultations"
    },
    {
      icon: Clock,
      title: "Response Time",
      details: ["< 2 hours (Business Hours)", "< 4 hours (After Hours)"],
      subtitle: "Average response time"
    }
  ];

  const supportTeams = [
    {
      icon: Headphones,
      title: "Technical Support",
      description: "API integration, troubleshooting, and system status",
      contact: "checks@verifieze.com"
    },
    {
      icon: Users,
      title: "Sales Team",
      description: "Pricing, demos, and business inquiries",
      contact: "checks@verifieze.com"
    },
    {
      icon: Shield,
      title: "Compliance Team",
      description: "Data privacy, security, and regulatory questions",
      contact: "checks@verifieze.com"
    },
    {
      icon: MessageCircle,
      title: "Customer Success",
      description: "Account management and service optimization",
      contact: "checks@verifieze.com"
    }
  ];

  const faqs = [
    {
      question: "How quickly can I get verification results?",
      answer: "Most verification results are delivered within 2 seconds. Complex background checks may take up to 24 hours."
    },
    {
      question: "What data security measures do you have?",
      answer: "We're ISO 27001 certified with GDPR & DPA 2022 compliance. All data is encrypted and stored securely."
    },
    {
      question: "Do you offer API integration?",
      answer: "Yes, we provide RESTful APIs with comprehensive documentation for seamless integration."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept credit cards, bank transfers, and can set up monthly billing for enterprise clients."
    }
  ];

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-[color:var(--color-primary-light)] overflow-hidden">
        <div
          className="absolute inset-0 bg-[url('/images/Contact-3.jpg')] bg-cover bg-center opacity-10"
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-[var(--color-primary)] opacity-10"></div>
        </div>

        <div className="container mx-auto px-4 py-20 md:py-28 lg:py-32 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Get in Touch with
              <br />
              <span className="text-[var(--color-primary)]">
                Verifieze Team
              </span>
            </h1>

            <p className="text-xl md:text-2xl mb-8 text-gray-600 max-w-3xl mx-auto">
              Have questions about our verification services? Our expert team is here to help you 
              streamline your verification process with personalized solutions.
            </p>

            {/* Trust Badge */}
            <div className="flex justify-center mb-8">
              <div className="bg-white px-6 py-3 rounded-full shadow-lg flex items-center gap-3">
                <span className="text-gray-700 font-semibold">
                  Average Response Time: 2 Hours
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl text-center hover:shadow-lg transition-shadow">
                <div className="bg-[var(--color-primary-light)] p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <info.icon className="w-8 h-8 text-[var(--color-primary)]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{info.title}</h3>
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-[var(--color-primary)] font-semibold mb-1">
                    {detail}
                  </p>
                ))}
                <p className="text-sm text-gray-600 mt-2">{info.subtitle}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Main Contact Form Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Contact Form */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Send us a{" "}
                <span className="text-[var(--color-primary)]">Message</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Fill out the form below and we'll get back to you within 24 hours. 
                For urgent matters, please call us directly.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-colors"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-colors"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-colors"
                      placeholder="Enter company name"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-colors"
                      placeholder="Enter phone number"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Service Interest
                    {formData.services.length > 0 && (
                      <span className="ml-2 text-xs font-semibold text-white bg-[var(--color-primary)] px-2 py-0.5 rounded-full">
                        {formData.services.length} selected
                      </span>
                    )}
                  </label>
                  <div className="border border-gray-300 rounded-lg p-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {serviceOptions.map((option) => {
                      const isChecked = formData.services.includes(option);
                      return (
                        <label
                          key={option}
                          className={`flex items-center gap-3 cursor-pointer rounded-lg px-3 py-2 transition-colors ${
                            isChecked
                              ? 'bg-[var(--color-primary-light)] text-[var(--color-primary)]'
                              : 'hover:bg-gray-50 text-gray-700'
                          }`}
                        >
                          <div
                            className={`w-5 h-5 flex-shrink-0 rounded border-2 flex items-center justify-center transition-all ${
                              isChecked
                                ? 'bg-[var(--color-primary)] border-[var(--color-primary)]'
                                : 'border-gray-300 bg-white'
                            }`}
                            onClick={() => handleServiceToggle(option)}
                          >
                            {isChecked && (
                              <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                              </svg>
                            )}
                          </div>
                          <span
                            className="text-sm font-medium select-none"
                            onClick={() => handleServiceToggle(option)}
                          >
                            {option}
                          </span>
                        </label>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-colors resize-none"
                    placeholder="Tell us about your verification needs..."
                  />
                </div>


                {/* Status Feedback */}
                {submitStatus === 'success' && (
                  <div className="flex items-center gap-3 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <p className="font-medium">Message sent! We'll get back to you within 24 hours. Check your inbox for a confirmation email.</p>
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="flex items-center gap-3 p-4 bg-red-50 border border-red-200 rounded-lg text-red-800">
                    <span className="text-red-600 text-lg flex-shrink-0">⚠</span>
                    <p className="font-medium">Something went wrong. Please try again or email us directly at <a href="mailto:checks@verifieze.com" className="underline">checks@verifieze.com</a></p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[var(--color-primary)] text-white py-4 px-6 rounded-lg font-semibold hover:bg-[var(--color-primary-dark)] transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Right Column - Support Teams */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our{" "}
                <span className="text-[var(--color-primary)]">Support Teams</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Connect with the right team for your specific needs. Each team is equipped 
                with specialized knowledge to provide you with the best support.
              </p>

              <div className="space-y-6">
                {supportTeams.map((team, index) => (
                  <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                    <div className="flex items-start gap-4">
                      <div className="bg-[var(--color-primary-light)] p-3 rounded-lg">
                        <team.icon className="w-6 h-6 text-[var(--color-primary)]" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          {team.title}
                        </h3>
                        <p className="text-gray-600 mb-3">{team.description}</p>
                        <a
                          href={`mailto:${team.contact}`}
                          className="inline-flex items-center text-[var(--color-primary)] font-semibold hover:underline"
                        >
                          {team.contact}
                          <ArrowRight className="w-4 h-4 ml-1" />
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

    

      {/* Office Hours & Location */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Office Hours */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Office{" "}
                <span className="text-[var(--color-primary)]">Hours</span>
              </h2>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="font-semibold text-gray-900">Monday - Friday</span>
                  <span className="text-[var(--color-primary)] font-semibold">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="font-semibold text-gray-900">Saturday</span>
                  <span className="text-[var(--color-primary)] font-semibold">9:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="font-semibold text-gray-900">Sunday</span>
                  <span className="text-gray-500">Closed</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="font-semibold text-gray-900">Public Holidays</span>
                  <span className="text-gray-500">Closed</span>
                </div>
              </div>

              <div className="mt-8 p-6 bg-[var(--color-primary-light)] rounded-xl">
                <div className="flex items-center gap-3 mb-4">
                  <Zap className="w-6 h-6 text-[var(--color-primary)]" />
                  <h3 className="text-xl font-bold text-gray-900">Emergency Support</h3>
                </div>
                <p className="text-gray-600">
                  For critical system issues outside business hours, our emergency support 
                  team is available 24/7 for enterprise clients.
                </p>
                <a
                  href="tel:+94771234567"
                  className="inline-flex items-center mt-4 text-[var(--color-primary)] font-semibold hover:underline"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  +94 112 746 010
                </a>
              </div>
            </div>

            {/* Location & Directions */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Visit Our{" "}
                <span className="text-[var(--color-primary)]">Office</span>
              </h2>

              <div className="bg-white p-6 rounded-xl shadow-lg mb-6">
                <div className="flex items-start gap-4">
                  <div className="bg-[var(--color-primary-light)] p-3 rounded-lg">
                    <Building className="w-6 h-6 text-[var(--color-primary)]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Head Office</h3>
                    <p className="text-gray-600 mb-2">
                      Verifieze (Pvt) Ltd,<br />
                      01 Lake Cres, Colombo 02, Sri Lanka<br />  
                    </p>
                    
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Globe className="w-5 h-5 text-[var(--color-primary)]" />
                  <span className="text-gray-700">Visitor parking available in the building</span>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-[var(--color-primary)]" />
                  <span className="text-gray-700">Appointments recommended for consultations</span>
                </div>
              </div>
              <br/>

              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <CTA_Buttons
                  primaryText="Schedule Visit"
                  primaryHref="/schedule-visit"
                  secondaryText="Get Directions"
                  secondaryHref="https://maps.google.com"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      
    </>
  );
}



