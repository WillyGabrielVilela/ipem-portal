import type { Metadata } from "next";
import SiteCard from "@/components/SiteCard";
import SiteDivider from "@/components/SiteDivider";
import SiteMessage from "@/components/SiteMessage";
import SiteTag from "@/components/SiteTag";
import SiteButton from "@/components/SiteButton";

export const metadata: Metadata = {
  title: "CQI — Qualidade Industrial | IPEM-PE",
  description: "Informações sobre as frentes de atuação da Qualidade Industrial descritas pelo IPEM-PE.",
};

export default function CqiPage() {
  return (
    <main id="conteudo" className="container section-block cqi-page">
      <header className="cqi-heading">
        <p className="eyebrow">Atividades</p>
        <h1>CQI</h1>
        <p className="page-intro">Qualidade Industrial: segurança e conformidade</p>
        <p>Enquanto a Metrologia Legal se concentra nas medições e nos instrumentos utilizados, a área de Qualidade Industrial apresentada no conteúdo de referência trata da conformidade de produtos com requisitos técnicos aplicáveis, com foco na segurança e na proteção do consumidor.</p>
      </header>

      <SiteMessage severity="warn" text="Página montada com base no HTML fornecido. Antes da publicação, a Coordenadoria responsável deve validar a nomenclatura oficial da CQI, suas competências atuais, a quantidade de famílias de produtos citada, os requisitos de etiquetagem têxtil e as informações sobre inspeção de veículos de produtos perigosos e CIPP." />

      <section className="cqi-section" aria-labelledby="cqi-atuacao">
        <div className="cqi-section-heading">
          <SiteTag value="Frentes de atuação descritas no conteúdo de referência" severity="info" />
          <h2 id="cqi-atuacao">Estrutura da Qualidade Industrial</h2>
          <p>O texto recebido organiza a atuação em três frentes. Os detalhes abaixo reproduzem esse conteúdo e devem ser confirmados pela área técnica antes de serem divulgados como informação institucional vigente.</p>
        </div>

        <div className="cqi-grid">
          <SiteCard title="1. Produtos regulamentados" subtitle="Conformidade avaliada" elevation="low">
            <p>O conteúdo original informa que este setor acompanha mais de 300 famílias de produtos cuja comercialização exige avaliação da conformidade e, quando aplicável, identificação do Inmetro.</p>
            <h3>Exemplos citados</h3>
            <ul className="cqi-list"><li>Brinquedos</li><li>Tomadas e plugues</li><li>Lâmpadas LED</li><li>Capacetes</li><li>Berços</li><li>Eletrodomésticos</li></ul>
            <p><strong>Objetivo descrito:</strong> verificar requisitos de segurança e reduzir riscos ao usuário, como choque elétrico, sufocamento ou incêndio.</p>
          </SiteCard>

          <SiteCard title="2. Setor têxtil" subtitle="Informação e identificação de produtos" elevation="low">
            <p>Segundo o texto fornecido, a fiscalização observa informações obrigatórias em vestuário e artigos têxteis, incluindo roupas, tapetes, carpetes, novelos de lã e linhas.</p>
            <h3>Informações destacadas</h3>
            <ul className="cqi-list">
              <li><strong>Composição:</strong> indicação da composição e dos percentuais de fibras.</li>
              <li><strong>Conservação:</strong> símbolos ou instruções de lavagem e secagem.</li>
              <li><strong>Identificação:</strong> nome ou marca, identificação do responsável e país de origem.</li>
              <li><strong>Idioma:</strong> informações em português, conforme as regras aplicáveis.</li>
            </ul>
          </SiteCard>

          <SiteCard title="3. Veículos de produtos perigosos" subtitle="Inspeção de segurança" elevation="low">
            <p>O conteúdo original descreve inspeções de veículos e tanques utilizados no transporte de combustíveis, ácidos, gases e outros materiais potencialmente perigosos.</p>
            <h3>O que o texto destaca</h3>
            <ul className="cqi-list">
              <li>Verificação da documentação de inspeção aplicável, incluindo a referência ao Certificado de Inspeção para o Transporte de Produtos Perigosos (CIPP).</li>
              <li>Avaliação das condições do tanque e dos equipamentos de segurança e emergência, conforme os requisitos pertinentes.</li>
            </ul>
            <p>O escopo exato, os certificados exigidos e as atribuições do órgão devem ser confirmados pela equipe técnica responsável.</p>
          </SiteCard>
        </div>
      </section>

      <SiteDivider />

      <section className="cqi-impact" aria-labelledby="cqi-importancia">
        <div className="cqi-impact-symbol" aria-hidden="true">✓</div>
        <div>
          <SiteTag value="Proteção do consumidor" severity="info" />
          <h2 id="cqi-importancia">Por que a Qualidade Industrial importa?</h2>
          <p>A fiscalização da conformidade busca identificar produtos que não atendam aos requisitos aplicáveis e que possam oferecer riscos durante o uso. O conteúdo de referência relaciona esse trabalho à proteção da saúde e da segurança dos consumidores e à promoção de condições mais justas no mercado.</p>
        </div>
      </section>

      <section className="cqi-next-steps" aria-labelledby="cqi-saiba-mais">
        <h2 id="cqi-saiba-mais">Conheça outras atividades do IPEM-PE</h2>
        <p>Acesse as páginas relacionadas às atividades finalísticas e aos canais de atendimento.</p>
        <div className="cqi-actions">
          <SiteButton label="CML — Metrologia Legal" href="/cml" />
          <SiteButton label="Pré-Embalados" href="/pre-medidos" outlined />
          <SiteButton label="Ouvidoria" href="https://www.ipem.pe.gov.br/formulario-de-denuncia/" outlined />
        </div>
      </section>
    </main>
  );
}
