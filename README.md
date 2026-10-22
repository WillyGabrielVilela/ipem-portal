# IPEM-PE — Next.js para execução local

## Requisitos
- Node.js LTS compatível com a versão do Next.js instalada
- npm
- Acesso à internet na primeira instalação de dependências
- O build de `next/font/google` pode precisar acessar o Google Fonts; se a rede local bloquear isso, configurar fonte Inter local licenciada.

## Iniciar no Windows
1. Extraia o ZIP para uma pasta de trabalho.
2. Abra PowerShell ou Terminal dentro dessa pasta.
3. Execute:

```powershell
node --version
npm --version
npm install
npm run dev
```

4. Abra `http://127.0.0.1:3000`.

Para parar o servidor, pressione `Ctrl+C` no terminal.

## Verificação
```powershell
npm run typecheck
npm run lint
npm run build
```

## Atenção à biblioteca UI Gov PE
A instalação usa inicialmente as versões `latest` de `@uigovpe/components` e `@uigovpe/styles`. Antes de considerar o projeto homologável, conferir versões publicadas, peer dependencies e API da documentação oficial. O layout atual importa os estilos; ainda não utiliza todos os componentes oficiais nem configura `UiProvider`/`LayoutProvider`.

Se `npm install` ou `npm run build` falhar por incompatibilidade dos pacotes, guardar a mensagem completa do erro para ajustar as versões e a integração. Não remover os pacotes oficiais sem decisão técnica.

## Segurança
Este projeto é local e não altera o WordPress ou o site de produção. Não adicionar senhas, tokens, dados pessoais ou arquivos internos no repositório.

## Botões do Design System PE
Os botões de chamada para ação da Home usam `Button` de `@uigovpe/components`, encapsulado em `src/components/SiteButton.tsx`. O wrapper recebe um destino `href` e navega para ele ao clicar. Os cartões e links de navegação continuam sendo links HTML, por semântica e acessibilidade; não foram convertidos artificialmente em botões. Validar aparência, tipos e ícones com a versão instalada da biblioteca durante `npm run typecheck` e `npm run build`.


### Componentes oficiais Gov PE usados
- `GovBar` para a barra governamental e recursos de acessibilidade.
- `Button`, encapsulado em `src/components/SiteButton.tsx`, para chamadas à ação.
- `Card`, encapsulado em `src/components/SiteCard.tsx`, para os cartões de acesso rápido, notícias, serviços e transparência.

A integração deve ser validada localmente contra a versão instalada de `@uigovpe/components`; confirme também estilos e acessibilidade antes de homologar.

### Dialog (cookies)

O botão de cookies da GovBar abre o componente oficial `Dialog` de
`@uigovpe/components`, com informações provisórias sobre privacidade e um botão
para fechar. O texto deixa explícito que a política e o mecanismo de consentimento
precisam ser validados; não há armazenamento de consentimento implementado.


### Componentes Gov PE adicionais
- `Divider`, encapsulado em `src/components/SiteDivider.tsx`, separa visualmente blocos de conteúdo.
- `Tag`, encapsulado em `src/components/SiteTag.tsx`, identifica a notícia em destaque e rotula a lista de publicações.
- `Message`, encapsulado em `src/components/SiteMessage.tsx`, apresenta avisos de validação nas páginas de Serviços, Transparência e Contato.

### Componentes da biblioteca não adicionados nesta etapa
`InputCurrency`, `InputFile`, `InputMasked`, `InputNumber`, `InputPassword`, `InputSwitch`, `InputText`, `InputTextarea`, `MultiSelect`, `RadioButton`, `Stepper`, `TabView`, `Table`, `Paginator`, `Filter` e `Toast` não foram inseridos artificialmente: as páginas atuais não possuem formulário, fluxo por etapas, tabela de dados ou operação que justifique esses controles. `Dropdown` e `Menu` também não substituíram a navegação existente porque a API detalhada do Storybook não pôde ser consultada nesta sessão; a navegação atual permanece funcional. A busca oficial (`Search`) deve ser integrada após validar suas propriedades e o comportamento esperado na documentação. `Tooltip` também ficou de fora porque não há, neste momento, um controle cuja informação essencial dependa de dica flutuante.

As integrações adicionais precisam ser verificadas com `npm install`, `npm run typecheck`, `npm run lint` e `npm run build`, usando a versão instalada de `@uigovpe/components`.


## Página História

A rota `/historia` foi criada a partir do conteúdo da página História do WordPress fornecido no arquivo de referência. A apresentação usa os wrappers de componentes oficiais já demonstrados (`Card`, `Tag`, `Divider`, `Message` e `Button`). O texto não foi tratado como historicamente verificado: o aviso na página recomenda validação institucional antes da publicação. A página pode ser acessada em `http://localhost:3000/historia` durante a execução local.


## Página Quem é quem

Foi adicionada a rota local `/diretoria`, com os quatro registros de gestão e os contatos que constam no HTML fornecido. Os dados pessoais institucionais, cargos, telefones e e-mails precisam de confirmação da área responsável antes de publicação. A opção “Quem é Quem” no menu principal aponta para a rota local.


## Página Quem Somos

Foi adicionada a rota local `/quem-somos` a partir do HTML fornecido. A página organiza o perfil institucional, missão, visão, competências descritas no material e a citação final. O conteúdo foi preservado em essência, sem validação jurídica independente; o vínculo administrativo, a legislação, as atribuições e os textos estratégicos devem ser confirmados pela equipe responsável antes da publicação. O item “Quem Somos” no menu principal agora aponta para a rota local.


### Página Pré-Embalados

- Rota local: `/pre-medidos`.
- Conteúdo organizado a partir do HTML de referência fornecido, com aviso de validação institucional.

- `/cqi`: página de Qualidade Industrial baseada no HTML de referência enviado; confirmar dados técnicos e competências com a área responsável antes de publicar.

## Legislação
- `/normas-tecnicas`: página de legislação federal e normas do Inmetro, com links oficiais para as Leis nº 9.933/1999 e nº 5.966/1973, o sistema Legislação Inmetro, legislação metrológica vigente e produtos/serviços regulados.
- `/lei-geral-de-protecao-de-dados-pessoais-lgpd`: página sobre LGPD, contato da pessoa encarregada conforme conteúdo de referência, direitos dos titulares e links para Fala.BR e para o texto legal no Planalto. Confirmar dados de contato e fluxo oficial de solicitações antes de publicar.
- Confirmar periodicamente os links e validar com a área responsável qualquer lista de normas antes da publicação institucional.


## Área Principal da Transparência
- Rota local: `/transparencia/area-principal`.
- Conteúdo organizado a partir do HTML fornecido: identidade institucional, missão e visão, estrutura, competências, legislação citada, integridade, endereços e contatos, LGPD, Ouvidoria, redes sociais, atalhos do Portal da Transparência e mapas de contratos em CSV.
- Os textos e dados foram preservados em essência e não foram verificados juridicamente ou operacionalmente. Validar com as áreas responsáveis as informações administrativas, os contatos, a vigência das normas, as afirmações sobre vínculos/conselhos e a atualização dos documentos antes de publicar.
- Os atalhos gráficos sem destino ou identificação textual clara no HTML original não foram recriados como links independentes; os links explícitos foram reorganizados em cartões acessíveis.
