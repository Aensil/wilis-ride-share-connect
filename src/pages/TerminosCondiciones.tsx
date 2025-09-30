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
                Al acceder y utilizar Wilis, aceptas estar sujeto a estos términos y condiciones. 
                Si no estás de acuerdo con alguna parte de estos términos, no debes utilizar nuestro servicio.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                2. Descripción del Servicio
              </h2>
              <p className="text-muted-foreground mb-3">
                Wilis es una plataforma de conexión que facilita el contacto entre conductores 
                y pasajeros que desean compartir viajes entre Boyacá y Bogotá. Wilis actúa únicamente 
                como intermediario y no es responsable de los viajes compartidos.
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Wilis no es un servicio de transporte público ni privado</li>
                <li>Los viajes son organizados directamente entre usuarios</li>
                <li>Wilis no cobra comisiones por los viajes compartidos</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                3. Responsabilidades del Usuario
              </h2>
              <p className="text-muted-foreground mb-3">
                Como usuario de Wilis, te comprometes a:
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
                Los conductores deben:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Contar con licencia de conducción vigente</li>
                <li>Mantener el vehículo en condiciones óptimas y seguras</li>
                <li>Contar con el seguro obligatorio (SOAT) vigente</li>
                <li>Respetar los acuerdos de precio y ruta establecidos</li>
                <li>No transportar más pasajeros de los permitidos por el vehículo</li>
              </ul>
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
              <p className="text-muted-foreground">
                Wilis no se hace responsable por:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Accidentes, daños o pérdidas durante el viaje</li>
                <li>Incumplimiento de acuerdos entre usuarios</li>
                <li>Conflictos entre conductores y pasajeros</li>
                <li>La veracidad de la información proporcionada por los usuarios</li>
                <li>Problemas técnicos con el vehículo durante el trayecto</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                7. Pagos y Contribuciones
              </h2>
              <p className="text-muted-foreground">
                Los pagos por los viajes compartidos se realizan directamente entre conductor y pasajero. 
                Wilis recomienda acordar el monto antes del viaje y realizar el pago en efectivo al finalizar 
                el trayecto o mediante transferencia electrónica según lo convenido entre las partes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                8. Cancelaciones
              </h2>
              <p className="text-muted-foreground">
                Cualquier usuario puede cancelar un viaje acordado. Se recomienda notificar con la mayor 
                anticipación posible para no afectar los planes de otros usuarios. Las cancelaciones 
                reiteradas sin justificación pueden resultar en la suspensión de la cuenta.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                9. Suspensión de Cuenta
              </h2>
              <p className="text-muted-foreground">
                Wilis se reserva el derecho de suspender o eliminar cuentas de usuarios que:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Violen estos términos y condiciones</li>
                <li>Reciban múltiples reportes negativos de otros usuarios</li>
                <li>Utilicen el servicio para actividades fraudulentas o ilegales</li>
                <li>Proporcionen información falsa de manera deliberada</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                10. Modificaciones
              </h2>
              <p className="text-muted-foreground">
                Wilis se reserva el derecho de modificar estos términos y condiciones en cualquier momento. 
                Los cambios serán notificados a través de nuestros canales oficiales y entrarán en vigor 
                inmediatamente después de su publicación.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                11. Contacto
              </h2>
              <p className="text-muted-foreground">
                Si tienes preguntas sobre estos términos y condiciones, puedes contactarnos a través 
                de nuestro chat de WhatsApp o enviando un correo electrónico a contacto@wilis.co
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TerminosCondiciones;
