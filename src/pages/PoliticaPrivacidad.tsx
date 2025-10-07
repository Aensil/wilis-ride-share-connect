import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const PoliticaPrivacidad = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-accent/5">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Button
          variant="ghost"
          onClick={() => navigate("/")}
          className="mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Volver al inicio
        </Button>

        <div className="bg-card rounded-lg shadow-lg p-8 md:p-12">
          <h1 className="text-4xl font-bold text-primary mb-2">
            Política de Privacidad
          </h1>
          <p className="text-muted-foreground mb-8">
            Última actualización: {new Date().toLocaleDateString('es-CO')}
          </p>

          <div className="prose prose-slate max-w-none space-y-6">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                1. Introducción
              </h2>
              <p className="text-muted-foreground">
                En WILIS S.A.S respetamos tu privacidad y nos comprometemos a proteger tus datos personales. 
                Esta política de privacidad explica cómo recopilamos, usamos, almacenamos y compartimos 
                tu información cuando utilizas nuestro servicio.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                2. Información que Recopilamos y Base Legal
              </h2>
              <p className="text-muted-foreground mb-3">
                Recopilamos la siguiente información cuando utilizas WILIS S.A.S, conforme a la Ley 1581 de 2012:
              </p>
              
              <h3 className="text-xl font-semibold text-foreground mt-4 mb-3">
                Información proporcionada directamente por ti (con tu consentimiento explícito):
              </h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Nombre completo y número de cédula (para verificación de identidad)</li>
                <li>Número de teléfono WhatsApp (para facilitar comunicación entre usuarios)</li>
                <li>Foto de perfil (opcional)</li>
                <li><strong className="text-foreground">Para conductores:</strong> Licencia de conducción, SOAT, tarjeta de propiedad del vehículo, placa, marca, modelo, color</li>
                <li>Rutas habituales de viaje y horarios preferidos</li>
                <li>Preferencias de viaje (música, conversación, mascotas, equipaje, etc.)</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mt-4 mb-3">
                Información recopilada automáticamente:
              </h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Historial de viajes compartidos (fechas, rutas, calificaciones recibidas)</li>
                <li>Datos de uso de la plataforma (frecuencia de uso, interacciones)</li>
                <li>Información técnica del dispositivo (tipo, sistema operativo, navegador)</li>
                <li>Dirección IP y datos de conexión</li>
                <li>Cookies y tecnologías similares (si das consentimiento)</li>
              </ul>

              <div className="mt-4 p-4 bg-primary/10 border border-primary/20 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">CONSENTIMIENTO EXPLÍCITO:</strong> Antes de recopilar tus 
                  datos personales, te presentaremos una autorización clara donde explicamos qué datos recopilamos, 
                  para qué los usamos, y con quién los compartimos. Debes aceptar explícitamente antes de crear tu cuenta.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                3. Cómo Utilizamos tu Información
              </h2>
              <p className="text-muted-foreground mb-3">
                Utilizamos tu información para:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Conectar conductores y pasajeros para viajes compartidos</li>
                <li>Facilitar la comunicación entre usuarios</li>
                <li>Mejorar y personalizar nuestro servicio</li>
                <li>Enviar notificaciones sobre viajes y actualizaciones del servicio</li>
                <li>Mantener la seguridad de la plataforma</li>
                <li>Resolver disputas entre usuarios</li>
                <li>Cumplir con obligaciones legales</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                4. Cómo Compartimos tu Información
              </h2>
              <p className="text-muted-foreground mb-3">
                Solo compartimos tu información en las siguientes circunstancias específicas:
              </p>
              
              <h3 className="text-xl font-semibold text-foreground mt-4 mb-3">
                Con otros usuarios de WILIS S.A.S (solo cuando aceptas un viaje):
              </h3>
              <p className="text-muted-foreground mb-2">
                Cuando aceptas o publicas un viaje, compartimos con la contraparte:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Nombre completo</li>
                <li>Foto de perfil (si la has proporcionado)</li>
                <li>Número de WhatsApp (para coordinación del viaje)</li>
                <li>Calificaciones y reseñas de viajes anteriores</li>
                <li><strong className="text-foreground">Para conductores:</strong> Placa, marca, modelo, y color del vehículo</li>
              </ul>
              <div className="mt-3 p-3 bg-destructive/10 border border-destructive/20 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">IMPORTANTE - Privacidad de WhatsApp:</strong> Al compartir 
                  tu número de WhatsApp con otros usuarios, reconoces que este quedará visible para ellos. WILIS S.A.S 
                  recomienda usar configuraciones de privacidad de WhatsApp (ocultar foto, última conexión, etc.) 
                  para proteger tu información.
                </p>
              </div>

              <h3 className="text-xl font-semibold text-foreground mt-4 mb-3">
                Con proveedores de servicios terceros:
              </h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Proveedores de hosting y almacenamiento en la nube (datos cifrados)</li>
                <li>Servicios de análisis de uso (datos anonimizados)</li>
                <li>Todos los proveedores firman acuerdos de confidencialidad y cumplimiento de protección de datos</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mt-4 mb-3">
                Con autoridades legales:
              </h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Cuando sea requerido por orden judicial o autoridad competente colombiana</li>
                <li>Para prevenir, detectar, o procesar actividades ilegales o fraude</li>
                <li>Para proteger derechos, propiedad, o seguridad de WILIS S.A.S o sus usuarios</li>
              </ul>

              <p className="text-muted-foreground mt-3">
                <strong className="text-foreground">NUNCA vendemos ni alquilamos tu información personal a terceros 
                para marketing o publicidad.</strong>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                5. WhatsApp y Comunicaciones
              </h2>
              <p className="text-muted-foreground">
                WILIS S.A.S opera principalmente a través de WhatsApp. Al utilizar nuestro servicio a través 
                de WhatsApp, también estás sujeto a los términos y políticas de privacidad de WhatsApp 
                y Meta. Te recomendamos revisar dichas políticas para entender cómo manejan tu información.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                6. Seguridad de tus Datos
              </h2>
              <p className="text-muted-foreground mb-3">
                Implementamos las siguientes medidas de seguridad técnicas y organizativas para proteger 
                tu información personal:
              </p>
              
              <h3 className="text-xl font-semibold text-foreground mt-4 mb-3">
                Medidas técnicas:
              </h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Cifrado SSL/TLS para todas las comunicaciones entre tu dispositivo y nuestros servidores</li>
                <li>Cifrado de datos sensibles en reposo (documentos de identidad, licencias, SOAT)</li>
                <li>Autenticación segura mediante WhatsApp (verificación de número telefónico)</li>
                <li>Respaldos diarios automáticos en servidores seguros</li>
                <li>Monitoreo 24/7 de actividad sospechosa o intentos de acceso no autorizado</li>
                <li>Firewalls y sistemas de detección de intrusiones</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mt-4 mb-3">
                Medidas organizativas:
              </h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Acceso restringido a datos personales solo para personal autorizado que lo necesite</li>
                <li>Acuerdos de confidencialidad con todos los empleados y proveedores</li>
                <li>Auditorías periódicas de seguridad</li>
                <li>Capacitación continua en protección de datos y ciberseguridad</li>
              </ul>

              <div className="mt-4 p-4 bg-muted border border-border rounded-lg">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">LIMITACIÓN:</strong> A pesar de estas medidas, ningún sistema 
                  de transmisión o almacenamiento digital es 100% seguro. WILIS S.A.S no puede garantizar seguridad absoluta 
                  pero se compromete a implementar las mejores prácticas de la industria.
                </p>
              </div>

              <h3 className="text-xl font-semibold text-foreground mt-4 mb-3">
                Notificación de brechas de seguridad:
              </h3>
              <p className="text-muted-foreground">
                En caso de una brecha de seguridad que comprometa tus datos personales, te notificaremos 
                dentro de las 72 horas siguientes a detectarla, vía WhatsApp y/o email, indicando: qué datos 
                fueron afectados, qué medidas tomamos, y qué acciones debes realizar para protegerte.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                7. Retención de Datos (Períodos Específicos)
              </h2>
              <p className="text-muted-foreground mb-3">
                Conservamos tu información personal durante los siguientes períodos:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li><strong className="text-foreground">Cuenta activa:</strong> Mientras mantengas tu cuenta abierta y en uso</li>
                <li><strong className="text-foreground">Después de eliminación voluntaria:</strong> 90 días en archivo inactivo (por si deseas reactivar) y luego eliminación permanente</li>
                <li><strong className="text-foreground">Historial de viajes y calificaciones:</strong> 5 años después del último viaje (para resolver disputas o investigaciones)</li>
                <li><strong className="text-foreground">Documentos de verificación (licencia, SOAT, cédula):</strong> 5 años después de inactividad de cuenta (requisito legal)</li>
                <li><strong className="text-foreground">Reportes de incidentes o problemas:</strong> 10 años (requisito legal para posibles demandas o investigaciones)</li>
                <li><strong className="text-foreground">Datos financieros/transaccionales:</strong> No almacenamos datos de pagos (se realizan directamente entre usuarios)</li>
                <li><strong className="text-foreground">Datos anonimizados para estadísticas:</strong> Indefinidamente (sin identificación personal)</li>
              </ul>
              <p className="text-muted-foreground mt-3">
                Al finalizar los períodos de retención, eliminamos permanentemente tus datos o los anonimizamos 
                de forma irreversible.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                8. Tus Derechos (Ley 1581 de 2012 - Derechos ARCO)
              </h2>
              <p className="text-muted-foreground mb-3">
                De acuerdo con la legislación colombiana de protección de datos (Ley 1581 de 2012 y Decreto 1377 de 2013), 
                tienes los siguientes derechos sobre tus datos personales:
              </p>
              
              <h3 className="text-xl font-semibold text-foreground mt-4 mb-3">
                Derechos ARCO:
              </h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li><strong className="text-foreground">Acceso:</strong> Conocer qué datos personales tenemos sobre ti y cómo los usamos</li>
                <li><strong className="text-foreground">Rectificación:</strong> Actualizar o corregir datos inexactos o incompletos</li>
                <li><strong className="text-foreground">Cancelación:</strong> Solicitar la eliminación de tus datos cuando no sean necesarios o estés ejerciendo tu derecho de revocación</li>
                <li><strong className="text-foreground">Oposición:</strong> Oponerte al tratamiento de tus datos para fines específicos</li>
                <li><strong className="text-foreground">Revocación:</strong> Revocar la autorización que nos otorgaste para el tratamiento de tus datos</li>
                <li><strong className="text-foreground">Consulta:</strong> Solicitar prueba de la autorización que otorgaste</li>
                <li><strong className="text-foreground">Información:</strong> Ser informado sobre el uso que le hemos dado a tus datos</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mt-4 mb-3">
                Cómo ejercer tus derechos (Procedimiento oficial):
              </h3>
              <div className="space-y-3 ml-4">
                <div className="p-4 bg-card border border-border rounded-lg">
                  <p className="text-sm text-muted-foreground mb-2">
                    <strong className="text-foreground">Paso 1 - Envía tu solicitud:</strong>
                  </p>
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 ml-4">
                    <li>Email: <span className="text-foreground">privacidad@wilis.co</span></li>
                    <li>WhatsApp: Mensaje directo al chat oficial de WILIS S.A.S</li>
                    <li>Incluye: Nombre completo, cédula, número WhatsApp registrado, descripción clara de tu solicitud</li>
                  </ul>
                </div>

                <div className="p-4 bg-card border border-border rounded-lg">
                  <p className="text-sm text-muted-foreground mb-2">
                    <strong className="text-foreground">Paso 2 - Verificación de identidad:</strong>
                  </p>
                  <p className="text-sm text-muted-foreground ml-4">
                    Te contactaremos en máximo 2 días hábiles para verificar tu identidad (foto de cédula o 
                    código de verificación vía WhatsApp)
                  </p>
                </div>

                <div className="p-4 bg-card border border-border rounded-lg">
                  <p className="text-sm text-muted-foreground mb-2">
                    <strong className="text-foreground">Paso 3 - Respuesta:</strong>
                  </p>
                  <p className="text-sm text-muted-foreground ml-4">
                    Responderemos tu solicitud en máximo 10 días hábiles desde la recepción (según Decreto 1377 de 2013)
                  </p>
                </div>

                <div className="p-4 bg-card border border-border rounded-lg">
                  <p className="text-sm text-muted-foreground mb-2">
                    <strong className="text-foreground">Paso 4 - Ejecución:</strong>
                  </p>
                  <p className="text-sm text-muted-foreground ml-4">
                    Si tu solicitud es procedente, ejecutaremos la acción en máximo 5 días hábiles adicionales
                  </p>
                </div>
              </div>

              <p className="text-muted-foreground mt-4">
                <strong className="text-foreground">Nota importante:</strong> Algunos derechos pueden tener 
                limitaciones legales. Por ejemplo, no podemos eliminar datos que debamos conservar por obligaciones 
                legales (como historial de viajes para investigaciones). Te explicaremos cualquier limitación en 
                nuestra respuesta.
              </p>

              <div className="mt-4 p-4 bg-primary/10 border border-primary/20 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">¿Insatisfecho con nuestra respuesta?</strong> Tienes derecho 
                  a presentar una queja ante la Superintendencia de Industria y Comercio (SIC), autoridad colombiana 
                  de protección de datos. Web: <span className="text-foreground">www.sic.gov.co</span>
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                9. Menores de Edad
              </h2>
              <p className="text-muted-foreground">
                WILIS S.A.S está destinado a usuarios mayores de 18 años. No recopilamos intencionalmente 
                información de menores de edad. Si descubrimos que hemos recopilado información de un 
                menor, la eliminaremos inmediatamente.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                10. Cookies y Tecnologías Similares
              </h2>
              <p className="text-muted-foreground mb-3">
                Nuestro sitio web utiliza cookies y tecnologías similares para mejorar tu experiencia:
              </p>
              
              <h3 className="text-xl font-semibold text-foreground mt-4 mb-3">
                Tipos de cookies que usamos:
              </h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li><strong className="text-foreground">Cookies esenciales (obligatorias):</strong> Necesarias para que el sitio funcione (sesión, seguridad). No requieren consentimiento.</li>
                <li><strong className="text-foreground">Cookies de análisis (opcional):</strong> Google Analytics para entender cómo usas el sitio (páginas visitadas, tiempo de navegación). Datos anonimizados.</li>
                <li><strong className="text-foreground">Cookies de funcionalidad (opcional):</strong> Recuerdan tus preferencias (idioma, ubicación preferida).</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mt-4 mb-3">
                Control de cookies:
              </h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Al entrar al sitio, te pedimos consentimiento mediante un banner para cookies no esenciales</li>
                <li>Puedes modificar tus preferencias en cualquier momento en la configuración de tu navegador</li>
                <li>Bloquear cookies puede afectar la funcionalidad del sitio</li>
              </ul>

              <p className="text-muted-foreground mt-3">
                Para más información sobre cómo gestionar cookies: 
                <a href="https://www.aboutcookies.org/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline ml-1">
                  aboutcookies.org
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                11. Cambios a esta Política
              </h2>
              <p className="text-muted-foreground">
                Podemos actualizar esta política de privacidad periódicamente. Te notificaremos sobre 
                cambios significativos publicando la nueva política en nuestro sitio web y, cuando sea 
                apropiado, a través de otros canales de comunicación.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                12. Transferencias Internacionales de Datos
              </h2>
              <p className="text-muted-foreground mb-3">
                WILIS S.A.S opera principalmente en Colombia, pero algunos servicios implican transferencias internacionales:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li><strong className="text-foreground">WhatsApp/Meta:</strong> Al usar WhatsApp, tus datos se procesan en servidores de Meta (Estados Unidos e Irlanda). WhatsApp tiene su propia política de privacidad que debes revisar.</li>
                <li><strong className="text-foreground">Servicios en la nube:</strong> Utilizamos proveedores de hosting con certificaciones internacionales de seguridad (ISO 27001, SOC 2) que pueden almacenar datos fuera de Colombia.</li>
                <li><strong className="text-foreground">Garantías:</strong> Todos los proveedores internacionales firman cláusulas contractuales estándar de protección de datos equivalentes a estándares colombianos.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                13. Oficial de Protección de Datos (DPO)
              </h2>
              <p className="text-muted-foreground">
                Para consultas específicas sobre protección de datos, puedes contactar a nuestro Oficial de 
                Protección de Datos:
              </p>
              <ul className="list-none text-muted-foreground space-y-2 ml-4 mt-3">
                <li>📧 <strong className="text-foreground">Email DPO:</strong> dpo@wilis.co</li>
                <li>📧 <strong className="text-foreground">Email privacidad:</strong> privacidad@wilis.co</li>
                <li>🏢 <strong className="text-foreground">Responsable del tratamiento:</strong> WILIS S.A.S</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                14. Contacto General
              </h2>
              <p className="text-muted-foreground mb-3">
                Si tienes preguntas o inquietudes sobre esta política de privacidad o sobre cómo 
                manejamos tu información personal:
              </p>
              <ul className="list-none text-muted-foreground space-y-2 ml-4">
                <li>📧 <strong className="text-foreground">Consultas generales:</strong> contacto@wilis.co</li>
                <li>📧 <strong className="text-foreground">Protección de datos:</strong> privacidad@wilis.co</li>
                <li>💬 <strong className="text-foreground">WhatsApp oficial:</strong> Disponible en la página principal</li>
                <li>⏱️ <strong className="text-foreground">Tiempo de respuesta:</strong> 24-48 horas hábiles</li>
              </ul>
            </section>

            <section className="mt-8 p-4 bg-primary/5 rounded-lg border border-primary/20">
              <p className="text-sm text-muted-foreground">
                <strong>Nota importante:</strong> Al continuar utilizando WILIS S.A.S, aceptas esta política 
                de privacidad y el tratamiento de tus datos personales según lo descrito en este documento.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PoliticaPrivacidad;
