import type { Metadata } from "next";
import SiteDivider from "@/components/SiteDivider";
import SiteMessage from "@/components/SiteMessage";

export const metadata: Metadata = {
  title: "Área Principal da Transparência | IPEM-PE",
  description: "Acesso à informação institucional e aos principais conteúdos do Portal da Transparência relacionados ao IPEM-PE.",
};

const portalLinks = [
  { title: "Responsabilidade fiscal", href: "https://transparencia.pe.gov.br/responsabilidade-fiscal/", description: "Consulte a área de responsabilidade fiscal do Portal da Transparência de Pernambuco." },
  { title: "Fiscalização e controle", href: "https://transparencia.pe.gov.br/gestao-estadual/fiscalizacao-e-controle/", description: "Acesse informações estaduais sobre fiscalização e controle." },
  { title: "Transferências", href: "https://transparencia.pe.gov.br/despesas/transferencias/", description: "Consulte informações sobre transferências de recursos." },
  { title: "Receitas", href: "https://transparencia.pe.gov.br/receitas/", description: "Acesse informações sobre receitas públicas estaduais." },
  { title: "Despesas", href: "https://transparencia.pe.gov.br/despesas/menu-despesas/", description: "Consulte informações sobre despesas públicas." },
  { title: "Licitações e contratos", href: "https://transparencia.pe.gov.br/licitacoes-e-contratos/", description: "Acesse dados sobre licitações e contratos." },
  { title: "Obras", href: "https://transparencia.pe.gov.br/despesas/obras/", description: "Consulte a área de obras do Portal da Transparência." },
  { title: "Patrimônio público", href: "https://transparencia.pe.gov.br/gestao-estadual/patrimonio-publico/", description: "Acesse informações sobre patrimônio público." },
  { title: "Recursos humanos", href: "https://transparencia.pe.gov.br/recursos-humanos/", description: "Consulte informações de recursos humanos disponibilizadas pelo Estado." },
  { title: "Acesso à informação", href: "https://transparencia.pe.gov.br/participacao-cidada-pe/acesso-a-informacao/", description: "Saiba como acessar informações públicas estaduais." },
  { title: "Contratos", href: "https://transparencia.pe.gov.br/licitacoes-e-contratos/menu-contratos/", description: "Acesse a área de contratos do Portal da Transparência." },
  { title: "Ouvidoria no Portal da Transparência", href: "https://transparencia.pe.gov.br/participacao-cidada-pe/ouvidoria/", description: "Acesse a seção de Ouvidoria do Portal da Transparência." },
];

const institutionalLinks = [
  { title: "Estrutura organizacional", href: "https://www.ipem.pe.gov.br/organograma/", description: "Conheça a estrutura organizacional do IPEM-PE." },
  { title: "Quem é quem", href: "https://www.ipem.pe.gov.br/diretoria/", description: "Consulte os ocupantes dos principais cargos e os contatos publicados pelo Instituto." },
  { title: "Carta de Serviços ao Usuário", href: "https://www.pecidadao.pe.gov.br/busca-geral/ipem", description: "Consulte os serviços do IPEM-PE no Portal do Cidadão de Pernambuco." },
  { title: "Perguntas frequentes", href: "https://www.ipem.pe.gov.br/duvidas-frequentes/", description: "Acesse as dúvidas frequentes do portal institucional." },
];

const legislation = [
  { title: "Lei nº 6.141/1968", href: "https://legis.alepe.pe.gov.br/texto.aspx?tiponorma=1&numero=6141&complemento=0&ano=1968&tipo=&url=", description: "Lei de criação do IPEM-PE, conforme informado no conteúdo de referência." },
  { title: "Decreto nº 35.521/2010", href: "https://legis.alepe.pe.gov.br/texto.aspx?id=16215", description: "Regulamento anterior do IPEM-PE; o conteúdo fornecido informa que foi revogado." },
  { title: "Decreto nº 58.506/2025", href: "https://legis.alepe.pe.gov.br/texto.aspx?tiponorma=6&numero=58506&complemento=0&ano=2025&tipo=&url=", description: "O conteúdo de referência informa que revogou o Decreto nº 35.521/2010." },
  { title: "Lei Complementar nº 199/2011", href: "https://legis.alepe.pe.gov.br/texto.aspx?id=3433", description: "Plano de Cargos e Carreiras, conforme o conteúdo de referência." },
  { title: "Decreto nº 46.854/2018", href: "https://legis.alepe.pe.gov.br/texto.aspx?id=41240&tipo=TEXTOORIGINAL", description: "Código de Conduta da Alta Administração do Poder Executivo Estadual, segundo o texto fornecido." },
  { title: "Decreto nº 46.852/2018", href: "https://legis.alepe.pe.gov.br/texto.aspx?id=41238&tipo=TEXTOORIGINAL", description: "Código de Ética dos Agentes Públicos da Administração Direta e Indireta do Poder Executivo Estadual, segundo o texto fornecido." },
];

