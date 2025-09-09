import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "5511999999999"; // Replace with actual WhatsApp number
  const message = "Olá! Gostaria de solicitar um orçamento para locação de equipamentos de climatização.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group animate-pulse hover:animate-none"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle className="h-6 w-6 group-hover:scale-110 transition-transform" />
      
      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-gray-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        Fale conosco no WhatsApp
        <div className="absolute top-full right-4 border-4 border-transparent border-t-gray-800"></div>
      </div>
    </a>
  );
};

export default WhatsAppButton;