import { Card } from "@/components/ui/card";
import { Users, MapPin, MessageCircle } from "lucide-react";

const SocialProof = () => {
  const stats = [
    {
      icon: Users,
      value: "1000+",
      label: "Miembros activos"
    },
    {
      icon: MessageCircle,
      value: "7",
      label: "Grupos de WhatsApp"
    },
    {
      icon: MapPin,
      value: "6",
      label: "Ciudades conectadas"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <Card className="p-8 md:p-12 text-center shadow-2xl border-none bg-card/80 backdrop-blur-sm">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Comunidad activa y creciendo
            </h2>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              Conectamos conductores y pasajeros en 7 grupos de WhatsApp entre Sogamoso, Duitama, 
              Paipa, Tunja, Villa de Leyva y Bogotá. Viajes compartidos todos los días.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="space-y-4">
                    <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                      <Icon className="h-10 w-10 text-white" />
                    </div>
                    <div className="text-4xl font-bold text-primary">{stat.value}</div>
                    <div className="text-lg text-muted-foreground">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;