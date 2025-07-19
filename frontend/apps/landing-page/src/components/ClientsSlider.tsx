import { useEffect, useRef } from 'react'
export const ClientsSlider = () => {
  const scrollRef = useRef<HTMLDivElement>(null)
  // Client logos - using placeholder URLs that should be replaced with actual client logos
  const clients = [
    {
      name: 'Refinitiv',
      logo: 'https://www.lseg.com/content/dam/lseg/en_us/images/logos/bespoke/lseg-data-analytics-logo.svg',
    },
    {
      name: 'Thomson Reuters',
      logo: 'https://www.thomsonreuters.com/etc.clientlibs/uefalcon/clientlibs/clientlib-bayberry/resources/images/tr-rebranded-logo.svg',
    },
    {
      name: 'Teamcoda',
      logo: 'https://www.teamcoda.com/assets/icon/TeamCoda_Logo.svg',
    },
  ]
  // Auto-scroll effect
  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return
    let animationId: number
    let startTime: number | null = null
    const scroll = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const elapsed = timestamp - startTime
      if (scrollContainer) {
        scrollContainer.scrollLeft =
          (elapsed * 0.05) %
          (scrollContainer.scrollWidth - scrollContainer.clientWidth)
      }
      animationId = requestAnimationFrame(scroll)
    }
    animationId = requestAnimationFrame(scroll)
    return () => {
      cancelAnimationFrame(animationId)
    }
  }, [])
  return (
    <section id="clients" className="py-16 bg-white w-full overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Clients</h2>
          <p className="text-lg text-gray-600">
            We're proud to work with forward-thinking companies across various
            industries.
          </p>
        </div>
        <div className="relative">
          {/* Gradient fade effect on edges */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-10"></div>
          {/* Scrolling container */}
          <div
            ref={scrollRef}
            className="flex overflow-x-auto scrollbar-hide py-8 px-4 space-x-12"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {/* Double the client list for continuous scrolling effect */}
            {[...clients, ...clients].map((client, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex flex-col items-center"
              >
                <div className="h-24 w-40 bg-white rounded-lg shadow-sm border border-gray-100 flex items-center justify-center p-2 mb-3">
                  <img
                    src={client.logo}
                    alt={`${client.name} logo`}
                    className="max-h-full max-w-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                {/* <span className="text-sm text-gray-500">{client.name}</span> */}
              </div>
            ))}
          </div>
        </div>
        <div className="text-center">
          <p className="text-lgtext-gray-600">
            Join our growing list of satisfied clients leveraging AI for
            business growth.
          </p>
        </div>
      </div>
    </section>
  )
}
