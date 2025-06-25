import Navbar from "@/components/Navbar";
import Link from "next/link";
import React from "react";

function AddressVelificationPage() {
  return (
    <>
      <Navbar />

      {/* Hero section */}

      <section 
        className="relative bg-[color:var(--color-primary-light)] overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-[url('/images/map.jpg')] bg-cover bg-center opacity-20"
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-[var(--color-primary)] opacity-20"></div>
        </div>

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
              Run a Demo Check
            </Link>
            <Link
              href=""
              className="px-8 py-4 bg-white text-[var(--color-primary)] border-2 border-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white font-semibold rounded-lg shadow-lg transition-all duration-300"
              
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default AddressVelificationPage;
