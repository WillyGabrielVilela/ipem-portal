import type { Metadata } from "next";
import SiteCard from "@/components/SiteCard";
import SiteMessage from "@/components/SiteMessage";

export const metadata: Metadata = {
  title: "Convênios e Transferências | IPEM-PE",
  description: "Consulte os convênios e termos aditivos disponibilizados pelo Instituto de Pesos e Medidas de Pernambuco.",
};

const documents = [
  { title: "Convênio nº 14/2025 — IPEM/INMETRO", href: "https://www.ipem.pe.gov.br/wp-content/uploads/2026/09/Convênio-14-2025-IPEM-PE-3.pdf", description: "Documento de convênio disponibilizado em PDF.", type: "PDF" },
  { title: "2º TA CV 21/2013-1", href: "/convenios-e-transferencias/segundo-termo-aditivo-21-2013", description: "Segundo termo aditivo ao convênio 21/2013-1.", type: "Página em migração" },
  { title: "Convênio Assinado", href: "/convenios-e-transferencias/convenio-assinado", description: "Acesso ao documento identificado como convênio assinado.", type: "Página em migração" },
  { title: "Convênio de Cooperação Técnica 21/2013", href: "/convenios-e-transferencias/convenio-cooperacao-tecnica-21-2013", description: "Documento do convênio de cooperação técnica 21/2013.", type: "Página em migração" },
  { title: "3º TA CV 21/2013-1", href: "/convenios-e-transferencias/terceiro-termo-aditivo-21-2013", description: "Terceiro termo aditivo ao convênio 21/2013-1.", type: "Página em migração" },
  { title: "2º TA CV 21/2013-1 — arquivo 2", href: "/convenios-e-transferencias/segundo-termo-aditivo-21-2013-arquivo-2", description: "Outra referência de arquivo para o segundo termo aditivo.", type: "Página em migração" },
  { title: "2º TA CV 21/2013-1 — arquivo 3", href: "/convenios-e-transferencias/segundo-termo-aditivo-21-2013-arquivo-3", description: "Referência adicional do segundo termo aditivo listada no site de origem.", type: "Página em migração" },
];

export default function ConveniosTransferenciasPage() {
  return (
    <main id="conteudo" className="container section-block agreements-page">
      <header className="agreements-heading">
        <p className="eyebrow">Transparência e prestação de contas</p>
        <h1>Convênios e Transferências</h1>
        <p className="page-intro">Consulte os convênios e termos aditivos relacionados pelo IPEM-PE. Os links abaixo foram organizados a partir do conteúdo de referência. Os itens marcados como página em migração ainda precisam ter seus arquivos originais recuperados e validados.</p>
      </header>
      <section className="agreements-section" aria-labelledby="agreements-list-title">
        <div className="agreements-section-heading">
          <h2 id="agreements-list-title">Documentos disponíveis</h2>
          <p>Selecione um item para abrir o documento ou a página correspondente em uma nova aba.</p>
        </div>
        <div className="agreements-grid">
          {documents.map((document, index) => (
            <SiteCard key={`${document.href}-${index}`} title={document.title} elevation="low" className="agreements-card">
              <p className="agreements-document-type"><span aria-hidden="true">▤</span> {document.type}</p>
              <p>{document.description}</p>
              <a className="agreements-link" href={document.href}>Acessar documento <span aria-hidden="true">→</span></a>
            </SiteCard>
          ))}
        </div>
      </section>
      <SiteMessage severity="info" text="A página de origem apresenta mais de um link com o mesmo título de segundo termo aditivo. Os itens foram mantidos separados para preservar as referências fornecidas. Antes da publicação, confirme a validade dos links, o conteúdo dos arquivos e se há documentos ou transferências mais recentes." />
    </main>
  );
}
