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
