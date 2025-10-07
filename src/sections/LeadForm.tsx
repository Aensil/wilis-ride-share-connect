import { useState } from "react";

import { contact } from "@/config/contact";
import { CtaLink } from "@/ui/CtaLink";
import { Button } from "@/ui/Button";

interface FormState {
  name: string;
  email: string;
  role: "conductor" | "pasajero";
  message: string;
}

const initialState: FormState = {
  name: "",
  email: "",
  role: "pasajero",
  message: "",
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const LeadForm = () => {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    if (!form.name.trim()) {
      setError("Por favor ingresa tu nombre.");
      return false;
    }
    if (!emailRegex.test(form.email)) {
      setError("Necesitamos un correo válido para contactarte.");
      return false;
    }
    setError(null);
    return true;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validate()) return;

    setStatus("loading");
    try {
      // Placeholder endpoint: replace with real API when available
      const response = await fetch("https://httpbin.org/post", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, source: "wiliss-landing" }),
      });
      if (!response.ok) {
        throw new Error("No pudimos enviar tu solicitud.");
      }
      setStatus("success");
      setForm(initialState);
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Ocurrió un error inesperado. Intenta nuevamente.");
    }
  };

  return (
    <section id="contacto" aria-labelledby="contact-heading" className="bg-muted py-[var(--section-padding-y)]">
      <div className="container mx-auto grid max-w-5xl gap-8 px-[var(--container-padding-x)] md:grid-cols-2">
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">¿Listo para unirte?</p>
          <h2 id="contact-heading" className="text-3xl font-bold text-foreground md:text-4xl">
            Déjanos tus datos y coordinamos tu próximo viaje
          </h2>
          <p className="text-lg text-muted-foreground">
            Nuestro equipo responde en menos de 24 horas para ayudarte a publicar tu trayecto o encontrar un asiento. También puedes contactarnos directamente por WhatsApp o correo electrónico.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <CtaLink
              href={contact.whatsappLink}
              fallbackHref={`tel:${contact.phone}`}
              variant="primary"
              size="lg"
              trackingEvent={{ category: "cta", action: "click_whatsapp", label: "form_support" }}
              className="shadow-lg"
            >
              Abrir WhatsApp
            </CtaLink>
            <a
              href={`mailto:${contact.email}`}
              className="inline-flex items-center justify-center rounded-md border border-border px-6 py-3 font-semibold text-primary transition-colors hover:bg-primary/10"
            >
              Escribir un correo
            </a>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-4 rounded-lg border border-border bg-card p-6 shadow-md"
          noValidate
          aria-busy={status === "loading"}
        >
          <div>
            <label htmlFor="name" className="mb-1 block text-sm font-semibold text-foreground">
              Nombre completo
            </label>
            <input
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full rounded-md border border-border bg-background px-3 py-2 focus:border-primary focus:outline-none"
              placeholder="María Fernández"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="mb-1 block text-sm font-semibold text-foreground">
              Correo electrónico
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              className="w-full rounded-md border border-border bg-background px-3 py-2 focus:border-primary focus:outline-none"
              placeholder="correo@ejemplo.com"
              required
            />
          </div>
          <div>
            <label htmlFor="role" className="mb-1 block text-sm font-semibold text-foreground">
              ¿Cómo quieres usar WILIS?
            </label>
            <select
              id="role"
              name="role"
              value={form.role}
              onChange={handleChange}
              className="w-full rounded-md border border-border bg-background px-3 py-2 focus:border-primary focus:outline-none"
            >
              <option value="conductor">Conductor con cupos disponibles</option>
              <option value="pasajero">Pasajero buscando asiento</option>
            </select>
          </div>
          <div>
            <label htmlFor="message" className="mb-1 block text-sm font-semibold text-foreground">
              Detalles adicionales
            </label>
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={4}
              className="w-full rounded-md border border-border bg-background px-3 py-2 focus:border-primary focus:outline-none"
              placeholder="Ruta, fechas tentativas, número de cupos..."
            />
          </div>

          {error && (
            <p className="text-sm text-destructive" role="alert">
              {error}
            </p>
          )}
          {status === "success" && (
            <p className="text-sm text-green-600" role="status" aria-live="polite">
              ¡Gracias! Te contactaremos muy pronto.
            </p>
          )}

          <Button type="submit" variant="primary" size="lg" className="w-full" disabled={status === "loading"}>
            {status === "loading" ? "Enviando..." : "Enviar solicitud"}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default LeadForm;
