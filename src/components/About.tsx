import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight } from "lucide-react";
import climatizadorImage from "@/assets/climatizador-sixxis.png";

const About = () => {
  const highlights = [
    "Equipe técnica especializada e certificada",
    "Atendimento 24/7 para emergências",
    "Manutenção preventiva inclusa",
    "Climatizador de Ar Frio Portátil Turbo 100L – SX100 Trend"
  ];

  return (
    <section id="sobre" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Sobre a <span className="text-gold">TRIWAY</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              A TRIWAY é uma empresa especializada em locação de equipamentos de climatização 
              para o setor corporativo. Com anos de experiência no mercado, oferecemos 
              soluções personalizadas que garantem o conforto térmico ideal para sua empresa.
            </p>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Nossa missão é proporcionar ambientes climatizados de forma econômica e eficiente, 
              permitindo que nossos clientes foquem no que realmente importa: o crescimento do seu negócio.
            </p>

            <div className="space-y-4 mb-8">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-gold flex-shrink-0" />
                  <span className="text-foreground">{highlight}</span>
                </div>
              ))}
            </div>

            <Button variant="gold" size="lg" className="group">
              Fale Conosco
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Image */}
          <div>
            <img
              src={climatizadorImage}
              alt="Climatizador SIXXIS SX100 TRIWAY"
              className="rounded-lg shadow-elegant w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;