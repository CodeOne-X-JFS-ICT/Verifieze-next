"use client";
import Navbar from "@/components/Navbar";
import {
  Building2,
  Users,
  Globe,
  TrendingUp,
  Heart,
  Target,
  Lightbulb,
  Award,
  Headphones,
  Code,
  Shield,
  Mountain,
  UserCheck,
  Search,
  Calculator,
  Smartphone,
  Monitor,
  CheckCircle,
} from "lucide-react";

import React from "react";
import Image from "next/image";
import CTA_Buttons from "@/components/CTA_Buttons";
import Link from "next/link";
import { motion } from "framer-motion";
import { containerVariants } from "@/animations/variants";
import FeatureCard from "@/components/FeatureCard";

function AboutJFSPage() {
  return (
    <>
      <Navbar />
      <br></br>
      <br></br>
      {/* Hero image only */}
      <section className="relative bg-[#fffffff] overflow-hidden h-[400px] md:h-[500px] lg:h-[600px]">
        <div
          className="absolute inset-0 bg-[url('/images/power-of-x.jpg')] bg-contain bg-center bg-no-repeat"
          aria-hidden="true"
        />
      </section>

      {/* Text content below the image */}
      <section className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          
          <span className="text-[var(--color-primary)]">
            Leading Innovation Across Multiple Sectors
          </span>
        </h1>

        <p className="text-xl mb-8 text-gray-600 max-w-3xl mx-auto">
          A diversified business entity operating in the Human Resource domain since 2012, both locally and globally. 
          Successfully restructured in 2024 as a holding entity managing four fully owned subsidiaries.
        </p>
      </section>


      {/* Company Overview Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
              Our{" "}
              <span className="text-[var(--color-primary)]">
                Evolution Story
              </span>
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {/* 2012 Foundation */}
              <div className="text-center">
                <div className="bg-[var(--color-primary-light)] p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Building2 className="w-8 h-8 text-[var(--color-primary)]" />
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  Founded in 2012
                </h3>
                <p className="text-gray-600">
                  Started as a Human Resource service provider, operating both locally and globally 
                  with a vision for comprehensive business solutions.
                </p>
              </div>

              {/* 2024 Restructuring */}
              <div className="text-center">
                <div className="bg-[var(--color-primary-light)] p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <TrendingUp className="w-8 h-8 text-[var(--color-primary)]" />
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  2024 Strategic Restructuring
                </h3>
                <p className="text-gray-600">
                  Successfully transitioned into a holding entity, creating a structured portfolio 
                  of four fully owned subsidiaries across diverse sectors.
                </p>
              </div>

              {/* Current Operations */}
              <div className="text-center">
                <div className="bg-[var(--color-primary-light)] p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Globe className="w-8 h-8 text-[var(--color-primary)]" />
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  Global Presence
                </h3>
                <p className="text-gray-600">
                  Leading by example in every sector we operate, delivering exceptional value 
                  to clients, partners, and stakeholders worldwide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Four Business Sectors */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our{" "}
              <span className="text-[var(--color-primary)]">
                Four Business Sectors
              </span>
            </h2>
            <p className="text-lg text-gray-600">
              HRTECHZ manages a diversified portfolio across ICT, BPO, Knowledge Process Management, 
              and Action Sports through fully owned subsidiaries.
            </p>
          </div>

          {/* Sectors Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {/* ICT Sector */}
            <FeatureCard
              icon={Code}
              title="Information & Communication Technology"
              description="CODEONE-X TECHNOLOGIES (PRIVATE) LIMITED, delivering innovative digital solutions."
            />

            {/* BPO Sector */}
            <FeatureCard
              icon={Headphones}
              title="Business Process Outsourcing"
              description="Comprehensive BPO services through Job Factory, SourceOne, and our newest venture SECURITAZ."
            />

            {/* KPM Sector */}
            <FeatureCard
              icon={CheckCircle}
              title="Knowledge Process Management"
              description="VERIFIEZE - Sri Lanka's leading employment background verification services provider."
            />

            {/* Action Sports */}
            <FeatureCard
              icon={Mountain}
              title="Action Sports"
              description="FMT corporate training, ONE FOUR BASE paintball sessions, and RAVANA-h premium gear."
            />
          </motion.div>
        </div>
      </section>

      {/* VERIFIEZE Highlight Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left Column - Image */}
            <div className="lg:w-1/2">
              <div className="relative rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/images/bgveri.jpeg"
                  alt="VERIFIEZE background verification services"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                VERIFIEZE:{" "}
                <span className="text-[var(--color-primary)]">
                  A Key Milestone
                </span>
              </h2>

              <p className="text-lg text-gray-600 mb-8">
                One of the key milestones in our evolution was the strategic segregation of Background 
                Verification services from the BPO sector, establishing VERIFIEZE as an independent brand.
              </p>

              <div className="space-y-6">
                {/* Leading Provider */}
                <div className="flex items-start gap-4">
                  <div className="bg-[var(--color-primary-light)] p-2 rounded-full">
                    <Award className="w-5 h-5 text-[var(--color-primary)]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">
                      Market Leadership
                    </h3>
                    <p className="text-gray-600 mt-2">
                      VERIFIEZE is now the leading provider of employment background verification 
                      services in Sri Lanka, setting industry standards.
                    </p>
                  </div>
                </div>

                {/* KPM Positioning */}
                <div className="flex items-start gap-4">
                  <div className="bg-[var(--color-primary-light)] p-2 rounded-full">
                    <Target className="w-5 h-5 text-[var(--color-primary)]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">
                      KPM Sector Leadership
                    </h3>
                    <p className="text-gray-600 mt-2">
                      Positioned at the forefront of the Knowledge Process Management sector, 
                      delivering reliable and efficient solutions.
                    </p>
                  </div>
                </div>

                {/* Business Impact */}
                <div className="flex items-start gap-4">
                  <div className="bg-[var(--color-primary-light)] p-2 rounded-full">
                    <Users className="w-5 h-5 text-[var(--color-primary)]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">
                      Empowering Decisions
                    </h3>
                    <p className="text-gray-600 mt-2">
                      VERIFIEZE offers comprehensive background checks that empower businesses 
                      to make informed hiring decisions with confidence.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Business Units Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our{" "}
              <span className="text-[var(--color-primary)]">
                Business Units
              </span>
            </h2>
            <p className="text-lg text-gray-600">
              Comprehensive overview of all our subsidiary brands and their specialized services.
            </p>
          </div>

          {/* Business Units Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {/* CodeOne-X */}
            <FeatureCard
              icon={Code}
              title="CodeOne-X"
              description="ICT services delivering innovative digital solutions. Proud member of SLASSCOM, AMCHAM, and ECCSL."
            />

            {/* Job Factory */}
            <FeatureCard
              icon={UserCheck}
              title="Job Factory"
              description="BPO services providing comprehensive human resource solutions and workforce management."
            />

            {/* SourceOne */}
            <FeatureCard
              icon={Search}
              title="SourceOne"
              description="Specialized BPO services focusing on talent acquisition and executive search solutions."
            />

            {/* SECURITAZ */}
            <FeatureCard
              icon={Shield}
              title="SECURITAZ"
              description="Our newest entry into the Security Services sector, providing comprehensive security solutions."
            />

            {/* VERIFIEZE */}
            <FeatureCard
              icon={CheckCircle}
              title="VERIFIEZE"
              description="Leading employment background verification services provider in Sri Lanka's KPM sector."
            />

            {/* FMT */}
            <FeatureCard
              icon={Users}
              title="Four-Man Team (FMT)"
              description="Corporate training programs designed to enhance team building and leadership skills."
            />

            {/* ONE FOUR BASE */}
            <FeatureCard
              icon={Target}
              title="ONE FOUR BASE"
              description="Professional paintball sport sessions conducted by experienced ex-military experts."
            />

            {/* RAVANA-h */}
            <FeatureCard
              icon={Mountain}
              title="RAVANA-h"
              description="Premium paintball and adventure gear, apparel, and accessories for action sports enthusiasts."
            />
          </motion.div>
        </div>
      </section>

      {/* ICT Sector Highlight */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left Column - Content */}
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                ICT Excellence through{" "}
                <span className="text-[var(--color-primary)]">
                  CodeOne-X
                </span>
              </h2>

              <div className="space-y-6">
                {/* Digital Solutions */}
                <div className="flex items-start gap-4">
                  <div className="bg-[var(--color-primary-light)] p-2 rounded-full">
                    <Code className="w-5 h-5 text-[var(--color-primary)]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">
                      Innovative Digital Solutions
                    </h3>
                    <p className="text-gray-600 mt-1">
                      CODEONE-X TECHNOLOGIES (PRIVATE) LIMITED, 
                      delivering cutting-edge digital solutions to clients.
                    </p>
                  </div>
                </div>

                {/* Professional Memberships */}
                <div className="flex items-start gap-4">
                  <div className="bg-[var(--color-primary-light)] p-2 rounded-full">
                    <Award className="w-5 h-5 text-[var(--color-primary)]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">
                      Industry Recognition
                    </h3>
                    <p className="text-gray-600 mt-1">
                      Proud member of SLASSCOM (Sri Lanka Association of Software and Service Companies), 
                      AMCHAM, and ECCSL, demonstrating our commitment to industry standards.
                    </p>
                  </div>
                </div>

                {/* Technology Leadership */}
                <div className="flex items-start gap-4">
                  <div className="bg-[var(--color-primary-light)] p-2 rounded-full">
                    <Lightbulb className="w-5 h-5 text-[var(--color-primary)]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">
                      Technology Innovation
                    </h3>
                    <p className="text-gray-600 mt-1">
                      Continuously advancing technological capabilities to provide state-of-the-art 
                      solutions for modern business challenges.
                    </p>
                  </div>
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex mt-8 justify-center gap-4">
                <CTA_Buttons
                  primaryText="Explore ICT Services"
                  primaryHref=""
                  secondaryText="Contact CodeOne-X"
                  secondaryHref=""
                />
              </div>
            </div>

            <div className="lg:w-1/2">
              <div className="relative rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/images/cox.JPG"
                  alt="CodeOne-X ICT services and innovation"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Growth Milestones Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our{" "}
              <span className="text-[var(--color-primary)]">
                Growth Milestones
              </span>
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              A journey of strategic evolution, from a single HR service provider to a diversified 
              holding company with global operations and multiple specialized subsidiaries.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {/* Foundation */}
              <div className="text-center">
                <div className="bg-[var(--color-primary-light)] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building2 className="w-8 h-8 text-[var(--color-primary)]" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">2012</h3>
                <p className="text-gray-600">Founded as HR service provider with local and global operations</p>
              </div>

              {/* Restructuring */}
              <div className="text-center">
                <div className="bg-[var(--color-primary-light)] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-[var(--color-primary)]" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">2024</h3>
                <p className="text-gray-600">Strategic restructuring into holding entity with four subsidiaries</p>
              </div>

              {/* Present */}
              <div className="text-center">
                <div className="bg-[var(--color-primary-light)] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-[var(--color-primary)]" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Today</h3>
                <p className="text-gray-600">Leading across ICT, BPO, KPM, and Action Sports sectors</p>
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
              Partner with HRTECHZ
            </h2>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              Join our growing network of clients and partners. Experience exceptional value 
              across our diverse portfolio of ICT, BPO, KPM, and Action Sports services.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <CTA_Buttons
                primaryText="Explore Our Services"
                primaryHref=""
                secondaryText="Contact Our Team"
                secondaryHref=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutJFSPage;