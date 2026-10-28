import type { Metadata } from "next";
import SiteCard from "@/components/SiteCard";
import SiteTag from "@/components/SiteTag";
import SiteMessage from "@/components/SiteMessage";

export const metadata: Metadata = {
  title: "Plano de Metas | IPEM-PE",
  description: "Acesso aos documentos de Plano de Metas publicados pelo IPEM-PE.",
};

const plans = [
  {
    year: "2025",
    title: "Plano de Metas GOGM — 2025",
    detail: "Documento da GOGM para o ano de 2025.",
    href: "https://www.ipem.pe.gov.br/wp-content/uploads/2024/08/PLANO_DE_METAS_GOGM_2025__2_.xlsx",
    format: "Planilha Excel (.xlsx)",
  },
  {
    year: "2024",
    title: "Plano de Metas GOGM — 2024",
    detail: "Documento da GOGM para o ano de 2024.",
    href: "https://www.ipem.pe.gov.br/wp-content/uploads/2024/02/PLANO_DE_METAS_GOGM___2024.xlsx",
    format: "Planilha Excel (.xlsx)",
  },
  {
    year: "2024",
    title: "Plano de Metas GOAF / GOAAF / GOGP / GOMAS / GOTIC — 2024",
    detail: "Documento de metas que reúne as gerências indicadas no título do arquivo publicado.",
    href: "https://www.ipem.pe.gov.br/wp-content/uploads/2024/02/PLANO_DE_METAS_GOAF_GOAAF_GOGP__GOMAS_GOTIC__2024.xlsx",
    format: "Planilha Excel (.xlsx)",
  },
  {
    year: "2023",
    title: "Plano de Metas IPEM-PE — GOGM",
    detail: "Período avaliativo informado na página original: junho de 2022 a maio de 2023.",
    href: "/plano-de-metas/gogm-2023",
    format: "Página em migração",
  },
  {
    year: "2023",
    title: "Plano de Metas IPEM-PE — GOGP / GOAF / GOAAF",
    detail: "Período indicado na página original: janeiro a dezembro de 2023.",
    href: "/plano-de-metas/gogp-goaf-goaaf-2023",
    format: "Página em migração",
  },
];

export default function PlanoDeMetasPage() {
  return (
    <main id="conteudo" className="container section-block goals-page">
      <header className="goals-heading">
        <p className="eyebrow">Transparência e prestação de contas</p>
        <h1>Plano de Metas</h1>
        <p className="page-intro">
          Consulte os documentos de Plano de Metas disponibilizados pelo Instituto de Pesos e Medidas de Pernambuco (IPEM-PE). Os arquivos abaixo foram organizados a partir dos links presentes na página institucional de referência.
        </p>
      </header>

      <SiteMessage
        severity="info"
        text="A relação reproduz os documentos e períodos listados no conteúdo de referência fornecido. A página de origem não apresenta um documento de 2026; confirme com a área responsável se há planos mais recentes e se os links continuam ativos antes da publicação."
      />

      <section className="goals-section" aria-labelledby="goals-list-title">
        <div className="goals-section-heading">
          <SiteTag value="Documentos para consulta" severity="info" />
          <h2 id="goals-list-title">Planos publicados</h2>
          <p>Selecione um documento para abrir a planilha ou a página institucional correspondente. As planilhas são disponibilizadas em formato Excel.</p>
        </div>

        <div className="goals-grid">
          {plans.map((plan) => (
            <SiteCard key={plan.title} title={plan.title} subtitle={`Ano de referência: ${plan.year}`} elevation="low" className="goals-card">
              <p>{plan.detail}</p>
              <p className="goals-format"><span>Formato:</span> {plan.format}</p>
              <a className="goals-link" href={plan.href}>
                {plan.format.startsWith("Planilha") ? "Abrir planilha" : "Consultar página"} <span aria-hidden="true">→</span>
              </a>
            </SiteCard>
          ))}
        </div>
      </section>
    </main>
  );
}
