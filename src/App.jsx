import Navbar from '@/components/layout/Navbar'
import { useScrollAnimations } from '@/hooks/useScrollAnimations'
import Hero from '@/components/sections/Hero'
import Stats from '@/components/sections/Stats'
import Experience from '@/components/sections/Experience'
import About from '@/components/sections/About'
import TechStrip from '@/components/sections/TechStrip'
import Skills from '@/components/sections/Skills'
import Projects from '@/components/sections/Projects'
import Contact from '@/components/sections/Contact'
import CTA from '@/components/sections/CTA'
import Footer from '@/components/layout/Footer'

function App() {
  useScrollAnimations()

  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <Navbar />
      <main id="main-content">
        <div className="container">
          <Hero />
          <Stats />
          <Experience />
        </div>
        <TechStrip />
        <div className="container">
          <About />
          <Skills />
          <Projects />
          <Contact />
          <CTA />
        </div>
      </main>
      <Footer />
    </>
  )
}

export default App
