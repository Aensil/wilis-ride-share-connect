import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

import MainLayout from "@/layouts/MainLayout";
import { Button } from "@/ui/Button";
import { legal } from "@/config/legal";

const officeAddress = "Cl. 19 #43G-155, Medellín, Antioquia, Colombia";
const nit = "901.981.317-6";

const PoliticaPrivacidad = () => {
  const navigate = useNavigate();

  return (
    <MainLayout
      canonicalPath="/politica-privacidad"
      title="Política de Privacidad | WILIS S.A.S"
      description="Conoce cómo WILIS S.A.S protege la información personal de su comunidad de viajes compartidos."
    >
      <div className="bg-gradient-to-b from-background to-accent/5">
        <div className="container mx-auto max-w-4xl px-[var(--container-padding-x)] py-8">
          <Button variant="ghost" onClick={() => navigate("/")} className="mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver al inicio
          </Button>

          <article className="space-y-10 rounded-lg bg-card px-6 py-10 shadow-lg md:px-12 md:py-14">
            <header className="space-y-4 text-center md:text-left">
              <p className="text-sm uppercase tracking-wide text-muted-foreground">Política de privacidad de WILIS S.A.S</p>
              <h1 className="text-4xl font-bold text-primary">Protegemos tu información personal</h1>
              <p className="text-muted-foreground">Última actualización: {legal.lastUpdated}</p>
            </header>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Introducción</h2>
              <p className="text-muted-foreground">
                Cuando utilizas los servicios de WILIS S.A.S, confías en que trataremos tus datos personales con responsabilidad. Tomamos esa confianza muy en serio y
                trabajamos para darte claridad, seguridad y control sobre la información que compartes con nosotros.
              </p>
              <p className="text-muted-foreground">
                Esta política explica qué datos recopilamos, por qué lo hacemos y cuáles son tus derechos. Al interactuar con nosotros (por ejemplo, al coordinar
                viajes colaborativos en la ruta Boyacá - Bogotá) aceptas las prácticas descritas aquí.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-semibold text-foreground">Definiciones clave</h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>
                  <strong>WILIS S.A.S:</strong> Sociedad comercial colombiana identificada con NIT {nit}, con domicilio en Medellín, responsable del tratamiento de los datos personales descritos en esta política.
                </li>
                <li>
                  <strong>Datos personales:</strong> Información que identifica o puede identificar a una persona natural, como nombre, documento, teléfono o dirección.
                </li>
                <li>
                  <strong>Usuario:</strong> Persona natural o representante de empresa que contacta a WILIS S.A.S para coordinar traslados colaborativos como conductor o pasajero.
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">¿Qué es WILIS S.A.S?</h2>
              <p className="text-muted-foreground">
                WILIS S.A.S es una iniciativa de movilidad colaborativa que conecta manualmente a conductores con cupos disponibles y a pasajeros que necesitan viajar entre municipios de Boyacá y Bogotá. Operamos a través de canales como WhatsApp, correo electrónico y formularios de contacto para coordinar cada trayecto sin aplicaciones móviles ni procesos automatizados masivos.
              </p>
              <p className="text-muted-foreground">
                Nuestro compromiso es facilitar el contacto entre usuarios, acompañar la coordinación de los viajes y resguardar la información personal necesaria para hacerlo de manera segura.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Datos personales que recopilamos y cómo los usamos</h2>
              <p className="text-muted-foreground">
                Recopilamos únicamente la información indispensable para prestar nuestros servicios y cumplir obligaciones legales en Colombia. Esta información se obtiene de forma directa a través de WhatsApp, correo electrónico, formularios o llamadas telefónicas.
              </p>

              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-foreground">Datos de identificación y contacto</h3>
                <p className="text-muted-foreground">
                  Nombre completo, documento de identidad, número de teléfono, correo electrónico y ciudad de residencia. Utilizamos estos datos para:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Verificar la identidad de conductores y pasajeros.</li>
                  <li>Coordinar horarios, puntos de encuentro y condiciones del viaje.</li>
                  <li>Responder solicitudes enviadas a nuestros canales oficiales.</li>
                </ul>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-foreground">Información del vehículo y del trayecto</h3>
                <p className="text-muted-foreground">
                  Para conductores solicitamos placa del vehículo, número de cupos, fechas tentativas, ruta y condiciones específicas de viaje. Esta información se comparte únicamente con los pasajeros vinculados al trayecto y se conserva durante el tiempo necesario para completar la coordinación y atender posibles reclamos.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-foreground">Canales y herramientas de soporte</h3>
                <p className="text-muted-foreground">
                  Podemos utilizar servicios de terceros para operar nuestro negocio, por ejemplo:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>WhatsApp y otros servicios provistos por Meta Platforms para mensajería.</li>
                  <li>Google Workspace para comunicación interna y seguimiento manual de solicitudes.</li>
                  <li>Herramientas contables o de facturación autorizadas en Colombia cuando debamos emitir comprobantes.</li>
                </ul>
                <p className="text-muted-foreground">
                Estos proveedores tratan los datos siguiendo sus propias políticas de privacidad y bajo acuerdos vigentes con WILIS S.A.S. No vendemos ni alquilamos datos personales a terceros.
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Base legal y conservación</h2>
              <p className="text-muted-foreground">
                Tratamos datos personales con fundamento en la autorización expresa del titular, el cumplimiento de obligaciones contractuales y legales, y el interés legítimo de operar nuestro programa de movilidad colaborativa. Conservamos la información solo por el tiempo necesario para:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Concluir la coordinación del viaje y atender consultas posteriores.</li>
                <li>Satisfacer requerimientos contables o fiscales previstos por la legislación colombiana.</li>
                <li>Resolver disputas, prevenir fraudes o mejorar procesos internos.</li>
              </ul>
              <p className="text-muted-foreground">
                Una vez cumplidas estas finalidades, procedemos a la eliminación o anonimización segura de los datos.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Transferencias y divulgación de información</h2>
              <p className="text-muted-foreground">
                Solo compartimos datos personales cuando es indispensable para prestar el servicio o cuando la ley lo exige. Esto incluye:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Proveedores que nos ayudan con mensajería, alojamiento seguro de información o soporte contable.</li>
                <li>Autoridades competentes cuando recibimos requerimientos formales o debemos cumplir disposiciones legales.</li>
                <li>Situaciones en las que sea necesario proteger derechos, prevenir fraudes o responder a emergencias.</li>
              </ul>
              <p className="text-muted-foreground">
                No efectuamos transferencias internacionales sistemáticas. Si excepcionalmente necesitamos enviar datos a otro país, garantizamos que exista un nivel adecuado de protección conforme a la normatividad colombiana.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Uso del sitio web y cookies</h2>
              <p className="text-muted-foreground">
                Nuestro sitio web es informativo y no exige registro. Empleamos cookies estrictamente necesarias para mantener preferencias básicas (por ejemplo, idioma o ajustes de navegación). Actualmente no usamos cookies publicitarias ni herramientas analíticas invasivas. Puedes configurar tu navegador para rechazar cookies; sin embargo, es posible que algunas secciones no funcionen correctamente.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Seguridad de la información</h2>
              <p className="text-muted-foreground">
                Implementamos medidas administrativas, técnicas y físicas proporcionales al riesgo para proteger los datos personales contra accesos no autorizados, pérdida o alteración.
              </p>
              <p className="text-muted-foreground">
                Dado que ningún sistema es infalible, notificaremos oportunamente a los titulares y autoridades correspondientes en caso de incidentes que comprometan la información.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Tus derechos como titular de datos</h2>
              <p className="text-muted-foreground">
                Conforme a la Ley 1581 de 2012 y demás normas aplicables, puedes ejercer los siguientes derechos:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Conocer, actualizar o rectificar tus datos personales.</li>
                <li>Solicitar prueba de la autorización otorgada.</li>
                <li>Ser informado sobre el uso que damos a tu información y recibir copia de los datos tratados en formato legible.</li>
                <li>Presentar quejas ante la Superintendencia de Industria y Comercio cuando consideres vulnerados tus derechos.</li>
                <li>Revocar la autorización y/o solicitar la supresión de los datos cuando no exista un deber legal o contractual.</li>
              </ul>
              <p className="text-muted-foreground">
                Para ejercer estos derechos, envíanos una comunicación escrita a los canales descritos en la sección de contacto. Responderemos dentro de los plazos establecidos por la regulación colombiana.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Personas menores de edad</h2>
              <p className="text-muted-foreground">
                Nuestros servicios se dirigen a mayores de 18 años. Si identificamos que un menor de edad nos ha entregado datos personales sin autorización de su representante legal, procederemos a eliminarlos de inmediato.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Actualizaciones de esta política</h2>
              <p className="text-muted-foreground">
                WILIS S.A.S puede modificar esta política para reflejar cambios normativos o mejoras en nuestros procesos. La versión vigente se publicará en este sitio web con la fecha de actualización correspondiente. Si los cambios son sustanciales, te informaremos por nuestros canales habituales.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Contacto</h2>
              <p className="text-muted-foreground">
                Si tienes preguntas, solicitudes o reclamos relacionados con el tratamiento de tus datos personales, comunícate con nosotros a través de:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <strong>Correo electrónico:</strong>{" "}
                  <a href="mailto:contact@wiliss.com" className="text-primary underline">
                    contact@wiliss.com
                  </a>
                </li>
                <li>
                  <strong>Dirección:</strong> {officeAddress}
                </li>
                <li>
                  <strong>Nombre del responsable del tratamiento:</strong> Germán Camilo Rodríguez Mejía (Representante Legal)
                </li>
              </ul>
              <p className="text-muted-foreground">
                Atenderemos tus requerimientos conforme a los plazos y procedimientos definidos por la legislación colombiana vigente.
              </p>
            </section>
          </article>
        </div>
      </div>
    </MainLayout>
  );
};

export default PoliticaPrivacidad;
