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
  Wheat,
  Mountain,
  UserCheck,
  Search,
  Calculator,
  Smartphone,
  Monitor,
  Utensils,
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

      {/* Hero section */}
      <section className="relative bg-[color:var(--color-primary-light)] overflow-hidden">
        <div
          className="absolute inset-0 bg-[url('/images/corporate-building.jpg')] bg-cover bg-center opacity-20"
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-[var(--color-primary)] opacity-20"></div>
        </div>

        <div className="container mx-auto px-4 py-20 md:py-28 lg:py-32 text-center relative z-10">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            A Sri Lankan Conglomerate on a
            <br />
            <span className="text-[var(--color-primary)]">
              Dynamic Growth Trajectory
            </span>
          </h1>

          <p className="text-xl mb-8 text-gray-600 max-w-3xl mx-auto">
            Since 2012, JFS Holdings has evolved from a modest HR service provider into a dynamic group of companies, 
            driven by a vision to become the largest conglomerate in Sri Lanka by 2040.
          </p>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <CTA_Buttons
              primaryText="Explore Our Services"
              primaryHref=""
              secondaryText="Contact Us"
              secondaryHref=""
            />
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our{" "}
              <span className="text-[var(--color-primary)]">
                Core Values
              </span>
            </h2>
            <p className="text-lg text-gray-600">
              At the heart of JFS Holdings' corporate philosophy is a commitment to creating value 
              for our customers, employees, shareholders, and the wider community.
            </p>
          </div>

          {/* Values Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {/* Thinking BIG */}
            <FeatureCard
              icon={Target}
              title="Thinking BIG"
              description="We set ambitious goals and work relentlessly to achieve them with strategic vision."
            />

            {/* Right Innovation */}
            <FeatureCard
              icon={Lightbulb}
              title="Right Innovation"
              description="We embrace innovation that creates meaningful impact and drives sustainable growth."
            />

            {/* Empowering Talents */}
            <FeatureCard
              icon={Users}
              title="Empowering Talents"
              description="We nurture and develop our people to reach their full potential and excel in their careers."
            />

            {/* Doing the Right Things */}
            <FeatureCard
              icon={Heart}
              title="Doing the Right Things"
              description="We maintain the highest ethical standards in all our business practices and decisions."
            />
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left Column - Content */}
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                Our{" "}
                <span className="text-[var(--color-primary)]">
                  Mission & Vision
                </span>
              </h2>

              <div className="space-y-6">
                {/* Mission */}
                <div className="flex items-start gap-4">
                  <div className="bg-[var(--color-primary-light)] p-2 rounded-full">
                    <Heart className="w-5 h-5 text-[var(--color-primary)]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">
                      Our Mission
                    </h3>
                    <p className="text-gray-600 mt-1">
                      To bring smiles to the faces of our consumers and foster unwavering loyalty to our brands 
                      through exceptional service delivery and innovative solutions.
                    </p>
                  </div>
                </div>

                {/* Vision */}
                <div className="flex items-start gap-4">
                  <div className="bg-[var(--color-primary-light)] p-2 rounded-full">
                    <Target className="w-5 h-5 text-[var(--color-primary)]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">
                      Our Vision
                    </h3>
                    <p className="text-gray-600 mt-1">
                      To become the largest conglomerate in Sri Lanka by 2040, creating sustainable value 
                      across all our business verticals and contributing significantly to the economy.
                    </p>
                  </div>
                </div>

                {/* Growth Journey */}
                <div className="flex items-start gap-4">
                  <div className="bg-[var(--color-primary-light)] p-2 rounded-full">
                    <TrendingUp className="w-5 h-5 text-[var(--color-primary)]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">
                      Billion Run Initiative
                    </h3>
                    <p className="text-gray-600 mt-1">
                      Our ambitious goal of achieving a billion-rupee valuation reflects our confidence 
                      in our growth trajectory and strategic direction.
                    </p>
                  </div>
                </div>

                {/* Community Impact */}
                <div className="flex items-start gap-4">
                  <div className="bg-[var(--color-primary-light)] p-2 rounded-full">
                    <Globe className="w-5 h-5 text-[var(--color-primary)]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">
                      Community Impact
                    </h3>
                    <p className="text-gray-600 mt-1">
                      We are committed to creating value for our customers, employees, shareholders, 
                      and the wider Sri Lankan community through responsible business practices.
                    </p>
                  </div>
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex mt-8 justify-center gap-4">
                <CTA_Buttons
                  primaryText="Join Our Journey"
                  primaryHref=""
                  secondaryText="Learn More"
                  secondaryHref=""
                />
              </div>
            </div>

            <div className="lg:w-1/2">
              <div className="relative rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/images/jfs-team.jpg"
                  alt="JFS Holdings team and vision"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Portfolio Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left Column - Image */}
            <div className="lg:w-1/2">
              <div className="relative rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/images/business-portfolio.jpg"
                  alt="JFS Holdings business portfolio"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Diversified{" "}
                <span className="text-[var(--color-primary)]">
                  Business Portfolio
                </span>
              </h2>

              <p className="text-lg text-gray-600 mb-8">
                JFS Holdings operates across four key sectors through various specialized brands, 
                each contributing to our comprehensive service offering.
              </p>

              <div className="space-y-6">
                {/* BPO Services */}
                <div className="flex items-start gap-4">
                  <div className="bg-[var(--color-primary-light)] p-2 rounded-full">
                    <Headphones className="w-5 h-5 text-[var(--color-primary)]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">
                      Business Process Outsourcing (BPO)
                    </h3>
                    <p className="text-gray-600 mt-2">
                      Comprehensive BPO services through SourceOne, including HRO, EOR, payroll management, 
                      and executive search for local and international clients.
                    </p>
                  </div>
                </div>

                {/* ICT Services */}
                <div className="flex items-start gap-4">
                  <div className="bg-[var(--color-primary-light)] p-2 rounded-full">
                    <Code className="w-5 h-5 text-[var(--color-primary)]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">
                      Information & Communication Technology (ICT)
                    </h3>
                    <p className="text-gray-600 mt-2">
                      Through CodeOne-X, we provide custom software development, mobile applications, 
                      and web development services to a growing clientele.
                    </p>
                  </div>
                </div>

                {/* Agro Food */}
                <div className="flex items-start gap-4">
                  <div className="bg-[var(--color-primary-light)] p-2 rounded-full">
                    <Wheat className="w-5 h-5 text-[var(--color-primary)]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">
                      Agro Food
                    </h3>
                    <p className="text-gray-600 mt-2">
                      Quality and sustainable food production and distribution, contributing to the local 
                      agricultural sector with high-quality consumer choices.
                    </p>
                  </div>
                </div>

                {/* Extreme Sports */}
                <div className="flex items-start gap-4">
                  <div className="bg-[var(--color-primary-light)] p-2 rounded-full">
                    <Mountain className="w-5 h-5 text-[var(--color-primary)]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">
                      Extreme Sports
                    </h3>
                    <p className="text-gray-600 mt-2">
                      Catering to the adventurous spirit with specialized products and experiences 
                      for extreme sports enthusiasts.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our{" "}
              <span className="text-[var(--color-primary)]">
                Service Offerings
              </span>
            </h2>
            <p className="text-lg text-gray-600">
              Comprehensive solutions across multiple industries to meet diverse business needs.
            </p>
          </div>

          {/* Services Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {/* HR Outsourcing */}
            <FeatureCard
              icon={UserCheck}
              title="Human Resource Outsourcing"
              description="End-to-end HR solutions to streamline your business operations and workforce management."
            />

            {/* Employer of Record */}
            <FeatureCard
              icon={Building2}
              title="Employer of Record (EOR)"
              description="Facilitating hiring and management of employees in Sri Lanka for foreign companies."
            />

            {/* Payroll Management */}
            <FeatureCard
              icon={Calculator}
              title="Payroll Management"
              description="Accurate and timely payroll processing with full compliance and reporting."
            />

            {/* Executive Search */}
            <FeatureCard
              icon={Search}
              title="Executive Search"
              description="Identifying and recruiting top-tier talent across various industries and levels."
            />

            {/* Mobile Development */}
            <FeatureCard
              icon={Smartphone}
              title="Mobile App Development"
              description="Custom mobile applications for iOS and Android platforms with modern features."
            />

            {/* Web Development */}
            <FeatureCard
              icon={Monitor}
              title="Web Development"
              description="Responsive web applications and websites tailored to your business requirements."
            />

            {/* Food Production */}
            <FeatureCard
              icon={Utensils}
              title="Food Production"
              description="High-quality food products with focus on sustainability and local agriculture."
            />

            {/* Custom Software */}
            <FeatureCard
              icon={Code}
              title="Custom Software Development"
              description="Tailored software solutions to meet specific business process requirements."
            />

            {/* Sports Equipment */}
            <FeatureCard
              icon={Mountain}
              title="Extreme Sports Products"
              description="Specialized equipment and experiences for adventure and extreme sports enthusiasts."
            />
          </motion.div>
        </div>
      </section>

      {/* Growth Journey Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              A Journey of{" "}
              <span className="text-[var(--color-primary)]">
                Remarkable Growth
              </span>
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              From a two-person operation to a formidable organization with a dedicated team of professionals, 
              JFS Holdings exemplifies strategic growth and ambitious vision.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {/* Founded */}
              <div className="text-center">
                <div className="bg-[var(--color-primary-light)] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-[var(--color-primary)]" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">2012</h3>
                <p className="text-gray-600">Founded as HR service provider</p>
              </div>

              {/* Growth */}
              <div className="text-center">
                <div className="bg-[var(--color-primary-light)] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-[var(--color-primary)]" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Present</h3>
                <p className="text-gray-600">Dynamic conglomerate with 4 business verticals</p>
              </div>

              {/* Future */}
              <div className="text-center">
                <div className="bg-[var(--color-primary-light)] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-[var(--color-primary)]" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">2040</h3>
                <p className="text-gray-600">Vision to become largest conglomerate in Sri Lanka</p>
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
              Ready to Partner with JFS Holdings?
            </h2>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              Join us on our journey to excellence. Whether you're looking for BPO services, 
              ICT solutions, or exploring partnership opportunities, we're here to help.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <CTA_Buttons
                primaryText="Get Started"
                primaryHref=""
                secondaryText="Schedule a Meeting"
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