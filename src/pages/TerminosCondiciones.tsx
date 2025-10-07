import { Button } from "@/components/ui/button";
import { legal } from "@/lib/site-data";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const sections = [
  {
    title: "1. Aceptación de los términos",
    content: [
      "Al utilizar los canales de WILIS S.A.S aceptas estos términos y condiciones. Si no estás de acuerdo con alguna de las políticas descritas, por favor no utilices el servicio.",
    ],
  },
  {
    title: "2. ¿Qué hace WILIS S.A.S?",
    content: [
      "WILIS S.A.S facilita el contacto entre conductores y pasajeros interesados en compartir un trayecto intermunicipal, principalmente en la ruta Boyacá - Bogotá.",
      "No prestamos un servicio de transporte público ni operamos una plataforma automatizada de reservas. Toda la coordinación se realiza de manera manual a través de WhatsApp.",
    ],
  },
  {
    title: "3. Rol de las partes",
    content: [
      "Cada viaje se realiza en vehículos particulares y bajo responsabilidad exclusiva de quienes participan.",
      "Los conductores declaran que cuentan con la documentación requerida por la ley colombiana (licencia vigente, SOAT y revisión tecnomecánica cuando aplica).",
      "Los pasajeros son responsables de verificar que el conductor y el vehículo cumplen con las condiciones necesarias antes de abordar.",
    ],
  },
  {
    title: "4. Proceso de coordinación",
    content: [
      "Solicitamos a conductores y pasajeros la información mínima necesaria para coordinar el viaje: nombre, datos de contacto, ruta, horarios y condiciones del trayecto.",
      "La asignación de cupos se confirma manualmente por un integrante del equipo de WILIS S.A.S. Los datos se utilizan únicamente para poner en contacto a las partes involucradas.",
    ],
  },
  {
    title: "5. Pagos y aportes",
    content: [
      "El aporte económico del viaje se acuerda directamente entre conductor y pasajeros, de acuerdo con los gastos reales del trayecto (gasolina, peajes, parqueaderos).",
      "WILIS S.A.S no cobra comisiones ni retiene dinero de los usuarios.",
    ],
  },
  {
    title: "6. Cancelaciones y puntualidad",
    content: [
      "Si necesitas cancelar, avísanos por WhatsApp tan pronto como sea posible para reasignar el cupo o ajustar la salida.",
      "Cancelaciones reiteradas sin aviso pueden implicar que dejemos de coordinar viajes contigo para proteger la confianza del resto de la comunidad.",
    ],
  },
  {
    title: "7. Conducta y seguridad",
    content: [
      "Trata a las demás personas con respeto y sigue las normas de tránsito vigentes.",
      "Comparte información veraz. No utilices la comunidad para fines comerciales, ilegales o distintos a compartir gastos de un viaje que ya tienes programado.",
      "Ante cualquier emergencia durante el trayecto, comunícate con las autoridades competentes llamando al 123 y notifícanos cuando sea seguro hacerlo.",
    ],
  },
  {
    title: "8. Limitación de responsabilidad",
    content: [
      "WILIS S.A.S no es propietaria de los vehículos ni contrata a los conductores. No asumimos responsabilidad por accidentes, demoras, pérdidas o daños que ocurran durante los viajes.",
      "Nuestra labor se limita a facilitar el contacto entre particulares y a acompañar la coordinación de cada trayecto.",
    ],
  },
  {
    title: "9. Actualizaciones",
    content: [
      "Podemos modificar estos términos cuando sea necesario. Publicaremos la versión vigente en este sitio y ajustaremos la fecha de actualización indicada abajo.",
    ],
  },
];

const TerminosCondiciones = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-accent/5">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Button variant="ghost" onClick={() => navigate("/")} className="mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Volver al inicio
        </Button>

        <div className="bg-card rounded-lg shadow-lg p-8 md:p-12">
          <h1 className="text-4xl font-bold text-primary mb-2">Términos y Condiciones</h1>
          <p className="text-muted-foreground mb-8">Última actualización: {legal.lastUpdated}</p>

          <div className="prose prose-slate max-w-none space-y-6">
            {sections.map((section) => (
              <section key={section.title}>
                <h2 className="text-2xl font-semibold text-foreground mb-4">{section.title}</h2>
                {section.content.map((paragraph) => (
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

export default TerminosCondiciones;
