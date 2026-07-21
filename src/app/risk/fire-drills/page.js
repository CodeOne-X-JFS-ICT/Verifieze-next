"use client";
import Navbar from "@/components/Navbar";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { containerVariants } from "@/animations/variants";
import CTA_Buttons from "@/components/CTA_Buttons";
import {
  FlameKindling,
  Timer,
  Megaphone,
  Users,
  ShieldCheck,
  HeartHandshake,
  CheckCircle2,
} from "lucide-react";

const images = [
  { src: "/images/FDImage01.jpeg", alt: "Staff at the designated assembly point during fire drill" },
  { src: "/images/FDImage02.jpeg", alt: "Team evacuating the building during the fire drill" },
  { src: "/images/FDImage03.jpeg", alt: "Safety marshal conducting a briefing after the fire drill" },
];

export default function FireDrillsPage() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + images.length) % images.length);
  const next = () => setCurrent((c) => (c + 1) % images.length);
  const drillEvaluations = [
    {
      icon: Timer,
      title: "Response Time",
      description:
        "How quickly our staff transitioned from focus mode to full evacuation mode — measuring our readiness to act decisively under pressure."
    },
    {
      icon: Megaphone,
      title: "Clear Communication",
      description:
        "The effectiveness of our designated floor wardens and safety marshals in directing staff calmly and efficiently toward assembly points."
    },
    {
      icon: Users,
      title: "Accountability",
      description:
        "Ensuring every single employee and visitor was fully accounted for at our designated assembly point before the all-clear was given."
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
          <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-sm border border-gray-200 rounded-full px-4 py-2 mb-8">
            <FlameKindling className="w-4 h-4 text-[var(--color-primary)]" />
            <span className="text-sm font-semibold text-gray-700 uppercase tracking-widest">Risk Management</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Mastering the
            <br />
            <span className="text-[var(--color-primary)]">Unpredictable</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
            At a background verification company, the word &ldquo;risk&rdquo; usually conjures up images of data breaches, resume fraud, or compliance failures. True resilience, however, extends far beyond the digital — it starts with the people behind the process.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <CTA_Buttons
              primaryText="Contact Us"
              primaryHref="/contact"
              secondaryText="View Health &amp; Safety"
              secondaryHref="/compliance/health-and-safety"
            />
          </div>
        </div>
      </section>

      {/* Opening Narrative */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Every day, our teams work tirelessly to mitigate risk for our clients — vetting candidates, securing sensitive information, and ensuring organisations build teams on trust. Recently, our team stepped away from their monitors, put on their walking shoes, and participated in a{" "}
              <span className="font-semibold text-[var(--color-primary)]">comprehensive, unannounced emergency fire drill.</span>
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              While standard office procedure on paper, in practice it served as a powerful reminder of how a culture of risk management must extend to every facet of our business — including the physical spaces where our people operate.
            </p>
          </div>
        </div>
      </section>

      {/* Physical Safety as Business Imperative */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            {/* Text side */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Beyond Data Security:{" "}
                <span className="text-[var(--color-primary)]">Physical Safety as a Business Imperative</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                In the verification industry, we talk constantly about business continuity. We build redundant servers, implement strict access controls, and encrypt high-value data. Yet, true resilience is holistic.
              </p>
              <p className="text-gray-600 leading-relaxed">
                A company cannot claim to manage risk effectively if it overlooks the physical safety of the people who make those operations possible.
              </p>
            </div>

            {/* Pull quote card */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-[var(--color-primary)]">
              <FlameKindling className="w-10 h-10 text-[var(--color-primary)] mb-4" />
              <blockquote className="text-xl font-semibold text-gray-900 leading-snug italic">
                &ldquo;True resilience is holistic. A company cannot claim to manage risk effectively if it overlooks the physical safety of the people who make the operations possible.&rdquo;
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* What the Drill Evaluated */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What the Drill{" "}
              <span className="text-[var(--color-primary)]">Evaluated</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The drill was designed to test more than just our fire alarms. It put our entire emergency preparedness framework to the test across three key dimensions.
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto"
          >
            {drillEvaluations.map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col gap-4"
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

      {/* Photo Gallery — Swipeable Carousel */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              The Drill in{" "}
              <span className="text-[var(--color-primary)]">Action</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A look at our team during the unannounced emergency evacuation — from exit to assembly point to safety briefing.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Carousel viewport */}
            <div className="overflow-hidden rounded-2xl shadow-xl">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -60 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.15}
                onDragEnd={(e, { offset }) => {
                  if (offset.x < -60) next();
                  else if (offset.x > 60) prev();
                }}
                className="cursor-grab active:cursor-grabbing"
              >
                <img
                  src={images[current].src}
                  alt={images[current].alt}
                  className="w-full aspect-[16/9] object-cover select-none"
                  draggable={false}
                />
              </motion.div>
            </div>

            {/* Prev button */}
            <button
              onClick={prev}
              aria-label="Previous image"
              className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white backdrop-blur-sm text-gray-800 rounded-full w-10 h-10 flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-110 z-10"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Next button */}
            <button
              onClick={next}
              aria-label="Next image"
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white backdrop-blur-sm text-gray-800 rounded-full w-10 h-10 flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-110 z-10"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Dot indicators */}
            <div className="flex justify-center gap-2 mt-5">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  aria-label={`Go to image ${i + 1}`}
                  className={`rounded-full transition-all duration-300 ${
                    i === current
                      ? "w-6 h-2.5 bg-[var(--color-primary)]"
                      : "w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Walking the Talk */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

            {/* Outcome card */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border-t-4 border-[var(--color-primary)] flex flex-col gap-5">
              <div className="flex items-center gap-3">
                <div className="bg-[var(--color-primary-light)] p-3 rounded-xl">
                  <ShieldCheck className="w-7 h-7 text-[var(--color-primary)]" />
                </div>
                <span className="text-lg font-bold text-gray-900">Drill Result: Success</span>
              </div>
              <ul className="space-y-3">
                {[
                  "Building cleared efficiently and safely",
                  "All staff and visitors fully accounted for",
                  "Floor wardens performed to standard",
                  "No compliance gaps identified"
                ].map((point, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-600 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-[var(--color-primary)] shrink-0 mt-0.5" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            {/* Text side */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Walking the{" "}
                <span className="text-[var(--color-primary)]">Talk</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                As a company trusted by top-tier organisations to identify and minimise risk, we hold ourselves to the highest standards. Practising what we preach means ensuring our workplace is as safe, resilient, and prepared as the solutions we offer our partners.
              </p>
              <p className="text-gray-600 leading-relaxed">
                The fire drill was a success not just because we cleared the building efficiently, but because it reinforced a core value:{" "}
                <span className="font-semibold text-gray-800">we don&rsquo;t leave safety to chance.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[var(--color-primary-light)]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/60 backdrop-blur-sm p-3 rounded-xl w-fit mx-auto mb-6">
              <HeartHandshake className="w-8 h-8 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Commitment{" "}
              <span className="text-[var(--color-primary)]">Remains the Same</span>
            </h2>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              Whether safeguarding your workforce through thorough background checks or keeping our own team safe on the office floor — we identify risks before it&rsquo;s too late.
            </p>
            
          </div>
        </div>
      </section>
    </>
  );
}
