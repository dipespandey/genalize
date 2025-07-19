export const About = () => {
  return (
    <section id="about" className="py-20 bg-white w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block mb-4 bg-indigo-100 px-3 py-1 rounded-full">
              <p className="text-indigo-700 font-medium text-sm">
                Who We Are
              </p>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              About Genalize
            </h2>
          </div>
          <div className="text-center">
            <p className="text-lg text-gray-600 mb-6 max-w-3xl mx-auto">
              We're a boutique agency with complementary skills in AI
              development. Our approach is inspired by the efficiency and
              focus of DHH and Jason Fried - we believe in cutting through
              complexity to deliver results that matter.
            </p>
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
              With one of us specializing in frontend and the other in backend
              development, we cover the full spectrum of AI implementation
              needs for small-scale companies. Our lean team structure means
              direct communication, faster decisions, and more personalized
              service.
            </p>
            <div className="border-l-4 border-indigo-600 pl-4 italic text-gray-700 mb-8 max-w-2xl mx-auto text-left">
              "We don't believe in bloated teams or overcomplicating
              solutions. We believe in agency, expertise, and getting things
              done right the first time."
            </div>
            <div className="flex justify-center space-x-8">
              <div className="flex items-center">
                <div className="h-24 w-24 rounded-full bg-indigo-100 flex items-center justify-center">
                  <span className="text-indigo-600 font-extrabold text-2xl md:text-3xl lg:text-4xl">10+</span>
                </div>
                <span className="ml-3 text-base md:text-lg text-gray-600">
                  Projects Completed
                </span>
              </div>
              <div className="flex items-center">
                <div className="h-24 w-24 rounded-full bg-indigo-100 flex items-center justify-center">
                  <span className="text-indigo-600 font-extrabold text-2xl md:text-3xl lg:text-4xl">15+</span>
                </div>
                <span className="ml-3 text-base md:text-lg text-gray-600">
                  Happy Clients
                </span>
              </div>
              <div className="flex items-center">
                <div className="h-24 w-24 rounded-full bg-indigo-100 flex items-center justify-center">
                  <span className="text-indigo-600 font-extrabold text-2xl md:text-3xl lg:text-4xl">10+</span>
                </div>
                <span className="ml-3 text-base md:text-lg text-gray-600">
                  Years Experience
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
