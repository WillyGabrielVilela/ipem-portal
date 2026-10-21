import { news } from "@/data/news";

const quickLinks = [
  { title: "Serviços ao cidadão", description: "Acesse os serviços ao cliente e cidadão disponíveis nos canais oficiais.", href: "/servicos", symbol: "↗" },
  { title: "Transparência", description: "Consulte informações, despesas, licitações, contratos e documentos públicos.", href: "/transparencia", symbol: "▤" },
  { title: "Legislação e normas", description: "Acesse legislação federal e normas do Inmetro no portal institucional atual.", href: "https://www.ipem.pe.gov.br/normas-tecnicas/", symbol: "§" },
  { title: "Ouvidoria", description: "Encontre o formulário de denúncia publicado no portal atual do Instituto.", href: "https://www.ipem.pe.gov.br/formulario-de-denuncia/", symbol: "✉" },
];

export default function HomePage() {
  const lead = news[0];
  return <main id="conteudo">
    <div className="news-ticker"><div className="container ticker-inner"><strong>Últimas notícias</strong><a href={lead.url}>{lead.title}</a><a className="ticker-more" href="/noticias">Ver todas ↗</a></div></div>
    <section className="hero-band">
      <div className="container hero-layout">
        <div className="hero-copy">
          <p className="eyebrow">Instituto de Pesos e Medidas de Pernambuco</p>
          <h1>Instituto de Pesos e Medidas de Pernambuco</h1>
          <p>Informações institucionais, serviços e notícias do IPEM-PE.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="/servicos">Acessar serviços <span aria-hidden="true">↗</span></a>
            <a className="button button-secondary" href="/transparencia">Transparência</a>
          </div>
        </div>
        <div className="hero-visual" role="img" aria-label="Fotografia da ação de fiscalização do IPEM-PE">
          <img src={lead.image} alt={lead.alt} />
          <div className="hero-caption"><span>Notícia em destaque</span><a href={lead.url}>{lead.title} ↗</a></div>
        </div>
      </div>
    </section>
    <section className="container section-block" aria-labelledby="acessos-title">
      <div className="section-heading"><div><p className="eyebrow">Encontre o que precisa</p><h2 id="acessos-title">Acesso rápido</h2></div><p>Principais canais do Instituto em um só lugar.</p></div>
      <div className="quick-grid">
        {quickLinks.map((item) => <a className="quick-card" href={item.href} key={item.title}>
          <span className="quick-symbol" aria-hidden="true">{item.symbol}</span><h3>{item.title}</h3><p>{item.description}</p><span className="card-link">Acessar <span aria-hidden="true">→</span></span>
        </a>)}
      </div>
    </section>
    <section className="section-tint">
      <div className="container section-block">
        <div className="section-heading"><div><p className="eyebrow">Acompanhe o Instituto</p><h2>Últimas notícias</h2></div><a className="text-link" href="/noticias">Todas as notícias ↗</a></div>
        <div className="news-grid">
          {news.slice(1,4).map((item) => <article className="news-card" key={item.url}>
            <a className="news-image" href={item.url}><img src={item.image} alt={item.alt} loading="lazy" /></a>
            <div className="news-content"><time>{item.date}</time><h3><a href={item.url}>{item.title}</a></h3><p>{item.excerpt}</p><a className="text-link" href={item.url}>Ler notícia ↗</a></div>
          </article>)}
        </div>
      </div>
    </section>
    <section className="container transparency-callout">
      <div><p className="eyebrow">Acesso à informação</p><h2>Transparência e prestação de contas</h2><p>Consulte as áreas e os documentos de transparência disponíveis no portal institucional atual. Os links serão mantidos até a validação da nova estrutura.</p></div>
      <a className="button button-primary" href="/transparencia">Acessar transparência ↗</a>
    </section>
    <section className="container official-banner" aria-label="Assinatura institucional"><img src="https://www.ipem.pe.gov.br/wp-content/uploads/2026/07/Assinatura-Período-Eleitoral.png" alt="Assinatura institucional exibida no portal atual" loading="lazy" /></section>
  </main>;
}
