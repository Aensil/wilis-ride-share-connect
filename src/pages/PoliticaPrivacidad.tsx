import { Button } from "@/components/ui/button";
import { legal } from "@/lib/site-data";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const sections = [
  {
    title: "1. Responsable del tratamiento",
    paragraphs: [
      "WILIS S.A.S, con domicilio en Boyacá (Colombia), es responsable del tratamiento de los datos personales suministrados a través de este sitio y de los canales de contacto asociados.",
    ],
  },
  {
    title: "2. Datos que recopilamos",
    paragraphs: [
      "Solicitamos únicamente la información necesaria para coordinar un viaje compartido: nombre completo, número de teléfono, ciudad de origen y destino, fecha del trayecto y disponibilidad de cupos.",
      "Para conductores pedimos información adicional del vehículo (placa y condiciones del trayecto) con el fin de compartirla con los pasajeros involucrados.",
    ],
  },
  {
    title: "3. Finalidad del tratamiento",
    paragraphs: [
      "Utilizamos tus datos para ponerte en contacto con otras personas interesadas en compartir gastos en un trayecto específico, confirmar la coordinación y mantener seguimiento del viaje.",
      "No utilizamos la información para campañas masivas de marketing ni la compartimos con terceros ajenos a la coordinación del viaje.",
    ],
  },
  {
    title: "4. Canales y conservación",
    paragraphs: [
      "Toda la comunicación se realiza a través de WhatsApp o llamada telefónica. No contamos con aplicaciones móviles ni paneles de autogestión.",
      "Conservamos la información únicamente el tiempo necesario para gestionar el viaje o para responder a obligaciones legales en Colombia. Posteriormente eliminamos o anonimizamos los datos.",
    ],
  },
  {
    title: "5. Derechos de los titulares",
    paragraphs: [
      "Puedes solicitar en cualquier momento la actualización, rectificación o supresión de tus datos, así como revocar la autorización de tratamiento, escribiendo a nuestro canal oficial de WhatsApp.",
      "Responderemos a las solicitudes dentro de los plazos establecidos por la Ley 1581 de 2012 y sus decretos reglamentarios.",
    ],
  },
  {
    title: "6. Seguridad",
    paragraphs: [
      "Limitamos el acceso a la información personal al personal autorizado que interviene en la coordinación del viaje.",
      "Fomentamos que la comunicación sensible (como comprobantes de pago) se realice directamente entre los participantes y no se almacene en nuestros registros.",
    ],
  },
  {
    title: "7. Actualizaciones de la política",
    paragraphs: [
      "Podemos modificar esta política para reflejar cambios en nuestras operaciones o en la normativa colombiana. La versión vigente siempre estará disponible en este sitio web.",
    ],
  },
  {
    title: "8. Contacto",
    paragraphs: [
      "Si deseas ejercer tus derechos o tienes preguntas sobre esta política, escríbenos al canal oficial de WhatsApp indicado en la página principal.",
    ],
  },
];

const PoliticaPrivacidad = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-accent/5">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Button variant="ghost" onClick={() => navigate("/")} className="mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Volver al inicio
        </Button>

        <div className="bg-card rounded-lg shadow-lg p-8 md:p-12">
          <h1 className="text-4xl font-bold text-primary mb-2">Política de Privacidad</h1>
          <p className="text-muted-foreground mb-8">Última actualización: {legal.lastUpdated}</p>

          <div className="prose prose-slate max-w-none space-y-6">
            {sections.map((section) => (
              <section key={section.title}>
                <h2 className="text-2xl font-semibold text-foreground mb-4">{section.title}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="text-muted-foreground">
                    {paragraph}
                  </p>
                ))}
              </section>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PoliticaPrivacidad;
