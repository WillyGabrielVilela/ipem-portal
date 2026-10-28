import type { Metadata } from "next";
import Link from "next/link";
import SiteCard from "@/components/SiteCard";
import SiteMessage from "@/components/SiteMessage";
import SiteDivider from "@/components/SiteDivider";

export const metadata: Metadata = {
  title: "Organograma",
  description: "Estrutura organizacional do IPEM-PE.",
};

export default function OrganogramaPage() {
  return <main id="conteudo" className="container section-block">
    <p className="eyebrow">Institucional</p>
    <h1>Organograma</h1>
    <p className="page-intro">Estrutura organizacional do Instituto de Pesos e Medidas de Pernambuco.</p>
    <SiteMessage severity="warn" text="O organograma oficial ainda precisa ser migrado e validado pela área responsável. Esta página evita encaminhar o visitante ao site legado, mas não substitui o documento organizacional aprovado." />
    <SiteDivider />
    <div className="resource-card-grid">
      <SiteCard title="Gestão e diretoria" elevation="low"><p>Consulte os nomes, cargos e contatos de gestão atualmente registrados no portal em homologação.</p><Link className="text-link" href="/diretoria">Acessar Quem é Quem →</Link></SiteCard>
      <SiteCard title="Unidades de atendimento" elevation="low"><p>Consulte a relação de unidades e endereços transcrita do conteúdo de referência.</p><Link className="text-link" href="/unidades">Acessar unidades →</Link></SiteCard>
      <SiteCard title="Perfil institucional" elevation="low"><p>Conheça o perfil e as atribuições institucionais do IPEM-PE.</p><Link className="text-link" href="/quem-somos">Conhecer o Instituto →</Link></SiteCard>
    </div>
  </main>;
}
