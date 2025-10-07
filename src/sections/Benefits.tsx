import { Car, DollarSign, Users } from "lucide-react";

import { benefitsContent } from "@/content/home";
import { Card } from "@/ui/Card";

const iconMap = {
  car: Car,
  dollar: DollarSign,
  users: Users,
} as const;

const Benefits = () => {
  return (
    <section
      id="beneficios"
      aria-labelledby="benefits-heading"
      className="bg-muted/20 py-[var(--section-padding-y)]"
    >
      <div className="container mx-auto px-[var(--container-padding-x)]">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 id="benefits-heading" className="text-3xl font-bold text-foreground md:text-4xl">
            ¿Por qué viajar con WILIS S.A.S?
          </h2>
        </div>
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
          {benefitsContent.map((benefit) => {
            const Icon = iconMap[benefit.icon as keyof typeof iconMap];
            return (
              <Card
                key={benefit.title}
                className="bg-card p-8 text-center shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary text-white">
                  <Icon className="h-8 w-8" aria-hidden="true" />
                </div>
                <h3 className="mb-3 text-2xl font-bold text-foreground">{benefit.title}</h3>
                <p className="text-lg text-muted-foreground">{benefit.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
