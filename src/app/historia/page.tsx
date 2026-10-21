import type { Metadata } from "next";
import SiteCard from "@/components/SiteCard";
import SiteDivider from "@/components/SiteDivider";
import SiteMessage from "@/components/SiteMessage";
import SiteTag from "@/components/SiteTag";
import SiteButton from "@/components/SiteButton";

export const metadata: Metadata = {
  title: "História",
  description: "Conheça os marcos históricos da metrologia no Brasil e do IPEM-PE.",
};

const earlyMilestones = [
  {
    year: "1532",
    title: "A origem",
    text: "O primeiro registro metrológico no país ocorre com a figura do Almotacé, autoridade responsável por fiscalizar pesos, medidas e o funcionamento dos mercados locais na Colônia.",
  },
  {
    year: "1832",
    title: "Unificação",
    text: "O Imperador D. Pedro I publica um regulamento em abril para buscar a equiparação entre os diversos sistemas de medição que coexistiam de forma desordenada no território.",
  },
  {
    year: "1862",
    title: "O sistema métrico francês",
    text: "Sob o incentivo de D. Pedro II, o Brasil dá um passo rumo à modernidade. Em 26 de julho, o sistema de pesos e medidas do Império é oficialmente substituído pelo sistema métrico decimal francês.",
  },
];

export default function HistoriaPage() {
  return (
    <main id="conteudo" className="container section-block history-page">
      <header className="history-heading">
        <p className="eyebrow">Institucional</p>
        <h1>História</h1>
        <p className="page-intro">A evolução da metrologia: do Império ao IPEM-PE</p>
        <p>
          A história da metrologia no Brasil é a história da busca pela justiça
          nas relações de consumo e pelo avanço tecnológico. Confira os marcos
          apresentados na história institucional do IPEM-PE.
        </p>
      </header>

      <SiteMessage
        severity="info"
        text="O conteúdo histórico foi organizado a partir do texto da página atual do IPEM-PE fornecido para esta implementação. Datas, referências históricas e vínculos institucionais devem ser validados pela equipe responsável antes da publicação definitiva."
      />

      <section className="history-section" aria-labelledby="colonial-title">
        <div className="history-section-heading">
          <SiteTag value="Séculos XVI–XIX" severity="info" />
          <h2 id="colonial-title">Período Colonial e Imperial</h2>
          <p>Os primeiros registros e a transição para um sistema de medidas padronizado.</p>
        </div>
        <div className="history-timeline">
          {earlyMilestones.map((item) => (
            <article className="history-timeline-item" key={item.year}>
              <div className="history-year" aria-label={`Ano ${item.year}`}>{item.year}</div>
              <SiteCard title={item.title} elevation="low">
                <p>{item.text}</p>
              </SiteCard>
            </article>
          ))}
        </div>
      </section>

      <SiteDivider />

      <section className="history-section" aria-labelledby="quebra-quilos-title">
        <div className="history-section-heading">
          <SiteTag value="1874–1882" severity="warning" />
          <h2 id="quebra-quilos-title">A resistência: Revolta do Quebra-Quilos</h2>
          <p>
            Entre 1874 e 1882, o Brasil viveu um episódio de resistência popular
            contra o novo padrão decimal.
          </p>
        </div>
        <div className="history-card-grid">
          <SiteCard title="O conflito" elevation="low">
            <p>
              A população, acostumada com medidas antigas e temendo ser lesada
              por novos cálculos tributários, rebelou-se contra a mudança.
            </p>
          </SiteCard>
          <SiteCard title="O desfecho" elevation="low">
            <p>
              Segundo o texto histórico atualmente publicado, em 1882, com a
              pacificação e maior disseminação do conhecimento técnico, o
              sistema métrico francês foi consolidado como padrão nacional.
            </p>
          </SiteCard>
        </div>
      </section>

      <SiteDivider />

      <section className="history-section" aria-labelledby="si-title">
        <div className="history-section-heading">
          <SiteTag value="1962" severity="info" />
          <h2 id="si-title">A era moderna e o Sistema Internacional (SI)</h2>
        </div>
        <SiteCard title="Padronização global" subtitle="1962" elevation="medium">
          <p>
            O texto da página atual informa que o Brasil adotou oficialmente o
            Sistema Internacional de Unidades (SI), alinhando a indústria e o
            comércio nacional aos padrões científicos globais.
          </p>
        </SiteCard>
      </section>

      <SiteDivider />

      <section className="history-section" aria-labelledby="ipem-title">
        <div className="history-section-heading">
          <SiteTag value="23 de setembro de 1968" severity="success" />
          <h2 id="ipem-title">O nascimento do IPEM-PE</h2>
        </div>
        <SiteCard title="Fundação do Instituto de Pesos e Medidas de Pernambuco" elevation="medium">
          <p>
            Em <strong>23 de setembro de 1968</strong>, é fundado o Instituto
            de Pesos e Medidas de Pernambuco (IPEM-PE).
          </p>
          <p>
            Criado para ser o braço executivo da metrologia no estado, o IPEM-PE
            nasceu como órgão delegado do INMETRO (Instituto Nacional de
            Metrologia, Qualidade e Tecnologia) e vinculado à Secretaria de
            Justiça e Direitos Humanos, conforme o conteúdo fornecido da página
            atual.
          </p>
          <p>
            Desde então, a instituição atua para garantir que o “peso justo” e
            a “medida certa” cheguem a todos os pernambucanos, protegendo o
            cidadão e fortalecendo a economia local.
          </p>
        </SiteCard>
      </section>

      <SiteDivider />

      <section className="history-next-steps">
        <h2>Conheça mais sobre o IPEM-PE</h2>
        <p>Consulte outras páginas institucionais disponíveis no portal.</p>
        <div className="history-actions">
          <SiteButton label="Quem somos" href="https://www.ipem.pe.gov.br/quem-somos/" />
          <SiteButton label="Quem é quem" href="https://www.ipem.pe.gov.br/diretoria/" outlined />
          <SiteButton label="Organograma" href="https://www.ipem.pe.gov.br/organograma/" outlined />
        </div>
      </section>
    </main>
  );
}
