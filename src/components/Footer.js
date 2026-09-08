import Link from 'next/link';
import Image from 'next/image';
import { Shield, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              
              <span className="text-2xl font-bold tracking-tight">
                VERIFIEZE
              </span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Sri Lanka's leading background verification service provider. Delivering fast, accurate, and compliant insights to help you hire smarter.
            </p>
            <div className="flex space-x-4">
              <Link href="https://www.facebook.com/verifieze" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[var(--color-primary)] transition-colors">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href="https://www.linkedin.com/company/verifieze" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[var(--color-primary)] transition-colors">
                <Linkedin className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-4 text-gray-400">
              <li><Link href="/" className="hover:text-[var(--color-primary)] transition-colors">Home</Link></li>
              <li><Link href="/#services" className="hover:text-[var(--color-primary)] transition-colors">Services</Link></li>
              <li><Link href="/compliance" className="hover:text-[var(--color-primary)] transition-colors">Compliance</Link></li>
              <li><Link href="/iso" className="hover:text-[var(--color-primary)] transition-colors">Data Security</Link></li>
              <li><Link href="/contact" className="hover:text-[var(--color-primary)] transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-bold mb-6">Legal & Security</h3>
            <ul className="space-y-4 text-gray-400">
              <li><Link href="#" className="hover:text-[var(--color-primary)] transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-[var(--color-primary)] transition-colors">Terms of Service</Link></li>
              <li><Link href="/iso" className="hover:text-[var(--color-primary)] transition-colors">ISO 27001 Certification</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 shrink-0 mt-0.5 text-[var(--color-primary)]" />
                <span>01 Lake Cres,<br/>Colombo 02, Sri Lanka</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 shrink-0 text-[var(--color-primary)]" />
                <span>+94 112 746 010</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 shrink-0 text-[var(--color-primary)]" />
                <span>hello@verifieze.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} VERIFIEZE. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm">
            Backed by <span className="text-white font-medium">HRTECHZ</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
