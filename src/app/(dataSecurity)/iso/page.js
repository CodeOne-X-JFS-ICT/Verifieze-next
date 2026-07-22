"use client";
import Navbar from "@/components/Navbar";
import {
  Shield,
  Lock,
  Server,
  Eye,
  KeyRound,
  Monitor,
  FileText,
  CheckCircle,
  AlertTriangle,
  Database,
  Network,
  Users,
  Fingerprint,
  Camera,
  HardDrive,
  Wifi,
  Settings,
  Globe,
  Target,
  Award,
  Sparkles,
} from "lucide-react";

import React from "react";
import Image from "next/image";
import CTA_Buttons from "@/components/CTA_Buttons";
import Link from "next/link";
import { motion } from "framer-motion";
import { containerVariants } from "@/animations/variants";
import FeatureCard from "@/components/FeatureCard";

function ISO27001DataSecurityPage() {
  const securityMeasures = [
    {
      title: "Device Security",
      category: "Endpoint Protection",
      description: "All employee devices are safeguarded with ESET Endpoint Security, ensuring proactive detection and prevention of malware. Software installation privileges are strictly controlled through the use of administrator and standard user accounts, allowing employees only the access necessary for their roles.",
      icon: Monitor,
      image: "/images/lap.jpeg", 
      type: "Device",
      features: ["ESET Endpoint Security", "Controlled Privileges", "Role-based Access"]
    },
    {
      title: "Firewall Protection",
      category: "Network Security",
      description: "A dedicated firewall is maintained to monitor and control network traffic, creating a powerful barrier against unauthorized access and enhancing overall network security.",
      icon: Shield,
      image: "/images/firewall.jpg", 
      type: "Network",
      features: ["Traffic Monitoring", "Access Control", "Threat Prevention"]
    },
    {
      title: "Prevention of Unauthorized Data Transfer",
      category: "Data Loss Prevention",
      description: "USB drive access on all devices is disabled to prevent unapproved data transfers. All work-related data is backed up regularly to a secure, dedicated server with shared network locations, ensuring information remains protected and readily available when needed.",
      icon: HardDrive,
      image: "/images/pendriveblock.png", 
      features: ["USB Restrictions", "Secure Backups", "Network Storage"]
    },
    {
      title: "CCTV Surveillance",
      category: "Physical Security",
      description: "Both exterior and interior areas, including critical zones such as the server room, main entry, and exit points, are monitored through CCTV cameras. Critical areas are observed on a continuous 24/7 basis, while general office areas are reviewed daily.",
      icon: Camera,
      image: "/images/cctv.jpg", 
      type: "Physical",
      features: ["24/7 Monitoring", "Critical Zone Coverage", "Incident Recording"]
    },
    {
      title: "Access Control",
      category: "Physical Security",
      description: "Entry to the premises is restricted through a biometric fingerprint system, ensuring only authorized personnel are granted access. Role-based access controls are applied to sensitive locations, including the record room and backup server, limiting entry to individuals with specific authorization.",
      icon: Fingerprint,
      image: "/images/fingerprint.jpg", 
      type: "Access",
      features: ["Biometric Authentication", "Role-based Controls", "Restricted Areas"]
    }
  ];

  const complianceFeatures = [
    {
      title: "Confidentiality",
      description: "Ensuring sensitive information is accessible only to authorized individuals",
      icon: Lock,
      color: "blue"
    },
    {
      title: "Integrity",
      description: "Maintaining accuracy and completeness of data throughout its lifecycle",
      icon: CheckCircle,
      color: "green"
    },
    {
      title: "Availability",
      description: "Ensuring information and systems are accessible when needed",
      icon: Globe,
      color: "purple"
    }
  ];

  const getTypeColor = (type) => {
    switch (type) {
      case "Device":
        return "bg-blue-50 border-blue-200";
      case "Network":
        return "bg-green-50 border-green-200";
      case "Data":
        return "bg-purple-50 border-purple-200";
      case "Physical":
        return "bg-orange-50 border-orange-200";
      case "Access":
        return "bg-red-50 border-red-200";
      default:
        return "bg-gray-50 border-gray-200";
    }
  };

  const getIconColor = (type) => {
    switch (type) {
      case "Device":
        return "text-blue-600";
      case "Network":
        return "text-green-600";
      case "Data":
        return "text-purple-600";
      case "Physical":
        return "text-orange-600";
      case "Access":
        return "text-red-600";
      default:
        return "text-gray-600";
    }
  };

  const getFeatureColor = (color) => {
    switch (color) {
      case "blue":
        return "bg-blue-50 border-blue-200 text-blue-600";
      case "green":
        return "bg-green-50 border-green-200 text-green-600";
      case "purple":
        return "bg-purple-50 border-purple-200 text-purple-600";
      default:
        return "bg-gray-50 border-gray-200 text-gray-600";
    }
  };

  return (
    <>
      <Navbar />

      {/* Hero section */}
      <section className="relative bg-[color:var(--color-primary-light)] overflow-hidden">
        <div className="container mx-auto px-4 py-20 md:py-28 lg:py-32 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left Column - Content */}
            <div className="lg:w-1/2 text-center lg:text-left">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                ISO 27001{" "}
                <span className="text-[var(--color-primary)]">
                  Data Security
                </span>
              </h1>

              <p className="text-xl mb-8 text-gray-600 max-w-3xl lg:max-w-none">
                Protecting your data with world-class security standards. Our comprehensive Information Security 
                Management System ensures the confidentiality, integrity, and availability of all client information.
              </p>

              
            </div>

            {/* Right Column - Logo */}
            <div className="lg:w-1/2 flex justify-center lg:justify-end">
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
                <Image
                  src="/images/isologo.jpg"
                  alt="iso Logo"
                  width={300}
                  height={200}
                  className="w-full max-w-sm h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ISO 27001 Overview Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                What is{" "}
                <span className="text-[var(--color-primary)]">
                  ISO 27001?
                </span>
              </h2>

              <p className="text-lg text-gray-600 mb-8">
                ISO 27001 is the global standard for Information Security Management Systems (ISMS), 
                designed to help organizations protect sensitive data and manage security risks. It ensures 
                the confidentiality, integrity, and availability of information while providing a framework 
                to establish, implement, and continually improve information security practices.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {complianceFeatures.map((feature, index) => (
                <div key={index} className="text-center p-6 rounded-xl border-2 border-gray-100 hover:border-[var(--color-primary-light)] transition-colors">
                  <div className="bg-[var(--color-primary-light)] p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <feature.icon className="w-8 h-8 text-[var(--color-primary)]" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Status Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our{" "}
              <span className="text-[var(--color-primary)]">
                Compliance Journey
              </span>
            </h2>
            <p className="text-lg text-gray-600">
              HRTECHZ is committed to maintaining the highest standards of information security 
              and data protection for all our clients and stakeholders.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-[var(--color-primary-light)]">
            <div className="flex items-start gap-6">
              <div className="bg-[var(--color-primary-light)] p-3 rounded-full">
                <Award className="w-8 h-8 text-[var(--color-primary)]" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">ISO 27001 Compliance</h3>
                <p className="text-lg text-gray-600 mb-6">
                  In line with this standard, HRTECHZ prioritizes the protection of all client data. 
                  As a BPO services provider specializing in staff augmentation, robust measures are in place 
                  to safeguard sensitive information at every stage. The sister company in the ICT sector is 
                  currently in the final stages of obtaining ISO 27001 certification, further strengthening 
                  overall security compliance.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="bg-[var(--color-primary-light)] text-[var(--color-primary)] px-4 py-2 rounded-full text-sm font-semibold">
                    Client Data Protection
                  </span>
                  <span className="bg-[var(--color-primary-light)] text-[var(--color-primary)] px-4 py-2 rounded-full text-sm font-semibold">
                    BPO Security Standards
                  </span>
                  <span className="bg-[var(--color-primary-light)] text-[var(--color-primary)] px-4 py-2 rounded-full text-sm font-semibold">
                    Certification in Progress
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Measures Statistics */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive{" "}
              <span className="text-[var(--color-primary)]">
                Security Framework
              </span>
            </h2>
            <p className="text-lg text-gray-600">
              Our multi-layered security approach ensures maximum protection across all aspects 
              of data handling and infrastructure management.
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            <FeatureCard
              icon={Monitor}
              title="Device Security"
              description="ESET Endpoint Security with controlled access privileges across all employee devices."
            />

            <FeatureCard
              icon={Shield}
              title="Network Protection"
              description="Dedicated firewall monitoring and controlling all network traffic 24/7."
            />

            <FeatureCard
              icon={Camera}
              title="Physical Surveillance"
              description="Comprehensive CCTV monitoring of critical areas with 24/7 observation."
            />

            <FeatureCard
              icon={Fingerprint}
              title="Access Control"
              description="Biometric authentication and role-based access to sensitive locations."
            />
          </motion.div>
        </div>
      </section>

      {/* Detailed Security Measures Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our{" "}
                <span className="text-[var(--color-primary)]">
                  Security Measures
                </span>
              </h2>
              <p className="text-lg text-gray-600">
                Detailed overview of our comprehensive security implementations and protocols.
              </p>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="space-y-8"
            >
              {securityMeasures.map((measure, index) => {
                const IconComponent = measure.icon;
                return (
                  <motion.div
                    key={index}
                    className={`p-8 rounded-xl border-2 ${getTypeColor(measure.type)} hover:shadow-lg transition-shadow duration-300`}
                    whileHover={{ scale: 1.01 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex flex-col lg:flex-row gap-8 items-start">
                      {/* Image Section */}
                      <div className="lg:w-1/3 flex-shrink-0">
                        <div className="relative rounded-lg overflow-hidden">
                          <Image
                            src={measure.image}
                            alt={measure.title}
                            width={400}
                            height={300}
                            className="w-full h-auto object-contain"
                            style={{ aspectRatio: 'auto' }}
                          />
                        </div>
                      </div>

                      {/* Content Section */}
                      <div className="lg:w-2/3 flex-1">
                        <div className="flex items-start gap-4 mb-6">
                          <div className="bg-white p-3 rounded-full">
                            <IconComponent className={`w-8 h-8 ${getIconColor(measure.type)}`} />
                          </div>
                          <div className="flex-1">
                            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getIconColor(measure.type)} bg-white inline-block mb-3`}>
                              {measure.category}
                            </span>
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">
                              {measure.title}
                            </h3>
                          </div>
                        </div>
                        
                        <p className="text-gray-600 text-base leading-relaxed mb-6">
                          {measure.description}
                        </p>

                        <div className="space-y-2">
                          <h4 className="text-sm font-semibold text-gray-700 mb-3">Key Features:</h4>
                          <div className="flex flex-wrap gap-2">
                            {measure.features.map((feature, featureIndex) => (
                              <span 
                                key={featureIndex}
                                className="bg-white px-3 py-1 rounded-full text-xs font-medium text-gray-700 border"
                              >
                                {feature}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Security Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Our Security{" "}
              <span className="text-[var(--color-primary)]">
                Matters
              </span>
            </h2>

            <p className="text-lg text-gray-600 mb-12">
              Our commitment to ISO 27001 standards and comprehensive security measures provides 
              tangible benefits for our clients and stakeholders.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start gap-4 p-6 rounded-xl border border-gray-200 hover:border-[var(--color-primary-light)] transition-colors">
                <div className="bg-[var(--color-primary-light)] p-3 rounded-full">
                  <Lock className="w-6 h-6 text-[var(--color-primary)]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Client Trust & Confidence
                  </h3>
                  <p className="text-gray-600">
                    Our robust security framework builds trust with clients, ensuring their 
                    sensitive data is protected with industry-leading standards.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 rounded-xl border border-gray-200 hover:border-[var(--color-primary-light)] transition-colors">
                <div className="bg-[var(--color-primary-light)] p-3 rounded-full">
                  <CheckCircle className="w-6 h-6 text-[var(--color-primary)]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Regulatory Compliance
                  </h3>
                  <p className="text-gray-600">
                    Meeting international security standards ensures compliance with 
                    regulatory requirements and industry best practices.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 rounded-xl border border-gray-200 hover:border-[var(--color-primary-light)] transition-colors">
                <div className="bg-[var(--color-primary-light)] p-3 rounded-full">
                  <Target className="w-6 h-6 text-[var(--color-primary)]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Risk Mitigation
                  </h3>
                  <p className="text-gray-600">
                    Proactive security measures minimize risks and protect against 
                    potential threats and data breaches.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 rounded-xl border border-gray-200 hover:border-[var(--color-primary-light)] transition-colors">
                <div className="bg-[var(--color-primary-light)] p-3 rounded-full">
                  <Globe className="w-6 h-6 text-[var(--color-primary)]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Global Standards
                  </h3>
                  <p className="text-gray-600">
                    Adherence to ISO 27001 demonstrates our commitment to 
                    international security excellence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Continuous Improvement Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Continuous{" "}
              <span className="text-[var(--color-primary)]">
                Security Enhancement
              </span>
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Our commitment to data security extends beyond compliance. We continuously evaluate, 
              update, and enhance our security measures to stay ahead of evolving threats and 
              maintain the highest levels of protection.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="bg-[var(--color-primary-light)] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Settings className="w-8 h-8 text-[var(--color-primary)]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Regular Updates</h3>
                <p className="text-gray-600">Continuously updating security protocols and systems</p>
              </div>

              <div className="text-center">
                <div className="bg-[var(--color-primary-light)] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="w-8 h-8 text-[var(--color-primary)]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Monitoring</h3>
                <p className="text-gray-600">24/7 monitoring and threat detection systems</p>
              </div>

              <div className="text-center">
                <div className="bg-[var(--color-primary-light)] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-8 h-8 text-[var(--color-primary)]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Innovation</h3>
                <p className="text-gray-600">Adopting cutting-edge security technologies</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[var(--color-primary-light)]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Secure Your Data with Confidence
            </h2>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              Partner with HRTECHZ for secure, compliant, and reliable BPO services. 
              Our ISO 27001-aligned security framework ensures your data remains protected 
              at all times.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <CTA_Buttons
                primaryText="Discuss Your Security Needs"
                primaryHref=""
                secondaryText="Learn More About Our Services"
                secondaryHref=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ISO27001DataSecurityPage;