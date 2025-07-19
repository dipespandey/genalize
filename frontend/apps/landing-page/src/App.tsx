import React from 'react'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { ClientsSlider } from './components/ClientsSlider'
import { Services } from './components/Services'
import { About } from './components/About'
import { Process } from './components/Process'
import { Projects } from './components/Projects'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <ClientsSlider />
        <Services />
        <About />
        {/* <Process /> */}
        {/* <Projects /> */}
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
