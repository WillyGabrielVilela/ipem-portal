export type QuickLink = { title: string; description: string; href: string; symbol: string };

export const quickLinks: QuickLink[] = [
  { title: "Serviços ao cidadão", description: "Acesse os serviços ao cliente e cidadão disponíveis nos canais oficiais.", href: "/servicos", symbol: "↗" },
  { title: "Transparência", description: "Consulte informações, despesas, licitações, contratos e documentos públicos.", href: "/transparencia", symbol: "▤" },
  { title: "Legislação e normas", description: "Consulte legislação federal e normas do Inmetro organizadas pelo IPEM-PE.", href: "/normas-tecnicas", symbol: "§" },
  { title: "Ouvidoria", description: "Conheça os canais oficiais para registrar manifestações e denúncias.", href: "/formulario-de-denuncia", symbol: "✉" },
];
