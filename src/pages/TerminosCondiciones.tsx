import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const TerminosCondiciones = () => {
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
            Términos y Condiciones
          </h1>
          <p className="text-muted-foreground mb-8">
            Última actualización: {new Date().toLocaleDateString('es-CO')}
          </p>

          <div className="prose prose-slate max-w-none space-y-6">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                1. Aceptación de los Términos
              </h2>
              <p className="text-muted-foreground">
                Al acceder y utilizar WILIS S.A.S, aceptas estar sujeto a estos términos y condiciones. 
                Si no estás de acuerdo con alguna parte de estos términos, no debes utilizar nuestro servicio.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                2. Descripción del Servicio
              </h2>
              <p className="text-muted-foreground mb-3">
                WILIS S.A.S es una plataforma tecnológica de conexión (carpooling) que facilita el contacto 
                entre conductores particulares y pasajeros que desean compartir viajes entre Boyacá y Bogotá. 
                <strong className="text-foreground"> Funciones y limitaciones de WILIS S.A.S:</strong>
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>WILIS S.A.S NO es un servicio de transporte público, taxi, o transporte privado regulado</li>
                <li>WILIS S.A.S NO es propietaria de los vehículos ni emplea a los conductores</li>
                <li>Los viajes son organizados directamente entre particulares (carpooling colaborativo)</li>
                <li>WILIS S.A.S actúa exclusivamente como intermediario tecnológico para facilitar la comunicación</li>
                <li>WILIS S.A.S no cobra comisiones por los viajes. El pago entre usuarios cubre únicamente gastos compartidos (gasolina, peajes)</li>
                <li>La responsabilidad del viaje recae 100% en el conductor del vehículo particular</li>
              </ul>
              <div className="mt-4 p-4 bg-destructive/10 border border-destructive/20 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">ADVERTENCIA LEGAL:</strong> Al usar WILIS S.A.S, reconoces que viajas 
                  en un vehículo particular, no en transporte comercial. WILIS S.A.S recomienda fuertemente verificar 
                  SOAT, licencia del conductor, y estado del vehículo antes de cada viaje.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                3. Responsabilidades del Usuario
              </h2>
              <p className="text-muted-foreground mb-3">
                Como usuario de WILIS S.A.S, te comprometes a:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Proporcionar información veraz y actualizada</li>
                <li>Cumplir con todos los acuerdos pactados con otros usuarios</li>
                <li>Respetar las leyes de tránsito y regulaciones aplicables</li>
                <li>Mantener un comportamiento respetuoso con otros miembros</li>
                <li>No utilizar el servicio para fines ilícitos</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                4. Responsabilidades del Conductor
              </h2>
              <p className="text-muted-foreground mb-3">
                Los conductores son 100% responsables de la seguridad del viaje y deben cumplir con:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li><strong className="text-foreground">Documentación obligatoria:</strong> Licencia de conducción vigente categoría apropiada, SOAT vigente, revisión tecnomecánica al día (si aplica)</li>
                <li><strong className="text-foreground">Estado del vehículo:</strong> Mantener el vehículo en condiciones mecánicas óptimas y seguras</li>
                <li><strong className="text-foreground">Capacidad legal:</strong> No exceder el número de pasajeros permitido por la tarjeta de propiedad</li>
                <li><strong className="text-foreground">Verificación previa:</strong> Subir fotos de SOAT, licencia, y cédula antes de publicar viajes (verificación dentro de 48 horas)</li>
                <li><strong className="text-foreground">Acuerdos:</strong> Respetar precios, rutas, y horarios pactados con pasajeros</li>
                <li><strong className="text-foreground">Obligaciones tributarias:</strong> Si realiza viajes de forma frecuente (más de 3 por semana), consultar con un contador sobre posibles obligaciones fiscales</li>
              </ul>
              <div className="mt-4 p-4 bg-primary/10 border border-primary/20 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">IMPORTANTE:</strong> Conductores sin documentación verificada 
                  serán suspendidos hasta completar el proceso. Conducir sin SOAT o licencia vigente es ilegal 
                  y puede resultar en suspensión permanente de WILIS S.A.S más sanciones legales.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                5. Responsabilidades del Pasajero
              </h2>
              <p className="text-muted-foreground mb-3">
                Los pasajeros deben:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Ser puntuales en los puntos de encuentro acordados</li>
                <li>Respetar el vehículo y las pertenencias del conductor</li>
                <li>Cumplir con el pago acordado</li>
                <li>Informar al conductor sobre cualquier equipaje voluminoso</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                6. Limitación de Responsabilidad
              </h2>
              <p className="text-muted-foreground mb-3">
                <strong className="text-foreground">WILIS S.A.S como plataforma tecnológica:</strong> Dado que WILIS S.A.S 
                es únicamente una plataforma de conexión entre particulares y NO presta servicios de transporte, 
                WILIS S.A.S limita su responsabilidad en los siguientes términos, sin perjuicio de las normas 
                imperativas de protección al consumidor (Ley 1480 de 2011):
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li><strong className="text-foreground">Accidentes de tránsito:</strong> WILIS S.A.S no se responsabiliza por accidentes, lesiones, o muerte durante el viaje. La responsabilidad recae en el conductor del vehículo y su seguro SOAT/póliza privada</li>
                <li><strong className="text-foreground">Pérdidas y daños:</strong> WILIS S.A.S no responde por pérdida, robo, o daño de equipaje, dispositivos, u otros bienes personales</li>
                <li><strong className="text-foreground">Incumplimientos entre usuarios:</strong> WILIS S.A.S no media disputas sobre pagos, cancelaciones, o incumplimientos de acuerdos. Los usuarios resuelven directamente o acuden a autoridades competentes</li>
                <li><strong className="text-foreground">Veracidad de información:</strong> WILIS S.A.S verifica documentación básica pero no garantiza la exactitud total de perfiles, calificaciones, o información proporcionada por usuarios</li>
                <li><strong className="text-foreground">Fallas mecánicas:</strong> WILIS S.A.S no inspecciona vehículos físicamente. El conductor es responsable del estado mecánico</li>
                <li><strong className="text-foreground">Actos de terceros:</strong> WILIS S.A.S no responde por robos, asaltos, o actos criminales cometidos por o contra usuarios durante viajes</li>
              </ul>
              <div className="mt-4 p-4 bg-destructive/10 border border-destructive/20 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">RESPONSABILIDAD DEL USUARIO:</strong> Al usar WILIS S.A.S, aceptas 
                  que viajas bajo tu propio riesgo. WILIS S.A.S no sustituye ni reemplaza seguros de viaje, SOAT, 
                  o pólizas de responsabilidad civil. En caso de accidente, el conductor y su aseguradora son 
                  responsables según la legislación colombiana de tránsito.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                7. Pagos y Contribuciones
              </h2>
              <p className="text-muted-foreground">
                Los pagos por los viajes compartidos se realizan directamente entre conductor y pasajero. 
                WILIS S.A.S recomienda acordar el monto antes del viaje y realizar el pago en efectivo al finalizar 
                el trayecto o mediante transferencia electrónica según lo convenido entre las partes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                8. Política de Cancelaciones
              </h2>
              <p className="text-muted-foreground mb-3">
                Cualquier usuario puede cancelar un viaje, pero existen políticas para proteger a la comunidad:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li><strong className="text-foreground">Con más de 2 horas de anticipación:</strong> Cancelación libre sin penalización</li>
                <li><strong className="text-foreground">Entre 30 minutos y 2 horas antes:</strong> Se registra una advertencia. A partir de la 2da advertencia en 30 días = suspensión temporal de 7 días</li>
                <li><strong className="text-foreground">Menos de 30 minutos o no show:</strong> Cancelación de último minuto. 3 cancelaciones = suspensión de 30 días. 5 cancelaciones = suspensión permanente</li>
                <li><strong className="text-foreground">Emergencias justificadas:</strong> Accidentes, enfermedad grave, caso fortuito debidamente documentado no cuentan como penalización</li>
              </ul>
              <p className="text-muted-foreground mt-3">
                <strong className="text-foreground">Recomendación:</strong> Comunica cancelaciones con la mayor 
                anticipación posible por respeto a los demás usuarios. Las cancelaciones reiteradas dañan 
                la confianza de la comunidad.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                9. Suspensión y Eliminación de Cuentas
              </h2>
              <p className="text-muted-foreground mb-3">
                WILIS S.A.S se reserva el derecho de suspender temporal o permanentemente, o eliminar cuentas 
                en las siguientes circunstancias:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li><strong className="text-foreground">3 o más reportes negativos verificados:</strong> de acoso, conducta inapropiada, o inseguridad (suspensión inmediata mientras se investiga)</li>
                <li><strong className="text-foreground">Actividad fraudulenta:</strong> Uso de documentación falsa, identidad falsa, o intentos de estafa = eliminación permanente + reporte a autoridades</li>
                <li><strong className="text-foreground">Conducir sin SOAT o licencia:</strong> Suspensión inmediata de 90 días mínimo + obligación de presentar documentación vigente para reactivación</li>
                <li><strong className="text-foreground">Violación grave de términos:</strong> Transporte comercial encubierto, solicitar pagos excesivos, o uso para actividades ilegales = eliminación permanente</li>
                <li><strong className="text-foreground">Comportamiento abusivo:</strong> Lenguaje ofensivo, discriminación, o acoso hacia otros usuarios = suspensión de 30-90 días o permanente según gravedad</li>
                <li><strong className="text-foreground">Cancelaciones excesivas:</strong> Según política de cancelaciones (ver sección 8)</li>
              </ul>
              <p className="text-muted-foreground mt-3">
                <strong className="text-foreground">Proceso de apelación:</strong> Usuarios suspendidos pueden 
                apelar enviando evidencia a contacto@wilis.co dentro de 15 días hábiles. WILIS S.A.S responderá en 10 días hábiles.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                10. Modificaciones
              </h2>
              <p className="text-muted-foreground">
                WILIS S.A.S se reserva el derecho de modificar estos términos y condiciones en cualquier momento. 
                Los cambios serán notificados a través de nuestros canales oficiales y entrarán en vigor 
                inmediatamente después de su publicación.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                11. Resolución de Disputas y Jurisdicción
              </h2>
              <p className="text-muted-foreground mb-3">
                En caso de conflictos o disputas relacionadas con el uso de WILIS S.A.S:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li><strong className="text-foreground">Mediación directa:</strong> Los usuarios intentarán primero resolver disputas directamente entre ellos de buena fe</li>
                <li><strong className="text-foreground">Mediación de WILIS S.A.S:</strong> Si no se resuelve, pueden solicitar mediación informal de WILIS S.A.S vía WhatsApp o email. WILIS S.A.S no es un árbitro vinculante pero puede facilitar comunicación</li>
                <li><strong className="text-foreground">Conciliación:</strong> Para disputas sobre servicios de WILIS S.A.S (no entre usuarios), las partes acuerdan intentar conciliación ante centros de conciliación reconocidos en Colombia antes de acudir a tribunales</li>
                <li><strong className="text-foreground">Jurisdicción:</strong> Estos términos se rigen por las leyes de la República de Colombia. Cualquier disputa legal será resuelta ante los jueces y tribunales competentes de Bogotá D.C., Colombia</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                12. Procedimientos de Emergencia
              </h2>
              <p className="text-muted-foreground mb-3">
                En caso de emergencia durante un viaje:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li><strong className="text-foreground">Emergencias médicas o accidentes:</strong> Llama inmediatamente al 123 (línea de emergencias Colombia)</li>
                <li><strong className="text-foreground">Línea de Policía de Carreteras:</strong> 767 (24/7 para incidentes en carretera)</li>
                <li><strong className="text-foreground">Reporte a WILIS S.A.S:</strong> Después de atender la emergencia, repórtanos vía WhatsApp con detalles (fecha, hora, ubicación, usuarios involucrados, número de reporte policial si aplica)</li>
                <li><strong className="text-foreground">Información del conductor:</strong> Antes de cada viaje, comparte con un familiar/amigo: nombre del conductor, placa del vehículo, hora de salida/llegada estimada</li>
              </ul>
              <div className="mt-4 p-4 bg-primary/10 border border-primary/20 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">LÍNEA DE AYUDA WILIS S.A.S:</strong> WhatsApp oficial disponible 
                  24/7 para reportes de emergencias o problemas de seguridad.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                13. Requisitos de Seguro
              </h2>
              <p className="text-muted-foreground mb-3">
                <strong className="text-foreground">Conductores:</strong> Es OBLIGATORIO tener:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>SOAT (Seguro Obligatorio de Accidentes de Tránsito) vigente - OBLIGATORIO por ley colombiana</li>
                <li>Se recomienda fuertemente contar con póliza de responsabilidad civil extracontractual para mayor protección</li>
              </ul>
              <p className="text-muted-foreground mt-3 mb-3">
                <strong className="text-foreground">Pasajeros:</strong>
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>El SOAT del conductor cubre lesiones de pasajeros en caso de accidente</li>
                <li>WILIS S.A.S recomienda contratar seguro de viaje personal si viajas frecuentemente</li>
                <li>Verifica que el conductor tenga SOAT vigente ANTES de subir al vehículo (solicita foto del documento)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                14. Contacto
              </h2>
              <p className="text-muted-foreground mb-3">
                Para consultas, reportes, o asistencia relacionada con estos términos y condiciones:
              </p>
              <ul className="list-none text-muted-foreground space-y-2 ml-4">
                <li>📧 <strong className="text-foreground">Email general:</strong> contacto@wilis.co</li>
                <li>⚖️ <strong className="text-foreground">Asuntos legales:</strong> legal@wilis.co</li>
                <li>💬 <strong className="text-foreground">WhatsApp oficial:</strong> Disponible en la página principal</li>
                <li>🏢 <strong className="text-foreground">Razón social:</strong> WILIS S.A.S</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                Tiempo de respuesta: 24-48 horas hábiles para consultas generales, 12 horas para emergencias.
              </p>
            </section>

            <div className="mt-8 p-6 bg-muted border border-border rounded-lg">
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">ACEPTACIÓN DE TÉRMINOS:</strong> Al crear una cuenta y usar 
                WILIS S.A.S, confirmas que has leído, entendido, y aceptas estos términos y condiciones en su totalidad. 
                Si no estás de acuerdo con alguna sección, no debes usar el servicio.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TerminosCondiciones;
