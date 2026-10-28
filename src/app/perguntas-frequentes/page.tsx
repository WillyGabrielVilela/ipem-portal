import type { Metadata } from "next";
import SiteMessage from "@/components/SiteMessage";

export const metadata: Metadata = {
  title: "Perguntas Frequentes | IPEM-PE",
  description: "Respostas a dúvidas frequentes sobre metrologia, produtos regulamentados e atuação do IPEM-PE.",
};

const questions = [
  {
    number: "01",
    icon: "🔎",
    question: "O que faz o IPEM Pernambuco?",
    answer: <>
      <p>De acordo com o conteúdo da página institucional de referência, o IPEM-PE é responsável por:</p>
      <ul>
        <li>Fiscalizar instrumentos de medição, como balanças, bombas de combustível e taxímetros.</li>
        <li>Verificar produtos regulamentados, como brinquedos, eletrodomésticos e fios.</li>
        <li>Atuar na proteção do consumidor contra irregularidades em medições.</li>
      </ul>
    </>,
  },
  {
    number: "02",
    icon: "⚖️",
    question: "Como saber se uma balança está correta?",
    answer: <>
      <div className="faq-image-gallery" aria-label="Imagens ilustrativas de balanças">
        <figure><img src="https://central.to.gov.br/image/174756?h=465&amp;w=753" alt="Balança de uso comercial" loading="lazy" decoding="async" /><figcaption>Balança de uso comercial</figcaption></figure>
        <figure><img src="https://www.ipem.sp.gov.br/images/2023/09/06/IpemSPAracatuba05092023_large.jpg" alt="Verificação de balança por equipe de fiscalização" loading="lazy" decoding="async" /><figcaption>Verificação de balança</figcaption></figure>
        <figure><img src="https://ipem.es.gov.br/Media/ipem/_Profiles/391f4fa3/b41b683c/Balan%C3%A7as2.png?v=638721987427241170" alt="Balanças utilizadas em atividades comerciais" loading="lazy" decoding="async" /><figcaption>Instrumentos de pesagem</figcaption></figure>
        <figure><img src="https://http2.mlstatic.com/D_NQ_NP_786212-MLB107631564908_032026-O.webp" alt="Exemplo ilustrativo de balança comercial" loading="lazy" decoding="async" /><figcaption>Exemplo de balança comercial</figcaption></figure>
      </div>
      <ul>
        <li>Verifique a identificação e o selo de verificação aplicáveis ao instrumento.</li>
        <li>Observe se há lacres e se eles aparentam estar íntegros.</li>
        <li>Confira se o visor está zerado antes da pesagem.</li>
      </ul>
      <p>Se suspeitar de irregularidade, registre uma denúncia pelos canais oficiais do IPEM-PE. A validade dos selos e os procedimentos aplicáveis podem variar conforme o instrumento.</p>
    </>,
  },
  {
    number: "03",
    icon: "⛽",
    question: "Como saber se o posto está fornecendo combustível corretamente?",
    answer: <>
      <div className="faq-image-gallery" aria-label="Imagens ilustrativas de bombas de combustível">
        <figure><img src="https://cdn.awsli.com.br/2500x2500/321/321793/produto/63190485/c675879eb3.jpg" alt="Bomba de combustível em posto" loading="lazy" decoding="async" /><figcaption>Bomba de combustível</figcaption></figure>
        <figure><img src="https://www.gov.br/inmetro/pt-br/centrais-de-conteudo/noticias/operacao-petroleo-inmetro-intensifica-fiscalizacao-em-postos-de-combustiveis/palestra.png/@@images/7086f9b8-e6f1-49f8-95e3-4852ffc58e7e.png" alt="Ação de orientação ou fiscalização relacionada a combustíveis" loading="lazy" decoding="async" /><figcaption>Fiscalização de combustíveis</figcaption></figure>
        <figure><img src="https://jtinoticias.com.br/imagem/0/9087/bomba-de-combustivel-tem-que-ter-o-selo-subsequente-do-inmetro.jpg" alt="Identificação de verificação em bomba de combustível" loading="lazy" decoding="async" /><figcaption>Selo de verificação</figcaption></figure>
        <figure><img src="https://www.dmanapolis.com.br/images/noticias/52497/3336c1c3f19ec92cc0339a68f0bf4ad1.jpeg" alt="Bomba de abastecimento de combustível" loading="lazy" decoding="async" /><figcaption>Equipamento de abastecimento</figcaption></figure>
      </div>
      <ul>
        <li>Observe se a bomba possui identificação e selo de verificação válidos.</li>
        <li>O consumidor pode perguntar ao estabelecimento sobre a possibilidade de acompanhar um teste de volume com medida-padrão apropriada.</li>
        <li>Se houver suspeita de irregularidade na quantidade fornecida, reúna as informações do posto e registre uma denúncia.</li>
      </ul>
      <p>Os procedimentos e equipamentos utilizados devem seguir as regras metrológicas vigentes.</p>
    </>,
  },
  {
    number: "04",
    icon: "🧸",
    question: "Como identificar produtos certificados pelo Inmetro?",
    answer: <>
      <div className="faq-image-gallery" aria-label="Imagens ilustrativas de selos e identificação de produtos">
        <figure><img src="https://autodiscoverredirect.inmetro.gov.br/Consumidor/produtos/img/modeloSelo.gif" alt="Modelo ilustrativo de selo de identificação da conformidade" loading="lazy" decoding="async" /><figcaption>Selo de conformidade</figcaption></figure>
        <figure><img src="https://idec.org.br/arquivos/suaconta/etiqueta_refrigerador_2022.webp" alt="Etiqueta de informações de refrigerador" loading="lazy" decoding="async" /><figcaption>Etiqueta de produto</figcaption></figure>
        <figure><img src="https://pmkb.com.br/uploads/27459/inmetro-1.jpg" alt="Exemplo ilustrativo de identificação relacionada ao Inmetro" loading="lazy" decoding="async" /><figcaption>Identificação do produto</figcaption></figure>
        <figure><img src="https://www.inmetro.gov.br/qualidade/img/seloConformidadeCerflor.jpg" alt="Selo de conformidade Cerflor" loading="lazy" decoding="async" /><figcaption>Selo Cerflor</figcaption></figure>
      </div>
      <ul>
        <li>Procure o selo de identificação da conformidade quando ele for exigido para aquela categoria de produto.</li>
        <li>Confira as informações do fabricante, a identificação do produto e as instruções em português, quando aplicáveis.</li>
        <li>Desconfie de produtos sem identificação ou de procedência duvidosa.</li>
      </ul>
      <p>Nem todo produto exige certificação compulsória. Consulte as regras oficiais do Inmetro para a categoria específica.</p>
      <p><a href="https://www.gov.br/inmetro/pt-br" target="_blank" rel="noopener noreferrer">Consultar o portal oficial do Inmetro ↗</a></p>
    </>,
  },
  {
    number: "05",
    icon: "📢",
    question: "Como fazer uma denúncia ao IPEM-PE?",
    answer: <>
      <p>Utilize os canais oficiais de atendimento e ouvidoria do órgão. Para ajudar na análise, reúna, quando possível:</p>
      <ul>
        <li>Local da ocorrência e identificação do estabelecimento.</li>
        <li>Data e descrição objetiva do problema.</li>
        <li>Fotos, nota fiscal ou outros comprovantes relacionados à ocorrência.</li>
      </ul>
      <p><a href="/formulario-de-denuncia" target="_blank" rel="noopener noreferrer">Acessar o formulário de denúncia do IPEM-PE ↗</a></p>
    </>,
  },
  {
    number: "06",
    icon: "🧾",
    question: "O que fazer se fui prejudicado em uma compra?",
    answer: <>
      <ul>
        <li>Guarde a nota fiscal, o comprovante de pagamento e demais documentos.</li>
        <li>Se o problema envolver instrumento de medição ou produto sob competência do IPEM-PE, procure os canais oficiais do órgão.</li>
        <li>Para outros conflitos de consumo, também pode ser adequado procurar o Procon.</li>
      </ul>
      <p>A competência para tratar cada caso depende da natureza do problema.</p>
    </>,
  },
  {
    number: "07",
    icon: "🧪",
    question: "O que é verificação metrológica?",
    answer: <p>É um procedimento de avaliação de instrumento de medição para verificar se ele atende aos requisitos metrológicos aplicáveis. Conforme o tipo de instrumento e a regulamentação, pode envolver a análise do desempenho, das condições de uso e da identificação de verificação.</p>,
  },
  {
    number: "08",
    icon: "📅",
    question: "Com que frequência ocorre a fiscalização?",
    answer: <p>A frequência depende do instrumento ou produto, da regulamentação aplicável, do planejamento de fiscalização e de situações que demandem apuração. Também podem ocorrer ações motivadas por denúncias. Não há uma periodicidade única aplicável a todos os casos.</p>,
  },
  {
    number: "09",
    icon: "🚖",
    question: "Como funciona a verificação de taxímetros?",
    answer: <>
      <p>O taxímetro está sujeito a requisitos metrológicos e procedimentos de verificação específicos. Em caso de dúvida sobre a regularidade do instrumento ou sobre o valor cobrado, registre as informações da corrida e procure os canais oficiais do IPEM-PE.</p>
      <p>A tarifa aplicável é definida pelas autoridades competentes; consulte as regras locais vigentes.</p>
    </>,
  },
  {
    number: "10",
    icon: "⚡",
    question: "E quanto às contas de energia e água?",
    answer: <p>Se suspeitar de erro na medição de consumo, entre primeiro em contato com a concessionária responsável e solicite esclarecimentos sobre os procedimentos de verificação do medidor. Se a dúvida envolver a atuação metrológica do órgão, procure o atendimento oficial do IPEM-PE para orientação sobre o caso.</p>,
  },
  {
    number: "11",
    icon: "🛑",
    question: "O que acontece com empresas irregulares?",
    answer: <p>As medidas dependem da infração constatada e da legislação aplicável. Podem incluir autuação e outras sanções administrativas, observados o procedimento legal e o direito de defesa. As consequências específicas variam conforme o caso.</p>,
  },
  {
    number: "12",
    icon: "📚",
    question: "Por que isso é importante para o cidadão?",
    answer: <p>A fiscalização metrológica e a avaliação da conformidade contribuem para relações de consumo mais justas, medições confiáveis e maior segurança dos produtos regulamentados.</p>,
  },
];

