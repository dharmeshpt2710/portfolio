import Navbar from '@/components/layout/Navbar'
import { useScrollAnimations } from '@/hooks/useScrollAnimations'
import Hero from '@/components/sections/Hero'
import Stats from '@/components/sections/Stats'
import Experience from '@/components/sections/Experience'
import Skills from '@/components/sections/Skills'
import Education from '@/components/sections/Education'
import Contact from '@/components/sections/Contact'
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
          <Skills />
          <Education />
          <Contact />
        </div>
      </main>
      <Footer />
    </>
  )
}

export default App
