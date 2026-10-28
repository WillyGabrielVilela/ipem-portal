import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteCard from "@/components/SiteCard";
import SiteDivider from "@/components/SiteDivider";

export const metadata: Metadata = {
  title: "Organograma Institucional",
  description: "Organograma institucional do Instituto de Pesos e Medidas de Pernambuco (IPEM-PE).",
};

export default function OrganogramaPage() {
  return (
    <main id="conteudo" className="container section-block">
      <p className="eyebrow">Institucional</p>
      <h1>Organograma Institucional</h1>
      <p className="page-intro">
        Estrutura organizacional do Instituto de Pesos e Medidas de Pernambuco (IPEM-PE).
      </p>

      <section aria-labelledby="organograma-titulo" className="organograma-section">
        <h2 id="organograma-titulo" className="visually-hidden">Imagem do organograma institucional</h2>
        <figure style={{ margin: 0 }}>
          <div
            style={{
              position: "relative",
              width: "100%",
              overflow: "hidden",
              border: "1px solid #d4e0e8",
              borderRadius: "12px",
              background: "#f8fafc",
              boxShadow: "0 4px 18px rgba(7, 20, 66, 0.08)",
            }}
          >
            <Image
              src="/images/organograma-ipem-pe.png"
              alt="Organograma institucional do IPEM-PE, com Governo do Estado de Pernambuco, secretaria vinculada, Presidência, diretorias, gerências, unidades técnicas e unidades operacionais de suporte."
              width={1195}
              height={896}
              priority
              sizes="(max-width: 768px) 100vw, 1200px"
              style={{ display: "block", width: "100%", height: "auto" }}
            />
          </div>
          <figcaption style={{ marginTop: "0.75rem", color: "#494c57", fontSize: "0.9rem", lineHeight: 1.5 }}>
            Organograma institucional disponibilizado para o portal do IPEM-PE.
          </figcaption>
        </figure>
        <p style={{ marginTop: "1rem" }}>
          <a className="text-link" href="/images/organograma-ipem-pe.png" target="_blank" rel="noreferrer">
            Abrir imagem em tamanho original ↗
          </a>
        </p>
      </section>

      <SiteDivider />
      <div className="resource-card-grid">
        <SiteCard title="Gestão e diretoria" elevation="low">
          <p>Consulte as informações de gestão e os responsáveis pelas áreas do Instituto.</p>
          <Link className="text-link" href="/diretoria">Acessar Quem é Quem →</Link>
        </SiteCard>
        <SiteCard title="Unidades de atendimento" elevation="low">
          <p>Consulte a relação de unidades e os endereços de atendimento.</p>
          <Link className="text-link" href="/unidades">Acessar unidades →</Link>
        </SiteCard>
        <SiteCard title="Perfil institucional" elevation="low">
          <p>Conheça o perfil e as atribuições institucionais do IPEM-PE.</p>
          <Link className="text-link" href="/quem-somos">Conhecer o Instituto →</Link>
        </SiteCard>
      </div>
    </main>
  );
}
