import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Mail } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-gold">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-gold-foreground mb-6">
            Pronto para climatizar sua empresa?
          </h2>
          
          <p className="text-xl md:text-2xl text-gold-foreground/80 mb-12 leading-relaxed">
            Solicite agora mesmo uma cotação personalizada e descubra como a TRIWAY 
            pode transformar o ambiente da sua empresa de forma rápida e econômica.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Button 
              variant="outline" 
              size="lg" 
              className="border-gold-foreground text-gold-foreground hover:bg-gold-foreground hover:text-gold group min-w-[250px]"
            >
              <Phone className="mr-2 h-5 w-5" />
              Ligar Agora
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="secondary" 
              size="lg"
              className="bg-white text-primary hover:bg-gray-100 group min-w-[250px]"
            >
              <Mail className="mr-2 h-5 w-5" />
              Enviar E-mail
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="text-center p-6 bg-white/10 rounded-lg backdrop-blur-sm">
              <Phone className="h-8 w-8 text-gold-foreground mx-auto mb-4" />
              <div className="font-semibold text-gold-foreground mb-2">Ligue Agora</div>
              <div className="text-gold-foreground/80">(11) 99999-9999</div>
            </div>
            <div className="text-center p-6 bg-white/10 rounded-lg backdrop-blur-sm">
              <Mail className="h-8 w-8 text-gold-foreground mx-auto mb-4" />
              <div className="font-semibold text-gold-foreground mb-2">Envie um E-mail</div>
              <div className="text-gold-foreground/80">contato@triway.com.br</div>
            </div>
          </div>

          {/* Urgency Indicator */}
          <div className="mt-8 p-4 bg-white/20 rounded-lg backdrop-blur-sm">
            <p className="text-gold-foreground font-medium">
              🚀 Orçamento em até 2 horas úteis • Instalação em 24h • Sem compromisso
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;