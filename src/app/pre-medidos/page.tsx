import type { Metadata } from "next";
import SiteCard from "@/components/SiteCard";
import SiteDivider from "@/components/SiteDivider";
import SiteMessage from "@/components/SiteMessage";
import SiteTag from "@/components/SiteTag";
import SiteButton from "@/components/SiteButton";

export const metadata: Metadata = {
  title: "Pré-Embalados — IPEM-PE",
  description: "Informações sobre fiscalização, produtos pré-medidos e canais de denúncia do IPEM-PE.",
};

export default function PreMedidosPage() {
  return (
    <main id="conteudo" className="container section-block prem-page">
      <header className="prem-heading">
        <p className="eyebrow">Atividades</p>
        <h1>Pré-Embalados</h1>
        <p className="page-intro">Fiscalização, transparência e participação do cidadão</p>
        <p>Produtos pré-medidos são aqueles embalados sem a presença do consumidor no momento da medição. Nesses casos, as informações indicadas na embalagem são importantes para que o consumidor possa avaliar a quantidade do produto adquirido.</p>
      </header>

      <SiteMessage severity="warn" text="Página estruturada com base no HTML fornecido. Antes da publicação, valide com a área responsável as orientações sobre fiscalização, os canais de denúncia e os dados de atendimento apresentados." />

      <section className="prem-section" aria-labelledby="prem-fiscalizacao">
        <div className="prem-section-heading">
          <SiteTag value="Proteção ativa e participativa" severity="info" />
          <h2 id="prem-fiscalizacao">Como funciona a fiscalização</h2>
          <p>Conforme o conteúdo de referência, o IPEM-PE atua no âmbito da Rede Brasileira de Metrologia Legal e Qualidade do Inmetro (RBMLQ-I), realizando ações de fiscalização independentemente de solicitações individuais.</p>
        </div>
        <div className="prem-grid">
          <SiteCard title="Fiscalização proativa" elevation="low">
            <p>Os agentes realizam ações em diferentes locais do estado para identificar produtos e instrumentos que possam estar em desacordo com os requisitos aplicáveis.</p>
            <p>O objetivo descrito no material é identificar irregularidades antes que causem prejuízos ao consumidor.</p>
          </SiteCard>
          <SiteCard title="Produtos pré-medidos" elevation="low">
            <p>A fiscalização pode envolver produtos embalados previamente, como latas, caixas, vidros e embalagens plásticas, cuja quantidade declarada deve corresponder ao conteúdo.</p>
            <p>O conteúdo original destaca a importância da confiança nas informações do rótulo.</p>
          </SiteCard>
        </div>
      </section>

      <SiteDivider />

      <section className="prem-section" aria-labelledby="prem-denunciar">
        <div className="prem-section-heading">
          <SiteTag value="Participação do cidadão" severity="info" />
          <h2 id="prem-denunciar">Como denunciar uma possível irregularidade</h2>
          <p>O material de referência orienta que suspeitas sobre medições ou produtos embalados sejam encaminhadas à Ouvidoria do IPEM-PE.</p>
        </div>
        <div className="prem-grid prem-grid-two">
          <SiteCard title="1. Reúna evidências" subtitle="Registros que podem ajudar na apuração" elevation="low">
            <ul className="prem-list">
              <li>Fotos ou vídeos relacionados à suspeita.</li>
              <li>Cupom fiscal ou comprovante da compra, quando disponível.</li>
            </ul>
          </SiteCard>
          <SiteCard title="2. Identifique o produto ou instrumento" subtitle="Informações úteis para a análise" elevation="low">
            <ul className="prem-list">
              <li>Marca, modelo e número de série do instrumento, quando aplicável.</li>
              <li>Marca e lote do produto pré-medido, quando disponíveis.</li>
              <li>Nome do estabelecimento e endereço completo, incluindo rua, bairro e município.</li>
            </ul>
          </SiteCard>
        </div>
      </section>

      <SiteDivider />

      <section className="prem-contact" aria-labelledby="prem-canais">
        <div className="prem-contact-icon" aria-hidden="true">☎</div>
        <div className="prem-contact-content">
          <SiteTag value="Canais informados na página de referência" severity="info" />
          <h2 id="prem-canais">Ouvidoria do IPEM-PE</h2>
          <ul className="prem-list prem-contact-list">
            <li><strong>Telefone da sede:</strong> (81) 3184-4700 — o conteúdo fornecido orienta solicitar o ramal da Ouvidoria.</li>
            <li><strong>Atendimento presencial:</strong> sede do IPEM-PE em Recife ou unidades regionais, conforme a orientação original.</li>
            <li><strong>Plataforma Fala.BR:</strong> <a href="https://falabr.cgu.gov.br/" target="_blank" rel="noopener noreferrer">acessar Fala.BR</a> e selecionar a opção “Denúncia”, conforme indicado no conteúdo recebido.</li>
          </ul>
          <p className="prem-reminder"><strong>Por que denunciar?</strong> O conteúdo de referência destaca que as manifestações dos cidadãos podem contribuir para identificar irregularidades, proteger consumidores e combater a concorrência desleal.</p>
        </div>
      </section>

      <section className="prem-next-steps" aria-labelledby="prem-saiba-mais">
        <h2 id="prem-saiba-mais">Acesse também</h2>
        <p>Consulte outras informações e canais do Instituto.</p>
        <div className="prem-actions">
          <SiteButton label="CML — Metrologia Legal" href="/cml" />
          <SiteButton label="Ouvidoria" href="https://www.ipem.pe.gov.br/formulario-de-denuncia/" outlined />
          <SiteButton label="Unidades" href="/unidades" outlined />
        </div>
      </section>
    </main>
  );
}
