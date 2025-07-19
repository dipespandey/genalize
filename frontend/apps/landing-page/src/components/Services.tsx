import React from 'react'
import { Brain, Code, Database, LineChart, Zap, Shield } from 'lucide-react'

export const Services = () => {
  const services = [
    {
      title: 'Model Pre-training',
      description:
        'Custom AI models trained from scratch for your specific business needs and data requirements. We build models that understand your unique domain.',
      icon: <Brain className="h-8 w-8 text-indigo-600" />,
    },
    {
      title: 'Fine-tuning',
      description:
        'Optimize existing models for your specific use cases, improving accuracy and performance. Get more from your AI with targeted enhancements.',
      icon: <Code className="h-8 w-8 text-indigo-600" />,
    },
    {
      title: 'RAG Systems',
      description:
        'Retrieval-Augmented Generation systems that combine your business knowledge with AI capabilities. Connect your data to powerful AI models.',
      icon: <Database className="h-8 w-8 text-indigo-600" />,
    },
    {
      title: 'Evaluations & Testing',
      description:
        'Comprehensive evaluation frameworks to measure and improve AI system performance. Ensure your AI delivers reliable, high-quality results.',
      icon: <LineChart className="h-8 w-8 text-indigo-600" />,
    },
    {
      title: 'AI Integration',
      description:
        'Seamlessly integrate AI solutions into your existing workflows and software systems. We handle the technical complexity so you can focus on results.',
      icon: <Zap className="h-8 w-8 text-indigo-600" />,
    },
    {
      title: 'Custom Request',
      description:
        'We can help you with any custom requests you have. We are not limited to the services we offer.',
      icon: (
        <span className="h-8 w-8 text-indigo-600 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </span>
      ),
    },
  ]

  return (
    <section id="services" className="py-20 bg-gray-50 w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block mb-4 bg-indigo-100 px-3 py-1 rounded-full">
            <p className="text-indigo-700 font-medium text-sm">Our Expertise</p>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Comprehensive AI Services
          </h2>
          <p className="text-lg text-gray-600">
            We help small companies implement powerful AI tools with our
            complementary expertise and focused approach.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
            >
              {/* Animated border with streaking effect */}
              <div className="absolute inset-0 rounded-lg">
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                {/* Circling light animation */}
                <div className="absolute inset-0 rounded-lg overflow-hidden">
                  <div className="absolute w-3 h-3 bg-white rounded-full shadow-lg opacity-0 group-hover:opacity-100 group-hover:animate-circle-light"></div>
                </div>
              </div>
              <div className="absolute inset-[1px] bg-white rounded-lg"></div>
              
              {/* Content */}
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-lg bg-indigo-100 mb-4 group-hover:bg-indigo-200 transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-indigo-700 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 max-w-3xl mx-auto text-center">
          <div className="bg-indigo-50 p-8 rounded-lg border border-indigo-100 hover:border-indigo-200 transition-colors duration-300">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Not sure which service you need?
            </h3>
            <p className="text-gray-600 mb-6">
              Book a free consultation with our AI experts to discuss your
              business challenges and discover the right solution.
            </p>
            <a
              href="#contact"
              className="inline-block px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors shadow-sm hover:shadow-md"
            >
              Schedule a consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
