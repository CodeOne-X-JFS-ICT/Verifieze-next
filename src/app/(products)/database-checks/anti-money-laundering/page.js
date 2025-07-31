import CTA_Buttons from "@/components/CTA_Buttons";
import Navbar from "@/components/Navbar";
import {
  AlertCircle,
  AlertOctagon,
  ArrowRight,
  Award,
  BadgeDollarSign,
  Banknote,
  Bitcoin,
  Building,
  CheckCircle,
  FileText,
  Gavel,
  Globe,
  Landmark,
  ListChecks,
  Lock,
  Play,
  Scale,
  ShieldAlert,
  ShieldCheck,
  ShoppingCart,
  TrendingUp,
  User,
  Users,
  Zap,
} from "lucide-react";
import React from "react";

function AMLScreeningPage() {
  const screeningTypes = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Sanction Lists",
      desc: "OFAC, UN, EU, HMT, and other international sanctions",
      features: ["Real-time updates", "200+ countries", "Instant alerts"],
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "PEP Databases",
      desc: "Politically Exposed Persons and their associates",
      features: ["Family connections", "Close associates", "Historical data"],
    },
    {
      icon: <AlertOctagon className="w-8 h-8" />,
      title: "Adverse Media",
      desc: "Negative news screening in 20+ languages",
      features: [
        "AI-powered analysis",
        "Sentiment scoring",
        "Source verification",
      ],
    },
    {
      icon: <Gavel className="w-8 h-8" />,
      title: "Law Enforcement Lists",
      desc: "Interpol, FBI, and other agency watchlists",
      features: ["Criminal records", "Wanted lists", "Investigation alerts"],
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Country Risk Data",
      desc: "High-risk jurisdictions and blacklists",
      features: ["Risk ratings", "Regulatory changes", "Sanctions impact"],
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Custom Blacklists",
      desc: "Your internal lists and specific risk criteria",
      features: ["Custom rules", "Internal flags", "Team collaboration"],
    },
  ];

  const industries = [
    {
      icon: <Landmark className="w-6 h-6" />,
      text: "Banks & Fintech",
      count: "500+",
    },
    {
      icon: <BadgeDollarSign className="w-6 h-6" />,
      text: "Investment Firms",
      count: "200+",
    },
    {
      icon: <Bitcoin className="w-6 h-6" />,
      text: "Crypto Exchanges",
      count: "150+",
    },
    {
      icon: <ShoppingCart className="w-6 h-6" />,
      text: "E-commerce",
      count: "300+",
    },
    {
      icon: <Banknote className="w-6 h-6" />,
      text: "Payment Providers",
      count: "100+",
    },
    {
      icon: <Scale className="w-6 h-6" />,
      text: "Legal & Real Estate",
      count: "250+",
    },
  ];

  const benefits = [
    {
      icon: <ShieldCheck className="w-7 h-7" />,
      title: "Stay Compliant",
      text: "Avoid penalties up to $2B and maintain regulatory compliance across jurisdictions",
      stat: "99.9% compliance rate",
    },
    {
      icon: <AlertCircle className="w-7 h-7" />,
      title: "Protect Reputation",
      text: "Prevent reputational damage by identifying high-risk clients before onboarding",
      stat: "85% risk reduction",
    },
    {
      icon: <Zap className="w-7 h-7" />,
      title: "Automate Processes",
      text: "Replace manual checks with instant automated screening in under 30 seconds",
      stat: "90% time savings",
    },
    {
      icon: <Globe className="w-7 h-7" />,
      title: "Global Coverage",
      text: "Access 1000+ databases with local regulatory expertise in 200+ countries",
      stat: "1000+ sources",
    },
  ];
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[var(--color-primary-light)] to-white py-24">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-[var(--color-primary)] bg-opacity-20 rounded-full text-white text-sm font-medium mb-6">
                <Award className="w-4 h-4 mr-2" />
                Trusted by 1000+ Financial Institutions
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight tracking-tight mb-6">
                Protect Your Business with{" "}
                <span className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-dark)] bg-clip-text text-transparent">
                  Global AML Compliance
                </span>
              </h1>

              <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl leading-relaxed">
                Screen candidates or clients against watchlists, sanctions,
                PEPs, and more using our comprehensive international AML
                database network.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <CTA_Buttons
                  primaryText="Run AML Check"
                  primaryHref=""
                  secondaryText="Talk to Compliance Expert"
                  secondaryHref=""
                />
              </div>
            </div>

            <div className="relative">
              {/* Dashboard mockup */}
              <div className="relative bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
                <div className="bg-white rounded-xl p-6 shadow-inner">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-semibold text-gray-800">
                      AML Screening Dashboard
                    </h3>
                    <div className="flex gap-2">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-red-50 rounded-lg border border-red-200">
                      <div className="flex items-center">
                        <AlertCircle className="w-5 h-5 text-red-500 mr-3" />
                        <span className="text-red-800 font-medium">
                          High Risk Match
                        </span>
                      </div>
                      <span className="text-red-600 font-bold">BLOCKED</span>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                      <div className="flex items-center">
                        <AlertOctagon className="w-5 h-5 text-yellow-500 mr-3" />
                        <span className="text-yellow-800 font-medium">
                          Medium Risk
                        </span>
                      </div>
                      <span className="text-yellow-600 font-bold">REVIEW</span>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg border border-green-200">
                      <div className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                        <span className="text-green-800 font-medium">
                          Low Risk
                        </span>
                      </div>
                      <span className="text-green-600 font-bold">APPROVED</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is AML Screening */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-dark)] rounded-3xl transform rotate-3 opacity-10"></div>
              <div className="relative bg-white rounded-3xl border-2 border-gray-100 p-8 shadow-xl">
                <div className="text-center">
                  <div className="w-20 h-20 bg-[var(--color-primary-light)] rounded-full flex items-center justify-center mx-auto mb-6">
                    <ShieldAlert className="w-10 h-10 text-[var(--color-primary)]" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Real-Time Risk Detection
                  </h3>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="p-4 bg-[var(--color-primary-light)] rounded-xl">
                      <div className="text-2xl font-bold text-[var(--color-primary)]">
                        1000+
                      </div>
                      <div className="text-sm text-gray-600">Data Sources</div>
                    </div>
                    <div className="p-4 bg-green-50 rounded-xl">
                      <div className="text-2xl font-bold text-green-600">
                        99.9%
                      </div>
                      <div className="text-sm text-gray-600">Accuracy</div>
                    </div>
                    <div className="p-4 bg-blue-50 rounded-xl">
                      <div className="text-2xl font-bold text-blue-600">
                        30s
                      </div>
                      <div className="text-sm text-gray-600">Response Time</div>
                    </div>
                    <div className="p-4 bg-purple-50 rounded-xl">
                      <div className="text-2xl font-bold text-purple-600">
                        20+
                      </div>
                      <div className="text-sm text-gray-600">Countries</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="inline-flex items-center px-4 py-2 bg-[var(--color-primary-light)] rounded-full text-[var(--color-primary)] text-sm font-medium mb-6">
                <ShieldAlert className="w-4 h-4 mr-2" />
                Advanced Risk Intelligence
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                What is{" "}
                <span className="text-[var(--color-primary)]">
                  AML Screening
                </span>
                ?
              </h2>

              <p className="text-lg text-gray-600 mb-6 max-w-3xl mx-auto">
                AML screening is the process of detecting individuals or
                entities involved in money laundering, terrorism financing, or
                fraud by scanning comprehensive global databases. Our advanced
                system cross-references over 1000 sources in real-time to
                identify high-risk profiles instantly.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {[
                  {
                    icon: <Globe className="w-5 h-5" />,
                    text: "Global Sanctions Lists",
                    color: "text-blue-600",
                  },
                  {
                    icon: <Users className="w-5 h-5" />,
                    text: "PEP Databases",
                    color: "text-green-600",
                  },
                  {
                    icon: <AlertOctagon className="w-5 h-5" />,
                    text: "Adverse Media",
                    color: "text-red-600",
                  },
                  {
                    icon: <Gavel className="w-5 h-5" />,
                    text: "Law Enforcement",
                    color: "text-purple-600",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg"
                  >
                    <div className={`${item.color}`}>{item.icon}</div>
                    <span className="text-gray-700 font-medium">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>

              <button className="group px-6 py-3 bg-[var(--color-primary)] text-white font-semibold rounded-xl hover:bg-[var(--color-primary-dark)] transition-all shadow-lg hover:shadow-xl flex items-center">
                Learn More About Our Technology
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* What We Screen */}
      <section className="py-20 bg-[var(--color-bg-light)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-[var(--color-primary-light)] rounded-full text-[var(--color-primary)] text-sm font-medium mb-6">
              <ListChecks className="w-4 h-4 mr-2" />
              Comprehensive Database Coverage
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What We{" "}
              <span className="text-[var(--color-primary)]">
                Screen Against
              </span>
            </h2>
            <p className="text-lg text-gray-600 mb-6 max-w-3xl mx-auto">
              Our platform integrates with the world's most comprehensive
              financial crime databases
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {screeningTypes.map((item, i) => (
              <div
                key={i}
                className="group bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-2xl transition-all hover:-translate-y-2 cursor-pointer"
              >
                <div className="relative mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-[var(--color-primary-light)] flex items-center justify-center text-[var(--color-primary)] group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-[var(--color-success)] rounded-full flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-6">{item.desc}</p>

                <div className="space-y-2">
                  {item.features.map((feature, j) => (
                    <div
                      key={j}
                      className="flex items-center text-sm text-gray-500"
                    >
                      <CheckCircle className="w-4 h-4 text-[var(--color-success)] mr-2" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Flow */}
      {/* <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-[var(--color-primary-light)] rounded-full text-[var(--color-primary)] text-sm font-medium mb-6">
              <Zap className="w-4 h-4 mr-2" />
              Streamlined Workflow
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Simple 4-Step Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our automated screening integrates seamlessly with your existing systems
            </p>
          </div>
          
          <div className="relative">
           
            <div className="absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-dark)] hidden lg:block"></div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
              {[
                { 
                  step: "1", 
                  title: "Input Details", 
                  desc: "Enter name, DOB, nationality, or company registration details",
                  icon: <User className="w-6 h-6" />,
                  color: "bg-blue-500"
                },
                { 
                  step: "2", 
                  title: "AI-Powered Screening", 
                  desc: "Our AI scans 1000+ global databases in real-time",
                  icon: <Globe className="w-6 h-6" />,
                  color: "bg-green-500"
                },
                { 
                  step: "3", 
                  title: "Smart Risk Scoring", 
                  desc: "Advanced algorithms provide Low/Medium/High risk classification",
                  icon: <TrendingUp className="w-6 h-6" />,
                  color: "bg-yellow-500"
                },
                { 
                  step: "4", 
                  title: "Detailed Report", 
                  desc: "Comprehensive report with evidence and actionable recommendations",
                  icon: <FileText className="w-6 h-6" />,
                  color: "bg-purple-500"
                }
              ].map((step, i) => (
                <div key={i} className="relative">
                  <div className="bg-white rounded-2xl p-8 border-2 border-gray-100 shadow-lg hover:shadow-xl transition-all text-center group hover:-translate-y-2">
                    <div className={`w-20 h-20 ${step.color} text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                      {step.step}
                    </div>
                    
                    <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center text-gray-600 mx-auto mb-4">
                      {step.icon}
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          
          <div className="mt-16 bg-gradient-to-r from-[var(--color-primary-light)] to-blue-50 rounded-3xl p-8 border border-[var(--color-primary)] border-opacity-20">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">See It In Action</h3>
              <p className="text-gray-600">Watch our AML screening process in real-time</p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center justify-center h-64 bg-gray-50 rounded-xl">
                <button className="group px-8 py-4 bg-[var(--color-primary)] text-white font-semibold rounded-xl hover:bg-[var(--color-primary-dark)] transition-all shadow-lg hover:shadow-xl flex items-center">
                  <Play className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform" />
                  Watch Demo Video
                </button>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Industries & Benefits */}
      <section className="py-20 bg-[var(--color-bg-light)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Industries */}
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-[var(--color-primary-light)] rounded-full text-[var(--color-primary)] text-sm font-medium mb-6">
                <Building className="w-4 h-4 mr-2" />
                Trusted by Leading Industries
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Who Needs{" "}
                <span className="text-[var(--color-primary)]">
                  AML Screening
                </span>
                ?
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {industries.map((item, i) => (
                  <div
                    key={i}
                    className="group bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-lg bg-[var(--color-primary-light)] flex items-center justify-center mr-4 text-[var(--color-primary)] group-hover:scale-110 transition-transform">
                          {item.icon}
                        </div>
                        <div>
                          <span className="font-semibold text-gray-900">
                            {item.text}
                          </span>
                          <div className="text-sm text-gray-500">
                            {item.count} clients
                          </div>
                        </div>
                      </div>
                      <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-[var(--color-primary)] group-hover:translate-x-1 transition-all" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-green-50 rounded-full text-green-600 text-sm font-medium mb-6">
                <CheckCircle className="w-4 h-4 mr-2" />
                Proven Results
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Key Benefits
              </h2>

              <div className="space-y-6">
                {benefits.map((item, i) => (
                  <div
                    key={i}
                    className="group bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-[var(--color-primary-light)] flex items-center justify-center text-[var(--color-primary)] group-hover:scale-110 transition-transform flex-shrink-0">
                        {item.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-xl font-bold text-gray-900">
                            {item.title}
                          </h3>
                          <span className="text-sm font-semibold text-[var(--color-primary)] bg-[var(--color-primary-light)] px-3 py-1 rounded-full">
                            {item.stat}
                          </span>
                        </div>
                        <p className="text-gray-600 leading-relaxed">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* <div className="mt-8 p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl border border-green-200">
                <h4 className="font-bold text-gray-900 mb-2">ROI Calculator</h4>
                <p className="text-gray-600 mb-4">See how much you could save with automated AML screening</p>
                <button className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors flex items-center">
                  Calculate Your Savings
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}

      <section className="py-16 bg-gradient-to-br from-[var(--color-primary-light)] to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to{" "}
              <span className="text-[var(--color-primary)]">
                Secure Your Business
              </span>
              ?
            </h2>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              Start screening high-risk individuals and entities today. Our AML
              experts are ready to help you implement the perfect solution for
              your compliance needs.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <CTA_Buttons
                primaryText="Start Verifying"
                primaryHref=""
                secondaryText="Talk to Sales"
                secondaryHref=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AMLScreeningPage;
