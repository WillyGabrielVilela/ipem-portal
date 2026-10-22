import type { Metadata } from "next";
import SiteCard from "@/components/SiteCard";
import SiteMessage from "@/components/SiteMessage";

export const metadata: Metadata = {
  title: "Convênios e Transferências | IPEM-PE",
  description: "Consulte os convênios e termos aditivos disponibilizados pelo Instituto de Pesos e Medidas de Pernambuco.",
};

const documents = [
  { title: "Convênio nº 14/2025 — IPEM/INMETRO", href: "https://www.ipem.pe.gov.br/wp-content/uploads/2026/09/Convênio-14-2025-IPEM-PE-3.pdf", description: "Documento de convênio disponibilizado em PDF.", type: "PDF" },
  { title: "2º TA CV 21/2013-1", href: "http://www.ipem.pe.gov.br/2o-ta_cv_21-2013-1-3/", description: "Segundo termo aditivo ao convênio 21/2013-1.", type: "Documento institucional" },
  { title: "Convênio Assinado", href: "http://www.ipem.pe.gov.br/convenio-assinado_compactado/", description: "Acesso ao documento identificado como convênio assinado.", type: "Documento institucional" },
  { title: "Convênio de Cooperação Técnica 21/2013", href: "http://www.ipem.pe.gov.br/convenio-de-cooperacao-tecnica-21-2013_compactado/", description: "Documento do convênio de cooperação técnica 21/2013.", type: "Documento institucional" },
  { title: "3º TA CV 21/2013-1", href: "http://www.ipem.pe.gov.br/3o-ta-cv-21_2013-1_compactado/", description: "Terceiro termo aditivo ao convênio 21/2013-1.", type: "Documento institucional" },
  { title: "2º TA CV 21/2013-1 — arquivo 2", href: "http://www.ipem.pe.gov.br/2o-ta_cv_21-2013-1-2/", description: "Outra referência de arquivo para o segundo termo aditivo.", type: "Documento institucional" },
  { title: "2º TA CV 21/2013-1 — arquivo 3", href: "http://www.ipem.pe.gov.br/2o-ta_cv_21-2013-1/", description: "Referência adicional do segundo termo aditivo listada no site de origem.", type: "Documento institucional" },
];

export default function ConveniosTransferenciasPage() {
  return (
    <main id="conteudo" className="container section-block agreements-page">
      <header className="agreements-heading">
        <p className="eyebrow">Transparência e prestação de contas</p>
        <h1>Convênios e Transferências</h1>
        <p className="page-intro">Consulte os convênios e termos aditivos relacionados pelo IPEM-PE. Os links abaixo foram preservados conforme a página institucional de referência.</p>
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
              <a className="agreements-link" href={document.href} target="_blank" rel="noopener noreferrer">Acessar documento <span aria-hidden="true">↗</span></a>
            </SiteCard>
          ))}
        </div>
      </section>
      <SiteMessage severity="info" text="A página de origem apresenta mais de um link com o mesmo título de segundo termo aditivo. Os itens foram mantidos separados para preservar as referências fornecidas. Antes da publicação, confirme a validade dos links, o conteúdo dos arquivos e se há documentos ou transferências mais recentes." />
    </main>
  );
}
