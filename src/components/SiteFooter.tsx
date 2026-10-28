import Link from "next/link";
export default function SiteFooter() {
  return <footer className="site-footer">
    <div className="container footer-grid">
      <div>
        <div className="footer-brand">IPEM-PE</div>
        <p>Instituto de Pesos e Medidas do Estado de Pernambuco</p>
        <p>Governo de Pernambuco</p>
      </div>
      <div>
        <h2>Endereço e atendimento</h2>
        <p>Avenida Professor Luiz Freire, nº 900 – Cidade Universitária</p>
        <p>Recife – Pernambuco | CEP: 50740-545</p>
        <p>Telefone: <a href="tel:+558131844700">(81) 3184-4700</a></p>
        <p>Horário informado no portal atual: segunda a sexta-feira, das 8h às 14h, exceto feriados.</p>
      </div>
      <div>
        <h2>Acesso rápido</h2>
        <Link href="/transparencia">Transparência</Link>
        <Link href="/servicos">Serviços</Link>
        <Link href="/noticias">Notícias</Link>
        <Link href="/contato">Contato</Link>
      </div>
    </div>
    <div className="footer-bottom"><div className="container">© 2026 – Instituto de Pesos e Medidas do Estado de Pernambuco (IPEM/PE). Dados de contato reproduzidos da página inicial fornecida; validar antes da publicação.</div></div>
  </footer>;
}
