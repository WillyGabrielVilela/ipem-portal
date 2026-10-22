import type { Metadata } from "next";
import SiteCard from "@/components/SiteCard";
import SiteMessage from "@/components/SiteMessage";
import SiteTag from "@/components/SiteTag";

export const metadata: Metadata = {
  title: "Despesas | IPEM-PE",
  description: "Consulte os relatórios mensais de despesas do IPEM-PE e o acesso às despesas realizadas em Pernambuco.",
};

const monthlyReports = [
  { month: "Janeiro", href: "https://www.ipem.pe.gov.br/wp-content/uploads/2026/09/Demonstrativo-para-Prestação-de-Contas-do-Convênio-Sintetico.pdf" },
  { month: "Fevereiro", href: "https://www.ipem.pe.gov.br/wp-content/uploads/2026/09/Demonstrativo-para-Presta%C3%A7%C3%A3o-de-Contas-do-Conv%C3%AAnio-Sintetico-Fevereiro-2026.pdf" },
  { month: "Março", href: "https://www.ipem.pe.gov.br/wp-content/uploads/2026/09/Demonstrativo-para-Prestação-de-Contas-do-Convênio-Sintetico-Março-2026-1.pdf" },
  { month: "Abril", href: "https://www.ipem.pe.gov.br/wp-content/uploads/2026/09/Demonstrativo-para-Prestação-de-Contas-do-Convênio-Sintetico-Abril-2026-1.pdf" },
  { month: "Maio", href: "https://www.ipem.pe.gov.br/wp-content/uploads/2026/09/Demonstrativo-para-Prestação-de-Contas-do-Convênio-Sintetico-Maio-2026-1.pdf" },
  { month: "Junho", href: "https://www.ipem.pe.gov.br/wp-content/uploads/2026/09/Demonstrativo-para-Prestação-de-Contas-do-Convênio-Sintetico-Junho-2026-1.pdf" },
  { month: "Julho", href: "https://www.ipem.pe.gov.br/wp-content/uploads/2026/09/Demonstrativo-para-Prestação-de-Contas-do-Convênio-Sintetico-Julho-2026-1.pdf" },
];

export default function DespesasPage() {
  return (
    <main id="conteudo" className="container section-block expenses-page">
      <header className="expenses-heading">
        <p className="eyebrow">Transparência e prestação de contas</p>
        <h1>Despesas</h1>
        <p className="page-intro">Consulte os demonstrativos mensais de despesas disponibilizados na página institucional do IPEM-PE e acesse o portal de despesas realizadas de Pernambuco.</p>
      </header>

      <section className="expenses-section" aria-labelledby="expenses-reports-title">
        <div className="expenses-section-heading">
          <SiteTag value="2026" severity="info" />
          <h2 id="expenses-reports-title">Relatórios mensais de despesas</h2>
          <p>Selecione o mês para abrir o demonstrativo em PDF. Os links abaixo correspondem aos documentos listados no HTML de referência.</p>
        </div>
        <div className="expenses-grid">
          {monthlyReports.map((report) => (
            <SiteCard key={report.month} title={`Despesas — ${report.month} de 2026`} elevation="low" className="expenses-card">
              <p className="expenses-document-type"><span aria-hidden="true">▤</span> Demonstrativo para prestação de contas do convênio · PDF</p>
              <a className="expenses-link" href={report.href} target="_blank" rel="noopener noreferrer">Abrir relatório <span aria-hidden="true">↗</span></a>
            </SiteCard>
          ))}
        </div>
      </section>

      <section className="expenses-public-portal" aria-labelledby="expenses-portal-title">
        <SiteCard title="Despesas realizadas em Pernambuco" elevation="low" className="expenses-portal-card">
          <p id="expenses-portal-title">Acesse a página indicada no site institucional para consultar as despesas realizadas em Pernambuco.</p>
          <a className="expenses-link" href="http://www.ipem.pe.gov.br/despesas/despesas_realizadas_pe/" target="_blank" rel="noopener noreferrer">Acessar despesas realizadas PE <span aria-hidden="true">↗</span></a>
        </SiteCard>
      </section>

      <SiteMessage severity="info" text="A página de referência lista relatórios de janeiro a julho de 2026. A ausência de outros meses nesta página não significa que não existam documentos mais recentes. Verifique a atualização dos demonstrativos, a acessibilidade dos PDFs e o funcionamento do portal antes da publicação." />
    </main>
  );
}
