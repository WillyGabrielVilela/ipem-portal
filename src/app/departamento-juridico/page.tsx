import type { Metadata } from "next";
import SiteMessage from "@/components/SiteMessage";

export const metadata: Metadata = {
  title: "Departamento Jurídico | IPEM-PE",
  description: "Canais de contato do Departamento Jurídico do IPEM-PE para assuntos relacionados a autos de infração e processos administrativos.",
};

export default function DepartamentoJuridicoPage() {
  return (
    <main id="conteudo" className="container section-block legal-contact-page">
      <header className="legal-contact-heading">
        <p className="eyebrow">Atendimento</p>
        <h1>Departamento Jurídico</h1>
        <p className="page-intro">
          Para consultas relacionadas a autos de infração e ao acompanhamento de processos administrativos, utilize os canais de contato informados abaixo.
        </p>
      </header>

      <section className="legal-contact-panel" aria-labelledby="legal-contact-title">
        <div className="legal-contact-panel-header">
          <span className="legal-contact-symbol" aria-hidden="true">⚖</span>
          <div>
            <p className="eyebrow">Canais oficiais</p>
            <h2 id="legal-contact-title">Entre em contato com o Departamento Jurídico</h2>
          </div>
        </div>

        <div className="legal-contact-list">
          <div className="legal-contact-item">
            <span className="legal-contact-item-icon" aria-hidden="true">📍</span>
            <div>
              <h3>Endereço</h3>
              <p>Avenida Professor Luiz Freire, nº 900 – Cidade Universitária<br />Recife – PE, CEP: 50740-545</p>
              <a href="https://www.google.com/maps/search/?api=1&query=Av.+Prof.+Luiz+Freire,+900+-+Cidade+Universit%C3%A1ria,+Recife+-+PE" target="_blank" rel="noopener noreferrer">Ver endereço no mapa ↗</a>
            </div>
          </div>

          <div className="legal-contact-item">
            <span className="legal-contact-item-icon" aria-hidden="true">☎</span>
            <div>
              <h3>Telefones</h3>
              <p><a href="tel:+558131844737">(81) 3184-4737</a><br /><a href="tel:+558131844720">(81) 3184-4720</a></p>
            </div>
          </div>

          <div className="legal-contact-item">
            <span className="legal-contact-item-icon" aria-hidden="true">✉</span>
            <div>
              <h3>E-mail</h3>
              <p><a className="legal-contact-email" href="mailto:juridico@ipem.pe.gov.br">juridico@ipem.pe.gov.br</a></p>
            </div>
          </div>
        </div>
      </section>

      <SiteMessage severity="warn" text="Endereço, telefones e e-mail foram reproduzidos da página institucional de referência fornecida. Confirme os canais e os procedimentos de atendimento com o Departamento Jurídico antes da publicação definitiva. O contato por esta página não substitui prazos, protocolos ou formas de apresentação previstos em notificações e normas aplicáveis." />
    </main>
  );
}
