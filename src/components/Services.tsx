import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Wind, Building2, Factory, Truck } from "lucide-react";
import portableImage from "@/assets/portable-ac.jpg";

const Services = () => {
  const services = [
    {
      icon: Wind,
      title: "Ar-Condicionado Portátil",
      description: "Equipamentos móveis ideais para escritórios e ambientes menores.",
      features: ["Fácil instalação", "Baixo consumo", "Controle remoto", "Timer programável"]
    },
    {
      icon: Building2,
      title: "Split Corporativo",
      description: "Sistemas fixos para ambientes comerciais de médio porte.",
      features: ["Alta eficiência", "Baixo ruído", "Controle de umidade", "Filtro HEPA"]
    },
    {
      icon: Factory,
      title: "Climatizadores Industriais",
      description: "Soluções robustas para galpões e ambientes industriais.",
      features: ["Grande capacidade", "Resistente", "Manutenção simples", "Economia de energia"]
    },
    {
      icon: Truck,
      title: "Instalação e Manutenção",
      description: "Serviço completo com equipe especializada.",
      features: ["Instalação 24h", "Manutenção preventiva", "Suporte técnico", "Garantia total"]
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nossos <span className="text-gold">Serviços</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Oferecemos uma linha completa de equipamentos e serviços para atender 
            todas as necessidades de climatização da sua empresa
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="group hover:shadow-elegant transition-all duration-300 border-0 bg-card h-full">
                <CardHeader className="text-center pb-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-gold rounded-full mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-8 w-8 text-gold-foreground" />
                  </div>
                  <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-gold rounded-full flex-shrink-0"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Featured Equipment - Climatizador SIXXIS */}
        <div className="bg-card rounded-2xl p-8 md:p-12 shadow-elegant">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Climatizador <span className="text-gold">SIXXIS SX100</span>
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                Resfresque Seu Ambiente, Amplie Seu Conforto. Explore uma nova dimensão de conforto 
                com o Climatizador SX100 Sixxis! Desfrute de uma climatização eficaz, enquanto economiza 
                energia e desfruta de um ambiente fresco durante todas as estações.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <div className="text-2xl font-bold text-gold mb-1">12.000</div>
                  <div className="text-sm text-muted-foreground">m³/h Fluxo de Ar</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gold mb-1">400W</div>
                  <div className="text-sm text-muted-foreground">Baixo Consumo</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gold mb-1">100L</div>
                  <div className="text-sm text-muted-foreground">Capacidade de Água</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gold mb-1">A</div>
                  <div className="text-sm text-muted-foreground">Eficiência Energética</div>
                </div>
              </div>

              <div className="mb-8">
                <h4 className="font-semibold text-foreground mb-4">Principais Benefícios:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-gold rounded-full flex-shrink-0"></div>
                    <span>Climatização Eficiente</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-gold rounded-full flex-shrink-0"></div>
                    <span>Economia de Energia</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-gold rounded-full flex-shrink-0"></div>
                    <span>Purificação do Ar</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-gold rounded-full flex-shrink-0"></div>
                    <span>Operação Silenciosa</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-gold rounded-full flex-shrink-0"></div>
                    <span>Design Moderno</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-gold rounded-full flex-shrink-0"></div>
                    <span>Mobilidade com Rodízios</span>
                  </div>
                </div>
              </div>

              <Button variant="gold" size="lg">
                Consultar Disponibilidade
              </Button>
            </div>
            <div>
              <img
                src={portableImage}
                alt="Climatizador SIXXIS SX100 - Equipamento de climatização TRIWAY"
                className="rounded-lg shadow-gold w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;