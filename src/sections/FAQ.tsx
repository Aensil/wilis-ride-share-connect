import { faqContent } from "@/content/home";
import { contact } from "@/config/contact";

const FAQ = () => {
  return (
    <section id="faq" aria-labelledby="faq-heading" className="bg-muted/30 py-[var(--section-padding-y)]">
      <div className="container mx-auto px-[var(--container-padding-x)]">
        <div className="mx-auto max-w-3xl">
          <div className="mb-12 text-center">
            <h2 id="faq-heading" className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
              Preguntas frecuentes
            </h2>
            <p className="text-lg text-muted-foreground">
              Todo lo que necesitas saber sobre WILIS S.A.S
            </p>
          </div>

          <div className="space-y-4">
            {faqContent.map((faq) => (
              <details key={faq.question} className="group rounded-lg border border-border bg-card px-6 py-4">
                <summary className="flex cursor-pointer list-none items-center justify-between text-left text-lg font-semibold text-foreground transition-colors group-open:text-primary">
                  {faq.question}
                  <span className="ml-3 text-xl leading-none transition-transform group-open:rotate-45">+</span>
                </summary>
                <div className="pt-3 text-muted-foreground">{faq.answer}</div>
              </details>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">
              ¿Tienes otra pregunta?
            </p>
            <a
              href={contact.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 font-semibold inline-flex items-center gap-2"
            >
              Contáctanos por WhatsApp
              <span aria-hidden="true" className="text-xl">
                &gt;
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