export default function PerguntasFrequentesPage() {
  return (
    <main id="conteudo" className="container section-block faq-page">
      <header className="faq-heading">
        <p className="eyebrow">Atendimento ao cidadão</p>
        <h1>Perguntas Frequentes</h1>
        <p>Encontre orientações iniciais sobre a atuação do IPEM-PE, instrumentos de medição, produtos regulamentados e como comunicar possíveis irregularidades.</p>
      </header>

      <div className="faq-tools" aria-label="Orientação de uso">
        <span aria-hidden="true" className="faq-tools-icon">?</span>
        <p>Selecione uma pergunta para consultar a resposta. As orientações são informativas e não substituem a análise do caso concreto pelos canais oficiais.</p>
      </div>

      <section className="faq-list" aria-label="Lista de perguntas frequentes">
        {questions.map((item) => (
          <details className="faq-item" key={item.number}>
            <summary>
              <span className="faq-number">{item.number}</span>
              <span className="faq-question-icon" aria-hidden="true">{item.icon}</span>
              <span className="faq-question">{item.question}</span>
              <span className="faq-chevron" aria-hidden="true">＋</span>
            </summary>
            <div className="faq-answer">{item.answer}</div>
          </details>
        ))}
      </section>

      <section className="faq-contact" aria-labelledby="faq-contact-title">
        <div className="faq-contact-symbol" aria-hidden="true">✉</div>
        <div>
          <p className="eyebrow">Precisa de ajuda?</p>
          <h2 id="faq-contact-title">Não encontrou sua resposta?</h2>
          <p>Consulte os canais oficiais de atendimento ou envie uma denúncia quando houver suspeita de irregularidade.</p>
          <div className="faq-actions">
            <a className="faq-primary-link" href="/formulario-de-denuncia" target="_blank" rel="noopener noreferrer">Formulário de denúncia <span aria-hidden="true">↗</span></a>
            <a className="faq-secondary-link" href="https://servicos.rbmlq.gov.br/segundaviagru/" target="_blank" rel="noopener noreferrer">Portal de serviços ao cidadão <span aria-hidden="true">↗</span></a>
          </div>
        </div>
      </section>

      <SiteMessage severity="info" text="A página antiga contém orientações gerais, mas algumas afirmações podem depender da regulamentação e dos procedimentos vigentes. Antes da publicação oficial, a área técnica e o atendimento do IPEM-PE devem validar especialmente as instruções sobre teste de bombas de combustível, certificação de produtos, verificação de medidores de água e energia e canais de atendimento." />
    </main>
  );
}
