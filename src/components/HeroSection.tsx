import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-ac.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-primary/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Locação de Ar-Condicionado e 
            <span className="text-gold block mt-2">Climatizadores</span>
            para sua Empresa
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
            Soluções práticas, econômicas e eficientes em climatização corporativa. 
            Equipamentos modernos com instalação rápida e manutenção inclusa.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="gold" size="lg" className="group">
              Solicite um Orçamento
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
              Ver Nossos Equipamentos
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-8 border-t border-white/20">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gold mb-2">500+</div>
              <div className="text-gray-200">Empresas Atendidas</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gold mb-2">24h</div>
              <div className="text-gray-200">Instalação Rápida</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gold mb-2">15+</div>
              <div className="text-gray-200">Anos de Experiência</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;