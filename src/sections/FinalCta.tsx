import { MessageCircle } from "lucide-react";

import { contact } from "@/config/contact";
import { CtaLink } from "@/ui/CtaLink";

const FinalCta = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-secondary py-[var(--section-padding-y)]">
      <div className="pointer-events-none absolute inset-0 opacity-10">
        <div className="absolute left-10 top-20 h-72 w-72 rounded-full bg-white blur-3xl" />
        <div className="absolute right-10 bottom-20 h-96 w-96 rounded-full bg-white blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="mx-auto max-w-3xl space-y-8 text-center">
          <h2 className="text-4xl font-bold leading-tight text-white md:text-5xl">WILIS S.A.S: la nueva forma de viajar</h2>
          <p className="text-xl text-white/90 md:text-2xl">Únete hoy a nuestra comunidad.</p>
          <CtaLink
            href={contact.whatsappLink}
            fallbackHref={`tel:${contact.phone}`}
            variant="hero"
            size="xl"
            className="bg-white text-primary transition-transform hover:scale-105"
            trackingEvent={{ category: "cta", action: "click_whatsapp", label: "final" }}
          >
            <MessageCircle className="mr-2 h-6 w-6" aria-hidden="true" />
            Comenzar en WhatsApp
          </CtaLink>
        </div>
      </div>
    </section>
  );
};

export default FinalCta;
