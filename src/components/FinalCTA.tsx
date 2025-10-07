import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-primary via-primary to-secondary relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            WILIS S.A.S: la nueva forma de viajar
          </h2>
          <p className="text-xl md:text-2xl text-white/90">
            Únete hoy a nuestra comunidad
          </p>
          <Button 
            size="xl"
            variant="hero"
            className="bg-white text-primary hover:bg-white/90 hover:scale-105 shadow-2xl"
            onClick={() => window.open('https://wa.me/yourwhatsappnumber', '_blank')}
          >
            <MessageCircle className="mr-2 h-6 w-6" />
            Comenzar en WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;