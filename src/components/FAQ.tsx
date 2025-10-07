import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
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

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-card border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold">
                ¿Cómo funcionan los pagos?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Los pagos se realizan directamente entre conductor y pasajero. Recomendamos acordar 
                el monto antes del viaje ($15.000-$25.000 es el rango típico Boyacá-Bogotá) y pagar 
                en efectivo al finalizar el trayecto o mediante transferencia bancaria/Nequi/Daviplata 
                según acuerden. WILIS S.A.S no cobra comisiones.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-card border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold">
                ¿Qué pasa si hay un accidente o problema durante el viaje?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Todos los conductores deben tener SOAT vigente (seguro obligatorio). En caso de 
                emergencia, contacta inmediatamente a las autoridades (123) y luego repórtanos el 
                incidente vía WhatsApp. Aunque WILIS S.A.S facilita la conexión, cada conductor es responsable 
                de su vehículo y seguro. Te recomendamos verificar que el conductor tenga SOAT antes de viajar.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-card border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold">
                ¿Cómo reporto un problema o mal comportamiento?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Escríbenos directamente al chat de WhatsApp oficial de WILIS S.A.S. Proporciónanos detalles 
                del incidente (fecha, hora, nombres de usuarios involucrados). Investigamos todos los 
                reportes en 24-48 horas. Usuarios con 3 o más reportes negativos son suspendidos 
                permanentemente de la comunidad.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-card border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold">
                ¿Cómo verifican a los conductores?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Solicitamos foto de la cédula, licencia de conducción vigente, y SOAT del vehículo. 
                Adicionalmente, todos los usuarios (conductores y pasajeros) acumulan calificaciones 
                y reseñas después de cada viaje. Puedes ver el perfil y calificaciones antes de aceptar un viaje.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="bg-card border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold">
                ¿Puedo cancelar un viaje?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Sí, pero te pedimos avisar con al menos 2 horas de anticipación para no afectar los 
                planes de otros usuarios. Cancelaciones de último minuto (menos de 30 minutos antes) 
                sin justificación pueden resultar en advertencias. Más de 3 cancelaciones de último 
                minuto = suspensión temporal de 30 días.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="bg-card border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold">
                ¿WILIS S.A.S cobra alguna comisión?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                No. WILIS S.A.S es una plataforma colaborativa 100% gratuita. El único pago es entre 
                conductor y pasajero por los gastos compartidos del viaje (gasolina, peajes). 
                Nuestro modelo es mantener la comunidad activa y segura, no cobrar comisiones.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7" className="bg-card border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold">
                ¿Es legal compartir viajes así?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Sí, es completamente legal. WILIS S.A.S no es un servicio de transporte público. Es una 
                plataforma de carpooling (viajes compartidos) donde particulares comparten gastos 
                de viajes que ya iban a realizar. El conductor no obtiene ganancias, solo recupera 
                costos (gasolina, peajes). Esto está permitido bajo la legislación colombiana.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8" className="bg-card border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold">
                ¿Qué ciudades cubren?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Actualmente conectamos: Bogotá ↔ Tunja, Sogamoso, Duitama, Paipa, Villa de Leyva, 
                y otros municipios de Boyacá. La mayoría de viajes son en la ruta Bogotá-Tunja-Sogamoso 
                (y viceversa), especialmente viernes/domingos.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">
              ¿Tienes otra pregunta?
            </p>
            <a
              href="https://wa.me/yourwhatsappnumber"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 font-semibold inline-flex items-center gap-2"
            >
              Contáctanos por WhatsApp
              <span className="text-xl">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
