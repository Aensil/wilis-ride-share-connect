import { ClipboardCheck, Gauge, Route } from "lucide-react";

import { driversContent } from "@/content/home";
import { contact } from "@/config/contact";
import { Card } from "@/ui/Card";
import { CtaLink } from "@/ui/CtaLink";

const ForDrivers = () => {
  return (
    <section
      id="conductores"
      aria-labelledby="drivers-heading"
      className="bg-gradient-to-br from-primary/5 to-primary/10 py-[var(--section-padding-y)]"
    >
      <div className="container mx-auto px-[var(--container-padding-x)]">
        <div className="max-w-5xl mx-auto">
          <Card className="p-8 md:p-12 shadow-2xl border-none">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <h2 id="drivers-heading" className="text-3xl font-bold text-foreground md:text-4xl">
                  {driversContent.title}
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">{driversContent.description}</p>
                <CtaLink
                  href={contact.whatsappLink}
                  fallbackHref={`tel:${contact.phone}`}
                  variant="primary"
                  size="lg"
                  className="w-full sm:w-auto shadow-lg hover:shadow-xl"
                  trackingEvent={{ category: "cta", action: "click_whatsapp", label: "drivers" }}
                >
                  {driversContent.cta.label}
                </CtaLink>
              </div>

              <div className="space-y-4">
                {[Gauge, ClipboardCheck, Route].map((Icon, index) => {
                  return (
                    <div key={index} className="flex items-center gap-4 p-4 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors">
                      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <p className="text-lg font-medium text-foreground">{driversContent.bullets[index]}</p>
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
