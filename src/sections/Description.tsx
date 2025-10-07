import { descriptionContent } from "@/content/home";

const Description = () => {
  return (
    <section
      id="descripcion"
      aria-labelledby="description-heading"
      className="bg-gradient-to-b from-background to-muted/30 py-[var(--section-padding-y)]"
    >
      <div className="container mx-auto px-[var(--container-padding-x)]">
        <div className="mx-auto max-w-4xl text-center">
          <h2 id="description-heading" className="text-2xl font-semibold text-primary md:text-3xl">
            Conectamos personas que comparten trayectos
          </h2>
          <p className="mt-4 text-xl leading-relaxed text-foreground md:text-2xl">{descriptionContent.headline}</p>
        </div>
      </div>
    </section>
  );
};

export default Description;
