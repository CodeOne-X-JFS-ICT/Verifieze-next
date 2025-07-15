import React from 'react';
import { Award, Star, Shield, Users, Trophy, CheckCircle, Calendar, MapPin } from 'lucide-react';
import Navbar from '@/components/Navbar';

const AwardsPage = () => {
  const majorAwards = [
    {
      title: "Best Background Check Platform 2024",
      organization: "HR Tech Awards",
      year: "2024",
      description: "Recognized for exceptional innovation in employee verification technology and customer satisfaction.",
      icon: <Trophy className="w-8 h-8" />,
      category: "Industry Recognition"
    },
    {
      title: "Cybersecurity Excellence Award",
      organization: "Security Innovation Institute",
      year: "2024",
      description: "Awarded for outstanding data protection and security measures in background verification services.",
      icon: <Shield className="w-8 h-8" />,
      category: "Security & Compliance"
    },
    {
      title: "Customer Choice Award",
      organization: "B2B Review Platform",
      year: "2023",
      description: "Highest customer satisfaction rating among background check providers with 98% approval rate.",
      icon: <Star className="w-8 h-8" />,
      category: "Customer Excellence"
    }
  ];

  const certifications = [
    {
      title: "SOC 2 Type II Certified",
      issuer: "AICPA",
      year: "2024",
      description: "Demonstrates our commitment to security, availability, and confidentiality of customer data."
    },
    {
      title: "FCRA Compliance Certification",
      issuer: "Fair Credit Reporting Act",
      year: "2024",
      description: "Certified compliance with federal regulations for background screening services."
    },
    {
      title: "ISO 27001 Certified",
      issuer: "International Organization for Standardization",
      year: "2023",
      description: "International standard for information security management systems."
    },
    {
      title: "PBSA Accreditation",
      issuer: "Professional Background Screening Association",
      year: "2023",
      description: "Accredited member ensuring industry best practices and ethical standards."
    }
  ];

  const industryRecognition = [
    {
      title: "Featured in Forbes",
      date: "March 2024",
      description: "\"Top 10 Background Check Platforms Revolutionizing HR\"",
      type: "Media Coverage"
    },
    {
      title: "TechCrunch Spotlight",
      date: "January 2024",
      description: "Highlighted as an innovative solution for modern hiring challenges",
      type: "Media Coverage"
    },
    {
      title: "HR Executive Top Pick",
      date: "December 2023",
      description: "Recommended as essential tool for HR professionals",
      type: "Industry Publication"
    },
    {
      title: "G2 High Performer",
      date: "Ongoing",
      description: "Consistently rated as high performer in background check category",
      type: "Review Platform"
    }
  ];

  return (
    <>
    <Navbar />

     <div className="min-h-screen bg-white relative py-20">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#009BB5] to-[#006F86] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Award className="w-16 h-16 mx-auto mb-6 text-white" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Awards & Recognition
            </h1>
            <p className="text-xl text-[#E0F7FB] max-w-3xl mx-auto">
              Trusted by thousands of companies worldwide, Verifieze has been recognized for excellence in background verification, security, and customer service.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-[#009BB5] mb-2">15+</div>
              <div className="text-[#4B5563]">Industry Awards</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#009BB5] mb-2">98%</div>
              <div className="text-[#4B5563]">Customer Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#009BB5] mb-2">50K+</div>
              <div className="text-[#4B5563]">Verified Employees</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#009BB5] mb-2">99.9%</div>
              <div className="text-[#4B5563]">Platform Uptime</div>
            </div>
          </div>
        </div>
      </div>
      

      {/* Major Awards */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#111827] mb-4">Major Awards</h2>
            <p className="text-lg text-[#4B5563] max-w-3xl mx-auto">
              Our commitment to excellence has been recognized by leading industry organizations and publications.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {majorAwards.map((award, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg border border-[#E5E7EB] p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-6">
                  <div className="text-[#009BB5] mr-4">
                    {award.icon}
                  </div>
                  <div>
                    <span className="text-sm font-medium text-[#F59E0B] bg-[#FFF7E6] px-3 py-1 rounded-full">
                      {award.category}
                    </span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-[#111827] mb-2">{award.title}</h3>
                <p className="text-[#009BB5] font-semibold mb-1">{award.organization}</p>
                <p className="text-sm text-[#4B5563] mb-4">{award.year}</p>
                <p className="text-[#4B5563] leading-relaxed">{award.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Certifications */}
      <div className="py-20 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#111827] mb-4">Certifications & Compliance</h2>
            <p className="text-lg text-[#4B5563] max-w-3xl mx-auto">
              We maintain the highest standards of security, compliance, and professional excellence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md border border-[#E5E7EB] p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <CheckCircle className="w-6 h-6 text-[#24b95b] mr-3" />
                  <span className="text-sm font-medium text-[#24b95b]">{cert.year}</span>
                </div>
                <h3 className="text-lg font-bold text-[#111827] mb-2">{cert.title}</h3>
                <p className="text-sm text-[#009BB5] font-semibold mb-3">{cert.issuer}</p>
                <p className="text-sm text-[#4B5563] leading-relaxed">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Industry Recognition */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#111827] mb-4">Industry Recognition</h2>
            <p className="text-lg text-[#4B5563] max-w-3xl mx-auto">
              Featured in leading publications and recognized by industry experts for innovation and excellence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industryRecognition.map((recognition, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md border border-[#E5E7EB] p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <Star className="w-5 h-5 text-[#F59E0B] mr-2" />
                    <span className="text-sm font-medium text-[#F59E0B] bg-[#FFF7E6] px-3 py-1 rounded-full">
                      {recognition.type}
                    </span>
                  </div>
                  <div className="flex items-center text-sm text-[#4B5563]">
                    <Calendar className="w-4 h-4 mr-1" />
                    {recognition.date}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-[#111827] mb-2">{recognition.title}</h3>
                <p className="text-[#4B5563] leading-relaxed">{recognition.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Trust Section */}
      <div className="py-20 bg-gradient-to-r from-[#009BB5] to-[#006F86]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Shield className="w-16 h-16 mx-auto mb-6 text-white" />
            <h2 className="text-3xl font-bold text-white mb-4">
              Trusted by Leading Companies
            </h2>
            <p className="text-xl text-[#E0F7FB] mb-8 max-w-3xl mx-auto">
              Our awards and certifications reflect our unwavering commitment to providing secure, reliable, and accurate background verification services.
            </p> 
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-full px-6 py-3">
                <span className="text-gray-600 font-medium">Fortune 500 Companies</span>
              </div>
              <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-full px-6 py-3">
                <span className="text-gray-600 font-medium">Healthcare Organizations</span>
              </div>
              <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-full px-6 py-3">
                <span className="text-gray-600 font-medium">Financial Institutions</span>
              </div>
              <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-full px-6 py-3">
                <span className="text-gray-600 font-medium">Government Agencies</span>
              </div>
            </div>
          </div> 
        </div>
      </div>
    </div>
    </>
   
  ); 
};

export default AwardsPage;