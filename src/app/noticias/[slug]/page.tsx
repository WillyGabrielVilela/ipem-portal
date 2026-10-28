import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { news } from "@/data/news";
import SiteTag from "@/components/SiteTag";
import SiteDivider from "@/components/SiteDivider";

export function generateStaticParams() {
  return news.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const item = news.find((entry) => entry.slug === slug);
  return item ? { title: item.title, description: item.excerpt } : { title: "Notícia não encontrada" };
}

export default async function NoticiaDetalhePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = news.find((entry) => entry.slug === slug);
  if (!item) notFound();

  return <main id="conteudo" className="container section-block article-page">
    <p className="eyebrow">Comunicação institucional</p>
    <p><Link href="/noticias">← Todas as notícias</Link></p>
    <SiteTag value={item.date} severity="info" />
    <h1>{item.title}</h1>
    <SiteDivider />
    <figure className="article-lead-image"><img src={item.image} alt={item.alt} /></figure>
    <p className="page-intro">{item.excerpt}</p>
    <p>Esta versão do portal contém o resumo migrado da publicação. O texto integral da notícia ainda não foi incorporado ao novo site; a versão abaixo é um resumo editorial.</p>
  </main>;
}
