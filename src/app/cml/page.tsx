import type { Metadata } from "next";
import SiteCard from "@/components/SiteCard";
import SiteDivider from "@/components/SiteDivider";
import SiteMessage from "@/components/SiteMessage";
import SiteTag from "@/components/SiteTag";
import SiteButton from "@/components/SiteButton";

export const metadata: Metadata = {
  title: "CML — Coordenadoria de Metrologia Legal",
  description: "Conheça a atuação da Metrologia Legal no IPEM-PE.",
};

export default function CmlPage() {
  return (
    <main id="conteudo" className="container section-block cml-page">
      <header className="cml-heading">
        <p className="eyebrow">Atividades</p>
        <h1>CML</h1>
        <p className="page-intro">Coordenadoria de Metrologia Legal</p>
        <p>A Metrologia Legal reúne regras e procedimentos aplicáveis às unidades, aos métodos e aos instrumentos de medição, com o objetivo de contribuir para medições confiáveis e para relações de consumo justas.</p>
      </header>

      <SiteMessage severity="warn" text="Conteúdo organizado a partir do texto da página CML fornecido para a homologação. A descrição das competências e dos serviços deve ser validada pela área responsável antes da publicação institucional." />

      <section className="cml-purpose" aria-labelledby="cml-objetivos">
        <div className="cml-section-heading">
          <SiteTag value="Por que é importante" severity="info" />
          <h2 id="cml-objetivos">Objetivos centrais da Metrologia Legal</h2>
          <p>O trabalho descrito na página de referência destaca a confiabilidade das medições e a proteção de consumidores e fornecedores.</p>
        </div>
        <div className="cml-card-grid">
          <SiteCard title="Segurança e exatidão" elevation="low"><p>Contribuir para que as medições realizadas nas atividades cotidianas sejam confiáveis e atendam aos requisitos aplicáveis.</p></SiteCard>
          <SiteCard title="Proteção do consumidor" elevation="low"><p>Favorecer que a quantidade informada e cobrada corresponda à quantidade efetivamente fornecida.</p></SiteCard>
          <SiteCard title="Equilíbrio nas relações comerciais" elevation="low"><p>Reduzir prejuízos associados a erros de medição e contribuir para condições mais justas de concorrência entre fornecedores.</p></SiteCard>
        </div>
      </section>

      <SiteDivider />

      <section className="cml-section" aria-labelledby="cml-atuacao">
        <div className="cml-section-heading">
          <SiteTag value="Como atua" severity="info" />
          <h2 id="cml-atuacao">Frentes de atuação</h2>
          <p>O material fornecido descreve duas frentes de trabalho relacionadas a instrumentos de medição e a produtos pré-embalados.</p>
        </div>
        <div className="cml-card-grid cml-card-grid-two">
          <SiteCard title="Instrumentos de pesagem e medição" subtitle="Verificação de instrumentos" elevation="low">
            <p>Atuação voltada a dispositivos usados no comércio e em outras atividades, com verificações periódicas ou eventuais para avaliar se os erros de medição permanecem dentro dos limites permitidos.</p>
            <h3>Exemplos citados</h3>
            <ul className="cml-list"><li>Balanças comerciais e industriais</li><li>Bombas medidoras de combustíveis</li><li>Taxímetros</li><li>Medidores de pressão arterial (esfigmomanômetros)</li><li>Hidrômetros</li></ul>
          </SiteCard>
          <SiteCard title="Produtos pré-medidos" subtitle="Produtos pré-embalados" elevation="low">
            <p>Atuação sobre produtos embalados previamente, sem a presença do consumidor no momento da medição, por meio de coleta de amostras e testes laboratoriais.</p>
            <h3>Exemplos citados</h3>
            <ul className="cml-list"><li>Arroz e feijão</li><li>Leite</li><li>Produtos de limpeza</li><li>Papel higiênico</li><li>Fios e cabos elétricos</li></ul>
            <p>As análises descritas buscam verificar se o peso ou volume indicado na embalagem corresponde ao conteúdo real.</p>
          </SiteCard>
        </div>
      </section>

      <SiteDivider />

      <section className="cml-seal" aria-labelledby="cml-selo">
        <div className="cml-seal-symbol" aria-hidden="true">✓</div>
        <div>
          <SiteTag value="Orientação ao cidadão" severity="info" />
          <h2 id="cml-selo">Selo de verificação</h2>
          <p>Segundo o texto de referência, o selo de verificação do Inmetro sinaliza que o instrumento passou por verificação e está apto para uso nas condições aplicáveis.</p>
          <p>Ao utilizar um instrumento em uma relação comercial, observe a identificação de verificação e procure os canais oficiais do IPEM-PE em caso de dúvida ou suspeita de irregularidade.</p>
        </div>
      </section>

      <section className="cml-next-steps" aria-labelledby="cml-saiba-mais">
        <h2 id="cml-saiba-mais">Saiba mais</h2>
        <p>Consulte outras páginas relacionadas às atividades e aos canais de atendimento do Instituto.</p>
        <div className="cml-actions">
          <SiteButton label="Produtos Pré-Medidos" href="/pre-medidos" />
          <SiteButton label="Unidades" href="/unidades" outlined />
          <SiteButton label="Fale com o IPEM-PE" href="/contato" outlined />
        </div>
      </section>
    </main>
  );
}
