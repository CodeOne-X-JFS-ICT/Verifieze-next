"use client";
import Navbar from "@/components/Navbar";
import {
  Heart,
  Users,
  GraduationCap,
  Leaf,
  Hospital,
  Shield,
  BookOpen,
  HandHeart,
  TreePine,
  Stethoscope,
  Trophy,
  Home,
  Target,
  Globe,
  Calendar,
  CheckCircle,
  Sparkles,
  Award,
} from "lucide-react";

import React from "react";
import Image from "next/image";
import CTA_Buttons from "@/components/CTA_Buttons";
import Link from "next/link";
import { motion } from "framer-motion";
import { containerVariants } from "@/animations/variants";
import FeatureCard from "@/components/FeatureCard";

function CSRPage() {
  const csrInitiatives = [
    {
      year: "2025",
      title: "Empowering Junior/Senior Prefects – Weliweriya Kanishta Vidyalaya",
      category: "Youth Empowerment",
      description: "Hosted a full one-day leadership enhancing programme for 120 junior/senior prefects of the Weliweriya area on 15 Aug 2025. To improve the leadership skills of the area prefects, FMT conducted a full-day programme at the invitation of the Principal of Weliweriya Kanishta Vidyalaya.",
      type: "Education",
      icon: Users,
      impact: "120 Students"
    },
    {
      year: "2025",
      title: "Scholarships and Educational Support",
      category: "Education",
      description: "Continuing our commitment to education, we awarded Rs. 110,000 worth of scholarships and book vouchers to 11 deserving students in Arakawila in February 2025. Similar scholarship programs were also implemented in 2023 and 2024 to support academically talented students.",
      type: "Education",
      icon: GraduationCap,
      impact: "Rs. 110,000"
    },
    {
      year: "2024",
      title: "Empowering Youth through Team Building",
      category: "Sports Development",
      description: "Through FMT, we supported the First XI Cricket Team of Taxila Central College for the third consecutive year by organizing a paintball-based outdoor training program in April 2024. This unique initiative strengthens leadership, teamwork, and strategic thinking in young athletes.",
      type: "Youth",
      icon: Trophy,
      impact: "3rd Year Running"
    },
    {
      year: "2023",
      title: "Donation to Sri Jinarathana Temple, Arakawila",
      category: "Community Development",
      description: "Donated paint buckets to help rejuvenate and preserve the temple's cultural and spiritual environment, enhancing the experience for the community.",
      type: "Community",
      icon: Heart,
      impact: "Community Support"
    },
    {
      year: "2023",
      title: "School Essentials for Udagama Junior School Students",
      category: "Education",
      description: "Supplied school bags, books, and essentials to new grade one students, encouraging them to begin their educational journey with confidence.",
      type: "Education",
      icon: BookOpen,
      impact: "Grade 1 Students"
    },
    {
      year: "2023",
      title: "Plastic Recycling Program",
      category: "Environmental",
      description: "Initiated a community recycling drive offering Rs. 2 discounts per plastic item returned. The program actively promotes eco-conscious behavior and has earned recognition as a certified recycling-friendly initiative.",
      type: "Environment",
      icon: Leaf,
      impact: "Ongoing Initiative"
    },
    {
      year: "2023",
      title: "Scholarships for G.C.E. A/L Students in Arakawila",
      category: "Education",
      description: "Awarded over Rs. 100,000 in scholarships and gift vouchers to high-performing A/L students, supporting their transition into higher education.",
      type: "Education",
      icon: GraduationCap,
      impact: "Rs. 100,000+"
    },
    {
      year: "2022",
      title: "Recognition of Top A/L Achievers",
      category: "Education",
      description: "Rewarded 13 students who excelled in the 2021 G.C.E. A/L exam with cash prizes and book vouchers at a ceremony hosted in Arakawila.",
      type: "Education",
      icon: Award,
      impact: "13 Students"
    },
    {
      year: "2022",
      title: "Donation of Rare Plants to Arakawila Residents",
      category: "Environmental",
      description: "Distributed over 100 rare and valuable plant species to promote biodiversity and sustainable living in the community.",
      type: "Environment",
      icon: TreePine,
      impact: "100+ Plants"
    },
    {
      year: "2022",
      title: "Medical Equipment Donation to Apeksha Hospital",
      category: "Healthcare",
      description: "Donated Rs. 500,000 worth of critical medical and surgical supplies to enhance cancer treatment capabilities.",
      type: "Healthcare",
      icon: Hospital,
      impact: "Rs. 500,000"
    },
    {
      year: "2021",
      title: "Cancer Care Support – Apeksha Hospital",
      category: "Healthcare",
      description: "Donated port catheters and essential supplies valued at Rs. 500,000, directly aiding the treatment of cancer patients.",
      type: "Healthcare",
      icon: Stethoscope,
      impact: "Rs. 500,000"
    },
    {
      year: "2020",
      title: "COVID-19 Relief for Families in Pannipitiya",
      category: "Community Relief",
      description: "Provided essential goods to five underprivileged families during the pandemic, helping them recover during a time of crisis.",
      type: "Community",
      icon: Home,
      impact: "5 Families"
    },
    {
      year: "2019",
      title: "Educational Infrastructure for Udagama Kanishta Vidyalaya",
      category: "Education",
      description: "Delivered desks, chairs, and undergarments to support children's education and hygiene needs in a rural school.",
      type: "Education",
      icon: BookOpen,
      impact: "Infrastructure Support"
    },
    {
      year: "2013-2017",
      title: "Hospital Cleaning & Donations – Lady Ridgeway Hospital",
      category: "Healthcare",
      description: "Carried out multiple donation and cleaning programs to improve the surgical theater and patient environment.",
      type: "Healthcare",
      icon: Hospital,
      impact: "Multi-year Program"
    },
    {
      year: "2013",
      title: "Scholarships for Children of Fallen Soldiers",
      category: "National Service",
      description: "Offered educational scholarships to children of two war heroes through the Gajaba Regiment, honoring their sacrifice.",
      type: "National",
      icon: Shield,
      impact: "War Heroes' Children"
    },
    {
      year: "2012",
      title: "Shoes and Stationery Donation",
      category: "Education",
      description: "Supported Udagama Kanishta Vidyalaya students with shoes and school supplies, helping remove barriers to education.",
      type: "Education",
      icon: BookOpen,
      impact: "Educational Barriers Removed"
    }
  ];

  const getTypeColor = (type) => {
    switch (type) {
      case "Education":
        return "bg-blue-50 border-blue-200";
      case "Healthcare":
        return "bg-green-50 border-green-200";
      case "Environment":
        return "bg-emerald-50 border-emerald-200";
      case "Community":
        return "bg-purple-50 border-purple-200";
      case "Youth":
        return "bg-orange-50 border-orange-200";
      case "National":
        return "bg-red-50 border-red-200";
      default:
        return "bg-gray-50 border-gray-200";
    }
  };

  const getIconColor = (type) => {
    switch (type) {
      case "Education":
        return "text-blue-600";
      case "Healthcare":
        return "text-green-600";
      case "Environment":
        return "text-emerald-600";
      case "Community":
        return "text-purple-600";
      case "Youth":
        return "text-orange-600";
      case "National":
        return "text-red-600";
      default:
        return "text-gray-600";
    }
  };

  return (
    <>
      <Navbar />

      {/* Hero section */}
      <section className="relative bg-[color:var(--color-primary-light)] overflow-hidden">
        <div
          className="absolute inset-0 bg-[url('/images/Employment-2.jpg')] bg-cover bg-center opacity-20"
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-[var(--color-primary)] opacity-20"></div>
        </div>

        <div className="container mx-auto px-4 py-20 md:py-28 lg:py-32 text-center relative z-10">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Corporate Social{" "}
            <span className="text-[var(--color-primary)]">
              Responsibility
            </span>
          </h1>

          <p className="text-xl mb-8 text-gray-600 max-w-3xl mx-auto">
            Making a meaningful difference in our communities. Our CSR initiatives reflect our commitment 
            to education, healthcare, environmental sustainability, and community development across Sri Lanka.
          </p>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <CTA_Buttons
              primaryText="View Our Impact"
              primaryHref=""
              secondaryText="Partner With Us"
              secondaryHref=""
            />
          </div>
        </div>
      </section>

      {/* CSR Impact Statistics Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our{" "}
              <span className="text-[var(--color-primary)]">
                Community Impact
              </span>
            </h2>
            <p className="text-lg text-gray-600">
              Over the years, we've touched thousands of lives through our comprehensive 
              CSR programs spanning education, healthcare, environment, and community development.
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
            {/* Total Initiatives */}
            <FeatureCard
              icon={HandHeart}
              title="15+ Initiatives"
              description="Comprehensive CSR programs implemented across multiple sectors since 2012."
            />

            {/* Education Focus */}
            <FeatureCard
              icon={GraduationCap}
              title="Education First"
              description="Over Rs. 1M+ invested in scholarships, infrastructure, and educational support."
            />

            {/* Healthcare Support */}
            <FeatureCard
              icon={Hospital}
              title="Healthcare Impact"
              description="Rs. 1M+ donated to hospitals and medical facilities for better patient care."
            />

            {/* Environmental Action */}
            <FeatureCard
              icon={Leaf}
              title="Green Initiatives"
              description="Environmental programs including recycling drives and biodiversity promotion."
            />
          </motion.div>
        </div>
      </section>

      {/* CSR Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left Column - Image */}
            <div className="lg:w-1/2">
              <div className="relative rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/images/About.png"
                  alt="JFS Holdings CSR initiatives"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Comprehensive{" "}
                <span className="text-[var(--color-primary)]">
                  Social Impact
                </span>
              </h2>

              <p className="text-lg text-gray-600 mb-8">
                Our CSR initiatives are strategically designed to create lasting positive change 
                across multiple sectors, focusing on sustainable development and community empowerment.
              </p>

              <div className="space-y-6">
                {/* Education */}
                <div className="flex items-start gap-4">
                  <div className="bg-[var(--color-primary-light)] p-2 rounded-full">
                    <GraduationCap className="w-5 h-5 text-[var(--color-primary)]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">
                      Education & Youth Development
                    </h3>
                    <p className="text-gray-600 mt-2">
                      Scholarships, infrastructure development, leadership programs, and educational 
                      support to empower the next generation of leaders.
                    </p>
                  </div>
                </div>

                {/* Healthcare */}
                <div className="flex items-start gap-4">
                  <div className="bg-[var(--color-primary-light)] p-2 rounded-full">
                    <Hospital className="w-5 h-5 text-[var(--color-primary)]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">
                      Healthcare & Medical Support
                    </h3>
                    <p className="text-gray-600 mt-2">
                      Critical medical equipment donations, cancer care support, and hospital 
                      improvement programs to enhance healthcare quality.
                    </p>
                  </div>
                </div>

                {/* Environment */}
                <div className="flex items-start gap-4">
                  <div className="bg-[var(--color-primary-light)] p-2 rounded-full">
                    <Leaf className="w-5 h-5 text-[var(--color-primary)]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">
                      Environmental Sustainability
                    </h3>
                    <p className="text-gray-600 mt-2">
                      Recycling programs, biodiversity promotion, and environmental awareness 
                      initiatives for a sustainable future.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CSR Initiatives Timeline Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our{" "}
                <span className="text-[var(--color-primary)]">
                  CSR Journey
                </span>
              </h2>
              <p className="text-lg text-gray-600">
                A comprehensive timeline of our community impact and social responsibility initiatives.
              </p>
            </div>

            {/* Initiatives Grid */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {csrInitiatives.map((initiative, index) => {
                const IconComponent = initiative.icon;
                return (
                  <motion.div
                    key={index}
                    className={`p-6 rounded-xl border-2 ${getTypeColor(initiative.type)} hover:shadow-lg transition-shadow duration-300`}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`p-2 rounded-full bg-white`}>
                        <IconComponent className={`w-6 h-6 ${getIconColor(initiative.type)}`} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getIconColor(initiative.type)} bg-white`}>
                            {initiative.year}
                          </span>
                          <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getIconColor(initiative.type)} bg-white`}>
                            {initiative.type}
                          </span>
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-1">
                          {initiative.title}
                        </h3>
                        <p className={`text-sm font-medium ${getIconColor(initiative.type)} mb-2`}>
                          {initiative.category}
                        </p>
                        <p className="text-gray-600 text-sm leading-relaxed mb-3">
                          {initiative.description}
                        </p>
                        <div className="bg-white rounded-lg p-2">
                          <span className={`text-xs font-semibold ${getIconColor(initiative.type)}`}>
                            Impact: {initiative.impact}
                          </span>
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

      {/* Focus Areas Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left Column - Content */}
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                Our{" "}
                <span className="text-[var(--color-primary)]">
                  Core Focus Areas
                </span>
              </h2>

              <div className="space-y-6">
                {/* Education Excellence */}
                <div className="flex items-start gap-4">
                  <div className="bg-[var(--color-primary-light)] p-2 rounded-full">
                    <BookOpen className="w-5 h-5 text-[var(--color-primary)]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">
                      Educational Excellence
                    </h3>
                    <p className="text-gray-600 mt-1">
                      From scholarships to infrastructure, we invest in quality education 
                      to build a brighter future for Sri Lankan youth.
                    </p>
                  </div>
                </div>

                {/* Healthcare Access */}
                <div className="flex items-start gap-4">
                  <div className="bg-[var(--color-primary-light)] p-2 rounded-full">
                    <Stethoscope className="w-5 h-5 text-[var(--color-primary)]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">
                      Healthcare Access
                    </h3>
                    <p className="text-gray-600 mt-1">
                      Supporting hospitals with critical equipment and supplies to improve 
                      patient care and treatment outcomes.
                    </p>
                  </div>
                </div>

                {/* Community Development */}
                <div className="flex items-start gap-4">
                  <div className="bg-[var(--color-primary-light)] p-2 rounded-full">
                    <Users className="w-5 h-5 text-[var(--color-primary)]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">
                      Community Development
                    </h3>
                    <p className="text-gray-600 mt-1">
                      Working closely with communities to address local needs and create 
                      sustainable development opportunities.
                    </p>
                  </div>
                </div>

                {/* Environmental Stewardship */}
                <div className="flex items-start gap-4">
                  <div className="bg-[var(--color-primary-light)] p-2 rounded-full">
                    <TreePine className="w-5 h-5 text-[var(--color-primary)]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">
                      Environmental Stewardship
                    </h3>
                    <p className="text-gray-600 mt-1">
                      Promoting eco-friendly practices through recycling programs and 
                      biodiversity conservation initiatives.
                    </p>
                  </div>
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex mt-8 justify-center gap-4">
                <CTA_Buttons
                  primaryText="Get Involved"
                  primaryHref=""
                  secondaryText="Learn More"
                  secondaryHref=""
                />
              </div>
            </div>

            <div className="lg:w-1/2">
              <div className="relative rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/images/About.png"
                  alt="JFS Holdings CSR focus areas"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Future Commitments Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Continuing Our{" "}
              <span className="text-[var(--color-primary)]">
                Commitment to Society
              </span>
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Our CSR initiatives are an integral part of our corporate philosophy. As we grow, 
              we remain committed to expanding our positive impact on communities, education, 
              healthcare, and environmental sustainability across Sri Lanka.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {/* Sustainability */}
              <div className="text-center">
                <div className="bg-[var(--color-primary-light)] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-[var(--color-primary)]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Sustainability</h3>
                <p className="text-gray-600">Building sustainable programs that create lasting positive change</p>
              </div>

              {/* Expansion */}
              <div className="text-center">
                <div className="bg-[var(--color-primary-light)] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-[var(--color-primary)]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Expansion</h3>
                <p className="text-gray-600">Reaching more communities and expanding our social impact</p>
              </div>

              {/* Innovation */}
              <div className="text-center">
                <div className="bg-[var(--color-primary-light)] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-8 h-8 text-[var(--color-primary)]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Innovation</h3>
                <p className="text-gray-600">Developing innovative solutions to address social challenges</p>
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
              Join Us in Making a Difference
            </h2>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              Partner with us in our mission to create positive social impact. Together, we can 
              build stronger communities and contribute to a better future for all Sri Lankans.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <CTA_Buttons
                primaryText="Partner With Us"
                primaryHref=""
                secondaryText="Contact CSR Team"
                secondaryHref=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CSRPage;