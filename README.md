# IPEM-PE — portal Next.js para homologação

Esta versão usa como referência o HTML da página inicial atual fornecido para reconstruir a estrutura do portal em Next.js. Não modifica WordPress nem qualquer ambiente de produção.

## Executar localmente no Windows

Requer uma versão LTS do Node.js e npm.

```powershell
npm install
npm run dev
```

Abra `http://localhost:3000`.

## Validar antes da homologação

```powershell
npm run typecheck
npm run lint
npm run build
```

Os links para notícias, serviços, legislação e transparência apontam para páginas do portal atual. O conteúdo textual disponível foi derivado do HTML fornecido; páginas completas não foram migradas quando o arquivo só continha o HTML da Home.

## Estrutura

- `src/app/page.tsx`: Home reconstruída.
- `src/components/SiteHeader.tsx`: cabeçalho e menu responsivo.
- `src/components/SiteFooter.tsx`: rodapé.
- `src/data/news.ts`: notícias e imagens referenciadas no HTML de origem.
- `src/app/servicos`, `transparencia`, `noticias`, `contato`: páginas internas iniciais.

## Observações importantes

- O layout foi reconstruído com CSS responsivo e estrutura semântica. A integração final com `UiProvider`, `LayoutProvider` e componentes do Padrão Digital PE ainda precisa ser validada contra as versões instaladas dos pacotes oficiais.
- As imagens das notícias são carregadas dos URLs do portal atual; para produção, é preferível baixar e organizar os arquivos de mídia autorizados dentro do projeto.
- Endereço, telefone e horário foram reproduzidos do HTML fornecido e precisam de validação institucional.
- O HTML de origem menciona uma imagem de assinatura de período eleitoral, mas não inclui o arquivo binário; a página deixa um aviso para validação em vez de inventar ou reconstruir a peça.
- O conteúdo foi limitado ao que aparece na Home fornecida. Não foram inventados textos de História, Quem Somos, Organograma ou outros conteúdos que exigem o HTML das páginas correspondentes.
- O pacote contém dependências com versão `latest`. Para homologação estável, recomenda-se instalar, testar e fixar versões compatíveis antes de publicar.
- Este projeto não foi executado nem compilado neste ambiente; rode os comandos de validação localmente e compartilhe qualquer erro do terminal.
