import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Gauge, TrendingDown, Route } from "lucide-react";

const ForDrivers = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-primary/10">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <Card className="p-8 md:p-12 shadow-2xl border-none">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <h2 className="text-4xl font-bold text-foreground">
                  Ahorra mientras conduces
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Publica tu próximo viaje en Wilis y comparte gastos con pasajeros que van 
                  a tu mismo destino. Tardarás solo un par de minutos y podrás ahorrar hasta 
                  un <span className="font-bold text-primary">30% de tus costos de viaje</span>.
                </p>
                <p className="text-xl font-semibold text-primary">
                  ¿Compartimos trayecto?
                </p>
                <Button 
                  size="lg" 
                  className="w-full sm:w-auto shadow-lg hover:shadow-xl transition-all"
                  onClick={() => window.open('https://wa.me/yourwhatsappnumber', '_blank')}
                >
                  Publica tu viaje ahora
                </Button>
              </div>

              <div className="space-y-4">
                {[
                  { icon: Gauge, text: "Publica en minutos" },
                  { icon: TrendingDown, text: "Ahorra hasta 30%" },
                  { icon: Route, text: "Elige tu ruta y horario" }
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="flex items-center gap-4 p-4 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors">
                      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <p className="text-lg font-medium text-foreground">{item.text}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ForDrivers;