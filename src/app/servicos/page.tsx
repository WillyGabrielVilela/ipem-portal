import Link from "next/link";
import SiteDivider from "@/components/SiteDivider";
import SiteMessage from "@/components/SiteMessage";
import type { Metadata } from "next";
import SiteCard from "@/components/SiteCard";
export const metadata: Metadata = { title: "Serviços" };
const links = [
  ["Portal de Serviços ao Cliente / Cidadão", "/portal-de-servicos"],
  ["Perguntas Frequentes", "/perguntas-frequentes"],
  ["CML", "/cml"],
  ["Pré Embalados", "/pre-medidos"],
  ["CQI", "/cqi"],
  ["Formulário de denúncia / Ouvidoria", "/formulario-de-denuncia"],
];
export default function ServicosPage() {
  return <main id="conteudo" className="container section-block"><p className="eyebrow">Atendimento</p><h1>Serviços ao cidadão</h1><p className="page-intro">Atalhos para serviços e páginas que constam no menu do portal atual. Confirme com a equipe do IPEM-PE se os destinos continuam vigentes antes de publicar.</p><SiteMessage severity="info" text="Os links desta página apontam para os canais atualmente publicados e precisam ser validados antes da publicação definitiva." /><SiteDivider /><div className="resource-list resource-card-grid">{links.map(([label, href]) => <SiteCard key={href} title={label} elevation="low" footer={<Link className="text-link" href={href}>Acessar serviço →</Link>}><p className="resource-description">Página interna do portal ou acesso ao serviço oficial correspondente.</p><small className="resource-url">{href}</small></SiteCard>)}</div></main>;
}
