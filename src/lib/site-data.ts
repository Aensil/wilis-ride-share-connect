import { MessageCircle, Route, Users } from "lucide-react";

const DEFAULT_WHATSAPP_LINK = "https://wa.me/573002222222";

export const contact = {
  whatsappLink: (import.meta.env.VITE_WHATSAPP_LINK as string | undefined)?.trim() || DEFAULT_WHATSAPP_LINK,
};

export const legal = {
  lastUpdated: "1 de febrero de 2025",
};

export const communityStats = [
  {
    icon: Users,
    value: "200+",
    label: "Personas en la lista de espera",
  },
  {
    icon: MessageCircle,
    value: "24h",
    label: "Tiempo promedio de respuesta",
  },
  {
    icon: Route,
    value: "Boyacá - Bogotá",
    label: "Ruta activa del piloto",
  },
] as const;

export const statsFootnote = "Cifras referenciales del piloto colaborativo 2024-2025.";
