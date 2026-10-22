import type { Metadata } from "next";
import SiteCard from "@/components/SiteCard";
import SiteTag from "@/components/SiteTag";
import SiteMessage from "@/components/SiteMessage";

export const metadata: Metadata = {
  title: "Editais e Portarias | IPEM-PE",
  description: "Consulte editais, portarias e outros atos publicados pelo IPEM-PE.",
};

type DocumentItem = { title: string; href: string; format: string };
type DocumentGroup = { year: string; items: DocumentItem[] };
const groups: DocumentGroup[] = [
  { year: "2026", items: [
    { title: "PORTARIA N° 49/2026/IPEM/PE/PR", href: "https://www.ipem.pe.gov.br/wp-content/uploads/2026/10/SEI_94693514_GOVPE___Portaria_48.pdf", format: "PDF" },
    { title: "PORTARIA N° 41/2026/IPEM/PE/PR", href: "https://www.ipem.pe.gov.br/wp-content/uploads/2026/08/SEI_92459719_GOVPE___Portaria_38.pdf", format: "PDF" },
    { title: "PORTARIA N° 40/2026/IPEM/PE/PR", href: "https://www.ipem.pe.gov.br/wp-content/uploads/2026/08/SEI_92230010_GOVPE___Portaria_37-1.pdf", format: "PDF" },
    { title: "PORTARIA N° 39/2026/IPEM/PE/PR", href: "https://www.ipem.pe.gov.br/wp-content/uploads/2026/08/SEI_92228851_GOVPE___Portaria_36.pdf", format: "PDF" },
    { title: "PORTARIA N° 36/2026/IPEM/PE/PR", href: "https://www.ipem.pe.gov.br/wp-content/uploads/2026/08/SEI_91478584_GOVPE___Portaria_35.pdf", format: "PDF" },
    { title: "PORTARIA N° 32/2026/IPEM/PE/PR", href: "https://www.ipem.pe.gov.br/wp-content/uploads/2026/07/SEI_90587945_GOVPE___Portaria_33.pdf", format: "PDF" },
    { title: "PORTARIA N° 31/2026/IPEM/PE/PR", href: "https://www.ipem.pe.gov.br/wp-content/uploads/2026/07/SEI_90501492_GOVPE___Portaria_32.pdf", format: "PDF" },
    { title: "Edital de Convocação Nº 04/2026 — Jaboatão dos Guararapes", href: "https://www.ipem.pe.gov.br/wp-content/uploads/2026/07/SEI_89878142_GOVPE___Edital.pdf", format: "PDF" },
    { title: "EDITAL DE CONVOCAÇÃO N° 03/2026 — Olinda", href: "https://www.ipem.pe.gov.br/wp-content/uploads/2026/07/SEI_89433278_GOVPE___Edital.pdf", format: "PDF" },
    { title: "PORTARIA N° 27/2026 e PORTARIA N° 28/2026/IPEM/PE/PR", href: "https://www.ipem.pe.gov.br/wp-content/uploads/2026/07/SEI-0030500002.000003_2026-82.pdf", format: "PDF" },
    { title: "Edital de Convocação Nº 02/2026 — Itapissuma", href: "https://www.ipem.pe.gov.br/wp-content/uploads/2026/05/SEI_87230348_GOVPE___Edital.pdf", format: "PDF" },
    { title: "PORTARIA N° 21/2026/IPEM/PE/PR", href: "https://www.ipem.pe.gov.br/wp-content/uploads/2026/05/SEI_86970666_GOVPE___Portaria_22.pdf", format: "PDF" },
    { title: "PORTARIA N° 18/2026/IPEM/PE/PR", href: "https://www.ipem.pe.gov.br/wp-content/uploads/2026/04/SEI_85492643_GOVPE___Portaria_16.pdf", format: "PDF" },
    { title: "PORTARIA N° 16/2026/IPEM/PE/PR", href: "https://www.ipem.pe.gov.br/wp-content/uploads/2026/04/SEI_84484294_GOVPE___Portaria_14-1.pdf", format: "PDF" },
    { title: "PORTARIA Nº 15/2026/IPEM/PE/PR", href: "https://www.ipem.pe.gov.br/wp-content/uploads/2026/03/SEI_83492190_GOVPE___Portaria_13-1.pdf", format: "PDF" },
    { title: "PORTARIA Nº 13/2026/IPEM/PE/PR", href: "https://www.ipem.pe.gov.br/wp-content/uploads/2026/03/SEI_83310962_GOVPE___Portaria_11.pdf", format: "PDF" },
    { title: "PORTARIA Nº 05/2026/IPEM/PE/PR", href: "https://www.ipem.pe.gov.br/editais-e-portarias/sei_80424068_govpe___portaria_4/", format: "Página institucional" },
    { title: "PORTARIA Nº 03/2026/IPEM/PE/PR", href: "https://www.ipem.pe.gov.br/wp-content/uploads/2026/02/SEI_79913694_GOVPE___Portaria_2.pdf", format: "PDF" },
  ]},
  { year: "2025", items: [
    { title: "PORTARIA Nº 60/2025/IPEM/PE/PR", href: "https://www.ipem.pe.gov.br/wp-content/uploads/2025/12/SEI_78211884_GOVPE___Portaria_70.pdf", format: "PDF" },
    { title: "PORTARIA Nº 57/2025/IPEM/PE/PR", href: "https://www.ipem.pe.gov.br/wp-content/uploads/2025/12/SEI_77553811_GOVPE___Portaria_66.pdf", format: "PDF" },
    { title: "PORTARIA Nº 53/2025/IPEM/PE/PR", href: "https://www.ipem.pe.gov.br/wp-content/uploads/2025/10/SEI_75270016_GOVPE___Portaria_57.pdf", format: "PDF" },
    { title: "EDITAL DE CONVOCAÇÃO Nº 05/2025 — Mudança de tarifa Arcoverde", href: "https://www.ipem.pe.gov.br/wp-content/uploads/2025/09/SEI_73998883_GOVPE___Edital.pdf", format: "PDF" },
    { title: "PORTARIA Nº 44/2025/IPEM/PE/PR", href: "https://www.ipem.pe.gov.br/wp-content/uploads/2025/09/SEI_72891097_GOVPE___Portaria_49.pdf", format: "PDF" },
    { title: "PORTARIA Nº 43/2025/IPEM/PE/PR", href: "https://www.ipem.pe.gov.br/wp-content/uploads/2025/08/SEI_71903457_GOVPE___Portaria_48-2.pdf", format: "PDF" },
    { title: "PORTARIA Nº 41/2025/IPEM/PE/PR", href: "https://www.ipem.pe.gov.br/wp-content/uploads/2025/08/SEI_71511508_GOVPE___Portaria_46.pdf", format: "PDF" },
    { title: "PORTARIA Nº 40/2025/IPEM/PE/PR", href: "https://www.ipem.pe.gov.br/wp-content/uploads/2025/08/SEI_GOVPE-71354068-GOVPE-Portaria-1.pdf", format: "PDF" },
    { title: "EDITAL DE CONVOCAÇÃO Nº 04/2025 — Mudança de tarifa Caruaru", href: "https://www.ipem.pe.gov.br/wp-content/uploads/2025/07/SEI_70315352_GOVPE___Edital.pdf", format: "PDF" },
    { title: "Cronograma para abertura dos taxímetros (Caruaru)", href: "https://www.ipem.pe.gov.br/wp-content/uploads/2025/07/SEI_70560634_GOVPE___Despacho_27.pdf", format: "PDF" },
    { title: "PORTARIA Nº 22/2025/IPEM/PE/PR", href: "https://www.ipem.pe.gov.br/wp-content/uploads/2025/04/SEI_65653954_GOVPE___Portaria_23.pdf", format: "PDF" },
    { title: "PORTARIA Nº 18/2025/IPEM/PE/PR", href: "https://www.ipem.pe.gov.br/wp-content/uploads/2025/04/SEI_65197406_GOVPE___Portaria_18.pdf", format: "PDF" },
    { title: "EDITAL DE NOTIFICAÇÃO DE AUTUAÇÃO Nº 01/2025", href: "https://www.ipem.pe.gov.br/wp-content/uploads/2025/02/SEI_63116989_GOVPE___Edital-1.pdf", format: "PDF" },
  ]},
  { year: "Anos anteriores", items: [
    { title: "Edital de convocação — Mudança de tarifa Camaragibe (2024)", href: "https://www.ipem.pe.gov.br/wp-content/uploads/2024/12/SEI_60523113_GOVPE___Edital.pdf", format: "PDF" },
    { title: "EDITAL DE CONVOCAÇÃO Nº 03/2023", href: "https://www.ipem.pe.gov.br/wp-content/uploads/2023/10/EDITAL-DE-CONVOCAÇÃO-Nº-032023.pdf", format: "PDF" },
    { title: "PREGÃO (ELETRÔNICO) Nº 004/2020", href: "https://www.ipem.pe.gov.br/wp-content/uploads/2021/04/wbc202012091057569945972.docx", format: "Documento Word (.docx)" },
  ]},
];

