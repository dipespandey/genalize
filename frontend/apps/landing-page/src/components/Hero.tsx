export const Hero = () => {
  return (
    <section className="w-full bg-gradient-to-b from-white to-gray-50 py-24 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-6 bg-indigo-100 px-4 py-2 rounded-full">
            <p className="text-indigo-700 font-medium text-sm">
              AI Solutions for Modern Businesses
            </p>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6">
            AI Solutions,{' '}
            <span className="text-indigo-600">Human Approach</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed">
            A boutique agency helping small companies implement powerful AI
            tools. We specialize in pretraining, fine-tuning, RAG systems, and
            evaluations - bringing enterprise-level AI capabilities to growing
            businesses.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#contact"
              className="px-8 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors shadow-md hover:shadow-lg"
            >
              Get in touch
            </a>
            <a
              href="#services"
              className="px-8 py-3 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
            >
              Explore our services
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
