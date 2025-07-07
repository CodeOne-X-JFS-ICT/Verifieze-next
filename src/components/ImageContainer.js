import { CheckCircle } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function ImageContainer({ imageSrc, imageAlt, title, highlightText, features = [], reverse }) {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className={`flex flex-col ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-12`}>

          {/* Left - Image */}
          <div className="lg:w-1/2">
            <div className="relative rounded-xl overflow-hidden shadow-lg">
              <Image
                src={imageSrc}
                alt={imageAlt}
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Right - Content */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {title}{" "}
              <span className="text-[var(--color-primary)]">{highlightText}</span>
            </h2>

            <div className="space-y-6">
              {features.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="bg-[var(--color-primary-light)] p-2 rounded-full">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold flex items-center gap-2">
                      {item.title}
                      
                    </h3>
                    <p className="text-gray-600 mt-2">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ImageContainer
