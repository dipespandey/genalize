import { MessageSquare, Lightbulb, Code2, CheckCircle } from 'lucide-react'
export const Process = () => {
  const steps = [
    {
      icon: <MessageSquare className="h-8 w-8 text-indigo-600" />,
      title: '1. Consultation',
      description:
        'We start by understanding your business needs and identifying where AI can create the most value for your specific situation.',
      details:
        'In-depth discussion of your goals, challenges, and data resources.',
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-indigo-600" />,
      title: '2. Solution Design',
      description:
        'We design a targeted AI solution that addresses your specific challenges with the right technology approach.',
      details:
        'Custom architecture planning, technology selection, and implementation roadmap.',
    },
    {
      icon: <Code2 className="h-8 w-8 text-indigo-600" />,
      title: '3. Implementation',
      description:
        'Our complementary skills allow us to build and integrate the complete solution efficiently.',
      details:
        'Rapid development cycles with regular updates and transparent progress tracking.',
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-indigo-600" />,
      title: '4. Evaluation & Refinement',
      description:
        'We rigorously test and refine the solution to ensure it delivers measurable business value.',
      details:
        'Comprehensive testing, performance optimization, and continuous improvement.',
    },
  ]
  return (
    <section
      id="process"
      className="py-20 bg-gradient-to-b from-gray-50 to-white w-full"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block mb-4 bg-indigo-100 px-3 py-1 rounded-full">
            <p className="text-indigo-700 font-medium text-sm">How We Work</p>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Process</h2>
          <p className="text-lg text-gray-600">
            We take a streamlined approach to delivering AI solutions that
            focuses on efficiency and results.
          </p>
        </div>
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Connection line between process steps */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-indigo-100 hidden md:block"></div>
            <div className="space-y-12">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  <div
                    className={`md:grid md:grid-cols-2 gap-8 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
                  >
                    <div
                      className={`bg-white p-6 rounded-lg shadow-sm border border-gray-100 ${index % 2 === 1 ? 'md:text-right' : ''}`}
                    >
                      <div
                        className={`inline-flex items-center justify-center h-12 w-12 rounded-full bg-indigo-100 mb-4 ${index % 2 === 1 ? 'md:ml-auto' : ''}`}
                      >
                        {step.icon}
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 mb-4">{step.description}</p>
                      <p className="text-sm text-indigo-600">{step.details}</p>
                    </div>
                    <div className="hidden md:flex items-center justify-center">
                      <div className="h-16 w-16 rounded-full bg-indigo-50 border-4 border-white shadow-sm flex items-center justify-center text-2xl font-bold text-indigo-600">
                        {index + 1}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-16 bg-indigo-50 p-8 rounded-lg shadow-sm border border-indigo-100">
            <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
              The Genalize Difference
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-5 rounded-lg shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-2 text-center">
                  No Bloat
                </h4>
                <p className="text-gray-600 text-center">
                  Two experts, no unnecessary team members or overhead. Direct
                  access to the people doing the work.
                </p>
              </div>
              <div className="bg-white p-5 rounded-lg shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-2 text-center">
                  Direct Communication
                </h4>
                <p className="text-gray-600 text-center">
                  Work directly with the people building your solution. No
                  account managers or middlemen.
                </p>
              </div>
              <div className="bg-white p-5 rounded-lg shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-2 text-center">
                  Rapid Iteration
                </h4>
                <p className="text-gray-600 text-center">
                  Quick feedback loops and continuous improvement. We adapt
                  quickly to your changing needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
