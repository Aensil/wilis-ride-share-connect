import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Clock, Wallet, Gift } from "lucide-react";

const ForPassengers = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-secondary/5 to-secondary/10">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <Card className="p-8 md:p-12 shadow-2xl border-none">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4 order-2 md:order-1">
                {[
                  { icon: Clock, text: "Encuentra asiento en minutos" },
                  { icon: Wallet, text: "Viaja más barato que en bus" },
                  { icon: Gift, text: "Acumula beneficios" }
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="flex items-center gap-4 p-4 rounded-lg bg-secondary/5 hover:bg-secondary/10 transition-colors">
                      <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                        <Icon className="h-6 w-6 text-secondary" />
                      </div>
                      <p className="text-lg font-medium text-foreground">{item.text}</p>
                    </div>
                  );
                })}
              </div>

              <div className="space-y-6 order-1 md:order-2">
                <h2 className="text-4xl font-bold text-foreground">
                  Ahorra más en cada viaje
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Encuentra un asiento disponible en minutos y viaja más barato, cómodo y 
                  directo que en un bus. Además, con cada trayecto acumulas beneficios para 
                  tus próximos viajes.
                </p>
                <p className="text-xl font-semibold text-secondary">
                  Sí, en cada viaje.
                </p>
                <Button 
                  size="lg" 
                  variant="secondary"
                  className="w-full sm:w-auto shadow-lg hover:shadow-xl transition-all"
                  onClick={() => window.open('https://wa.me/yourwhatsappnumber', '_blank')}
                >
                  Busca tu próximo viaje
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ForPassengers;