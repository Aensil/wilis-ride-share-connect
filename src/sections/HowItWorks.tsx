import { Car, MessageCircle, UserCheck } from "lucide-react";

import { howItWorksContent } from "@/content/home";

const iconMap = {
  message: MessageCircle,
  "user-check": UserCheck,
  car: Car,
} as const;

const HowItWorks = () => {
  return (
    <section
      id="como-funciona"
      aria-labelledby="how-heading"
      className="bg-gradient-to-b from-background to-muted/30 py-[var(--section-padding-y)]"
    >
      <div className="container mx-auto px-[var(--container-padding-x)]">
        <div className="mb-16 mx-auto max-w-4xl text-center">
          <h2 id="how-heading" className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            {howItWorksContent.title}
          </h2>
          <p className="text-xl text-muted-foreground">{howItWorksContent.subtitle}</p>
        </div>

        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
          {howItWorksContent.steps.map((step, index) => {
            const Icon = iconMap[step.icon as keyof typeof iconMap];
            return (
              <div key={step.title} className="relative text-center">
                {index < howItWorksContent.steps.length - 1 && (
                  <div
                    aria-hidden="true"
                    className="absolute left-[60%] top-16 hidden h-0.5 w-[80%] bg-gradient-to-r from-primary to-secondary md:block"
                  />
                )}

                <div className="space-y-4">
                  <div className="relative inline-block">
                    <div className="mx-auto flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary text-white shadow-xl">
                      <Icon className="h-16 w-16" aria-hidden="true" />
                    </div>
                    <div className="absolute -right-2 -top-2 flex h-12 w-12 items-center justify-center rounded-full bg-accent text-2xl font-bold text-white shadow-lg">
                      {step.number}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">{step.title}</h3>
                  <p className="text-lg text-muted-foreground">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
