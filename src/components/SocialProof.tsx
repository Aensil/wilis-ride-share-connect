import { Card } from "@/components/ui/card";
import { Users, MapPin, MessageCircle } from "lucide-react";

const SocialProof = () => {
  const stats = [
    {
      icon: Users,
      value: "5000+",
      label: "Miembros activos"
    },
    {
      icon: MapPin,
      value: "+1500",
      label: "Viajes conectados"
    },
    {
      icon: MessageCircle,
      value: "+7",
      label: "Ciudades conectadas"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">
              La comunidad de Wilis crece cada día
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Miles de viajeros confían en Wilis para conectar entre Sogamoso, Duitama, 
              Paipa, Tunja, Villa de Leyva, Bogotá y más ciudades.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card key={index} className="relative overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10" />
                  <div className="relative p-8 text-center space-y-4">
                    <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg">
                      <Icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <div className="text-5xl md:text-6xl font-bold bg-gradient-to-br from-primary to-secondary bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                    <div className="text-lg font-medium text-foreground">{stat.label}</div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;