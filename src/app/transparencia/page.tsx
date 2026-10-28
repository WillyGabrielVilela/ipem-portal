import Link from "next/link";
import SiteDivider from "@/components/SiteDivider";
import SiteMessage from "@/components/SiteMessage";
import type { Metadata } from "next";
import SiteCard from "@/components/SiteCard";
export const metadata: Metadata = { title: "Transparência" };
const links = [
  ["Área Principal da Transparência", "/transparencia/area-principal"],
  ["Lei Geral de Proteção de Dados Pessoais (LGPD)", "/lei-geral-de-protecao-de-dados-pessoais-lgpd"],
  ["Plano de Metas", "/plano-de-metas"],
  ["Editais e Portarias", "/editais-e-portarias"],
  ["Editais de Notificação de Autuação", "/notificacao-de-atuacao"],
  ["Licitações e Contratos", "/licitacao"],
  ["Despesas", "/despesas"],
  ["Convênios e Transferências", "/convenios-e-transferencias"],
  ["Seleção Pública Simplificada", "/selecao-publica-simplificada"],
];
export default function TransparenciaPage() {
  return <main id="conteudo" className="container section-block"><p className="eyebrow">Acesso à informação</p><h1>Transparência e prestação de contas</h1><p className="page-intro">Os atalhos abaixo foram extraídos do menu do portal atual. O conteúdo e a disponibilidade dos destinos devem ser validados pela equipe responsável antes da publicação definitiva.</p><SiteMessage severity="info" text="Esta página organiza atalhos para conteúdos de transparência; a completude e a atualização dos dados devem ser confirmadas pela área responsável." /><SiteDivider /><div className="resource-list resource-card-grid">{links.map(([label, href]) => <SiteCard key={href} title={label} elevation="low" footer={<Link className="text-link" href={href}>Consultar informação →</Link>}><p className="resource-description">Consultar a seção correspondente neste portal.</p><small className="resource-url">{href}</small></SiteCard>)}</div></main>;
}
