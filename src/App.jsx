import Navbar from '@/components/layout/Navbar'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import TechStrip from '@/components/sections/TechStrip'
import Skills from '@/components/sections/Skills'
import Stats from '@/components/sections/Stats'
import Projects from '@/components/sections/Projects'
import CTA from '@/components/sections/CTA'
import Footer from '@/components/layout/Footer'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <div className="container">
          <Hero />
          <About />
        </div>
        <TechStrip />
        <div className="container">
          <Skills />
          <Stats />
          <Projects />
          <CTA />
        </div>
      </main>
      <Footer />
    </>
  )
}

export default App
