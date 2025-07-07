import { CheckCircle } from 'lucide-react'
import React from 'react'

function PricingSection() {
  return (
    <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose the plan that fits your verification needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Basic</h3>
              <div className="mb-6">
                <span className="text-3xl font-bold text-gray-900">$15</span>
                {/* <span className="text-gray-600">/verification</span> */}
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  Basic employment verification
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  Standard turnaround (3-5 days)
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  Email support
                </li>
              </ul>
              <button className="w-full py-3 bg-white text-[var(--color-primary)] border-2 border-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white font-semibold rounded-lg transition-all duration-300">
                Get Started
              </button>
            </div>

            <div className="bg-[var(--color-primary-dark)] text-white rounded-2xl p-8 relative hover:shadow-lg transition-shadow transform scale-105">
              <div className="absolute top-0 right-0 bg-[var(--color-accent)] text-white px-3 py-1 rounded-bl-lg rounded-tr-2xl text-sm font-medium">
                Most Popular
              </div>
              <h3 className="text-xl font-bold mb-4">Professional</h3>
              <div className="mb-6">
                <span className="text-3xl font-bold">$25</span>
                {/* <span className="text-blue-100">/verification</span> */}
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-white mr-2" />
                  Comprehensive verification
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-white mr-2" />
                  Fast turnaround (1-2 days)
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-white mr-2" />
                  Priority support
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-white mr-2" />
                  API access
                </li>
              </ul>
              <button className="w-full py-3 bg-[var(--color-primary)] hover:bg-white hover:text-[var(--color-primary)] border-2 border-transparent hover:border-[var(--color-primary)] text-white font-semibold rounded-lg transition-all duration-300">
                Get Started
              </button>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Enterprise
              </h3>
              <div className="mb-6">
                <span className="text-3xl font-bold text-gray-900">Custom</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  Volume discounts
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  Custom integrations
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  Dedicated support
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  SLA guarantees
                </li>
              </ul>
              <button className="w-full py-3 bg-white text-[var(--color-primary)] border-2 border-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white font-semibold rounded-lg transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>
  )
}

export default PricingSection
