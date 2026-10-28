"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { siteNavigation } from "@/config/site-navigation";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const closeMenu = () => setOpen(false);

  // Fecha menus que ficaram abertos por foco quando a rota muda.
  useEffect(() => {
    setOpen(false);
    const activeElement = document.activeElement;
    if (activeElement instanceof HTMLElement && activeElement.closest(".site-nav")) {
      activeElement.blur();
    }
  }, [pathname]);

  const isCurrent = (href: string) => pathname === href || pathname.startsWith(`${href}/`);
  const isGroupCurrent = (menu: (typeof siteNavigation)[number]) =>
    Boolean(menu.href && isCurrent(menu.href)) || menu.items.some((item) => isCurrent(item.href));

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
            <div className={`nav-item${isGroupCurrent(menu) ? " is-current" : ""}`} key={menu.label}>
              {menu.href ? <Link href={menu.href} aria-current={pathname === menu.href ? "page" : undefined} onClick={closeMenu}>{menu.label}</Link> : <span tabIndex={0}>{menu.label}</span>}
              <div className="submenu">
                {menu.items.map((item) => <Link key={`${item.label}:${item.href}`} href={item.href} aria-current={pathname === item.href ? "page" : undefined} className={pathname === item.href ? "is-current-page" : undefined} onClick={closeMenu}>{item.label}</Link>)}
              </div>
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
}
