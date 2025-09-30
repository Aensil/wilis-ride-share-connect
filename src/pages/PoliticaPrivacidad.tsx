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
                En Wilis respetamos tu privacidad y nos comprometemos a proteger tus datos personales. 
                Esta política de privacidad explica cómo recopilamos, usamos, almacenamos y compartimos 
                tu información cuando utilizas nuestro servicio.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                2. Información que Recopilamos
              </h2>
              <p className="text-muted-foreground mb-3">
                Recopilamos la siguiente información cuando utilizas Wilis:
              </p>
              
              <h3 className="text-xl font-semibold text-foreground mt-4 mb-3">
                Información proporcionada por ti:
              </h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Nombre completo</li>
                <li>Número de teléfono (WhatsApp)</li>
                <li>Información del vehículo (para conductores)</li>
                <li>Rutas de viaje habituales</li>
                <li>Preferencias de viaje</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mt-4 mb-3">
                Información recopilada automáticamente:
              </h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Datos de uso del servicio</li>
                <li>Historial de viajes compartidos</li>
                <li>Información del dispositivo</li>
                <li>Dirección IP</li>
              </ul>
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
                4. Compartir tu Información
              </h2>
              <p className="text-muted-foreground mb-3">
                Compartimos tu información en las siguientes circunstancias:
              </p>
              
              <h3 className="text-xl font-semibold text-foreground mt-4 mb-3">
                Con otros usuarios:
              </h3>
              <p className="text-muted-foreground mb-2">
                Cuando aceptas un viaje, compartimos tu nombre, foto de perfil (si la has proporcionado) 
                y número de WhatsApp con el conductor o pasajero correspondiente para facilitar la coordinación.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-4 mb-3">
                Con terceros:
              </h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Proveedores de servicios que nos ayudan a operar la plataforma</li>
                <li>Autoridades legales cuando sea requerido por ley</li>
                <li>Nunca vendemos tu información personal a terceros</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                5. WhatsApp y Comunicaciones
              </h2>
              <p className="text-muted-foreground">
                Wilis opera principalmente a través de WhatsApp. Al utilizar nuestro servicio a través 
                de WhatsApp, también estás sujeto a los términos y políticas de privacidad de WhatsApp 
                y Meta. Te recomendamos revisar dichas políticas para entender cómo manejan tu información.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                6. Seguridad de los Datos
              </h2>
              <p className="text-muted-foreground">
                Implementamos medidas de seguridad técnicas y organizativas para proteger tu información 
                personal contra acceso no autorizado, pérdida, destrucción o alteración. Sin embargo, 
                ningún método de transmisión por Internet o almacenamiento electrónico es 100% seguro.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                7. Retención de Datos
              </h2>
              <p className="text-muted-foreground">
                Conservamos tu información personal durante el tiempo que mantengas una cuenta activa 
                en Wilis y durante un período adicional según sea necesario para cumplir con obligaciones 
                legales, resolver disputas y hacer cumplir nuestros acuerdos.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                8. Tus Derechos
              </h2>
              <p className="text-muted-foreground mb-3">
                De acuerdo con la legislación colombiana de protección de datos (Ley 1581 de 2012), tienes derecho a:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Conocer, actualizar y rectificar tus datos personales</li>
                <li>Solicitar prueba de la autorización otorgada</li>
                <li>Ser informado sobre el uso que se ha dado a tus datos</li>
                <li>Revocar la autorización y solicitar la supresión de tus datos</li>
                <li>Acceder de forma gratuita a tus datos personales</li>
              </ul>
              <p className="text-muted-foreground mt-3">
                Para ejercer estos derechos, contáctanos a través de nuestro WhatsApp o 
                enviando un correo a privacidad@wilis.co
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                9. Menores de Edad
              </h2>
              <p className="text-muted-foreground">
                Wilis está destinado a usuarios mayores de 18 años. No recopilamos intencionalmente 
                información de menores de edad. Si descubrimos que hemos recopilado información de un 
                menor, la eliminaremos inmediatamente.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                10. Cookies y Tecnologías Similares
              </h2>
              <p className="text-muted-foreground">
                Nuestro sitio web puede utilizar cookies y tecnologías similares para mejorar tu experiencia 
                de usuario, analizar el tráfico y personalizar el contenido. Puedes controlar las cookies 
                a través de la configuración de tu navegador.
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
                12. Contacto
              </h2>
              <p className="text-muted-foreground">
                Si tienes preguntas o inquietudes sobre esta política de privacidad o sobre cómo 
                manejamos tu información personal, puedes contactarnos:
              </p>
              <ul className="list-none text-muted-foreground space-y-2 ml-4 mt-3">
                <li>📧 Email: privacidad@wilis.co</li>
                <li>💬 WhatsApp: A través de nuestro chat oficial</li>
                <li>🏢 Responsable: Wilis Colombia</li>
              </ul>
            </section>

            <section className="mt-8 p-4 bg-primary/5 rounded-lg border border-primary/20">
              <p className="text-sm text-muted-foreground">
                <strong>Nota importante:</strong> Al continuar utilizando Wilis, aceptas esta política 
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
