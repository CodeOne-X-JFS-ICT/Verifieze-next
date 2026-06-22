"use client";
import Navbar from "@/components/Navbar";
import {
  Award,
  Trophy,
  Medal,
  Star,
  Crown,
  Shield,
  Target,
  TrendingUp,
  Calendar,
  CheckCircle,
  Sparkles,
  Globe,
} from "lucide-react";

import React from "react";
import CTA_Buttons from "@/components/CTA_Buttons";
import Link from "next/link";
import { motion } from "framer-motion";
import { containerVariants } from "@/animations/variants";
import FeatureCard from "@/components/FeatureCard";

function AwardsRecognitionPage() {
  const awards = [
    {
      year: "2024",
      title: "National Gold Award",
      organization: "CNCI Achiever Awards 2024",
      description: "JFS Holdings won the National Gold Award at the CNCI Achiever Awards 2024, recognizing excellence in operations and innovation.",
      type: "Gold",
      icon: Crown
    },
    {
      year: "2023",
      title: "Certificate of Compliance",
      organization: "TAGS Awards 2023",
      description: "Our Annual Report 'The STARGATE' 2022/23 earned a Certificate of Compliance at the TAGS Awards on Dec 12, 2023, for transparency and reporting standards.",
      type: "Certificate",
      icon: CheckCircle
    },
    {
      year: "2023",
      title: "Silver Award",
      organization: "31st National Export Awards 2023",
      description: "Received the Silver Award in the Export Services category at the 31st NCE Awards on December 8, 2023.",
      type: "Silver",
      icon: Medal
    },
    {
      year: "2023",
      title: "Merit Award",
      organization: "09th CMA Awards 2023",
      description: "'The STARGATE' 2022/23 Annual Report received a Merit Award at the 09th CMA Reporting Awards on Oct 6, 2023.",
      type: "Merit",
      icon: Star
    },
    {
      year: "2023",
      title: "National Gold Award",
      organization: "CNCI Achiever Awards 2023",
      description: "Awarded National Gold on Oct 18, 2023, at the CNCI Achiever Awards for business excellence and sustainability.",
      type: "Gold",
      icon: Crown
    },
    {
      year: "2022",
      title: "Certificate of Compliance",
      organization: "TAGS Awards 2022",
      description: "Our 'BILLION RUN' 2021/22 Annual Report received a Certificate of Compliance at the TAGS Awards on Dec 6, 2022.",
      type: "Certificate",
      icon: CheckCircle
    },
    {
      year: "2022",
      title: "Silver Award",
      organization: "30th National Export Awards 2022",
      description: "Won Silver in the Export Services category at the 30th NCE Export Awards on December 2, 2022.",
      type: "Silver",
      icon: Medal
    },
    {
      year: "2022",
      title: "National Silver Award",
      organization: "CNCI Achiever Awards 2022",
      description: "Earned National Silver at CNCI Achiever Awards 2022 on Dec 22 for strong performance during tough times.",
      type: "Silver",
      icon: Medal
    },
    {
      year: "2021",
      title: "National Merit Award",
      organization: "20th CNCI Achiever Awards 2021",
      description: "Received a National Merit Award on January 12, 2022, marking a key early achievement in our growth journey.",
      type: "Merit",
      icon: Star
    }
  ];

  const getAwardTypeColor = (type) => {
    switch (type) {
      case "Gold":
        return "bg-yellow-50 border-yellow-200";
      case "Silver":
        return "bg-gray-50 border-gray-200";
      case "Certificate":
        return "bg-blue-50 border-blue-200";
      case "Merit":
        return "bg-purple-50 border-purple-200";
      default:
        return "bg-gray-50 border-gray-200";
    }
  };

  const getIconColor = (type) => {
    switch (type) {
      case "Gold":
        return "text-yellow-600";
      case "Silver":
        return "text-gray-600";
      case "Certificate":
        return "text-blue-600";
      case "Merit":
        return "text-purple-600";
      default:
        return "text-gray-600";
    }
  };

  return (
    <>
      <Navbar />

      {/* Hero section */}
      <section className="relative bg-[color:var(--color-primary-light)] overflow-hidden">
        <div className="container mx-auto px-4 py-20 md:py-28 lg:py-32 text-center relative z-10">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Awards &{" "}
            <span className="text-[var(--color-primary)]">
              Recognition
            </span>
          </h1>

          <p className="text-xl mb-8 text-gray-600 max-w-3xl mx-auto">
            Celebrating excellence, innovation, and industry leadership. Our awards reflect our commitment 
            to delivering outstanding value and maintaining the highest standards across all business operations.
          </p>

          
        </div>
      </section>

      {/* Awards Statistics Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Recognition{" "}
              <span className="text-[var(--color-primary)]">
                at a Glance
              </span>
            </h2>
            <p className="text-lg text-gray-600">
              Our track record of excellence spans multiple years and various categories, 
              demonstrating consistent performance and industry leadership.
            </p>
          </div>

          {/* Statistics Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {/* Total Awards */}
            <FeatureCard
              icon={Trophy}
              title="10+ Awards"
              description="Total awards received across multiple categories and organizations since 2021."
            />

            {/* Gold Awards */}
            <FeatureCard
              icon={Crown}
              title="3 Gold Awards"
              description="National Gold Awards from CNCI Achiever Awards recognizing our excellence."
            />

            {/* Export Recognition */}
            <FeatureCard
              icon={Globe}
              title="Export Excellence"
              description="Multiple Silver Awards in Export Services category at National Export Awards."
            />

            {/* Reporting Standards */}
            <FeatureCard
              icon={Shield}
              title="Compliance Certified"
              description="Certificates of Compliance for our annual reports demonstrating transparency."
            />
          </motion.div>
        </div>
      </section>

      {/* Awards Timeline Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our{" "}
                <span className="text-[var(--color-primary)]">
                  Award Journey
                </span>
              </h2>
              <p className="text-lg text-gray-600">
                A comprehensive timeline of our achievements and recognition over the years.
              </p>
            </div>

            {/* Awards Grid */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {awards.map((award, index) => {
                const IconComponent = award.icon;
                return (
                  <motion.div
                    key={index}
                    className={`p-6 rounded-xl border-2 ${getAwardTypeColor(award.type)} hover:shadow-lg transition-shadow duration-300`}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`p-2 rounded-full bg-white`}>
                        <IconComponent className={`w-6 h-6 ${getIconColor(award.type)}`} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getIconColor(award.type)} bg-white`}>
                            {award.year}
                          </span>
                          <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getIconColor(award.type)} bg-white`}>
                            {award.type}
                          </span>
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-1">
                          {award.title}
                        </h3>
                        <p className={`text-sm font-medium ${getIconColor(award.type)} mb-3`}>
                          {award.organization}
                        </p>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {award.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Award Categories Section - Restructured */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Excellence Across{" "}
                <span className="text-[var(--color-primary)]">
                  Multiple Categories
                </span>
              </h2>

              <p className="text-lg text-gray-600 mb-8">
                Our awards span various categories, reflecting our comprehensive approach to business 
                excellence and our commitment to setting industry standards.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Business Excellence */}
              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <div className="bg-[var(--color-primary-light)] p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Trophy className="w-8 h-8 text-[var(--color-primary)]" />
                </div>
                <h3 className="text-xl font-semibold mb-4">
                  Business Excellence & Innovation
                </h3>
                <p className="text-gray-600">
                  Multiple National Gold Awards from CNCI Achiever Awards recognizing our 
                  operational excellence and innovative business practices.
                </p>
              </div>

              {/* Export Services */}
              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <div className="bg-[var(--color-primary-light)] p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-[var(--color-primary)]" />
                </div>
                <h3 className="text-xl font-semibold mb-4">
                  Export Services Excellence
                </h3>
                <p className="text-gray-600">
                  Consistent recognition in Export Services category at National Export Awards, 
                  highlighting our global business capabilities.
                </p>
              </div>

              {/* Reporting Standards */}
              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <div className="bg-[var(--color-primary-light)] p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-[var(--color-primary)]" />
                </div>
                <h3 className="text-xl font-semibold mb-4">
                  Transparency & Reporting
                </h3>
                <p className="text-gray-600">
                  Certificates of Compliance for our annual reports "The STARGATE" and 
                  "BILLION RUN," demonstrating our commitment to transparency.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recognition Impact Section - Restructured */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                What Our{" "}
                <span className="text-[var(--color-primary)]">
                  Awards Mean
                </span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Industry Leadership */}
              <div className="flex items-start gap-4 p-6 bg-white rounded-xl">
                <div className="bg-[var(--color-primary-light)] p-3 rounded-full flex-shrink-0">
                  <Crown className="w-6 h-6 text-[var(--color-primary)]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    Industry Leadership
                  </h3>
                  <p className="text-gray-600">
                    Our awards validate our position as a leader in the Sri Lankan business 
                    landscape and our commitment to setting industry benchmarks.
                  </p>
                </div>
              </div>

              {/* Quality Assurance */}
              <div className="flex items-start gap-4 p-6 bg-white rounded-xl">
                <div className="bg-[var(--color-primary-light)] p-3 rounded-full flex-shrink-0">
                  <Shield className="w-6 h-6 text-[var(--color-primary)]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    Quality Assurance
                  </h3>
                  <p className="text-gray-600">
                    Recognition from prestigious organizations confirms our dedication to 
                    maintaining the highest quality standards across all operations.
                  </p>
                </div>
              </div>

              {/* Client Confidence */}
              <div className="flex items-start gap-4 p-6 bg-white rounded-xl">
                <div className="bg-[var(--color-primary-light)] p-3 rounded-full flex-shrink-0">
                  <Target className="w-6 h-6 text-[var(--color-primary)]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    Client Confidence
                  </h3>
                  <p className="text-gray-600">
                    These accolades provide our clients and partners with confidence in our 
                    capabilities and commitment to excellence.
                  </p>
                </div>
              </div>

              {/* Growth Trajectory */}
              <div className="flex items-start gap-4 p-6 bg-white rounded-xl">
                <div className="bg-[var(--color-primary-light)] p-3 rounded-full flex-shrink-0">
                  <TrendingUp className="w-6 h-6 text-[var(--color-primary)]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    Sustainable Growth
                  </h3>
                  <p className="text-gray-600">
                    The consistency of our awards demonstrates our sustainable growth model 
                    and long-term business strategy effectiveness.
                  </p>
                </div>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex mt-12 justify-center gap-4">
              <CTA_Buttons
                primaryText="Learn More About Us"
                primaryHref=""
                secondaryText="Partnership Opportunities"
                secondaryHref=""
              />
            </div>
          </div>
        </div>
      </section>

      {/* Future Goals Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Continuing Our{" "}
              <span className="text-[var(--color-primary)]">
                Journey of Excellence
              </span>
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Our awards history motivates us to continue pushing boundaries, setting new standards, 
              and achieving even greater recognition as we work towards our vision of becoming 
              Sri Lanka's largest conglomerate by 2040.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {/* Innovation Focus */}
              <div className="text-center">
                <div className="bg-[var(--color-primary-light)] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-8 h-8 text-[var(--color-primary)]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Innovation</h3>
                <p className="text-gray-600">Continuing to innovate and set new industry benchmarks</p>
              </div>

              {/* Excellence */}
              <div className="text-center">
                <div className="bg-[var(--color-primary-light)] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-[var(--color-primary)]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Excellence</h3>
                <p className="text-gray-600">Maintaining the highest standards across all business operations</p>
              </div>

              {/* Recognition */}
              <div className="text-center">
                <div className="bg-[var(--color-primary-light)] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Medal className="w-8 h-8 text-[var(--color-primary)]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Recognition</h3>
                <p className="text-gray-600">Striving for continued recognition and industry leadership</p>
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
              Experience Award-Winning Excellence
            </h2>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              Partner with a recognized industry leader. Our track record of awards and recognition 
              speaks to our commitment to delivering exceptional value and maintaining the highest standards.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <CTA_Buttons
                primaryText="Work With Us"
                primaryHref=""
                secondaryText="View Our Services"
                secondaryHref=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AwardsRecognitionPage;