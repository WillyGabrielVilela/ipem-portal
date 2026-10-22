"use client";

import { useState } from "react";

const menus = [
  { label: "Institucional", items: [
    ["História", "/historia"],
    ["Quem Somos", "/quem-somos"],
    ["Quem é Quem", "/diretoria"],
    ["Organograma", "https://www.ipem.pe.gov.br/organograma/"],
    ["Unidades", "/unidades"],
  ]},
  { label: "Atividades", items: [
    ["CML", "/cml"],
    ["Pré-Embalados", "/pre-medidos"],
    ["CQI", "/cqi"],
  ]},
  { label: "Notícias", href: "/noticias", items: [["Todas as notícias", "https://www.ipem.pe.gov.br/category/noticias/"]]},
  { label: "Legislação", items: [["Legislação Federal e Normas do Inmetro", "/normas-tecnicas"]]},
  { label: "Transparência", href: "/transparencia", items: [
    ["Área Principal da Transparência", "/transparencia/area-principal"],
    ["LGPD", "/lei-geral-de-protecao-de-dados-pessoais-lgpd"],
    ["Plano de Metas", "/plano-de-metas"],
    ["Editais e Portarias", "https://www.ipem.pe.gov.br/editais-e-portarias/"],
    ["Notificações de Autuação", "https://www.ipem.pe.gov.br/notificacao-de-atuacao/"],
    ["Licitações e Contratos", "https://www.ipem.pe.gov.br/licitacao/"],
    ["Despesas", "https://www.ipem.pe.gov.br/despesas/"],
    ["Convênios e Transferências", "https://www.ipem.pe.gov.br/convenios-e-transferencias/"],
    ["Seleção Pública Simplificada", "https://www.ipem.pe.gov.br/selecao-publica-simplificada/"],
  ]},
  { label: "Atendimento", items: [
    ["Perguntas Frequentes", "https://www.ipem.pe.gov.br/perguntas-frequentes/"],
    ["Portal de Serviços ao Cliente / Cidadão", "https://servicos.rbmlq.gov.br/segundaviagru/"],
    ["Departamento Jurídico", "https://www.ipem.pe.gov.br/juridico/"],
  ]},
  { label: "Ouvidoria", items: [["Formulário de denúncia", "https://www.ipem.pe.gov.br/formulario-de-denuncia/"]]},
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  return <>
    <header className="site-header">
      <div className="container brand-row">
        <a className="brand" href="/" aria-label="IPEM-PE - página inicial">
          <span className="brand-mark" aria-hidden="true">IPEM</span>
          <span><strong>Instituto de Pesos e Medidas</strong><small>de Pernambuco</small></span>
        </a>
        <button className="menu-toggle" type="button" aria-expanded={open} aria-controls="site-navigation" onClick={() => setOpen(!open)}>{open ? "Fechar menu" : "Menu ☰"}</button>
      </div>
      <nav id="site-navigation" className={`site-nav ${open ? "is-open" : ""}`} aria-label="Navegação principal">
        <div className="container nav-inner">
          <a className="nav-home" href="/" aria-label="Início">⌂</a>
          {menus.map((menu) => <div className="nav-item" key={menu.label}>
            {menu.href ? <a href={menu.href}>{menu.label}</a> : <span tabIndex={0}>{menu.label}</span>}
            <div className="submenu">{menu.items.map(([label, href]) => <a key={href} href={href}>{label}</a>)}</div>
          </div>)}
        </div>
      </nav>
    </header>
  </>;
}
