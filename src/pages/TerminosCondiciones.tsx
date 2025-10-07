import { Button } from "@/components/ui/button";
import { legal } from "@/lib/site-data";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const nit = "901.981.317-6";
const officeAddress = "Cl. 19 #43G-155, Medellín, Antioquia, Colombia";
const contactEmail = "contact@wiliss.com";

const TerminosCondiciones = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-accent/5">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Button variant="ghost" onClick={() => navigate("/")} className="mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Volver al inicio
        </Button>

        <article className="bg-card rounded-lg shadow-lg px-6 py-10 md:px-12 md:py-14 space-y-10">
          <header className="space-y-3 text-center md:text-left">
            <p className="text-sm uppercase tracking-wide text-muted-foreground">Términos y condiciones de WILIS S.A.S</p>
            <h1 className="text-4xl font-bold text-primary">Condiciones de uso del programa de viajes colaborativos</h1>
            <p className="text-muted-foreground">Última actualización: {legal.lastUpdated}</p>
          </header>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">1. Introducción y aceptación</h2>
            <p className="text-muted-foreground">
              Estos términos regulan el acceso y uso de los canales de WILIS S.A.S ("WILIS"), sociedad identificada con
              NIT {nit}, domiciliada en Medellín, Antioquia. Al contactarnos para coordinar viajes colaborativos aceptas
              estas condiciones. Si no estás de acuerdo con alguna disposición, abstente de utilizar nuestros servicios.
            </p>
            <p className="text-muted-foreground">
              WILIS puede actualizar estos términos en cualquier momento. Las modificaciones se publicarán en este sitio e
              indicarán la fecha de vigencia. El uso continuado de los servicios después de los cambios implica la
              aceptación de la versión actualizada.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">2. Alcance del servicio</h2>
            <p className="text-muted-foreground">
              WILIS coordina manualmente el contacto entre conductores particulares con cupos disponibles y pasajeros que
              requieren viajar principalmente entre municipios de Boyacá y Bogotá. No prestamos un servicio de transporte
              público, no operamos plataformas de reservas automáticas ni asumimos obligaciones propias de empresas de
              transporte. Cada trayecto se acuerda directamente entre las personas involucradas.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">3. Requisitos de los usuarios</h2>
            <p className="text-muted-foreground">
              Para participar debes ser mayor de 18 años, suministrar información veraz y actualizada, y contar con
              capacidad legal para celebrar acuerdos. El uso indebido de los canales de WILIS, la suplantación de
              identidad o la omisión de datos relevantes conlleva la suspensión o exclusión inmediata del programa.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">4. Proceso de coordinación</h2>
            <p className="text-muted-foreground">
              El flujo operativo es el siguiente:
            </p>
            <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
              <li>Recibimos tu solicitud por WhatsApp, correo electrónico o formulario web.</li>
              <li>Validamos la información básica (datos de contacto, ruta, horarios y cupos disponibles).</li>
              <li>
                Cruzamos manualmente las necesidades de conductores y pasajeros para sugerir coincidencias compatibles.
              </li>
              <li>
                Ponemos en contacto a las partes para que acuerden detalles finales como punto de encuentro, aporte y
                condiciones especiales.
              </li>
            </ol>
            <p className="text-muted-foreground">
              WILIS no garantiza la disponibilidad de cupos ni la realización del viaje. Nuestro rol es facilitar la
              comunicación y acompañar el seguimiento hasta la fecha del trayecto.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">5. Obligaciones de los conductores</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>
                Contar con documentos vigentes exigidos por la legislación colombiana: licencia adecuada, SOAT, revisión
                tecnomecánica (cuando aplique) y tarjeta de propiedad.
              </li>
              <li>Mantener el vehículo en condiciones mecánicas y de higiene que garanticen un viaje seguro.</li>
              <li>
                Informar con veracidad la ruta, los horarios, los cupos disponibles y las condiciones particulares (maletas,
                mascotas, música, etc.).
              </li>
              <li>Respetar las normas de tránsito y tratar a los pasajeros con cortesía.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">6. Obligaciones de los pasajeros</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Proporcionar datos reales de contacto y confirmar su asistencia con tiempo.</li>
              <li>
                Respetar los acuerdos pactados con el conductor (hora de encuentro, aporte económico y condiciones del
                trayecto).
              </li>
              <li>Tratar con respeto al conductor y a los demás ocupantes, cuidando el vehículo y sus pertenencias.</li>
              <li>Avisar de manera oportuna cualquier cambio o cancelación para liberar el cupo.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">7. Pagos y contribuciones</h2>
            <p className="text-muted-foreground">
              Los aportes económicos se acuerdan directamente entre conductor y pasajeros para cubrir gastos reales del
              trayecto (gasolina, peajes, parqueaderos u otros costos asociados). WILIS no fija tarifas, no administra
              dinero de los usuarios y no cobra comisiones. Cualquier transferencia de dinero se efectúa entre las partes
              involucradas.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">8. Comunicaciones oficiales</h2>
            <p className="text-muted-foreground">
              Las comunicaciones oficiales de WILIS se realizan a través de los canales publicados en este sitio web y del
              correo {contactEmail}. No solicitamos contraseñas ni información bancaria mediante enlaces externos. Si
              recibes mensajes sospechosos, notifícanos inmediatamente.
            </p>
            <p className="text-muted-foreground">
              El intercambio de datos realizado entre usuarios debe limitarse a la información relevante para coordinar el
              viaje y tratarse con confidencialidad.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">9. Cancelaciones y reprogramaciones</h2>
            <p className="text-muted-foreground">
              Entendemos que pueden surgir imprevistos. Para mantener la confianza del programa:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Si eres conductor y debes cancelar, informa como mínimo con 12 horas de anticipación.</li>
              <li>
                Si eres pasajero, cancela con al menos 6 horas de anticipación para permitir la reasignación del cupo.
              </li>
              <li>
                Cancelaciones repetidas sin justificación o la inasistencia injustificada pueden resultar en la suspensión
                temporal o definitiva del acceso a la comunidad.
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">10. Responsabilidad y limitaciones</h2>
            <p className="text-muted-foreground">
              WILIS actúa como intermediario tecnológico y social. No asumimos responsabilidad por accidentes, demoras,
              pérdidas de objetos, disputas entre usuarios o cualquier daño derivado del viaje. Cada participante es
              responsable de sus actuaciones y debe contar con la cobertura correspondiente (por ejemplo, SOAT y pólizas
              voluntarias).
            </p>
            <p className="text-muted-foreground">
              WILIS no responde por fuerzas mayores, caso fortuito o hechos de terceros que impidan la realización del
              trayecto. En caso de conocer incidentes de seguridad, colaboraremos con las autoridades competentes.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">11. Propiedad intelectual y uso del sitio</h2>
            <p className="text-muted-foreground">
              Los contenidos, gráficos, textos, logotipos y materiales de este sitio pertenecen a WILIS o se usan con
              autorización. No pueden copiarse, modificarse ni distribuirse sin consentimiento previo por escrito. No se
              permite el uso del sitio para actividades fraudulentas o que infrinjan la ley colombiana.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">12. Tratamiento de datos personales</h2>
            <p className="text-muted-foreground">
              El manejo de información personal se rige por nuestra Política de Privacidad, disponible en este sitio. Al
              utilizar nuestros servicios autorizas el tratamiento de tus datos conforme a dicha política. Puedes ejercer
              tus derechos de acceso, actualización o supresión siguiendo los canales allí descritos.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">13. Ley aplicable y jurisdicción</h2>
            <p className="text-muted-foreground">
              Estos términos se interpretan de acuerdo con la legislación de la República de Colombia. Cualquier disputa
              se resolverá ante los jueces competentes de la ciudad de Medellín, sin perjuicio de los mecanismos de
              conciliación o arreglo directo que las partes decidan adelantar previamente.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">14. Contacto</h2>
            <p className="text-muted-foreground">
              Para consultas, quejas o solicitudes relacionadas con estos términos o con la operación del programa,
              escríbenos a:
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <strong>Correo electrónico:</strong>{" "}
                <a href={`mailto:${contactEmail}`} className="text-primary underline">
                  {contactEmail}
                </a>
              </li>
              <li>
                <strong>Dirección:</strong> {officeAddress}
              </li>
              <li>
                <strong>Representante legal:</strong> Germán Camilo Rodríguez Mejía
              </li>
            </ul>
            <p className="text-muted-foreground">
              Atenderemos tus solicitudes dentro de los plazos establecidos por la normatividad colombiana aplicable.
            </p>
          </section>
        </article>
      </div>
    </div>
  );
};

export default TerminosCondiciones;
