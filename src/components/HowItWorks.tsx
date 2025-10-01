import { MessageCircle, UserCheck, Car } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      number: "1",
      icon: MessageCircle,
      title: "Abre el chat de WhatsApp",
      description: "Sin apps ni registros complicados. Dinos si eres conductor o pasajero"
    },
    {
      number: "2",
      icon: UserCheck,
      title: "Publica o encuentra tu viaje",
      description: "Indica ruta, fecha y hora. Verás opciones al instante"
    },
    {
      number: "3",
      icon: Car,
      title: "Confirma y viaja",
      description: "Coordinan punto, horario y precio. Pago directo entre ustedes"
    }
  ];

  return (
    <section id="como-funciona" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Cómo funciona
          </h2>
          <p className="text-xl text-muted-foreground">
            Tres pasos simples para comenzar a viajar mejor
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                {/* Connection line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-16 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary to-secondary" />
                )}
                
                <div className="text-center space-y-4">
                  <div className="relative inline-block">
                    <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-xl">
                      <Icon className="h-16 w-16 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-12 h-12 rounded-full bg-accent flex items-center justify-center font-bold text-2xl text-white shadow-lg">
                      {step.number}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">{step.title}</h3>
                  <p className="text-lg text-muted-foreground">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;