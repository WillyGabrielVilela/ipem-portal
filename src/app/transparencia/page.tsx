import type { Metadata } from "next";
export const metadata: Metadata = { title: "Transparência" };
const links = [
  ["Área Principal da Transparência", "https://www.ipem.pe.gov.br/area-principal-da-transparencia-2/"],
  ["Lei Geral de Proteção de Dados Pessoais (LGPD)", "https://www.ipem.pe.gov.br/lei-geral-de-protecao-de-dados-pessoais-lgpd/"],
  ["Plano de Metas", "https://www.ipem.pe.gov.br/plano-de-metas/"],
  ["Editais e Portarias", "https://www.ipem.pe.gov.br/editais-e-portarias/"],
  ["Editais de Notificação de Autuação", "https://www.ipem.pe.gov.br/notificacao-de-atuacao/"],
  ["Licitações e Contratos", "https://www.ipem.pe.gov.br/licitacao/"],
  ["Despesas", "https://www.ipem.pe.gov.br/despesas/"],
  ["Convênios e Transferências", "https://www.ipem.pe.gov.br/convenios-e-transferencias/"],
  ["Seleção Pública Simplificada", "https://www.ipem.pe.gov.br/selecao-publica-simplificada/"],
];
export default function TransparenciaPage() {
  return <main id="conteudo" className="container section-block"><p className="eyebrow">Acesso à informação</p><h1>Transparência e prestação de contas</h1><p className="page-intro">Os atalhos abaixo foram extraídos do menu do portal atual. O conteúdo e a disponibilidade dos destinos devem ser validados pela equipe responsável antes da publicação definitiva.</p><div className="resource-list">{links.map(([label, href]) => <a className="resource-item" href={href} key={href}><span><strong>{label}</strong><small>Consultar no portal institucional atual</small></span><b aria-hidden="true">↗</b></a>)}</div></main>;
}
