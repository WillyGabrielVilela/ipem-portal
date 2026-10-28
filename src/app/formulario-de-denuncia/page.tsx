import type { Metadata } from "next";
import SiteButton from "@/components/SiteButton";
import SiteCard from "@/components/SiteCard";
import SiteDivider from "@/components/SiteDivider";

export const metadata: Metadata = {
  title: "Formulário de denúncia",
  description: "Canais oficiais para registrar denúncias e manifestações relacionadas ao IPEM-PE.",
};

export default function FormularioDenunciaPage() {
  return <main id="conteudo" className="container section-block">
    <p className="eyebrow">Atendimento ao cidadão</p>
    <h1>Registrar denúncia ou manifestação</h1>
    <p className="page-intro">Use os canais oficiais de ouvidoria para comunicar suspeitas de irregularidades ou solicitar atendimento. Este portal não recebe nem protocola denúncias diretamente.</p>
    <SiteDivider />
    <div className="resource-card-grid">
      <SiteCard title="Ouve.PE — Ouvidoria do IPEM-PE" subtitle="Canal estadual de manifestações" elevation="low">
        <p>Registre uma manifestação e acompanhe as orientações do sistema estadual de ouvidoria.</p>
        <SiteButton label="Acessar Ouve.PE" href="https://ouve.pe.gov.br/modalidades/2/tipos_atendimentos?orgao=38" icon="external-link" />
      </SiteCard>
      <SiteCard title="Fala.BR" subtitle="Plataforma federal" elevation="low">
        <p>Plataforma alternativa para manifestações, conforme os tipos de atendimento disponíveis no sistema.</p>
        <SiteButton label="Acessar Fala.BR" href="https://www.gov.br/acessoainformacao/pt-br/falabr" outlined icon="external-link" />
      </SiteCard>
    </div>
    <p className="page-intro">Se possível, tenha em mãos o local da ocorrência, a identificação do estabelecimento, a data e uma descrição objetiva do fato. Não envie dados pessoais desnecessários.</p>
    <SiteDivider />
    <p>Para outras formas de atendimento, consulte a <a href="/ouvidoria">página da Ouvidoria</a> ou a página de <a href="/perguntas-frequentes">Perguntas Frequentes</a>.</p>
  </main>;
}