const csvFiles = [
  { title: "Mapa de Contratos 2024 (CSV)", href: "https://www.ipem.pe.gov.br/wp-content/uploads/2025/11/Mapa-Contratos-2024.csv" },
  { title: "Mapa de Contratos 2023 (CSV)", href: "https://www.ipem.pe.gov.br/wp-content/uploads/2025/11/Mapa-Contratos-2023.csv" },
  { title: "Mapa de Contratos 2022 (CSV)", href: "https://www.ipem.pe.gov.br/wp-content/uploads/2025/11/Mapa-Contratos-2022.csv" },
];

function LinkCards({ items }: { items: { title: string; href: string; description: string }[] }) {
  return <div className="transparency-links-grid">{items.map((item) => <article className="transparency-link-card" key={item.href}>
    <h3>{item.title}</h3><p>{item.description}</p>
    <a href={item.href} target="_blank" rel="noreferrer">Acessar informação <span aria-hidden="true">↗</span></a>
  </article>)}</div>;
}

export default function AreaPrincipalTransparenciaPage() {
  return <main id="conteudo" className="container section-block transparency-page">
    <p className="eyebrow">Acesso à informação</p>
    <h1>Área Principal da Transparência</h1>
    <p className="page-intro">Reúna aqui informações institucionais, legislação, canais de atendimento e atalhos para dados públicos do Estado de Pernambuco relacionados ao IPEM-PE.</p>
    <SiteMessage severity="info" text="Página reconstruída a partir do HTML fornecido. Antes de publicar, a área responsável deve confirmar a vigência das normas, a estrutura administrativa, os dados de contato, as declarações sobre vínculos e conselhos, e a disponibilidade dos documentos e links." />

    <section className="transparency-section" aria-labelledby="identidade"><h2 id="identidade">Identidade institucional</h2>
      <p>O conteúdo de referência descreve o IPEM-PE como autarquia estadual com personalidade jurídica própria de direito público, criada pela Lei nº 6.141, de 23/09/1968, com autonomia administrativa e financeira, vinculada tecnicamente ao Inmetro e, administrativamente, à Secretaria de Justiça e Direitos Humanos e Prevenção à Violência, conforme a Lei nº 18.139, de 18 de janeiro de 2023.</p>
      <div className="transparency-facts-grid">
        <article><h3>Missão</h3><p>Assegurar à sociedade uma melhor qualidade de vida, utilizando a metrologia e a qualidade na fiscalização de instrumentos, produtos e serviços, no âmbito do Estado de Pernambuco.</p></article>
        <article><h3>Visão</h3><p>Desenvolver e adotar um planejamento estratégico para situar o Instituto entre os cinco melhores do Brasil na área de pesos e medidas, com base nos referenciais utilizados pelo Inmetro.</p></article>
        <article><h3>Entidades vinculadas</h3><p>O conteúdo de referência informa que o IPEM-PE não possui entidades vinculadas.</p></article>
        <article><h3>Fundos vinculados</h3><p>O conteúdo de referência informa que o IPEM-PE não possui fundos vinculados.</p></article>
      </div>
    </section>

    <SiteDivider />
    <section className="transparency-section" aria-labelledby="estrutura"><h2 id="estrutura">Estrutura, gestão e serviços</h2><LinkCards items={institutionalLinks} /></section>

    <SiteDivider />
    <section className="transparency-section" aria-labelledby="competencias"><h2 id="competencias">Competências e atribuições</h2>
      <p>Conforme o texto fornecido, cabe ao IPEM-PE, como órgão delegado do Inmetro, executar no âmbito estadual serviços de registro, aferição, fiscalização, inspeção, controle de qualidade, exame laboratorial, certificação, apreensão, guarda, interdição, auto de infração, aplicação de penalidade, julgamento, execução de dívida ativa e outros serviços técnicos, administrativos e operacionais relativos à Metrologia Legal, Normalização e Qualidade Industrial.</p>
      <p>O material também atribui ao Instituto a promoção de atividades de metrologia, normalização e qualidade industrial decorrentes de acordos, convênios, contratos, delegações e transferências de programas e atribuições. <strong>Validar a redação e a base legal com a área jurídica antes da publicação.</strong></p>
      <h3>Legislação citada no conteúdo de referência</h3><LinkCards items={legislation} />
    </section>

    <SiteDivider />
    <section className="transparency-section" aria-labelledby="integridade"><h2 id="integridade">Ética e integridade</h2>
      <p>O conteúdo de referência aponta os decretos estaduais relativos ao Código de Conduta da Alta Administração e ao Código de Ética dos Agentes Públicos.</p>
      <article className="transparency-feature-card"><h3>Plano de Integridade do IPEM-PE</h3><p>O texto original informa que o plano apresenta ações promovidas pela Comissão de Gestão da Integridade e formas de monitoramento e prevenção previstas para a instituição.</p><a href="https://www.ipem.pe.gov.br/wp-content/uploads/2026/05/Plano-de-Integridade-Ipem-PE-compactado.pdf" target="_blank" rel="noreferrer">Consultar Plano de Integridade (PDF) ↗</a></article>
    </section>

    <SiteDivider />
    <section className="transparency-section" aria-labelledby="contatos"><h2 id="contatos">Horário, endereços e telefones</h2>
      <p><strong>Horário informado no conteúdo de referência:</strong> segunda a sexta-feira, das 8h às 14h, exceto feriados.</p>
      <div className="transparency-facts-grid transparency-address-grid">
        <article><h3>Sede — Recife</h3><p>Av. Prof. Luiz Freire, 900, Recife – PE</p><p><strong>Telefone:</strong> (81) 3184-4700</p></article>
        <article><h3>Ipojuca</h3><p>Avenida Portuária, s/n, Engenho Massangana, PE-60 Km 10 – Suape, Ipojuca – PE</p><p><strong>Telefone:</strong> (81) 3561-1990</p></article>
        <article><h3>Caruaru</h3><p>Rua Dalton Santos, 319, São Francisco, Caruaru – PE</p><p><strong>Telefone:</strong> (81) 3721-3615</p></article>
        <article><h3>Petrolina</h3><p>Avenida das Nações, s/n, Centro Agropecuário, Petrolina – PE</p><p><strong>Telefone:</strong> (87) 3861-6629</p></article>
      </div>
    </section>

    <SiteDivider />
    <section className="transparency-section" aria-labelledby="cargos"><h2 id="cargos">Plano de cargos e carreiras</h2><p>O conteúdo original indica a Lei Complementar nº 199/2011 como referência para o Plano de Cargos e Carreiras.</p><p><a href="https://legis.alepe.pe.gov.br/texto.aspx?id=3433" target="_blank" rel="noreferrer">Consultar Lei Complementar nº 199/2011 ↗</a></p></section>

    <SiteDivider />
    <section className="transparency-section" aria-labelledby="lgpd"><h2 id="lgpd">Lei Geral de Proteção de Dados Pessoais (LGPD)</h2>
      <div className="transparency-feature-card"><p><strong>Encarregado informado no conteúdo original:</strong> José Edson</p><p><strong>E-mail:</strong> <a href="mailto:cpd@ipem.pe.gov.br">cpd@ipem.pe.gov.br</a></p><p><strong>Telefone:</strong> <a href="tel:+558131844739">(81) 3184-4739</a></p></div>
    </section>

    <SiteDivider />
    <section className="transparency-section" aria-labelledby="ouvidoria"><h2 id="ouvidoria">Ouvidoria</h2><p>A Ouvidoria é apresentada no conteúdo de referência como canal para sugestões, elogios, pedidos de informação, sinalização de problemas e denúncias.</p><div className="transparency-action-row"><a className="button button-primary" href="https://www.ipem.pe.gov.br/formulario-de-denuncia/" target="_blank" rel="noreferrer">Acessar Ouvidoria do IPEM-PE ↗</a><a className="button button-secondary" href="https://transparencia.pe.gov.br/participacao-cidada-pe/ouvidoria/" target="_blank" rel="noreferrer">Ouvidoria no Portal da Transparência ↗</a></div></section>

    <SiteDivider />
    <section className="transparency-section" aria-labelledby="redes"><h2 id="redes">Redes sociais digitais</h2><div className="transparency-social-links"><a href="https://www.instagram.com/ipempe/" target="_blank" rel="noreferrer">Instagram do IPEM-PE ↗</a><a href="https://www.youtube.com/c/IpemPernambuco" target="_blank" rel="noreferrer">Canal do IPEM-PE no YouTube ↗</a></div></section>

    <SiteDivider />
    <section className="transparency-section" aria-labelledby="portal"><h2 id="portal">Acesso ao Portal da Transparência de Pernambuco</h2><p>Os links abaixo constavam como atalhos gráficos na página original. Foram reorganizados em cartões com títulos textuais para facilitar o uso em celulares e leitores de tela.</p><div className="transparency-links-grid">{portalLinks.map((item) => <article className="transparency-link-card" key={item.href}><h3>{item.title}</h3><p>{item.description}</p><a href={item.href} target="_blank" rel="noreferrer">Consultar no portal estadual ↗</a></article>)}</div></section>

    <SiteDivider />
    <section className="transparency-section" aria-labelledby="mapas"><h2 id="mapas">Mapas de contratos</h2><p>O HTML fornecido continha links para os arquivos CSV abaixo. Confirmar se continuam atualizados e disponíveis.</p><ul className="transparency-file-list">{csvFiles.map((file) => <li key={file.href}><a href={file.href} target="_blank" rel="noreferrer">{file.title} ↗</a></li>)}</ul></section>

    <SiteDivider />
    <section className="transparency-section" aria-labelledby="conselhos"><h2 id="conselhos">Conselhos</h2><p>O conteúdo original informa que o IPEM-PE não possui conselhos ativos no momento. Confirmar essa informação com a área responsável antes de publicar.</p></section>
  </main>;
}
