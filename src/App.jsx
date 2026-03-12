import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import WhatsAppButton from './components/layout/WhatsAppButton'
import Hero from './components/sections/Hero'
import Services from './components/sections/Services'
import HowWeWork from './components/sections/HowWeWork'
import About from './components/sections/About'
import Testimonials from './components/sections/Testimonials'
import Contact from './components/sections/Contact'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <HowWeWork />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
