import type { Metadata } from "next";
import SiteCard from "@/components/SiteCard";
import SiteTag from "@/components/SiteTag";
import SiteMessage from "@/components/SiteMessage";

export const metadata: Metadata = {
  title: "Editais de Notificação de Autuação | IPEM-PE",
  description: "Consulte os editais de notificação de autuação publicados pelo IPEM-PE.",
};

type NoticeDocument = { title: string; href: string; format: string };
type NoticeGroup = { year: string; items: NoticeDocument[] };

const groups: NoticeGroup[] = [
  {
    year: "2026",
    items: [
      {
        title: "Edital de Notificação de Autuação Nº 01/2026",
        href: "http://www.ipem.pe.gov.br/notificacao-de-atuacao/sei_80352309_govpe___edital-2/",
        format: "Página institucional",
      },
    ],
  },
  {
    year: "2025",
    items: [
      {
        title: "Edital de Notificação de Autuação Nº 03/2025",
        href: "http://www.ipem.pe.gov.br/notificacao-de-atuacao/edital-de-notificacao-de-autuacao-n-03-2025/",
        format: "Página institucional",
      },
      {
        title: "Edital de Notificação de Autuação Nº 02/2025",
        href: "http://www.ipem.pe.gov.br/wp-content/uploads/2025/05/SEI_66704010_GOVPE___Edital.pdf",
        format: "PDF",
      },
      {
        title: "Edital de Notificação de Autuação Nº 01/2025",
        href: "http://www.ipem.pe.gov.br/wp-content/uploads/2025/02/SEI_63116989_GOVPE___Edital.pdf",
        format: "PDF",
      },
    ],
  },
  {
    year: "2024",
    items: [
      {
        title: "Edital de Notificação de Autuação Nº 01/2024",
        href: "http://www.ipem.pe.gov.br/wp-content/uploads/2024/09/Edital-de-Notificação-de-Autuação-n°01-2024-1.pdf",
        format: "PDF",
      },
    ],
  },
];

export default function NotificacaoDeAtuacaoPage() {
  return (
    <main id="conteudo" className="container section-block legal-documents-page">
      <header className="legal-documents-heading">
        <p className="eyebrow">Transparência e prestação de contas</p>
        <h1>Editais de Notificação de Autuação</h1>
        <p className="page-intro">
          Consulte os editais de notificação de autuação disponibilizados pelo Instituto de Pesos e Medidas de Pernambuco (IPEM-PE), organizados por ano.
        </p>
      </header>
      <SiteMessage
        severity="info"
        text="Os cinco títulos e endereços foram transcritos do HTML de referência. Os links originais usam HTTP; confirme sua disponibilidade, segurança e correspondência com cada edital antes de publicar."
      />
      {groups.map((group) => (
        <section className="legal-documents-section" key={group.year} aria-labelledby={`notificacoes-${group.year}`}>
          <div className="legal-documents-section-heading">
            <SiteTag value={group.year} severity="info" />
            <h2 id={`notificacoes-${group.year}`}>{group.year}</h2>
            <p>{group.items.length} {group.items.length === 1 ? "edital listado" : "editais listados"}</p>
          </div>
          <div className="legal-documents-grid">
            {group.items.map((item) => (
              <SiteCard key={item.title} title={item.title} elevation="low" className="legal-document-card">
                <p className="legal-document-format">Formato: {item.format}</p>
                <a className="legal-document-link" href={item.href} target="_blank" rel="noreferrer">
                  Acessar edital <span aria-hidden="true">↗</span>
                </a>
              </SiteCard>
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}
