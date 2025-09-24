import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contato" className="bg-primary text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <img 
              src="/lovable-uploads/ba49d5c4-c091-453e-845a-bbf5709d0f40.png" 
              alt="TRIWAY Logo" 
              className="h-12 w-auto mb-4"
            />
            <p className="text-gray-300 leading-relaxed mb-6">
              Especialistas em locação de equipamentos de climatização para empresas. 
              Soluções práticas e econômicas para o seu negócio.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-gold mb-4">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-gold flex-shrink-0" />
                <span className="text-gray-300">(11) 91712-1374</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-gold flex-shrink-0" />
                <span className="text-gray-300">contato@triwaypro.com.br</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">
                  Rua Saint-Germain, 302 - Jardim Edda<br />
                  São Paulo - SP, 04844-010
                </span>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="text-lg font-semibold text-gold mb-4">Horário de Atendimento</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-gold flex-shrink-0" />
                <div className="text-gray-300">
                  <div>Segunda a Sexta</div>
                  <div className="text-sm">08:00 às 18:00</div>
                </div>
              </div>
              <div className="text-gray-300">
                <div className="font-medium">Emergências 24h</div>
                <div className="text-sm">Atendimento disponível</div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-gold mb-4">Serviços</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Ar-Condicionado Portátil</li>
              <li>Instalação e Manutenção</li>
              <li>Suporte Técnico 24h</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © 2025 TRIWAY. Todos os direitos reservados.
            </div>
            <div className="text-gray-300 text-sm text-center md:text-right">
              <span className="block md:inline">Desenvolvido por <span className="font-semibold">Jr Technology Solutions</span></span>
              <span className="hidden md:inline"> • </span>
              <a href="mailto:contato@jrtechnologysolutions.com.br" className="hover:text-gold transition-colors block md:inline">contato@jrtechnologysolutions.com.br</a>
              <span className="hidden md:inline"> • </span>
              <a href="https://wa.me/5511973802744" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors block md:inline">WhatsApp: +55 (11) 97380-2744</a>
              <span className="hidden md:inline"> • </span>
              <a href="https://www.instagram.com/jr.tech_solutions" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors block md:inline">Instagram: @jr.tech_solutions</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;