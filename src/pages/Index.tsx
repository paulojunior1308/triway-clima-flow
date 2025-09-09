// Landing page moderna e profissional da TRIWAY - Locação de Ar-Condicionado e Climatizadores

import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Benefits from "@/components/Benefits";
import About from "@/components/About";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <Benefits />
        <About />
        <Services />
        <Testimonials />
        <CTASection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
