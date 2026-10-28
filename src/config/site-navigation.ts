/** Navegação central do portal. Rotas internas devem usar caminhos locais; URLs externas ficam explícitas. */
export type SiteNavigationLink = { label: string; href: string };
export type SiteNavigationGroup = {
  label: string;
  href?: string;
  items: SiteNavigationLink[];
};

export const siteNavigation: SiteNavigationGroup[] = [
  { label: "Institucional", items: [
    { label: "História", href: "/historia" },
    { label: "Quem Somos", href: "/quem-somos" },
    { label: "Quem é Quem", href: "/diretoria" },
    { label: "Organograma", href: "/organograma" },
    { label: "Unidades", href: "/unidades" },
  ]},
  { label: "Atividades", items: [
    { label: "CML", href: "/cml" },
    { label: "Pré-Embalados", href: "/pre-medidos" },
    { label: "CQI", href: "/cqi" },
  ]},
  { label: "Notícias", href: "/noticias", items: [
    { label: "Todas as notícias", href: "/noticias" },
  ]},
  { label: "Legislação", items: [
    { label: "Legislação Federal e Normas do Inmetro", href: "/normas-tecnicas" },
  ]},
  { label: "Transparência", href: "/transparencia", items: [
    { label: "Área Principal da Transparência", href: "/transparencia/area-principal" },
    { label: "LGPD", href: "/lei-geral-de-protecao-de-dados-pessoais-lgpd" },
    { label: "Plano de Metas", href: "/plano-de-metas" },
    { label: "Editais e Portarias", href: "/editais-e-portarias" },
    { label: "Notificações de Autuação", href: "/notificacao-de-atuacao" },
    { label: "Licitações e Contratos", href: "/licitacao" },
    { label: "Despesas", href: "/despesas" },
    { label: "Convênios e Transferências", href: "/convenios-e-transferencias" },
    { label: "Seleção Pública Simplificada", href: "/selecao-publica-simplificada" },
  ]},
  { label: "Atendimento", items: [
    { label: "Perguntas Frequentes", href: "/perguntas-frequentes" },
    { label: "Portal de Serviços ao Cliente / Cidadão", href: "/portal-de-servicos" },
    { label: "Departamento Jurídico", href: "/departamento-juridico" },
  ]},
  { label: "Ouvidoria", href: "/ouvidoria", items: [
    { label: "Ouvidoria", href: "/ouvidoria" },
    { label: "Formulário de denúncia", href: "/formulario-de-denuncia" },
  ]},
];
