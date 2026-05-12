import { useState, useEffect } from "react";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import WhatsAppButton from "./components/layout/WhatsAppButton";
import ScrollToTop from "./components/layout/ScrollToTop";
import Hero from "./components/sections/Hero";
import ServiceIntegral from "./components/sections/ServiceIntegral";
import Services from "./components/sections/Services";
import HowWeWork from "./components/sections/HowWeWork";
import About from "./components/sections/About";
import Testimonials from "./components/sections/Testimonials";
import Urgency from "./components/sections/Urgency";
import Contact from "./components/sections/Contact";
import FinalCTA from "./components/sections/FinalCTA";
import PrivacyPolicy from "./components/pages/PrivacyPolicy";
import { LoginModal, RegisterModal } from "./components/auth/AuthModals";
import ReviewModal from "./components/reviews/ReviewModal";
import AllReviewsModal from "./components/reviews/AllReviewsModal";

export default function App() {
  const [page, setPage] = useState(window.location.hash === "#privacidad" ? "privacy" : "home");

  useEffect(() => {
    const onHashChange = () => {
      if (window.location.hash === "#privacidad") {
        setPage("privacy");
        window.scrollTo(0, 0);
      } else if (page === "privacy") {
        setPage("home");
      }
    };
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, [page]);

  return (
    <>
      <Header />
      {page === "privacy" ? (
        <main>
          <PrivacyPolicy />
        </main>
      ) : (
        <main>
          <Hero />
          <ServiceIntegral />
          <Services />
          <Urgency />
          <About />
          <Testimonials />
          <HowWeWork />
          <Contact />
          <FinalCTA />
        </main>
      )}
      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
      <LoginModal />
      <RegisterModal />
      <ReviewModal />
      <AllReviewsModal />
    </>
  );
}
