import type { Metadata } from "next";
import SiteCard from "@/components/SiteCard";
import SiteMessage from "@/components/SiteMessage";
import SiteTag from "@/components/SiteTag";
import SiteButton from "@/components/SiteButton";

export const metadata: Metadata = {
  title: "Legislação Federal e Normas do Inmetro | IPEM-PE",
  description: "Acesso à legislação federal relacionada à metrologia e à qualidade, e aos sistemas oficiais de consulta do Inmetro.",
};


export default function LegislacaoPage() {
  return (
    <main id="conteudo" className="container section-block legislation-page">
      <header className="legislation-heading">
        <p className="eyebrow">Legislação</p>
        <h1>Legislação Federal e Normas do Inmetro</h1>
        <p className="page-intro">Leis, portarias e regulamentos relacionados à metrologia legal e à avaliação da conformidade.</p>
        <p>O Instituto Nacional de Metrologia, Qualidade e Tecnologia (Inmetro) disponibiliza instrumentos legais e regulamentos que fundamentam diferentes atividades de metrologia e avaliação da conformidade. Consulte sempre as fontes oficiais para verificar o texto integral e a situação atual de cada norma.</p>
      </header>

      <SiteMessage severity="info" text="Os links desta página direcionam a fontes oficiais. A relação abaixo é uma seleção inicial, não uma compilação exaustiva de toda a legislação aplicável. Verifique alterações, revogações e normas específicas antes de usar uma referência em processo administrativo ou orientação técnica." />

      <section className="legislation-section" aria-labelledby="legislation-federal">
        <div className="legislation-section-heading">
          <SiteTag value="Legislação federal" severity="info" />
          <h2 id="legislation-federal">Leis de referência</h2>
          <p>Textos legais citados na página de referência do IPEM-PE.</p>
        </div>
        <div className="legislation-grid">
          <SiteCard title="Lei nº 9.933, de 20 de dezembro de 1999" subtitle="Competências do Conmetro e do Inmetro" elevation="low">
            <p>Dispõe sobre as competências do Conselho Nacional de Metrologia, Normalização e Qualidade Industrial (Conmetro) e do Inmetro, além de tratar da Taxa de Serviços Metrológicos e de outras providências.</p>
            <a className="legislation-link" href="https://www.planalto.gov.br/ccivil_03/leis/l9933.htm" target="_blank" rel="noreferrer">Acessar texto no Planalto <span aria-hidden="true">↗</span></a>
          </SiteCard>
          <SiteCard title="Lei nº 5.966, de 11 de dezembro de 1973" subtitle="Sistema Nacional de Metrologia, Normalização e Qualidade Industrial" elevation="low">
            <p>Institui o Sistema Nacional de Metrologia, Normalização e Qualidade Industrial (Sinmetro) e dá outras providências.</p>
            <a className="legislation-link" href="https://www.planalto.gov.br/ccivil_03/leis/l5966.htm" target="_blank" rel="noreferrer">Acessar texto no Planalto <span aria-hidden="true">↗</span></a>
          </SiteCard>
        </div>
      </section>

      <section className="legislation-section" aria-labelledby="legislation-systems">
        <div className="legislation-section-heading">
          <SiteTag value="Consultas oficiais" severity="info" />
          <h2 id="legislation-systems">Portarias e regulamentos técnicos</h2>
          <p>Use os sistemas oficiais para localizar normas por número, ano, assunto ou categoria.</p>
        </div>
        <div className="legislation-grid">
          <SiteCard title="Sistema Legislação Inmetro" subtitle="Base de instrumentos legais" elevation="low">
            <p>Consulta de portarias, Regulamentos Técnicos Metrológicos e de Avaliação da Conformidade, resoluções do Conmetro e outros instrumentos legais disponibilizados pelo Inmetro.</p>
            <a className="legislation-link" href="https://www.gov.br/inmetro/pt-br/centrais-de-conteudo/sistemas/legislacao" target="_blank" rel="noreferrer">Abrir Legislação Inmetro <span aria-hidden="true">↗</span></a>
          </SiteCard>
          <SiteCard title="Legislação metrológica em vigor" subtitle="Metrologia Legal" elevation="low">
            <p>Página do Inmetro que reúne referências de legislação metrológica vigente, incluindo legislação genérica, resoluções do Conmetro e regulamentação técnica metrológica.</p>
            <a className="legislation-link" href="https://www.gov.br/inmetro/pt-br/assuntos/metrologia-legal/legislacao-metrologica-em-vigor" target="_blank" rel="noreferrer">Consultar legislação metrológica <span aria-hidden="true">↗</span></a>
          </SiteCard>
          <SiteCard title="Produtos e serviços regulados" subtitle="Avaliação da conformidade" elevation="low">
            <p>Consulte a relação de produtos e serviços regulados pelo Inmetro e os regulamentos ou portarias associados.</p>
            <a className="legislation-link" href="https://www.gov.br/inmetro/pt-br/assuntos/regulamentacao/produtos-e-servicos-regulados" target="_blank" rel="noreferrer">Ver produtos e serviços regulados <span aria-hidden="true">↗</span></a>
          </SiteCard>
        </div>
      </section>

      <section className="legislation-help" aria-labelledby="legislation-help-title">
        <div className="legislation-help-icon" aria-hidden="true">§</div>
        <div>
          <SiteTag value="Importante" severity="info" />
          <h2 id="legislation-help-title">Como consultar uma norma</h2>
          <ol>
            <li>Abra o sistema oficial do Inmetro.</li>
            <li>Pesquise pelo número e ano da portaria ou por palavras-chave do assunto.</li>
            <li>Confira o texto integral e verifique se existem alterações, consolidações ou revogações posteriores.</li>
          </ol>
          <p>Esta página facilita o acesso às fontes; não substitui a leitura do ato normativo aplicável ao caso concreto.</p>
          <div className="legislation-actions">
            <SiteButton label="Abrir Legislação Inmetro" href="https://www.gov.br/inmetro/pt-br/centrais-de-conteudo/sistemas/legislacao" />
            <SiteButton label="Ver legislação metrológica vigente" href="https://www.gov.br/inmetro/pt-br/assuntos/metrologia-legal/legislacao-metrologica-em-vigor" outlined />
          </div>
        </div>
      </section>
    </main>
  );
}
