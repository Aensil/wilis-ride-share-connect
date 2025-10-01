import { Car, DollarSign, Users } from "lucide-react";
import { Card } from "@/components/ui/card";

const Benefits = () => {
  const benefits = [
    {
      icon: Car,
      title: "Llega 2 horas antes",
      description: "Viajes directos sin paradas. Tunja-Bogotá en 2.5 horas vs 4+ en bus",
      gradient: "from-primary to-primary-glow"
    },
    {
      icon: DollarSign,
      title: "Ahorra hasta 50%",
      description: "$15.000-$20.000 vs $30.000-$40.000 en bus o transporte privado",
      gradient: "from-secondary to-secondary-glow"
    },
    {
      icon: Users,
      title: "Comunidad verificada",
      description: "Usuarios validados con reseñas reales y calificaciones",
      gradient: "from-accent to-accent/80"
    }
  ];

  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card 
                key={index}
                className="p-8 text-center hover:scale-105 transition-transform duration-300 border-none shadow-lg hover:shadow-xl bg-card"
              >
                <div className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br ${benefit.gradient} flex items-center justify-center`}>
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-foreground">{benefit.title}</h3>
                <p className="text-muted-foreground text-lg">{benefit.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;