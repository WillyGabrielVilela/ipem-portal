import type { Metadata } from "next";
import SiteCard from "@/components/SiteCard";
import SiteDivider from "@/components/SiteDivider";
import SiteMessage from "@/components/SiteMessage";
import SiteTag from "@/components/SiteTag";
import SiteButton from "@/components/SiteButton";

export const metadata: Metadata = {
  title: "Quem é quem",
  description: "Diretório de gestão e contatos institucionais do IPEM-PE.",
};

const leaders = [
  {
    section: "Presidência",
    icon: "🏛️",
    name: "Ary Morais Andrade Neto",
    role: "Diretor Presidente",
    email: "ary.neto@ipem.pe.gov.br",
    phone: "(81) 3184-4701",
  },
  {
    section: "Diretoria de Administração e Finanças (DAF)",
    icon: "💼",
    name: "Igor Alfredo Cabral da Silva Gomes",
    role: "Diretor de Administração e Finanças",
    email: "igoralfredo@ipem.pe.gov.br",
    phone: "(81) 3184-4718",
  },
  {
    section: "Diretoria Técnica (DITEC)",
    icon: "⚙️",
    name: "Guilherme Ramos Mesquita de Freitas",
    role: "Diretor Técnico",
    email: "guilhermemesquita@ipem.pe.gov.br",
    phone: "(81) 3184-4719",
  },
  {
    section: "Gestão Jurídica e Compliance (LGPD)",
    icon: "⚖️",
    name: "Roberta Carneiro Simões Buarque de Gusmão",
    role: "Gerente Jurídica e Encarregada de Proteção de Dados (DPO)",
    email: "robertagusmao@ipem.pe.gov.br",
    phone: "(81) 3184-4745",
  },
];

export default function QuemEQuemPage() {
  return (
    <main id="conteudo" className="container section-block directory-page">
      <header className="directory-heading">
        <p className="eyebrow">Institucional</p>
        <h1>Quem é quem</h1>
        <p className="page-intro">Diretório de Gestão e Contatos Estratégicos</p>
        <p>
          Conheça a equipe à frente da administração e das operações técnicas do
          Instituto de Pesos e Medidas de Pernambuco.
        </p>
      </header>

      <SiteMessage
        severity="info"
        text="Os nomes, cargos, e-mails e telefones abaixo foram transcritos do conteúdo fornecido da página institucional atual. Confirme com a área responsável se os dados e as designações permanecem atualizados antes de publicar esta página."
      />

      <section className="directory-grid" aria-label="Diretório de gestão e contatos">
        {leaders.map((person, index) => (
          <article className="directory-entry" key={person.email}>
            <SiteCard
              title={person.name}
              subtitle={person.section}
              elevation="low"
            >
              <div className="directory-person-heading">
                <SiteTag value={`${person.icon} ${person.section}`} severity={index === 0 ? "info" : "secondary"} />
              </div>
              <p className="directory-role">{person.role}</p>
              <SiteDivider />
              <dl className="directory-contact-list">
                <div>
                  <dt>E-mail</dt>
                  <dd><a href={`mailto:${person.email}`}>{person.email}</a></dd>
                </div>
                <div>
                  <dt>Telefone</dt>
                  <dd><a href={`tel:+55${person.phone.replace(/\D/g, "")}`}>{person.phone}</a></dd>
                </div>
              </dl>
            </SiteCard>
          </article>
        ))}
      </section>

      <SiteDivider />
      <section className="directory-next-steps">
        <h2>Estrutura institucional</h2>
        <p>Consulte também outras páginas institucionais do portal.</p>
        <div className="directory-actions">
          <SiteButton label="Quem somos" href="https://www.ipem.pe.gov.br/quem-somos/" />
          <SiteButton label="Organograma" href="https://www.ipem.pe.gov.br/organograma/" outlined />
          <SiteButton label="Unidades" href="https://www.ipem.pe.gov.br/unidades/" outlined />
        </div>
      </section>
    </main>
  );
}
