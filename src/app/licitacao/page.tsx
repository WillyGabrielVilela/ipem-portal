import type { Metadata } from "next";
import SiteCard from "@/components/SiteCard";
import SiteMessage from "@/components/SiteMessage";
import SiteTag from "@/components/SiteTag";

export const metadata: Metadata = {
  title: "Licitações e Contratos | IPEM-PE",
  description: "Acesse os sistemas oficiais de consulta a licitações, atas de registro de preços, contratos e fornecedores do Estado de Pernambuco.",
};

const sources = [
  {
    title: "Licitações e Atas de Registro de Preço",
    description: "Informações referentes às licitações e atas de registro de preço realizadas pelo Estado de Pernambuco.",
    source: "Sistema PE-Integrado (SAD/PE)",
    href: "https://www.peintegrado.pe.gov.br/Portal/Default.aspx",
    action: "Consultar licitações",
  },
  {
    title: "Contratos",
    description: "Consulte informações sobre contratos registrados no sistema PE-Integrado.",
    source: "PE-Integrado",
    href: "https://www.peintegrado.pe.gov.br/Portal/Pages/Contratos.aspx",
    action: "Consultar contratos",
  },
  {
    title: "Fornecedores",
    description: "Consulte informações sobre fornecedores do Estado de Pernambuco.",
    source: "e-Fisco (SEFAZ/PE)",
    href: "https://efisco.sefaz.pe.gov.br/sfi_fin_gbp/PREmitirFornecedorPorEnquadramento",
    action: "Consultar fornecedores",
  },
  {
    title: "Fornecedores com Penalidade",
    description: "Consulte fornecedores com penalidades registradas no sistema indicado na página de referência.",
    source: "e-Fisco (SEFAZ/PE)",
    href: "https://efisco.sefaz.pe.gov.br/sfi_fin_gbp/PREmitirFornecedorPenalidade",
    action: "Consultar penalidades",
  },
];

export default function LicitacaoPage() {
  return (
    <main id="conteudo" className="container section-block procurement-page">
      <header className="procurement-heading">
        <p className="eyebrow">Transparência e prestação de contas</p>
        <h1>Licitações e Contratos</h1>
        <p className="page-intro">
          Nesta seção, você encontra informações sobre licitações e atas de registro de preço do Estado, dados sobre os contratos firmados e informações sobre os gastos do Estado com credores.
        </p>
        <a className="procurement-primary-link" href="https://transparencia.pe.gov.br/licitacoes-e-contratos/" target="_blank" rel="noreferrer">
          Acessar Portal Oficial <span aria-hidden="true">↗</span>
        </a>
      </header>

      <section className="procurement-section" aria-labelledby="procurement-access-title">
        <div className="procurement-section-heading">
          <SiteTag value="Sistemas oficiais" severity="info" />
          <h2 id="procurement-access-title">Como acessar os dados</h2>
          <p>As informações de Licitações, Contratos e Fornecedores são disponibilizadas por diferentes sistemas oficiais do Governo de Pernambuco. Utilize os filtros disponíveis em cada sistema para localizar as informações desejadas.</p>
        </div>

        <div className="procurement-grid">
          {sources.map((item) => (
            <SiteCard key={item.title} title={item.title} elevation="low" className="procurement-card">
              <p>{item.description}</p>
              <p className="procurement-source"><strong>Fonte:</strong> {item.source}</p>
              <a className="procurement-link" href={item.href} target="_blank" rel="noreferrer">
                {item.action} <span aria-hidden="true">↗</span>
              </a>
            </SiteCard>
          ))}
        </div>
        <p className="procurement-sources-note"><strong>Fontes indicadas no conteúdo de referência:</strong> PE-Integrado (SAD/PE), e-Fisco (SEFAZ/PE) e demais fontes oficiais.</p>
      </section>

      <section className="procurement-notices" aria-labelledby="procurement-notices-title">
        <div className="procurement-section-heading">
          <SiteTag value="IPEM-PE" severity="info" />
          <h2 id="procurement-notices-title">Avisos de Intenção de Contratar</h2>
          <p>Documento listado na página institucional fornecida como referência.</p>
        </div>
        <SiteCard title="Contratação de serviços de tratamento e destinação de resíduos e materiais" elevation="low" className="procurement-notice-card">
          <p>
            <strong>Objeto:</strong> contratação de empresa especializada, em lote único e exclusivamente sob demanda, para coleta, transporte, descaracterização, tratamento e destinação final ambientalmente adequada de resíduos e materiais sob responsabilidade do IPEM/PE. O objeto descrito inclui arquivos e documentos sigilosos em desuso, resíduos sólidos e materiais/produtos apreendidos, com garantia de pesagem, rastreabilidade, segurança da informação, cadeia de custódia e emissão de documentação comprobatória da destinação final, conforme o Estudo Técnico Preliminar (ETP) e o Termo de Referência.
          </p>
          <p className="procurement-source"><strong>Referência documental:</strong> SEI_90640426_GOVPE — Anexo 10/2026.</p>
          <a className="procurement-link" href="http://www.ipem.pe.gov.br/wp-content/uploads/2026/07/SEI_90640426_GOVPE___Anexo_10_2026.pdf" target="_blank" rel="noreferrer">
            Acessar documento (PDF) <span aria-hidden="true">↗</span>
          </a>
        </SiteCard>
      </section>

      <SiteMessage severity="info" text="Os títulos, descrições e links foram organizados a partir do HTML de referência fornecido. Confirme com a área responsável a atualização dos avisos, a vigência dos documentos e o funcionamento dos sistemas e links antes da publicação. O portal oficial pode conter informações mais recentes." />
    </main>
  );
}
