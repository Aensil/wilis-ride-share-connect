import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Clock, ShieldCheck, Wallet } from "lucide-react";

import { contact } from "@/lib/site-data";

const ForPassengers = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-secondary/5 to-secondary/10">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <Card className="p-8 md:p-12 shadow-2xl border-none">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4 order-2 md:order-1">
                {[
                  { icon: Clock, text: "Solicita un asiento en minutos" },
                  { icon: Wallet, text: "Ajusta el aporte según los gastos del trayecto" },
                  { icon: ShieldCheck, text: "Coordinación directa con el conductor" },
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
                  Publica tu necesidad de viaje y recibirás opciones que se ajustan a tu fecha y horario. El aporte
                  cubre gastos compartidos (gasolina, peajes) acordados directamente con el conductor.
                </p>
                <p className="text-xl font-semibold text-secondary">Coordinamos los detalles contigo.</p>
                <Button
                  size="lg"
                  variant="secondary"
                  className="w-full sm:w-auto shadow-lg hover:shadow-xl transition-all"
                  onClick={() => window.open(contact.whatsappLink, "_blank", "noopener,noreferrer")}
                >
                  Solicitar un cupo
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
