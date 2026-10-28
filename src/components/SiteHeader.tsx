"use client";

import { useState } from "react";
import Link from "next/link";
import { siteNavigation } from "@/config/site-navigation";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);

  return (
    <header className="site-header">
      <div className="container brand-row">
        <Link className="brand" href="/" aria-label="IPEM-PE - página inicial" onClick={closeMenu}>
          <span className="brand-mark" aria-hidden="true">IPEM</span>
          <span><strong>Instituto de Pesos e Medidas</strong><small>de Pernambuco</small></span>
        </Link>
        <button className="menu-toggle" type="button" aria-expanded={open} aria-controls="site-navigation" onClick={() => setOpen(!open)}>{open ? "Fechar menu" : "Menu ☰"}</button>
      </div>
      <nav id="site-navigation" className={`site-nav ${open ? "is-open" : ""}`} aria-label="Navegação principal">
        <div className="container nav-inner">
          <Link className="nav-home" href="/" aria-label="Início" onClick={closeMenu}>⌂</Link>
          {siteNavigation.map((menu) => (
            <div className="nav-item" key={menu.label}>
              {menu.href ? <Link href={menu.href} onClick={closeMenu}>{menu.label}</Link> : <span tabIndex={0}>{menu.label}</span>}
              <div className="submenu">
                {menu.items.map((item) => <Link key={`${item.label}:${item.href}`} href={item.href} onClick={closeMenu}>{item.label}</Link>)}
              </div>
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
}
