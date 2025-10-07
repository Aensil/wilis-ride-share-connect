export interface CommunityStat {
  icon: "users" | "message" | "route";
  value: string;
  label: string;
}

export const communityStats: CommunityStat[] = [
  {
    icon: "users",
    value: "4.500+",
    label: "Personas en la comunidad",
  },
  {
    icon: "message",
    value: "7",
    label: "Grupos activos en WhatsApp",
  },
  {
    icon: "route",
    value: "3.000+",
    label: "Viajes coordinados en Colombia",
  },
];

export const statsFootnote = "Actualizado con datos consolidados de los grupos de WhatsApp 2024-2025.";
