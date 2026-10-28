import type { Metadata } from "next";
import Link from "next/link";
import SiteCard from "@/components/SiteCard";
import SiteMessage from "@/components/SiteMessage";
import SiteDivider from "@/components/SiteDivider";

export const metadata: Metadata = {
  title: "Seleção Pública Simplificada",
  description: "Informações sobre seleções públicas simplificadas do IPEM-PE.",
};

export default function SelecaoPublicaPage() {
  return <main id="conteudo" className="container section-block">
    <p className="eyebrow">Transparência</p>
    <h1>Seleção Pública Simplificada</h1>
    <p className="page-intro">Editais, comunicados, resultados e convocações relacionados a processos seletivos do Instituto.</p>
    <SiteMessage severity="warn" text="A listagem de seleções e documentos desta página ainda está pendente de migração e conferência com a área de Gestão de Pessoas. Não use esta página, por enquanto, para concluir que há ou não processo seletivo vigente." />
    <SiteDivider />
    <div className="resource-card-grid">
      <SiteCard title="Editais e portarias" elevation="low"><p>Consulte os documentos institucionais já organizados na versão em homologação. A página pode não conter editais de seleção simplificada.</p><Link className="text-link" href="/editais-e-portarias">Consultar documentos →</Link></SiteCard>
      <SiteCard title="Contato institucional" elevation="low"><p>Para confirmar a publicação de um edital ou o canal responsável, utilize os contatos institucionais do IPEM-PE.</p><Link className="text-link" href="/contato">Consultar contato →</Link></SiteCard>
    </div>
  </main>;
}
