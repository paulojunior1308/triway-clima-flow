import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Carlos Silva",
      company: "Tech Solutions Ltda",
      role: "Diretor Operacional",
      content: "A TRIWAY transformou nosso ambiente de trabalho. Os equipamentos são silenciosos e muito eficientes. A instalação foi rápida e sem complicações.",
      rating: 5
    },
    {
      name: "Marina Santos",
      company: "Indústria ABC",
      role: "Gerente de Facilities",
      content: "Excelente custo-benefício! Conseguimos climatizar nosso galpão industrial sem o investimento pesado em equipamentos. Recomendamos!",
      rating: 5
    },
    {
      name: "Roberto Lima",
      company: "Escritório Prime",
      role: "Sócio-Proprietário",
      content: "Atendimento excepcional e equipamentos de primeira linha. Nossos colaboradores ficaram muito mais produtivos com o ambiente climatizado.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gradient-dark text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            O que nossos <span className="text-gold">clientes dizem</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Empresas que confiam na TRIWAY para suas soluções de climatização
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-gold fill-current" />
                  ))}
                </div>
                
                <Quote className="h-8 w-8 text-gold mb-4" />
                
                <p className="text-gray-200 mb-6 leading-relaxed">
                  {testimonial.content}
                </p>
                
                <div className="border-t border-white/20 pt-4">
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-gold text-sm">{testimonial.role}</div>
                  <div className="text-gray-400 text-sm">{testimonial.company}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 pt-16 border-t border-white/20">
          <div className="flex justify-center gap-16 text-center">
            <div>
              <div className="text-3xl font-bold text-gold mb-2">99%</div>
              <div className="text-gray-300">Satisfação dos Clientes</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gold mb-2">24h</div>
              <div className="text-gray-300">Suporte Técnico</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;