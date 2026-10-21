import type { Metadata } from "next";
import { news } from "@/data/news";
import SiteCard from "@/components/SiteCard";

export const metadata: Metadata = { title: "Notícias" };

export default function NoticiasPage() {
  return <main id="conteudo" className="container section-block">
    <p className="eyebrow">Comunicação institucional</p>
    <h1>Notícias</h1>
    <p className="page-intro">Seleção de notícias exibidas na página inicial do portal atual do IPEM-PE. Os links direcionam para as publicações originais.</p>
    <div className="news-grid">
      {news.map((item) => <SiteCard key={item.url} className="news-card" elevation="low" header={<a className="news-image" href={item.url}><img src={item.image} alt={item.alt} loading="lazy" /></a>}>
        <div className="news-content"><time>{item.date}</time><h2><a href={item.url}>{item.title}</a></h2><p>{item.excerpt}</p><a className="text-link" href={item.url}>Ler notícia ↗</a></div>
      </SiteCard>)}
    </div>
  </main>;
}
