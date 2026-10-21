import SiteDivider from "@/components/SiteDivider";
import SiteMessage from "@/components/SiteMessage";
import type { Metadata } from "next";
export const metadata: Metadata = { title: "Contato" };
export default function ContatoPage() {
  return <main id="conteudo" className="container section-block"><p className="eyebrow">Canais institucionais</p><h1>Contato</h1><p className="page-intro">Dados reproduzidos da página inicial do portal atual do IPEM-PE. Validar as informações com a área responsável antes da publicação definitiva.</p><SiteMessage severity="warn" text="Confirme endereço, telefone e horário de atendimento com a área responsável antes de publicar esta página." /><SiteDivider /><div className="contact-panel"><h2>Instituto de Pesos e Medidas do Estado de Pernambuco</h2><p><strong>Endereço</strong><br />Avenida Professor Luiz Freire, nº 900 – Cidade Universitária<br />Recife – Pernambuco | CEP: 50740-545</p><p><strong>Telefone</strong><br /><a href="tel:+558131844700">(81) 3184-4700</a></p><p><strong>Horário informado no portal atual</strong><br />Segunda a sexta-feira, das 8h às 14h, exceto feriados.</p><p><strong>Ouvidoria</strong><br /><a href="https://www.ipem.pe.gov.br/formulario-de-denuncia/">Acessar formulário de denúncia ↗</a></p></div></main>;
}
