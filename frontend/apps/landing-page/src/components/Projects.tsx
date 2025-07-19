import { ArrowRight } from 'lucide-react'
export const Projects = () => {
  const projects = [
    {
      title: 'Customer Support AI',
      client: 'E-commerce Retailer',
      description:
        'Custom-trained AI assistant that handles 80% of customer inquiries without human intervention.',
      results:
        'Reduced response time by 65% and improved customer satisfaction scores by 27%.',
      tags: ['RAG', 'Fine-tuning', 'Frontend Integration'],
    },
    {
      title: 'Content Recommendation Engine',
      client: 'Digital Publisher',
      description:
        'Personalized content recommendation system that increased reader engagement by 45%.',
      results:
        'Boosted average session duration by 3.5 minutes and reduced bounce rate by 18%.',
      tags: ['ML Model', 'User Interface', 'Analytics'],
    },
    {
      title: 'Document Processing Automation',
      client: 'Legal Services Firm',
      description:
        'AI system that extracts, categorizes, and summarizes key information from legal documents.',
      results:
        'Reduced document processing time by 75% and improved accuracy from 82% to 96%.',
      tags: ['Document AI', 'Custom Training', 'Evaluation Framework'],
    },
    {
      title: 'Predictive Maintenance System',
      client: 'Manufacturing Company',
      description:
        'AI-powered system that predicts equipment failures before they occur, enabling proactive maintenance.',
      results:
        'Reduced unplanned downtime by 37% and maintenance costs by 22%.',
      tags: ['Time Series', 'IoT Integration', 'Dashboard'],
    },
    {
      title: 'Customer Churn Prediction',
      client: 'SaaS Provider',
      description:
        'Machine learning model that identifies customers at risk of cancellation, enabling targeted retention efforts.',
      results:
        'Improved retention rate by 15% and increased customer lifetime value by 23%.',
      tags: ['Predictive Analytics', 'Integration', 'CRM'],
    },
    {
      title: 'Inventory Optimization',
      client: 'Retail Chain',
      description:
        'AI system that optimizes inventory levels across multiple locations based on demand forecasting.',
      results:
        'Reduced excess inventory by 31% while maintaining 99.2% product availability.',
      tags: ['Forecasting', 'Optimization', 'Supply Chain'],
    },
  ]
  return (
    <section id="projects" className="py-20 bg-white w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block mb-4 bg-indigo-100 px-3 py-1 rounded-full">
            <p className="text-indigo-700 font-medium text-sm">
              Success Stories
            </p>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Recent Projects
          </h2>
          <p className="text-lg text-gray-600">
            Real results for small-scale companies implementing AI solutions.
            See how our clients have transformed their businesses with AI.
          </p>
        </div>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="mb-4 flex justify-between items-start">
                  <span className="text-sm font-medium px-2 py-1 bg-indigo-100 text-indigo-700 rounded">
                    {project.client}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="mb-4 pt-4 border-t border-gray-200">
                  <h4 className="text-sm font-semibold text-gray-700 mb-1">
                    Results:
                  </h4>
                  <p className="text-sm text-gray-600">{project.results}</p>
                </div>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-indigo-50 text-indigo-700 text-sm rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-indigo-50 to-blue-50 p-8 rounded-lg shadow-sm border border-indigo-100 max-w-3xl mx-auto">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Ready to become our next success story?
              </h3>
              <p className="text-gray-600 mb-6">
                Let's discuss how our AI expertise can help your business
                achieve similar results.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors shadow-sm"
              >
                Start your AI journey
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
