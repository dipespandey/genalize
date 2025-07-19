import { Mail, MessageSquare, ArrowRight } from 'lucide-react'
export const Contact = () => {
  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-b from-gray-50 to-white w-full"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block mb-4 bg-indigo-100 px-3 py-1 rounded-full">
            <p className="text-indigo-700 font-medium text-sm">Get Started</p>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-600">
            Ready to discuss how we can help implement AI solutions for your
            business? Fill out the form below or reach out directly.
          </p>
        </div>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-5 gap-8">
            <div className="md:col-span-3 bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Send us a message
              </h3>
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Your company name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Tell us about your project or requirements"
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors shadow-sm"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
            <div className="md:col-span-2 space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-indigo-100 mb-4">
                  <Mail className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-1">
                  Email Us
                </h3>
                <p className="text-gray-600 mb-2">For project inquiries:</p>
                <p className="text-indigo-600 font-medium">hello@genalize.ai</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-indigo-100 mb-4">
                  <MessageSquare className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-1">
                  Schedule a Call
                </h3>
                <p className="text-gray-600 mb-2">
                  Book a 30-minute consultation:
                </p>
                <a
                  href="#"
                  className="text-indigo-600 font-medium inline-flex items-center"
                >
                  Book a time slot
                  <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </div>
              <div className="bg-indigo-50 p-6 rounded-lg shadow-sm border border-indigo-100">
                <h3 className="text-lg font-medium text-gray-900 mb-4">
                  What happens next?
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-indigo-100 flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-xs font-medium text-indigo-600">
                        1
                      </span>
                    </div>
                    <div>
                      <p className="text-gray-600">
                        We'll contact you within 24 hours
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-indigo-100 flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-xs font-medium text-indigo-600">
                        2
                      </span>
                    </div>
                    <div>
                      <p className="text-gray-600">
                        We'll discuss your needs and goals
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-indigo-100 flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-xs font-medium text-indigo-600">
                        3
                      </span>
                    </div>
                    <div>
                      <p className="text-gray-600">
                        We'll provide a tailored proposal
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
