"use client";

import { useState, type ReactNode } from "react";

const navItems = [
  { href: "/", label: "Início" },
  { href: "/servicos", label: "Serviços" },
  { href: "/transparencia", label: "Transparência" },
  { href: "/ouvidoria", label: "Ouvidoria" },
  { href: "/noticias", label: "Notícias" },
  { href: "/contato", label: "Contato" },
];

export function SiteShell({ children }: { children: ReactNode }) {
  const [contrast, setContrast] = useState(false);
  const [fontScale, setFontScale] = useState(1);
  const [menuOpen, setMenuOpen] = useState(false);
  const [cookieDialogOpen, setCookieDialogOpen] = useState(false);

  return (
    <div
      className={`site-shell${contrast ? " high-contrast" : ""}`}
      style={{ fontSize: `${fontScale * 100}%` }}
    >
      <a className="skip-link" href="#conteudo">Ir para o conteúdo</a>

      <div className="govbar" aria-label="Barra de acessibilidade do portal">
        <div className="container govbar-inner">
          <a className="govbar-government" href="https://www.pe.gov.br/" target="_blank" rel="noreferrer">
            <span className="government-mark" aria-hidden="true">PE</span>
            <span>Governo de Pernambuco</span>
          </a>
          <div className="accessibility-controls" aria-label="Recursos de acessibilidade">
            <button type="button" onClick={() => setFontScale((size) => Math.max(0.85, Math.round((size - 0.1) * 100) / 100))} aria-label="Diminuir tamanho do texto" title="Diminuir texto">A−</button>
            <button type="button" onClick={() => setFontScale(1)} aria-label="Restaurar tamanho padrão do texto" title="Tamanho padrão">A</button>
            <button type="button" onClick={() => setFontScale((size) => Math.min(1.3, Math.round((size + 0.1) * 100) / 100))} aria-label="Aumentar tamanho do texto" title="Aumentar texto">A+</button>
            <button type="button" aria-pressed={contrast} onClick={() => setContrast((enabled) => !enabled)} title="Alternar alto contraste">
              <span aria-hidden="true">◐</span><span className="control-label">Contraste</span>
            </button>
            <button type="button" onClick={() => setCookieDialogOpen(true)} title="Informações sobre cookies">
              <span aria-hidden="true">ⓘ</span><span className="control-label">Privacidade</span>
            </button>
          </div>
        </div>
      </div>

      <header className="site-header">
        <div className="container header-main">
          <a href="/" className="brand" aria-label="IPEM-PE — página inicial">
            <span className="brand-symbol" aria-hidden="true">IPEM</span>
            <span className="brand-copy">
              <strong>Instituto de Pesos e Medidas</strong>
              <span>de Pernambuco</span>
            </span>
          </a>
          <button
            className="menu-toggle"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="site-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span aria-hidden="true">{menuOpen ? "✕" : "☰"}</span>
            <span>{menuOpen ? "Fechar menu" : "Menu"}</span>
          </button>
        </div>
        <nav id="site-navigation" className={`site-nav${menuOpen ? " is-open" : ""}`} aria-label="Navegação principal">
          <div className="container nav-inner">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>{item.label}</a>
            ))}
          </div>
        </nav>
      </header>

      <div className="page-content">{children}</div>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div>
            <strong>Instituto de Pesos e Medidas de Pernambuco</strong>
            <p>Governo de Pernambuco</p>
          </div>
          <div className="footer-links">
            <a href="/transparencia">Transparência e prestação de contas</a>
            <a href="/contato">Contato institucional</a>
            <a href="https://www.pe.gov.br/" target="_blank" rel="noreferrer">Portal do Governo de Pernambuco ↗</a>
          </div>
        </div>
        <div className="container footer-bottom">
          <span>Portal institucional do IPEM-PE</span>
          <a href="#conteudo">Voltar ao início ↑</a>
        </div>
      </footer>

      {cookieDialogOpen && (
        <div className="dialog-backdrop" role="presentation" onMouseDown={(event) => {
          if (event.target === event.currentTarget) setCookieDialogOpen(false);
        }}>
          <section className="privacy-dialog" role="dialog" aria-modal="true" aria-labelledby="privacy-title">
            <button className="dialog-close" type="button" aria-label="Fechar" onClick={() => setCookieDialogOpen(false)}>×</button>
            <h2 id="privacy-title">Privacidade e cookies</h2>
            <p>Este portal deve informar de forma transparente quais cookies e tecnologias de armazenamento utiliza. A configuração definitiva desta política precisa ser validada com a equipe responsável pelo site.</p>
            <p>Os controles de acessibilidade desta barra funcionam nesta sessão e não armazenam preferências no navegador.</p>
            <button className="button button-primary" type="button" onClick={() => setCookieDialogOpen(false)}>Entendi</button>
          </section>
        </div>
      )}
    </div>
  );
}
