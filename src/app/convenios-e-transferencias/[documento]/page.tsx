import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PendingMigrationPage from "@/components/PendingMigrationPage";

const documents: Record<string, { title: string; description: string }> = {
  "convenio-assinado": { title: "Convênio Assinado", description: "Registro do documento identificado na listagem de convênios do IPEM-PE." },
  "convenio-cooperacao-tecnica-21-2013": { title: "Convênio de Cooperação Técnica 21/2013", description: "Registro do convênio de cooperação técnica 21/2013." },
  "terceiro-termo-aditivo-21-2013": { title: "3º Termo Aditivo ao Convênio 21/2013-1", description: "Registro do terceiro termo aditivo ao convênio 21/2013-1." },
  "segundo-termo-aditivo-21-2013": { title: "2º Termo Aditivo ao Convênio 21/2013-1", description: "Registro do segundo termo aditivo ao convênio 21/2013-1." },
  "segundo-termo-aditivo-21-2013-arquivo-2": { title: "2º Termo Aditivo ao Convênio 21/2013-1 — arquivo 2", description: "Referência adicional do segundo termo aditivo que consta no conteúdo de origem." },
  "segundo-termo-aditivo-21-2013-arquivo-3": { title: "2º Termo Aditivo ao Convênio 21/2013-1 — arquivo 3", description: "Referência adicional do segundo termo aditivo que consta no conteúdo de origem." },
};

export async function generateMetadata({ params }: { params: Promise<{ documento: string }> }): Promise<Metadata> {
  const { documento } = await params;
  return documents[documento] ? { title: documents[documento].title } : { title: "Documento não encontrado" };
}

export function generateStaticParams() {
  return Object.keys(documents).map((documento) => ({ documento }));
}

export default async function ConvenioDocumentoPage({ params }: { params: Promise<{ documento: string }> }) {
  const { documento } = await params;
  const item = documents[documento];
  if (!item) notFound();
  return <PendingMigrationPage section="Transparência e prestação de contas" title={item.title} description={item.description} backHref="/convenios-e-transferencias" backLabel="Convênios e Transferências" />;
}