export default function EditaisEPortariasPage() {
  return (
    <main id="conteudo" className="container section-block legal-documents-page">
      <header className="legal-documents-heading">
        <p className="eyebrow">Transparência e prestação de contas</p>
        <h1>Editais e Portarias</h1>
        <p className="page-intro">Consulte os editais, portarias, cronogramas e demais documentos disponibilizados pelo Instituto de Pesos e Medidas de Pernambuco (IPEM-PE), organizados por ano conforme a página institucional de referência.</p>
      </header>
      <SiteMessage severity="info" text="Os títulos e endereços foram transcritos do HTML fornecido. Alguns nomes dos documentos e números de portaria podem não coincidir com o nome do arquivo vinculado; confirme os metadados e teste todos os links com a área responsável antes de publicar." />
      {groups.map((group) => (
        <section className="legal-documents-section" key={group.year} aria-labelledby={`documents-${group.year.replace(/\s+/g, "-").toLowerCase()}`}>
          <div className="legal-documents-section-heading">
            <SiteTag value={group.year} severity="info" />
            <h2 id={`documents-${group.year.replace(/\s+/g, "-").toLowerCase()}`}>{group.year}</h2>
            <p>{group.items.length} {group.items.length === 1 ? "documento listado" : "documentos listados"}</p>
          </div>
          <div className="legal-documents-grid">
            {group.items.map((item) => (
              <SiteCard key={item.title} title={item.title} elevation="low" className="legal-document-card">
                <p className="legal-document-format">Formato: {item.format}</p>
                <a className="legal-document-link" href={item.href} target="_blank" rel="noreferrer">Acessar documento <span aria-hidden="true">↗</span></a>
              </SiteCard>
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}
