import { Button } from "@/components/ui/button";
import { MessageCircle, ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="WILIS S.A.S carpooling community"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/70 to-secondary/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground leading-tight drop-shadow-lg">
            Viaja Boyacá-Bogotá desde $15.000
          </h1>
          
          <p className="text-xl md:text-2xl text-primary-foreground/95 font-medium">
            Ahorra hasta 50% compartiendo carro en lugar de bus
          </p>
          
          <p className="text-lg text-primary-foreground/85">
            Conectamos conductores y pasajeros verificados en Boyacá y Bogotá
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button 
              size="xl" 
              variant="hero"
              onClick={() => window.open('https://wa.me/yourwhatsappnumber', '_blank')}
              className="group"
            >
              <MessageCircle className="mr-2 h-6 w-6 group-hover:scale-110 transition-transform" />
              Ir al chat en WhatsApp
            </Button>
            
            <Button 
              size="xl" 
              variant="heroSecondary"
              onClick={() => scrollToSection('como-funciona')}
            >
              Cómo funciona
              <ChevronDown className="ml-2 h-5 w-5 animate-bounce" />
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <ChevronDown className="h-8 w-8 text-primary-foreground/70 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;