import Navbar from "@/components/Navbar";
import {
  BadgeCheck,
  FileSearch,
  FileText,
  Fingerprint,
  MapPin,
  ShieldAlert,
  ShieldCheck,
  Truck,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import Image from "next/image";

function AddressVelificationPage() {
  return (
    <>
      <Navbar />

      {/* Hero section */}

      <section className="relative bg-[color:var(--color-primary-light)] overflow-hidden">
        <div
          className="absolute inset-0 bg-[url('/images/map.jpg')] bg-cover bg-center opacity-20"
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-[var(--color-primary)] opacity-20"></div>
        </div>

        {/* <div
          className="absolute inset-0 opacity-20"
          style={{
            background:
              "linear-gradient(135deg, var(--color-primary) 0%, transparent 100%)",
          }}
        ></div> */}

        <div className="container mx-auto px-4 py-20 md:py-28 lg:py-32 text-center relative z-10">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Instant and Accurate Address Verification to Build
            <br />
            <span className="text-[var(--color-primary)]">
              Trust and Stay Compliant
            </span>
          </h1>

          <p className="text-xl mb-8 text-gray-600">
            Verify residential and official addresses across local and
            international regions in seconds
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href=""
              className="px-8 py-4 bg-[var(--color-primary)] hover:bg-white hover:text-[var(--color-primary)] border-2 border-transparent hover:border-[var(--color-primary)] text-white font-semibold rounded-lg shadow-lg transition-all duration-300"
            >
              Sign up
            </Link>
            <Link
              href=""
              className="px-8 py-4 bg-white text-[var(--color-primary)] border-2 border-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white font-semibold rounded-lg shadow-lg transition-all duration-300"
            >
              Talk to sales
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What is{" "}
              <span className="text-[var(--color-primary)]">
                Address Verification
              </span>
              ?
            </h2>
            <p className="text-lg text-gray-600">
              Address verification is the process of validating a candidate’s
              residential or business address to ensure identity accuracy and
              regulatory compliance.
            </p>
          </div>

          {/* Use Cases Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Identity Verification */}
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-[var(--color-primary-light)] rounded-full flex items-center justify-center mb-4">
                <Fingerprint className="w-6 h-6 text-[var(--color-primary)]" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Identity Verification
              </h3>
              <p className="text-gray-600">
                Confirm the authenticity of provided addresses against
                government databases.
              </p>
            </div>

            {/* Fraud Prevention */}
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-[var(--color-primary-light)] rounded-full flex items-center justify-center mb-4">
                <ShieldCheck className="w-6 h-6 text-[var(--color-primary)]" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Fraud Prevention</h3>
              <p className="text-gray-600">
                Detect synthetic identities or fake addresses used for
                fraudulent applications.
              </p>
            </div>

            {/* Background Checks */}
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-[var(--color-primary-light)] rounded-full flex items-center justify-center mb-4">
                <FileSearch className="w-6 h-6 text-[var(--color-primary)]" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Background Checks</h3>
              <p className="text-gray-600">
                Validate residential history for employment or tenant screening.
              </p>
            </div>

            {/* KYC Compliance */}
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-[var(--color-primary-light)] rounded-full flex items-center justify-center mb-4">
                <BadgeCheck className="w-6 h-6 text-[var(--color-primary)]" />
              </div>
              <h3 className="text-xl font-semibold mb-2">KYC Compliance</h3>
              <p className="text-gray-600">
                Meet financial regulations by verifying customer addresses.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left Column - Bullet Points */}
            <div></div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                Why{" "}
                <span className="text-[var(--color-primary)]">
                  Address Verification
                </span>{" "}
                Matters
              </h2>

              <ul className="space-y-6">
                {/* Identity Fraud */}
                <li className="flex items-start gap-4">
                  <div className="bg-[var(--color-primary-light)] p-2 rounded-full">
                    <ShieldAlert className="w-5 h-5 text-[var(--color-primary)]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">
                      Reduces the risk of identity fraud
                    </h3>
                    <p className="text-gray-600 mt-1">
                      Prevents synthetic identities by confirming physical
                      address existence.
                    </p>
                  </div>
                </li>

                {/* Traceability */}
                <li className="flex items-start gap-4">
                  <div className="bg-[var(--color-primary-light)] p-2 rounded-full">
                    <MapPin className="w-5 h-5 text-[var(--color-primary)]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">
                      Ensures candidates are traceable
                    </h3>
                    <p className="text-gray-600 mt-1">
                      Validates legitimate locations for legal or employment
                      purposes.
                    </p>
                  </div>
                </li>

                {/* Compliance */}
                <li className="flex items-start gap-4">
                  <div className="bg-[var(--color-primary-light)] p-2 rounded-full">
                    <FileText className="w-5 h-5 text-[var(--color-primary)]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">
                      Required for financial & legal compliance
                    </h3>
                    <p className="text-gray-600 mt-1">
                      Meets KYC/AML regulations for banks and government
                      institutions.
                    </p>
                  </div>
                </li>

                {/* Logistics */}
                <li className="flex items-start gap-4">
                  <div className="bg-[var(--color-primary-light)] p-2 rounded-full">
                    <Truck className="w-5 h-5 text-[var(--color-primary)]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">
                      Supports accurate logistics and onboarding
                    </h3>
                    <p className="text-gray-600 mt-1">
                      Ensures correct delivery locations and employee residency
                      verification.
                    </p>
                  </div>
                </li>
              </ul>

              <div className="flex mt-8 justify-center gap-4">
                <Link 
                  href=""
                  className="px-8 py-4 bg-[var(--color-primary)] hover:bg-white hover:text-[var(--color-primary)] border-2 border-transparent hover:border-[var(--color-primary)] text-white font-semibold rounded-lg shadow-lg transition-all duration-300 text-center"
                >
                  Sign up
                </Link>
                <Link
                  href=""
                  className="px-8 py-4 bg-white text-[var(--color-primary)] border-2 border-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white font-semibold rounded-lg shadow-lg transition-all duration-300 text-center"
                >
                  Talk to sales
                </Link>
              </div>
            </div>

            <div className="lg:w-1/2">
              <div className="relative rounded-xl overflow-hidden shadow-lg">
                <Image
                  src=""
                  alt="Address verification importance"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
                {/* Optional decorative overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary)]/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AddressVelificationPage;
