import { Clock, ShieldCheck, Wallet } from "lucide-react";

import { passengersContent } from "@/content/home";
import { contact } from "@/config/contact";
import { Card } from "@/ui/Card";
import { CtaLink } from "@/ui/CtaLink";

const iconMap = [Clock, Wallet, ShieldCheck];

const ForPassengers = () => {
  return (
    <section
      id="pasajeros"
      aria-labelledby="passengers-heading"
      className="bg-gradient-to-br from-secondary/5 to-secondary/10 py-[var(--section-padding-y)]"
    >
      <div className="container mx-auto px-[var(--container-padding-x)]">
        <div className="mx-auto max-w-5xl">
          <Card className="border-none p-8 shadow-2xl md:p-12">
            <div className="grid items-center gap-8 md:grid-cols-2">
              <div className="order-2 space-y-4 md:order-1">
                {iconMap.map((Icon, index) => (
                  <div
                    key={passengersContent.bullets[index]}
                    className="flex items-center gap-4 rounded-lg bg-secondary/5 p-4 transition-colors hover:bg-secondary/10"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-secondary/20">
                      <Icon className="h-6 w-6 text-secondary" aria-hidden="true" />
                    </div>
                    <p className="text-lg font-medium text-foreground">{passengersContent.bullets[index]}</p>
                  </div>
                ))}
              </div>

              <div className="order-1 space-y-6 md:order-2">
                <h2 id="passengers-heading" className="text-3xl font-bold text-foreground md:text-4xl">
                  {passengersContent.title}
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">{passengersContent.description}</p>
                <CtaLink
                  href={contact.whatsappLink}
                  fallbackHref={`tel:${contact.phone}`}
                  variant="secondary"
                  size="lg"
                  className="w-full sm:w-auto shadow-lg hover:shadow-xl"
                  trackingEvent={{ category: "cta", action: "click_whatsapp", label: "passengers" }}
                >
                  {passengersContent.cta.label}
                </CtaLink>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ForPassengers;
