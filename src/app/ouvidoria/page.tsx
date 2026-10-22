import type { Metadata } from "next";
import SiteMessage from "@/components/SiteMessage";

export const metadata: Metadata = {
  title: "Ouvidoria | IPEM-PE",
  description: "Canais oficiais da Ouvidoria do IPEM-PE, legislação relacionada e relatórios anuais.",
};

const reports = [
  { year: "2025", management: ["Relatório Anual de Ouvidoria 2025", "https://www.ipem.pe.gov.br/wp-content/uploads/2026/04/Relatório-Anual-de-Ouvidoria-2025-IPEM.pdf"], satisfaction: null, pai: null },
  { year: "2024", management: ["Relatório de Gestão Anual 2024", "https://www.ipem.pe.gov.br/wp-content/uploads/2026/04/Relatório-de-Gestão-Anual-2024-IPEMPE.pdf"], satisfaction: ["Pesquisa de Satisfação 2024", "https://www.ipem.pe.gov.br/wp-content/uploads/2025/07/4-Pesquisa-de-Satisfação-2024.pdf"], pai: ["PAI 2024", "https://www.ipem.pe.gov.br/wp-content/uploads/2026/04/PAI-2024.pdf"] },
  { year: "2023", management: ["Relatório de Gestão Anual 2023", "https://www.ipem.pe.gov.br/wp-content/uploads/2025/03/Relatório-de-Gestão-Anual-2023-IPEMPE.pdf"], satisfaction: ["Pesquisa de Satisfação 2023", "https://www.ipem.pe.gov.br/wp-content/uploads/2024/07/Pesquisa-de-Satisfacao-_-Exercicio-2023-_-IPEM.pdf"], pai: ["Relatório Anual de Acesso à Informação 2023", "https://www.ipem.pe.gov.br/wp-content/uploads/2024/08/Relatório-Anual-de-Acesso-à-Informação-2023.pdf"] },
  { year: "2022", management: ["Relatório de Gestão Anual 2022", "https://www.ipem.pe.gov.br/wp-content/uploads/2025/03/Relatório-de-Gestão-Anual-2022-IPEMPE.pdf"], satisfaction: null, pai: ["Relatório Anual de Acesso à Informação 2022", "https://www.ipem.pe.gov.br/wp-content/uploads/2024/08/Relatorio-Anual-de-Acesso-a-Informacao-_-2022-.pdf"] },
  { year: "2021", management: ["Relatório de Gestão Anual 2021", "https://www.ipem.pe.gov.br/wp-content/uploads/2025/03/Relatório-de-Gestão-Anual-2021-IPEMPE.pdf"], satisfaction: null, pai: ["Relatório Anual de Acesso à Informação 2021", "https://www.ipem.pe.gov.br/wp-content/uploads/2024/08/Relatorio-Anual-de-Acesso-a-Informacao-_-2021.pdf"] },
] as const;

function ReportLink({ item }: { item: readonly [string, string] | null }) {
  if (!item) return <span className="ombudsman-no-report">—</span>;
  return <a href={item[1]} target="_blank" rel="noopener noreferrer" aria-label={`Abrir ${item[0]} (PDF)`}>📄 <span className="ombudsman-report-name">{item[0]}</span></a>;
}

