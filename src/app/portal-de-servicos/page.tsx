import type { Metadata } from "next";
import SiteMessage from "@/components/SiteMessage";
import SiteCard from "@/components/SiteCard";

export const metadata: Metadata = {
  title: "Portal de Serviços ao Cliente / Cidadão | IPEM-PE",
  description: "Acesse o Portal de Serviços do Inmetro para consultar serviços de controle metrológico e avaliação da conformidade.",
};

const services = [
  {
    icon: "📄",
    title: "Guias de recolhimento (GRU)",
    description: "Acesso à emissão e à segunda via de Guias de Recolhimento da União, conforme os serviços disponíveis no portal.",
  },
  {
    icon: "⚖️",
    title: "Instrumentos de medição",
    description: "Consulte os serviços relacionados a instrumentos de medição e às informações de verificação disponibilizadas pelo sistema.",
  },
  {
    icon: "🛠️",
    title: "Oficinas credenciadas",
    description: "Consulte informações para localizar oficinas credenciadas junto aos órgãos delegados, quando disponíveis no portal.",
  },
];

export default function PortalDeServicosPage() {
  return (
    <main id="conteudo" className="container section-block services-portal-page">
      <header className="services-portal-heading">
        <p className="eyebrow">Atendimento ao cidadão</p>
        <h1>Portal de Serviços ao Cliente / Cidadão</h1>
        <p className="page-intro">
          O portal facilita o acesso da sociedade brasileira e dos clientes da Rede Brasileira de Metrologia Legal e Qualidade — Inmetro (RBMLQ-I) aos principais serviços de Controle Metrológico e Avaliação da Conformidade.
        </p>
      </header>

      <section aria-labelledby="services-portal-list-title" className="services-portal-section">
        <div className="services-portal-section-heading">
          <h2 id="services-portal-list-title">Serviços disponíveis</h2>
          <p>Conheça algumas das categorias de serviço destacadas na página institucional de referência.</p>
        </div>
        <div className="services-portal-grid">
          {services.map((service) => (
            <SiteCard key={service.title} title={service.title} elevation="low" className="services-portal-card">
              <div className="services-portal-icon" aria-hidden="true">{service.icon}</div>
              <p>{service.description}</p>
            </SiteCard>
          ))}
        </div>
      </section>

      <section className="services-portal-cta" aria-labelledby="services-portal-access-title">
        <div className="services-portal-cta-symbol" aria-hidden="true">↗</div>
        <div className="services-portal-cta-content">
          <p className="eyebrow">Acesso externo</p>
          <h2 id="services-portal-access-title">Acesse o Portal de Serviços do Inmetro</h2>
          <p>O botão abaixo abre o PSIE — Portal de Serviços do Inmetro — em uma nova aba. A disponibilidade de cada serviço e os procedimentos necessários são definidos pelo próprio sistema.</p>
          <a className="services-portal-primary-link" href="https://psie.inmetro.gov.br/" target="_blank" rel="noopener noreferrer">
            Acessar o Portal PSIE Inmetro <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>

      <SiteMessage severity="info" text="Este site institucional apresenta orientações e encaminha o usuário ao portal externo; não emite guias nem consulta registros diretamente. Confirme no PSIE os serviços disponíveis, os requisitos e eventuais orientações atualizadas." />
    </main>
  );
}
