const servicos = [
  { titulo: "Serviços ao cidadão", descricao: "Consulte os serviços disponibilizados pelo IPEM-PE.", href: "/servicos" },
  { titulo: "Transparência e prestação de contas", descricao: "Acesse informações institucionais e conteúdos de transparência.", href: "/transparencia" },
  { titulo: "Notícias e comunicados", descricao: "Consulte notícias e comunicados publicados pelo Instituto.", href: "/noticias" },
  { titulo: "Contato institucional", descricao: "Encontre os canais oficiais de atendimento.", href: "/contato" },
];

export default function HomePage() {
  return (
    <>
      <a className="skip-link" href="#conteudo">Ir para o conteúdo</a>
      <header className="site-header">
        <div className="container">
          <p>Governo de Pernambuco</p>
          <p><strong>Instituto de Pesos e Medidas de Pernambuco</strong></p>
        </div>
      </header>
      <main id="conteudo">
        <section className="container hero">
          <p>Portal institucional</p>
          <h1>Instituto de Pesos e Medidas de Pernambuco</h1>
          <p>Informações institucionais, serviços e canais oficiais do IPEM-PE.</p>
          <p><a href="/transparencia">Transparência e prestação de contas</a></p>
        </section>
        <section className="container" aria-labelledby="servicos-titulo">
          <h2 id="servicos-titulo">Acesso rápido</h2>
          <ul className="quick-links">
            {servicos.map((servico) => (
              <li key={servico.href}>
                <h3><a href={servico.href}>{servico.titulo}</a></h3>
                <p>{servico.descricao}</p>
              </li>
            ))}
          </ul>
        </section>
      </main>
      <footer className="site-footer">
        <div className="container">
          <p>Instituto de Pesos e Medidas de Pernambuco — Governo de Pernambuco.</p>
        </div>
      </footer>
    </>
  );
}
