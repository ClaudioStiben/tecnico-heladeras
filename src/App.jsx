import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import WhatsAppButton from "./components/layout/WhatsAppButton";
import Hero from "./components/sections/Hero";
import Services from "./components/sections/Services";
import HowWeWork from "./components/sections/HowWeWork";
import About from "./components/sections/About";
import Testimonials from "./components/sections/Testimonials";
import Urgency from "./components/sections/Urgency";
import Contact from "./components/sections/Contact";
import FinalCTA from "./components/sections/FinalCTA";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Urgency />
        <About />
        <Testimonials />
        <HowWeWork />
        <Contact />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
