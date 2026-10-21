import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@uigovpe/styles";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "IPEM-PE | Instituto de Pesos e Medidas",
    template: "%s | IPEM-PE",
  },
  description: "Portal institucional do Instituto de Pesos e Medidas de Pernambuco.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className={inter.variable}>
        <a className="skip-link" href="#conteudo">Ir para o conteúdo</a>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
