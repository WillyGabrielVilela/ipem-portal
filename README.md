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
