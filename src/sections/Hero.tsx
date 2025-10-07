import { ChevronDown, MessageCircle } from "lucide-react";

import heroImage from "@/assets/hero-image.jpg";
import { heroContent } from "@/content/home";
import { contact } from "@/config/contact";
import { useCommunityStats } from "@/hooks/use-community-stats";
import { CtaLink } from "@/ui/CtaLink";
import { Button } from "@/ui/Button";

const Hero = () => {
  const { stats, footnote, loading } = useCommunityStats();
  const highlightedStats = stats.slice(0, 2);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="inicio"
      aria-labelledby="hero-heading"
      className="relative isolate flex min-h-[calc(100vh-var(--header-height))] items-center overflow-hidden"
    >
      <div className="absolute inset-0 -z-20">
        <img
          src={heroImage}
          alt="Personas compartiendo un trayecto con WILIS S.A.S"
          className="h-full w-full object-cover object-center"
          loading="eager"
        />
        <div className="absolute inset-0 bg-slate-900/40 mix-blend-multiply" />
      </div>

      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 opacity-90"
        style={{ backgroundImage: "var(--hero-overlay-glow)" }}
      />
      <div className="pointer-events-none absolute -left-40 top-1/3 h-80 w-80 -translate-y-1/2 rounded-full bg-primary/30 blur-3xl md:h-[420px] md:w-[420px]" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-secondary/25 blur-3xl md:right-10 md:h-[520px] md:w-[520px]" />

      <div className="relative z-10 w-full">
        <div className="container mx-auto px-[var(--container-padding-x)] py-[var(--section-padding-y)]">
          <div className="mx-auto grid w-full max-w-6xl items-center gap-12 md:grid-cols-[minmax(0,1fr)_320px]">
            <div className="space-y-7 text-primary-foreground">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 bg-background/10 px-4 py-1 text-[length:var(--font-size-small)] font-semibold uppercase tracking-[0.28em] text-primary-foreground/90">
                Comunidad verificada
              </span>

              <h1
                id="hero-heading"
                className="max-w-3xl text-balance font-bold leading-tight text-primary-foreground text-[length:var(--font-size-display)] drop-shadow-lg"
              >
                {heroContent.title}
              </h1>

              <p className="max-w-xl text-[length:var(--font-size-lead)] text-primary-foreground/90">{heroContent.subtitle}</p>

              <p className="max-w-2xl text-lg text-primary-foreground/85 md:text-xl">{heroContent.description}</p>

              <div className="flex flex-col items-start gap-4 pt-6 sm:flex-row">
                <CtaLink
                  href={contact.whatsappLink}
                  fallbackHref={`tel:${contact.phone}`}
                  variant="hero"
                  size="xl"
                  className="group shadow-2xl"
                  trackingEvent={{ category: "cta", action: "click_whatsapp", label: "hero_primary" }}
                >
                  <MessageCircle className="mr-2 h-6 w-6 transition-transform group-hover:scale-110" aria-hidden="true" />
                  {heroContent.primaryCta.label}
                </CtaLink>

                <Button
                  variant="heroSecondary"
                  size="xl"
                  className="inline-flex items-center border-foreground/20 bg-background/10 text-primary-foreground hover:bg-background/20"
                  onClick={() => scrollToSection(heroContent.secondaryCta.targetId)}
                >
                  {heroContent.secondaryCta.label}
                  <ChevronDown className="ml-2 h-5 w-5" aria-hidden="true" />
                  <span className="sr-only">Ir a la sección cómo funciona</span>
                </Button>
              </div>

              <p className="text-[length:var(--font-size-small)] uppercase tracking-[0.2em] text-primary-foreground/70">
                Atención personalizada de 6 a.m. a 10 p.m.
              </p>
            </div>

            <aside className="animate-fade-in space-y-5 rounded-3xl border border-primary/15 bg-background/80 p-6 shadow-2xl backdrop-blur-lg">
              <div className="space-y-1">
                <p className="text-[length:var(--font-size-small)] font-semibold uppercase tracking-[0.25em] text-primary">
                  Datos de la comunidad
                </p>
                <p className="text-lg font-semibold text-foreground md:text-xl">
                  Resultados reales de quienes ya viajan con WILIS S.A.S
                </p>
              </div>

              <ul className="space-y-4">
                {highlightedStats.map((stat) => (
                  <li
                    key={stat.label}
                    className="flex items-center justify-between gap-4 rounded-2xl bg-muted/60 px-4 py-3 text-left shadow-inner"
                  >
                    <span className="text-sm font-medium text-muted-foreground">{stat.label}</span>
                    <span className="text-2xl font-bold text-foreground md:text-3xl">{stat.value}</span>
                  </li>
                ))}
                {highlightedStats.length === 0 && (
                  <li className="flex items-center justify-between gap-4 rounded-2xl bg-muted/60 px-4 py-3 text-left shadow-inner">
                    <span className="text-sm font-medium text-muted-foreground">Personas conectadas</span>
                    <span className="text-2xl font-bold text-foreground md:text-3xl">4.500+</span>
                  </li>
                )}
              </ul>

              <p className="text-xs text-muted-foreground">
                {loading ? "Verificando cifras más recientes…" : footnote}
              </p>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
