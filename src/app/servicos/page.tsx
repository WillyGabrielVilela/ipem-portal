import type { Metadata } from "next";
import SiteCard from "@/components/SiteCard";
export const metadata: Metadata = { title: "Serviços" };
const links = [
  ["Portal de Serviços ao Cliente / Cidadão", "https://servicos.rbmlq.gov.br/segundaviagru/"],
  ["Perguntas Frequentes", "https://www.ipem.pe.gov.br/perguntas-frequentes/"],
  ["CML", "https://www.ipem.pe.gov.br/cml/"],
  ["Pré Embalados", "https://www.ipem.pe.gov.br/pre-medidos/"],
  ["CQI", "https://www.ipem.pe.gov.br/cqi/"],
  ["Formulário de denúncia / Ouvidoria", "https://www.ipem.pe.gov.br/formulario-de-denuncia/"],
];
export default function ServicosPage() {
  return <main id="conteudo" className="container section-block"><p className="eyebrow">Atendimento</p><h1>Serviços ao cidadão</h1><p className="page-intro">Atalhos para serviços e páginas que constam no menu do portal atual. Confirme com a equipe do IPEM-PE se os destinos continuam vigentes antes de publicar.</p><div className="resource-list resource-card-grid">{links.map(([label, href]) => <SiteCard key={href} title={label} elevation="low" footer={<a className="text-link" href={href}>Acessar serviço ↗</a>}><p className="resource-description">Link para a página ou sistema disponível no portal atual.</p><small className="resource-url">{href}</small></SiteCard>)}</div></main>;
}
