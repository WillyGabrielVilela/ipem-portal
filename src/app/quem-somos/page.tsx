import type { Metadata } from "next";
import SiteCard from "@/components/SiteCard";
import SiteDivider from "@/components/SiteDivider";
import SiteMessage from "@/components/SiteMessage";
import SiteTag from "@/components/SiteTag";
import SiteButton from "@/components/SiteButton";

export const metadata: Metadata = {
  title: "Quem Somos",
  description: "Perfil institucional, pilares estratégicos e atribuições do IPEM-PE.",
};

const responsibilities = [
  {
    title: "Controle de instrumentos de medição",
    text: "Registro, aferição e inspeção de instrumentos de medição.",
  },
  {
    title: "Qualidade e segurança de produtos",
    text: "Exames laboratoriais, certificação e controle de qualidade de produtos.",
  },
  {
    title: "Fiscalização e medidas administrativas",
    text: "Lavratura de autos de infração, interdição de instrumentos, apreensão de mercadorias e aplicação de penalidades.",
  },
  {
    title: "Gestão jurídica",
    text: "Julgamento de processos administrativos e execução de dívida ativa.",
  },
];

export default function QuemSomosPage() {
  return (
    <main id="conteudo" className="container section-block about-page">
      <header className="about-heading">
        <p className="eyebrow">Institucional</p>
        <h1>Quem Somos</h1>
        <p className="page-intro">Conheça o Instituto de Pesos e Medidas do Estado de Pernambuco.</p>
      </header>

      <SiteMessage
        severity="info"
        text="Conteúdo estruturado a partir do HTML institucional fornecido. Antes da publicação, confirme com a área responsável a legislação citada, o vínculo administrativo atual, as competências legais e os textos de missão e visão."
      />

      <section className="about-overview" aria-labelledby="perfil-title">
        <SiteCard title="Perfil institucional" elevation="medium">
          <p>
            O <strong>Instituto de Pesos e Medidas do Estado de Pernambuco (IPEM-PE)</strong> é apresentado no conteúdo de referência como uma autarquia estadual dotada de personalidade jurídica de direito público, com autonomia administrativa e financeira.
          </p>
          <p>
            O texto fornecido informa que o Instituto foi criado pela <strong>Lei nº 6.141, de 23 de setembro de 1968</strong>, e atua como órgão delegado do Instituto Nacional de Metrologia, Qualidade e Tecnologia (INMETRO) em Pernambuco.
          </p>
          <p>
            O HTML de referência também informa vínculo à Secretaria de Justiça e Direitos Humanos. Esse vínculo deve ser conferido antes da publicação, pois pode mudar ao longo do tempo.
          </p>
        </SiteCard>
      </section>

      <SiteDivider />

      <section className="about-section" aria-labelledby="pilares-title">
        <div className="about-section-heading">
          <SiteTag value="Direcionamento institucional" severity="info" />
          <h2 id="pilares-title">Pilares estratégicos</h2>
          <p>Missão e visão conforme descritas no conteúdo de referência fornecido.</p>
        </div>
        <div className="about-card-grid">
          <SiteCard title="Missão" elevation="low">
            <p>
              Assegurar à sociedade pernambucana uma melhor qualidade de vida, promovendo a confiança nas medições e a conformidade de produtos e serviços por meio da fiscalização técnica.
            </p>
          </SiteCard>
          <SiteCard title="Visão" elevation="low">
            <p>
              Consolidar-se como referência nacional, situando-se entre os cinco melhores órgãos delegados do Brasil, com base nos indicadores de desempenho e excelência do INMETRO.
            </p>
          </SiteCard>
        </div>
        <p className="about-note">Os textos de missão e visão foram reorganizados sem validação independente; confirmar se correspondem às formulações institucionais vigentes.</p>
      </section>

      <SiteDivider />

      <section className="about-section" aria-labelledby="competencias-title">
        <div className="about-section-heading">
          <SiteTag value="Atuação institucional" severity="info" />
          <h2 id="competencias-title">Competências e atribuições</h2>
          <p>O conteúdo fornecido organiza as atribuições em atividades fiscalizatórias e de cooperação técnica.</p>
        </div>
        <h3 className="about-subheading">Execução operacional e fiscalizatória</h3>
        <div className="about-card-grid">
          {responsibilities.map((item) => (
            <SiteCard key={item.title} title={item.title} elevation="low">
              <p>{item.text}</p>
            </SiteCard>
          ))}
        </div>
        <div className="about-cooperation">
          <SiteCard title="Cooperação e desenvolvimento" elevation="low">
            <p>
              Conforme o texto de referência, o Instituto também promove atividades técnico-científicas decorrentes de acordos, convênios e contratos, incluindo transferência de tecnologia e execução de programas nacionais de Metrologia Legal e Qualidade Industrial.
            </p>
          </SiteCard>
        </div>
        <SiteMessage
          severity="warn"
          text="A descrição de competências é uma transcrição organizada do material recebido, não um parecer jurídico. A redação final deve ser confrontada com a legislação e os atos de delegação vigentes."
        />
      </section>

      <SiteDivider />

      <section className="about-practice" aria-labelledby="pratica-title">
        <SiteTag value="Na prática" severity="success" />
        <h2 id="pratica-title">Confiança nas medidas e proteção nas relações de consumo</h2>
        <blockquote>
          “Garantir que um quilo seja exatamente um quilo e que um litro seja exatamente um litro não é apenas uma tarefa técnica, é um ato de justiça social e proteção econômica para todos os pernambucanos.”
        </blockquote>
        <p className="about-note">Frase reproduzida do conteúdo de referência fornecido; confirmar sua autoria e aprovação institucional antes de atribuí-la oficialmente.</p>
      </section>

      <SiteDivider />

      <section className="about-next-steps">
        <h2>Conheça mais sobre o IPEM-PE</h2>
        <p>Acesse outras páginas institucionais do portal.</p>
        <div className="about-actions">
          <SiteButton label="História" href="/historia" outlined />
          <SiteButton label="Quem é Quem" href="/diretoria" outlined />
          <SiteButton label="Transparência" href="/transparencia" />
        </div>
      </section>
    </main>
  );
}
