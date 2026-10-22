import type { Metadata } from "next";
import SiteCard from "@/components/SiteCard";
import SiteMessage from "@/components/SiteMessage";
import SiteTag from "@/components/SiteTag";
import SiteButton from "@/components/SiteButton";

export const metadata: Metadata = {
  title: "Lei Geral de Proteção de Dados Pessoais (LGPD) | IPEM-PE",
  description: "Informações sobre proteção de dados pessoais, direitos dos titulares e canais indicados pelo IPEM-PE.",
};

export default function LgpdPage() {
  return (
    <main id="conteudo" className="container section-block lgpd-page">
      <header className="lgpd-heading">
        <p className="eyebrow">Transparência e proteção de dados</p>
        <h1>Lei Geral de Proteção de Dados Pessoais (LGPD)</h1>
        <p className="page-intro">A proteção de dados pessoais é importante para a confiança no serviço público. Nas atividades de metrologia e fiscalização, o tratamento de informações deve observar a legislação aplicável e as finalidades institucionais legítimas.</p>
      </header>

      <SiteMessage severity="warn" text="Antes da publicação, confirme com a área responsável se os dados da pessoa encarregada, o telefone, o procedimento de atendimento e as orientações sobre o Fala.BR continuam vigentes. Esta página reproduz e reorganiza as informações do conteúdo de referência fornecido; não constitui validação jurídica ou institucional dessas informações." />

      <section className="lgpd-section" aria-labelledby="lgpd-comissao">
        <div className="lgpd-section-heading">
          <SiteTag value="Governança e contato" severity="info" />
          <h2 id="lgpd-comissao">Comissão de LGPD no IPEM-PE</h2>
          <p>O conteúdo institucional de referência identifica a seguinte pessoa como encarregada pelo tratamento de dados pessoais.</p>
        </div>
        <div className="lgpd-contact-grid">
          <SiteCard title="Encarregada pelo Tratamento de Dados (DPO)" subtitle="Contato informado na página de referência" elevation="low">
            <p className="lgpd-contact-name">Roberta Carneiro Simões Buarque de Gusmão</p>
            <dl className="lgpd-contact-details">
              <div><dt>E-mail</dt><dd><a href="mailto:robertagusmao@ipem.pe.gov.br">robertagusmao@ipem.pe.gov.br</a></dd></div>
              <div><dt>Telefone</dt><dd><a href="tel:+558131844700">(81) 3184-4700</a></dd></div>
            </dl>
          </SiteCard>
          <div className="lgpd-contact-note">
            <h3>Tratamento de dados pessoais</h3>
            <p>Ao coletar ou utilizar dados pessoais, órgãos públicos devem observar os princípios e as regras previstos na Lei nº 13.709/2018, considerando a finalidade do tratamento, a necessidade dos dados e os direitos dos titulares.</p>
            <a href="https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm" target="_blank" rel="noreferrer">Consultar a Lei nº 13.709/2018 no Planalto ↗</a>
          </div>
        </div>
      </section>

      <section className="lgpd-section" aria-labelledby="lgpd-sgi">
        <div className="lgpd-section-heading">
          <SiteTag value="Sistemas e fiscalização" severity="info" />
          <h2 id="lgpd-sgi">LGPD e o Sistema de Gestão Integrado (SGI)</h2>
          <p>A página de referência menciona o uso do Sistema de Gestão Integrado (SGI) e do aplicativo SGI Móvel nas atividades de fiscalização. As informações operacionais abaixo devem ser confirmadas pela equipe responsável antes da publicação.</p>
        </div>
        <div className="lgpd-grid">
          <SiteCard title="Finalidade específica" subtitle="Por que os dados são tratados" elevation="low">
            <p>O conteúdo de referência informa que os dados são coletados para o exercício das competências legais de fiscalização e verificação metrológica.</p>
          </SiteCard>
          <SiteCard title="Segurança da informação" subtitle="Proteção e integridade" elevation="low">
            <p>O tratamento de dados deve observar medidas de segurança e prevenção adequadas. As medidas técnicas efetivamente adotadas nos sistemas precisam ser descritas e validadas pela área responsável.</p>
          </SiteCard>
          <SiteCard title="Transparência" subtitle="Informação ao titular" elevation="low">
            <p>As pessoas devem receber informações claras, conforme a legislação aplicável, sobre o tratamento de seus dados pessoais e os canais disponíveis para exercer seus direitos.</p>
          </SiteCard>
        </div>
      </section>

      <section className="lgpd-section" aria-labelledby="lgpd-direitos">
        <div className="lgpd-section-heading">
          <SiteTag value="Direitos do titular" severity="info" />
          <h2 id="lgpd-direitos">Seus direitos como titular de dados</h2>
          <p>A Lei nº 13.709/2018 (LGPD) prevê direitos relacionados ao tratamento de dados pessoais. O exercício de cada direito depende das condições e exceções previstas na legislação.</p>
        </div>
        <div className="lgpd-rights-table-wrap">
          <table className="lgpd-rights-table">
            <thead><tr><th scope="col">Direito</th><th scope="col">O que significa</th></tr></thead>
            <tbody>
              <tr><th scope="row">Confirmação e acesso</th><td>Solicitar confirmação da existência de tratamento e acesso aos dados pessoais, nos termos da lei.</td></tr>
              <tr><th scope="row">Correção</th><td>Solicitar a correção de dados incompletos, inexatos ou desatualizados.</td></tr>
              <tr><th scope="row">Eliminação</th><td>Solicitar a eliminação de dados tratados com consentimento, observadas as hipóteses e exceções legais aplicáveis.</td></tr>
              <tr><th scope="row">Informação sobre compartilhamento</th><td>Solicitar informações sobre entidades públicas e privadas com as quais os dados podem ser compartilhados, conforme a LGPD.</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lgpd-request" aria-labelledby="lgpd-request-title">
        <div className="lgpd-request-symbol" aria-hidden="true">↗</div>
        <div>
          <SiteTag value="Canais de atendimento" severity="info" />
          <h2 id="lgpd-request-title">Como encaminhar uma solicitação</h2>
          <p>O conteúdo de referência indica a plataforma Fala.BR como canal para solicitações e dúvidas. Antes de orientar o cidadão a selecionar uma categoria específica, confirme com o IPEM-PE qual fluxo deve ser utilizado para pedidos relacionados a dados pessoais.</p>
          <ol>
            <li>Acesse a plataforma Fala.BR pelo link oficial.</li>
            <li>Consulte as opções disponíveis e as orientações do órgão para registrar a manifestação ou solicitação.</li>
            <li>Se necessário, utilize os contatos institucionais da pessoa encarregada, após confirmação de que permanecem atualizados.</li>
          </ol>
          <div className="lgpd-actions">
            <SiteButton label="Acessar Fala.BR" href="https://falabr.cgu.gov.br/" />
            <SiteButton label="Consultar a LGPD no Planalto" href="https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm" outlined />
          </div>
        </div>
      </section>
    </main>
  );
}