export default function OuvidoriaPage() {
  return (
    <main id="conteudo" className="container section-block ombudsman-page">
      <header className="ombudsman-heading">
        <p className="eyebrow">Atendimento ao cidadão</p>
        <h1>Ouvidoria</h1>
        <p className="page-intro">Um canal para registrar manifestações, apresentar pedidos de informação e consultar documentos relacionados à atuação da Ouvidoria do IPEM-PE.</p>
      </header>

      <section className="ombudsman-intro" aria-labelledby="ombudsman-intro-title">
        <div className="ombudsman-intro-icon" aria-hidden="true">💬</div>
        <div>
          <p className="eyebrow">IPEM-PE</p>
          <h2 id="ombudsman-intro-title">Sua manifestação é importante</h2>
          <p>Utilize os canais oficiais para registrar reclamações, denúncias, solicitações, sugestões e elogios. Também estão disponíveis os canais indicados para pedidos de acesso à informação (LAI) e assuntos relacionados à proteção de dados pessoais (LGPD).</p>
          <div className="ombudsman-alert"><strong>Para registrar uma denúncia:</strong> descreva os fatos com o máximo de detalhes que puder, como datas, local, endereço e identificação de pessoas ou empresas envolvidas. Se possível, reúna documentos que ajudem a analisar o relato.</div>
        </div>
      </section>

      <section className="ombudsman-section" aria-labelledby="ombudsman-online-title">
        <p className="eyebrow">Canais eletrônicos</p>
        <h2 id="ombudsman-online-title">Registre sua manifestação</h2>
        <p className="section-description">Escolha o sistema adequado ao assunto. Os registros são realizados nas plataformas externas oficiais.</p>
        <div className="ombudsman-channel-grid">
          <article className="ombudsman-channel-card">
            <div className="ombudsman-channel-logo ouve-logo" aria-hidden="true">Ouve.PE</div>
            <h3>Ouve.PE</h3>
            <p>Canal de atendimento do Governo de Pernambuco para registrar manifestações direcionadas ao órgão.</p>
            <a className="ombudsman-button" href="https://ouve.pe.gov.br/modalidades/2/tipos_atendimentos?orgao=38" target="_blank" rel="noopener noreferrer">Acessar Ouve.PE <span aria-hidden="true">↗</span></a>
          </article>
          <article className="ombudsman-channel-card">
            <div className="ombudsman-channel-logo falabr-logo" aria-hidden="true">Fala.BR</div>
            <h3>Fala.BR</h3>
            <p>Plataforma indicada na página de referência para acesso à informação e registro de manifestações.</p>
            <a className="ombudsman-button ombudsman-button-secondary" href="https://www.gov.br/acessoainformacao/pt-br/falabr" target="_blank" rel="noopener noreferrer">Acessar Fala.BR <span aria-hidden="true">↗</span></a>
          </article>
        </div>
      </section>

      <section className="ombudsman-contact" aria-labelledby="ombudsman-contact-title">
        <div className="ombudsman-contact-title"><span aria-hidden="true">☎</span><div><p className="eyebrow">Atendimento direto</p><h2 id="ombudsman-contact-title">Contato da Ouvidoria</h2></div></div>
        <div className="ombudsman-contact-grid">
          <div><h3>Ouvidor informado na página de referência</h3><p>Jose Jonathan Soares dos Santos</p></div>
          <div><h3>Telefones</h3><p><a href="tel:+558131844740">(81) 3184-4740</a><br /><a href="tel:08000811526">0800-081-1526</a></p></div>
          <div><h3>E-mail</h3><p><a href="mailto:ouvidoria@ipem.pe.gov.br">ouvidoria@ipem.pe.gov.br</a></p></div>
        </div>
        <p className="ombudsman-appointment">Para atendimento presencial, a página de referência orienta solicitar agendamento por e-mail, informando disponibilidade e telefone para contato. Confirme previamente se esse procedimento continua vigente.</p>
      </section>

      <section className="ombudsman-section" aria-labelledby="ombudsman-laws-title">
        <p className="eyebrow">Referências</p><h2 id="ombudsman-laws-title">Legislação e proteção de dados</h2>
        <div className="ombudsman-law-grid">
          <a className="ombudsman-law-link" href="https://legis.alepe.pe.gov.br/texto.aspx?id=2576&amp;tipo=TEXTOATUALIZADO" target="_blank" rel="noopener noreferrer"><span aria-hidden="true">⚖</span><span><strong>Lei de Acesso à Informação</strong><small>Consultar o texto legal na Alepe ↗</small></span></a>
          <a className="ombudsman-law-link" href="https://legis.alepe.pe.gov.br/texto.aspx?tiponorma=1&amp;numero=16420&amp;ano=2018" target="_blank" rel="noopener noreferrer"><span aria-hidden="true">⚖</span><span><strong>Código de Defesa do Usuário</strong><small>Consultar legislação estadual ↗</small></span></a>
          <a className="ombudsman-law-link" href="https://www.lai.pe.gov.br/" target="_blank" rel="noopener noreferrer"><span aria-hidden="true">🔐</span><span><strong>Portal LAI de Pernambuco</strong><small>Acesso à informação e orientações ↗</small></span></a>
        </div>
      </section>

      <section className="ombudsman-section" aria-labelledby="ombudsman-reports-title">
        <p className="eyebrow">Prestação de contas</p><h2 id="ombudsman-reports-title">Transparência e relatórios</h2>
        <p className="section-description">Documentos vinculados na página institucional de referência. Selecione o ícone de PDF para abrir o arquivo correspondente.</p>
        <div className="ombudsman-table-wrap"><table className="ombudsman-table"><thead><tr><th scope="col">Ano</th><th scope="col">Gestão / Ouvidoria</th><th scope="col">Satisfação</th><th scope="col">Acesso à informação (PAI)</th></tr></thead><tbody>
          {reports.map((report) => <tr key={report.year}><th scope="row">{report.year}</th><td><ReportLink item={report.management} /></td><td><ReportLink item={report.satisfaction} /></td><td><ReportLink item={report.pai} /></td></tr>)}
        </tbody></table></div>
      </section>

      <SiteMessage severity="warn" text="Esta página foi organizada a partir do HTML institucional fornecido. Antes da publicação, valide com a Ouvidoria o nome do responsável, telefones, e-mail, plataformas, procedimento de atendimento presencial, classificação dos relatórios e disponibilidade dos PDFs. A página não recebe nem protocola manifestações diretamente." />
    </main>
  );
}
