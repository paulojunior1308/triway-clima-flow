import { Card, CardContent } from "@/components/ui/card";
import { DollarSign, Thermometer, Clock, Settings } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: DollarSign,
      title: "Economia",
      description: "Reduza custos com nossa solução de locação. Sem investimento inicial em equipamentos."
    },
    {
      icon: Thermometer,
      title: "Conforto",
      description: "Ambiente climatizado ideal para produtividade e bem-estar dos colaboradores."
    },
    {
      icon: Clock,
      title: "Rapidez na Instalação",
      description: "Instalação em até 24 horas. Seu negócio não para enquanto instalamos."
    },
    {
      icon: Settings,
      title: "Equipamentos Modernos",
      description: "Tecnologia de ponta com alta eficiência energética e baixo ruído."
    }
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Por que escolher a TRIWAY?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Oferecemos soluções completas em climatização com os melhores benefícios do mercado
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card key={index} className="group hover:shadow-elegant transition-all duration-300 border-0 bg-card">
                <CardContent className="p-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-gold rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-8 w-8 text-gold-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;