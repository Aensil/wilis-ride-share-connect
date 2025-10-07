import { MessageCircle, Route, Users } from "lucide-react";

const DEFAULT_WHATSAPP_LINK = "https://wa.me/573002222222";

export const contact = {
  whatsappLink: (import.meta.env.VITE_WHATSAPP_LINK as string | undefined)?.trim() || DEFAULT_WHATSAPP_LINK,
};

export const legal = {
  lastUpdated: "11 de febrero de 2025",
};

export const communityStats = [
  {
    icon: Users,
    value: "4.500+",
    label: "Personas en la comunidad",
  },
  {
    icon: MessageCircle,
    value: "7",
    label: "Grupos activos en WhatsApp",
  },
  {
    icon: Route,
    value: "3.000+",
    label: "Viajes coordinados en Colombia",
  },
] as const;

export const statsFootnote = "Actualizado con datos consolidados de los grupos de WhatsApp 2024-2025.";
