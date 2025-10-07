export const organization = {
  name: "WILIS S.A.S",
  legalName: "WILIS S.A.S",
  url: "https://wiliss.com",
  logo: "/og-image.svg",
  sameAs: ["https://www.instagram.com", "https://www.facebook.com"],
};

export const defaultMeta = {
  title: "WILIS S.A.S - La nueva forma de viajar",
  description:
    "WILIS S.A.S conecta conductores y pasajeros en Colombia para coordinar viajes colaborativos de forma segura, rápida y económica.",
};

export const routesMeta: Record<string, { title: string; description: string } | undefined> = {
  "/": defaultMeta,
  "/terminos-condiciones": {
    title: "Términos y Condiciones | WILIS S.A.S",
    description: "Conoce las reglas y responsabilidades para participar en la comunidad colaborativa de WILIS S.A.S.",
  },
  "/politica-privacidad": {
    title: "Política de Privacidad | WILIS S.A.S",
    description: "Descubre cómo WILIS S.A.S protege y utiliza tus datos personales al coordinar viajes compartidos.",
  },
};
