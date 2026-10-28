import Link from "next/link";
import SiteMessage from "@/components/SiteMessage";
import SiteDivider from "@/components/SiteDivider";

type PendingMigrationPageProps = {
  section: string;
  title: string;
  description: string;
  backHref: string;
  backLabel: string;
};

export default function PendingMigrationPage({ section, title, description, backHref, backLabel }: PendingMigrationPageProps) {
  return <main id="conteudo" className="container section-block">
    <p className="eyebrow">{section}</p>
    <h1>{title}</h1>
    <p className="page-intro">{description}</p>
    <SiteDivider />
    <SiteMessage severity="warn" text="Este conteúdo ainda não foi migrado integralmente para o novo portal. A página foi criada para evitar encaminhamento automático ao site legado; o documento ou texto original precisa ser recuperado e validado antes da publicação definitiva." />
    <p>O conteúdo desta página está marcado como pendente de migração. Não considere a ausência do documento como ausência de ato, edital, convênio ou informação vigente.</p>
    <p><Link href={backHref}>← {backLabel}</Link></p>
  </main>;
}
