# Arquitetura e inventário de migração — IPEM-PE

## Estrutura do projeto

- `src/app/`: rotas Next.js App Router; cada `page.tsx` representa uma página pública.
- `src/components/`: componentes de apresentação compartilhados (cabeçalho, rodapé, cards, botões, mensagens e divisores).
- `src/config/site-navigation.ts`: fonte única da navegação principal. Evitar manter menus duplicados em componentes.
- `src/data/`: dados de conteúdo estruturados (notícias e atalhos da Home), separados da apresentação.
- `src/types/`: declarações TypeScript de integração com pacotes sem tipos expostos.
- `docs/`: documentação técnica e inventário da migração.

## Rotas internas presentes

- `/` — Início
- `/historia` — História
- `/quem-somos` — Quem Somos
- `/diretoria` — Quem é Quem
- `/organograma` — página criada, conteúdo oficial do organograma pendente de migração/validação
- `/unidades` — Unidades
- `/cml` — CML
- `/pre-medidos` — Pré-Embalados
- `/cqi` — CQI
- `/noticias` — listagem de notícias
- `/noticias/[slug]` — detalhe local de cada notícia migrada (por enquanto resumo; sem redirecionamento para o artigo legado)
- `/normas-tecnicas` — Legislação e normas
- `/transparencia` — hub de transparência
- `/transparencia/area-principal` — Área Principal da Transparência
- `/lei-geral-de-protecao-de-dados-pessoais-lgpd` — LGPD
- `/plano-de-metas` — Plano de Metas
- `/editais-e-portarias` — Editais e Portarias
- `/notificacao-de-atuacao` — Notificações de Autuação
- `/licitacao` — Licitações e Contratos
- `/despesas` — Despesas
- `/convenios-e-transferencias` — Convênios e Transferências
- `/selecao-publica-simplificada` — página criada, listagem oficial pendente de migração/validação
- `/servicos` — hub de serviços
- `/portal-de-servicos` — Portal de Serviços ao Cliente/Cidadão
- `/perguntas-frequentes` — Perguntas Frequentes
- `/formulario-de-denuncia` — página local de orientação para canais oficiais de denúncia
- `/ouvidoria` — Ouvidoria
- `/contato` — Contato
- `/departamento-juridico` — Departamento Jurídico

## O que ainda falta migrar ou validar

1. **Organograma oficial:** a rota local existe, mas precisa receber o desenho/arquivo aprovado e ser validada pelo setor responsável.
2. **Seleção Pública Simplificada:** a rota local existe, mas ainda faltam editais, resultados, convocações e confirmação de situação vigente pela Gestão de Pessoas.
3. **Texto integral das notícias:** as rotas de detalhe são locais, mas exibem apenas resumo; os artigos completos ainda dependem de migração e revisão editorial.
6. **Planos de metas de 2023:** páginas locais criadas para evitar a ida ao WordPress, mas o conteúdo integral precisa ser recuperado.
7. **Detalhes de editais e portarias:** a página de detalhe da Portaria nº 05/2026 foi criada como pendência local; o documento oficial precisa ser recuperado.
8. **Editais de Notificação de Autuação:** detalhes locais criados para o Edital nº 01/2026 e nº 03/2025; os documentos integrais precisam ser recuperados e validados.
9. **Convênios e Transferências:** páginas locais de detalhe criadas para os convênios/termos aditivos antigos; os arquivos originais ainda precisam ser recuperados. O Convênio nº 14/2025 continua ligado ao PDF atualmente publicado.
10. **Despesas realizadas:** o link da antiga página do IPEM foi substituído pelo Portal da Transparência de Pernambuco; confirmar que o destino atende exatamente à consulta pretendida.
11. **Arquivos de mídia:** algumas imagens e assinaturas ainda são servidas do domínio WordPress. Baixar para a biblioteca local após confirmar direitos, versões e acessibilidade.
12. **Revisão institucional:** confirmar cargos, contatos, endereços, horários, legislação, links e documentos com as áreas responsáveis antes de produção.

## Links externos intencionais

- Sistemas oficiais de atendimento, como Ouve.PE, Fala.BR e PSIE.
- Portais governamentais (Inmetro, Planalto, Portal da Transparência, PE-Integrado/e-Fisco).
- PDFs, planilhas e documentos que ainda são hospedados no portal legado até sua migração.
- As URLs originais das notícias permanecem apenas como referência nos dados; os cards não direcionam para o artigo legado.

Links internos de navegação, transparência, serviços, organograma, seleção, denúncia, planos de metas antigos e detalhes conhecidos de documentos foram apontados para rotas locais. Redirects foram adicionados para slugs legados conhecidos. Os links de arquivos PDF/planilhas e sistemas oficiais permanecem externos intencionalmente; imagens de WordPress ainda não foram copiadas para o novo projeto.

## Verificação antes do deploy

Executar com dependências instaladas e versões fixadas:

```bash
npm run typecheck
npm run lint
npm run build
```

O projeto ainda declara dependências `latest`; recomenda-se fixar versões compatíveis e gerar `package-lock.json` em ambiente controlado antes de produção. Não publique até validar os avisos de conteúdo e os links documentais.
