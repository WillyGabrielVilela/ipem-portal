import type { Metadata } from "next";
import SiteCard from "@/components/SiteCard";
import SiteDivider from "@/components/SiteDivider";
import SiteMessage from "@/components/SiteMessage";
import SiteTag from "@/components/SiteTag";
import SiteButton from "@/components/SiteButton";

export const metadata: Metadata = {
  title: "Unidades",
  description: "Rede de atendimento e endereços informados para o IPEM-PE.",
};

const units = [
  { name: "Sede – Recife", category: "Sede", icon: "🏢", description: "Atendimento centralizado para a Região Metropolitana.", address: "Av. Prof. Luiz Freire, 900 – Recife/PE", phone: "(81) 3184-4700", fax: "(81) 3453-2510", hours: "08h às 14h (dias úteis)" },
  { name: "Posto Avançado – Suape (Ipojuca)", category: "Posto avançado", icon: "⚓", description: "Foco nas atividades industriais e logísticas do complexo portuário.", address: "Avenida Portuária, s/n – Engenho Massangana, PE-60 Km 10 – Ipojuca/PE", phone: "(81) 3561-1990", hours: "08h às 14h (dias úteis)" },
  { name: "Unidade Regional – Caruaru", category: "Unidade regional", icon: "📍", description: "Referência para o Agreste pernambucano.", address: "Rua Dalton Santos, 319 – Bairro São Francisco – Caruaru/PE", hours: "08h às 14h (dias úteis)" },
  { name: "Unidade Regional – Petrolina", category: "Unidade regional", icon: "📍", description: "Referência para o Sertão e Vale do São Francisco.", address: "Avenida das Nações, s/n – Centro Agropecuário – Petrolina/PE", hours: "08h às 14h (dias úteis)" },
];

export default function UnidadesPage() {
  return (
    <main id="conteudo" className="container section-block units-page">
      <header className="units-heading">
        <p className="eyebrow">Institucional</p>
        <h1>Unidades</h1>
        <p className="page-intro">Rede de Atendimento IPEM-PE</p>
        <p>O conteúdo de referência informa que o IPEM-PE está presente em pontos estratégicos do estado para atender às atividades de metrologia e qualidade.</p>
      </header>
      <SiteMessage severity="warn" text="Endereços, telefones, horários e descrições foram transcritos da página fornecida. Confirme com as áreas responsáveis se as unidades estão em funcionamento e se os dados de atendimento permanecem atualizados antes da publicação." />
      <section className="units-grid" aria-label="Unidades de atendimento">
        {units.map((unit) => (
          <article className="unit-entry" key={unit.name}>
            <SiteCard title={unit.name} subtitle={unit.description} elevation="low">
              <div className="unit-tag"><SiteTag value={`${unit.icon} ${unit.category}`} severity="info" /></div>
              <dl className="unit-details">
                <div><dt>Endereço</dt><dd>{unit.address}</dd></div>
                {unit.phone && <div><dt>Telefone</dt><dd><a href={`tel:+55${unit.phone.replace(/\D/g, "")}`}>{unit.phone}</a></dd></div>}
                {unit.fax && <div><dt>Fax</dt><dd>{unit.fax}</dd></div>}
                <div><dt>Horário informado</dt><dd>{unit.hours}</dd></div>
              </dl>
            </SiteCard>
          </article>
        ))}
      </section>
      <SiteDivider />
      <section className="units-info" aria-labelledby="informacoes-uteis">
        <SiteTag value="Informações úteis" severity="info" />
        <h2 id="informacoes-uteis">Padrão de atendimento e serviços</h2>
        <div className="units-info-grid">
          <SiteCard title="Dias de atendimento" elevation="low"><p>O conteúdo fornecido informa atendimento de segunda a sexta-feira, das 08h às 14h, exceto feriados.</p></SiteCard>
          <SiteCard title="Feriados" elevation="low"><p>Segundo a página de referência, não há expediente em feriados nacionais, estaduais ou municipais específicos de cada localidade.</p></SiteCard>
          <SiteCard title="Serviços mencionados" elevation="low"><p>Verificação de taxímetros, balanças, bombas de combustível e denúncias de irregularidades.</p></SiteCard>
        </div>
        <p className="units-note">A página de origem não apresenta telefone para as unidades de Caruaru e Petrolina; por isso, nenhum contato foi presumido ou acrescentado.</p>
      </section>
      <SiteDivider />
      <section className="units-next-steps">
        <h2>Mais informações institucionais</h2>
        <p>Acesse outras páginas do portal.</p>
        <div className="units-actions">
          <SiteButton label="Quem é Quem" href="/diretoria" />
          <SiteButton label="Quem Somos" href="/quem-somos" outlined />
          <SiteButton label="Contato" href="/contato" outlined />
        </div>
      </section>
    </main>
  );
}
