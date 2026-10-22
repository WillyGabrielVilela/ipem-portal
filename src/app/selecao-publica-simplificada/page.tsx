import type { Metadata } from "next";
import SiteMessage from "@/components/SiteMessage";

export const metadata: Metadata = {
  title: "Seleção Pública Simplificada | IPEM-PE",
  description: "Consulte a Portaria Conjunta SAD/IPEM nº 174/2025, sobre convocação de candidatos classificados na Seleção Pública Simplificada.",
};

const portariaUrl = "http://www.ipem.pe.gov.br/wp-content/uploads/2025/07/PoderExecutivo20250702_compressed_compressed.pdf";

export default function SelecaoPublicaSimplificadaPage() {
  return (
    <main id="conteudo" className="container section-block selection-page">
      <header className="selection-heading">
        <p className="eyebrow">Transparência e prestação de contas</p>
        <h1>Seleção Pública Simplificada</h1>
        <p>Consulte a publicação referente à convocação de candidatos classificados na Seleção Pública Simplificada do IPEM-PE.</p>
      </header>

      <section className="selection-notice" aria-labelledby="selection-notice-title">
        <div className="selection-notice-icon" aria-hidden="true">↗</div>
        <div className="selection-notice-content">
          <p className="selection-status">Publicação para consulta</p>
          <h2 id="selection-notice-title">Convocação oficial — Portaria Conjunta SAD/IPEM nº 174/2025</h2>
          <p>A Secretaria de Administração (SAD) e o Instituto de Pesos e Medidas de Pernambuco (IPEM-PE) divulgaram a <strong>Portaria Conjunta nº 174, de 1º de julho de 2025</strong>, que convoca candidatos classificados na Seleção Pública Simplificada, conforme os critérios previstos no edital vigente.</p>
          <a className="selection-document-link" href={portariaUrl} target="_blank" rel="noopener noreferrer">
            Consultar portaria completa <span aria-hidden="true">↗</span>
          </a>
          <p className="selection-file-note">O documento será aberto em uma nova aba. Caso não abra, verifique as configurações do navegador ou tente novamente mais tarde.</p>
        </div>
      </section>

      <SiteMessage severity="warn" text="A publicação de referência alerta os convocados para que observem os prazos estabelecidos para a efetivação da contratação. Como o conteúdo fornecido é de 2025, confirme com a SAD/IPEM-PE se há convocações, retificações ou orientações mais recentes antes de tomar qualquer providência." />
      <section className="selection-contact" aria-labelledby="selection-contact-title">
        <h2 id="selection-contact-title">Informações</h2>
        <p>Para esclarecimentos sobre a convocação, consulte os canais oficiais da Secretaria de Administração de Pernambuco e do IPEM-PE.</p>
      </section>
    </main>
  );
}
