import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ClipboardCheck, Gauge, Route } from "lucide-react";

import { contact } from "@/lib/site-data";

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
                  Publica tu próximo viaje en WILIS S.A.S y comparte gastos con pasajeros que van a tu mismo destino.
                  Tardarás solo un par de minutos y podrás ahorrar hasta un 30% de tus costos. ¿Compartimos trayecto?
                </p>
                <p className="text-xl font-semibold text-primary">¿Coordinamos tu próximo viaje?</p>
                <Button
                  size="lg"
                  className="w-full sm:w-auto shadow-lg hover:shadow-xl transition-all"
                  onClick={() => window.open(contact.whatsappLink, "_blank", "noopener,noreferrer")}
                >
                  Enviar detalles por WhatsApp
                </Button>
              </div>

              <div className="space-y-4">
                {[
                  { icon: Gauge, text: "Publica tu cupo en cuestión de minutos" },
                  { icon: ClipboardCheck, text: "Validación manual y conductores verificados" },
                  { icon: Route, text: "Define ruta, horarios y condiciones a tu medida" },
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
