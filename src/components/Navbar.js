'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200 px-4 md:px-10 py-4">
      <div className="flex justify-between items-center h-[70px]">
        {/* Logo */}
        <div className="w-[100px] h-6">
          <Image
            src="/images/verifieze-logo.png"
            alt="Verifieze Logo"
            width={100}
            height={24}
            priority
          />
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-8">
          <Link href="#"><span className="text-gray-700 text-base font-medium">Products</span></Link>
          <Link href="#"><span className="text-gray-700 text-base font-medium">Due Diligence</span></Link>
          <Link href="#"><span className="text-gray-700 text-base font-medium">Data Security</span></Link>
          <Link href="#"><span className="text-gray-700 text-base font-medium">About JFS</span></Link>
          <Link href="#"><span className="text-gray-700 text-base font-medium">Contact</span></Link>
        </div>

        {/* Right Side (Desktop Only) */}
        <div className="hidden lg:flex items-center gap-6">
          <Link href="#"><span className="text-gray-500 text-sm">Contact support</span></Link>
          <Link href="#"><span className="text-gray-500 text-sm">My background check</span></Link>
          <Link href="#"><span className="text-gray-500 text-sm">Log in</span></Link>
          <button className="bg-[#009BB5] text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-[#0085a0] transition">
            Sign up
          </button>
          <button className="border border-[#009BB5] text-[#009BB5] bg-white px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-100 transition">
            Talk to sales
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="lg:hidden mt-4 space-y-4">
          <Link href="#"><div className="block text-gray-700 text-base font-medium">Products</div></Link>
          <Link href="#"><div className="block text-gray-700 text-base font-medium">Due Diligence</div></Link>
          <Link href="#"><div className="block text-gray-700 text-base font-medium">Data Security</div></Link>
          <Link href="#"><div className="block text-gray-700 text-base font-medium">About JFS</div></Link>
          <Link href="#"><div className="block text-gray-700 text-base font-medium">Contact</div></Link>
          <hr />
          <Link href="#"><div className="block text-gray-500 text-sm">Contact support</div></Link>
          <Link href="#"><div className="block text-gray-500 text-sm">My background check</div></Link>
          <Link href="#"><div className="block text-gray-500 text-sm">Log in</div></Link>
          <button className="w-full bg-[#009BB5] text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-[#0085a0] transition">
            Sign up
          </button>
          <button className="w-full border border-[#009BB5] text-[#009BB5] bg-white px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-100 transition">
            Talk to sales
          </button>
        </div>
      )}
    </nav>
  );
}
