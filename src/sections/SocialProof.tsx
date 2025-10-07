import { MessageCircle, Route, Users } from "lucide-react";

import { socialProofContent } from "@/content/home";
import { contact } from "@/config/contact";
import { useCommunityStats } from "@/hooks/use-community-stats";
import { Card } from "@/ui/Card";
import { CtaLink } from "@/ui/CtaLink";

const iconMap = {
  users: Users,
  message: MessageCircle,
  route: Route,
} as const;

const SocialProof = () => {
  const { stats, footnote, loading, error } = useCommunityStats();

  return (
    <section
      id="comunidad"
      aria-labelledby="community-heading"
      className="relative isolate overflow-hidden bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 py-[var(--section-padding-y)]"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-60">
        <div className="absolute -left-20 top-10 h-60 w-60 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute right-0 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-secondary/25 blur-3xl md:right-10" />
      </div>

      <div className="container mx-auto px-[var(--container-padding-x)]">
        <div className="mx-auto max-w-6xl space-y-12">
          <div className="flex flex-col gap-6 text-center md:flex-row md:items-end md:justify-between md:text-left">
            <div className="space-y-4">
              <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-[length:var(--font-size-small)] font-semibold uppercase tracking-[0.25em] text-primary">
                Comunidad activa
              </span>
              <h2 id="community-heading" className="text-3xl font-bold text-foreground md:text-5xl">
                {socialProofContent.title}
              </h2>
              <p className="text-lg text-muted-foreground md:text-xl">{socialProofContent.description}</p>
            </div>
            <CtaLink
              href={contact.whatsappLink}
              fallbackHref={`tel:${contact.phone}`}
              variant="primary"
              size="lg"
              className="mx-auto inline-flex w-full max-w-xs justify-center shadow-lg hover:shadow-xl md:mx-0"
              trackingEvent={{ category: "cta", action: "click_whatsapp", label: "community_primary" }}
            >
              {socialProofContent.cta.label}
            </CtaLink>
          </div>

          {error && (
            <div className="mb-4 rounded-md border border-destructive/20 bg-destructive/10 px-4 py-3 text-sm text-destructive">
              {error}
            </div>
          )}

          <div className="grid gap-8 md:grid-cols-3">
            {stats.map((stat) => {
              const Icon = iconMap[stat.icon];
              return (
                <Card
                  key={stat.label}
                  className="relative overflow-hidden border-none shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10" />
                  <div className="relative space-y-4 p-8 text-center">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-secondary text-primary-foreground shadow-lg">
                      <Icon className="h-8 w-8" aria-hidden="true" />
                    </div>
                    <div className="bg-gradient-to-br from-primary to-secondary bg-clip-text text-5xl font-bold text-transparent md:text-6xl">
                      {stat.value}
                    </div>
                    <div className="text-lg font-medium text-foreground">{stat.label}</div>
                  </div>
                </Card>
              );
            })}
          </div>

          <p className="text-center text-sm text-muted-foreground md:text-base">
            {loading ? "Actualizando datos de la comunidad..." : footnote}
          </p>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
