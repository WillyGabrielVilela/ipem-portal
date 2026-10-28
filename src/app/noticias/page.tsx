import type { Metadata } from "next";
import Link from "next/link";
import { news } from "@/data/news";
import SiteCard from "@/components/SiteCard";
import SiteDivider from "@/components/SiteDivider";
import SiteTag from "@/components/SiteTag";

export const metadata: Metadata = { title: "Notícias" };

export default function NoticiasPage() {
  return <main id="conteudo" className="container section-block">
    <p className="eyebrow">Comunicação institucional</p>
    <h1>Notícias</h1>
    <p className="page-intro">Notícias em destaque do IPEM-PE. Cada notícia possui uma página interna; quando o texto integral não foi migrado, a página também oferece acesso à publicação original.</p><div className="news-list-label"><SiteTag value="Notícias migradas parcialmente" severity="info" /></div><SiteDivider />
    <div className="news-grid">
      {news.map((item) => <SiteCard key={item.url} className="news-card" elevation="low" header={<Link className="news-image" href={`/noticias/${item.slug}`}><img src={item.image} alt={item.alt} loading="lazy" /></Link>}>
        <div className="news-content"><time>{item.date}</time><h2><Link href={`/noticias/${item.slug}`}>{item.title}</Link></h2><p>{item.excerpt}</p><Link className="text-link" href={`/noticias/${item.slug}`}>Ler notícia →</Link></div>
      </SiteCard>)}
    </div>
  </main>;
}
