import { contact } from "@/lib/site-data";

const FAQ = () => {
  const faqs = [
    {
      question: "¿Cómo coordino un viaje?",
      answer:
        "Escríbenos por WhatsApp con tu rol (conductor o pasajero), ruta, fecha y horario. Te conectaremos manualmente con personas compatibles para que acordéis los detalles directamente.",
    },
    {
      question: "¿WILIS S.A.S cobra alguna comisión?",
      answer:
        "No. El servicio de coordinación es gratuito. Únicamente se comparte el aporte del viaje entre conductor y pasajeros para cubrir gastos como gasolina y peajes.",
    },
    {
      question: "¿Cómo se define el aporte económico del viaje?",
      answer:
        "El monto se acuerda entre las partes según los costos reales del trayecto. Podemos orientarte con rangos de referencia, pero la decisión final siempre es del grupo que viaja.",
    },
    {
      question: "¿Qué datos necesito compartir?",
      answer:
        "Solicitamos nombre completo, número de teléfono y ruta deseada. Para conductores también pedimos placa y horarios. Estos datos solo se usan para coordinar el viaje por WhatsApp.",
    },
    {
      question: "¿Qué pasa si debo cancelar?",
      answer:
        "Avísanos por WhatsApp tan pronto como sea posible para reasignar el cupo o buscar una alternativa para ti. La comunicación temprana mantiene la confianza de la comunidad.",
    },
    {
      question: "¿WILIS S.A.S presta un servicio de transporte?",
      answer:
        "No. Facilitamos el contacto entre particulares que ya tienen un trayecto programado. Cada viaje se realiza en vehículos privados y bajo responsabilidad de quienes participan.",
    },
  ];

  return (
    <section id="faq" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Preguntas frecuentes
            </h2>
            <p className="text-lg text-muted-foreground">
              Todo lo que necesitas saber sobre WILIS S.A.S
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => (
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
              <span className="text-xl">&gt;</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
