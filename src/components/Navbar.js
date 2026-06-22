'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const navItems = [
    {
      title: 'Products',
      hasDropdown: true,
      content: [
        {
          category: 'Record Checks',
          items: [
            { name: 'Address Verification', href: '/record-checks/address-verification' }, 
            { name: 'Academic', href: '/record-checks/academic' }, 
            { name: 'Professional Qualifications', href: '/record-checks/professional-qualifications' },
            { name: 'Employment', href: '/record-checks/employment' },
            { name: 'Education', href: '/record-checks/education' },
            { name: 'Identity', href: '/record-checks/identity' },
            { name: 'Driving Qualifications', href: '/record-checks/driving-qualifications' }
          ]
        },
        {
          category: 'Database Checks',
          items: [
            { name: 'CRIB', href: '/database-checks/crib' },
            { name: 'Anti Money Laundering', href: '/database-checks/anti-money-laundering' }
          ]
        },
        {
          category: 'Criminal Clearance',
          items: [
            { name: 'Basic Clearance', href: '/criminal-clearance/basic-clearance' },
            { name: 'Advanced Clearance', href: '/criminal-clearance/advanced-clearance' }
          ]
        },
        {
          category: 'Reference Checks',
          items: [
            { name: 'Referees', href: '/reference-checks/referees' },
            { name: 'Character Confirmations', href: '/products/character-confirmations' }
          ]
        }
      ]
    },
    {
      title: 'Compliance',
      hasDropdown: true,
      content: [
        {
          category: '',
          items: [
            { name: 'Data Protection', href: '/compliance/data-protection' },
            { name: 'Finance', href: '/compliance/finance' },
            { name: 'Labour', href: '/compliance/labour' },
            { name: 'Health and Safety', href: '/compliance/health-and-safety' },
            { name: 'Biz Continuation', href: '/compliance/biz-continuation' }
          ]
        }
      ]
    },
    {
      title: 'Risk',
      hasDropdown: true,
      content: [
        {
          category: '',
          items: [
            { name: 'Risk Assessments', href: '/risk/assessments' },
            { name: 'BCP', href: '/risk/bcp' },
            { name: 'Fire Drills', href: '/risk/fire-drills' },
            { name: 'Surveillance', href: '/risk/surveillance' }
          ]
        }
      ]
    },
    {
      title: 'Data Security',
      hasDropdown: true,
      content: [
        {
          category: '',
          items: [
            { name: 'ISO', href: '/iso' }
          ]
        }
      ]
    },
    {
      title: 'HRTECHZ',
      hasDropdown: true,
      content: [
        {
          category: '',
          items: [
            { name: 'HRTECHZ', href: '/HRTECHZ' },
            { name: 'Awards', href: '/awards' },
            { name: 'CSR', href: '/csr' },
            { name: 'Annual Reports', href: '/about/annual-reports' }
          ]
        }
      ]
    },
    {
      title: 'Blog',
      hasDropdown: false,
      href: '/blog'
    },
    {
      title: 'Contact',
      hasDropdown: false,
      href: '/contact'
    }
  ];

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-white'
    } border-b border-gray-100`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0 transition-transform duration-200 hover:scale-105">
            <Link href="/">
              <div className="w-36 h-9 sm:w-45 sm:h-12">
                <Image
                  src="/images/verifieze-logo.png"
                  alt="Verifieze Logo"
                  width={180}
                  height={45}
                  priority
                  className="w-full h-full object-contain"
                />
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <div key={index} className="relative group">
                {item.hasDropdown ? (
                  <>
                    <button className="flex items-center space-x-1 text-gray-700 hover:text-[#009BB5] transition-colors duration-200 font-medium text-sm">
                      <span>{item.title}</span>
                      <svg className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    
                    {/* Desktop Dropdown */}
                    <div className={`absolute left-0 mt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 ${
                      item.title === 'Products' ? 'w-80 xl:w-96' : 'w-64'
                    }`}>
                      <div className="bg-white rounded-lg shadow-xl border border-gray-100 p-6">
                        {item.title === 'Products' ? (
                          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                            {item.content.map((section, sectionIndex) => (
                              <div key={sectionIndex}>
                                <h4 className="text-sm font-semibold text-gray-900 mb-3">{section.category}</h4>
                                <ul className="space-y-2">
                                  {section.items.map((subItem, subIndex) => (
                                    <li key={subIndex}>
                                      <Link href={subItem.href} className="text-sm text-gray-600 hover:text-[#009BB5] transition-colors duration-200 block py-1">
                                        {subItem.name}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <div className="space-y-4">
                            {item.content.map((section, sectionIndex) => (
                              <div key={sectionIndex}>
                                {section.category && (
                                  <h4 className="text-sm font-semibold text-gray-900 mb-2">{section.category}</h4>
                                )}
                                <ul className="space-y-2">
                                  {section.items.map((subItem, subIndex) => (
                                    <li key={subIndex}>
                                      <Link href={subItem.href} className="text-sm text-gray-600 hover:text-[#009BB5] transition-colors duration-200 block py-1">
                                        {subItem.name}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link href={item.href} className="text-gray-700 hover:text-[#009BB5] transition-colors duration-200 font-medium text-sm">
                    {item.title}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Desktop Right Side */}
          <div className="hidden lg:flex items-center space-x-6">
            <div className="flex items-center space-x-4 text-sm">
              <Link href="/support" className="text-gray-500 hover:text-gray-700 transition-colors duration-200">
                Support
              </Link>
              <Link href="https://checkengine.verifieze.com/" className="text-gray-500 hover:text-gray-700 transition-colors duration-200">
                Log in
              </Link>
            </div>
            
            <div className="flex items-center space-x-3">
              <Link href="/contact">
                <button className="border border-[#009BB5] text-[#009BB5] bg-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#009BB5] hover:text-white transition-all duration-200">
                  Talk to sales
                </button>
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-3 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors duration-200 touch-manipulation"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-screen opacity-100 pb-6' : 'max-h-0 opacity-0 pb-0'
        } overflow-hidden`}>
          <div className="pt-4 space-y-2">
            {navItems.map((item, index) => (
              <div key={index} className="border-b border-gray-100 last:border-b-0">
                {item.hasDropdown ? (
                  <div>
                    <button
                      onClick={() => toggleMobileDropdown(index)}
                      className="w-full flex items-center justify-between px-4 py-4 text-left text-gray-700 hover:text-[#009BB5] hover:bg-gray-50 rounded-lg transition-all duration-200 font-medium touch-manipulation"
                    >
                      <span className="text-base">{item.title}</span>
                      <svg 
                        className={`w-5 h-5 transition-transform duration-200 ${
                          openDropdown === index ? 'rotate-180' : ''
                        }`} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    
                    <div className={`transition-all duration-300 ease-in-out overflow-hidden ${
                      openDropdown === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                      <div className="px-4 pb-4">
                        {item.content.map((section, sectionIndex) => (
                          <div key={sectionIndex} className="mb-4 last:mb-0">
                            {section.category && (
                              <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2 px-2">
                                {section.category}
                              </div>
                            )}
                            <div className="space-y-1">
                              {section.items.map((subItem, subIndex) => (
                                <Link
                                  key={subIndex}
                                  href={subItem.href}
                                  className="block px-4 py-3 text-sm text-gray-600 hover:text-[#009BB5] hover:bg-gray-50 rounded-lg transition-all duration-200 touch-manipulation"
                                >
                                  {subItem.name}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link 
                    href={item.href} 
                    className="block px-4 py-4 text-base text-gray-700 hover:text-[#009BB5] hover:bg-gray-50 rounded-lg transition-all duration-200 font-medium touch-manipulation"
                  >
                    {item.title}
                  </Link>
                )}
              </div>
            ))}
            
            {/* Mobile Secondary Links */}
            <div className="pt-4 mt-4 border-t border-gray-100 space-y-2">
              <Link href="/support" className="block px-4 py-3 text-sm text-gray-500 hover:text-gray-700 hover:bg-gray-50 rounded-lg transition-all duration-200 touch-manipulation">
                Support
              </Link>
              <Link href="https://checkengine.verifieze.com/" className="block px-4 py-3 text-sm text-gray-500 hover:text-gray-700 hover:bg-gray-50 rounded-lg transition-all duration-200 touch-manipulation">
                Log in
              </Link>
              
              {/* Mobile CTA Buttons */}
              <div className="pt-4 space-y-3 px-4">
                <Link href="/talk-to-sales">
                  <button className="w-full border-2 border-[#009BB5] text-[#009BB5] bg-white px-6 py-4 rounded-lg text-base font-medium hover:bg-[#009BB5] hover:text-white transition-all duration-200 touch-manipulation">
                    Talk to sales
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}