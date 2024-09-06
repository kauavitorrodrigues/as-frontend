# Projeto Amigo Secreto

Este é um projeto Next.js para gerenciamento e consulta de sorteios de amigo secreto. A aplicação permite aos participantes descobrir quem tirou seu nome em um evento específico usando seu CPF. Além disso, há um módulo de administração para gerenciar eventos e participantes.

## Funcionalidades

- **Consulta de Sorteio**: Permite aos usuários consultar quem tirou seu nome em um evento específico utilizando o CPF e o código do evento.
- **Módulo de Administração**: Permite o gerenciamento de eventos e participantes, incluindo criação, edição e exclusão.

## Começando

Para iniciar o projeto localmente, siga estas etapas:

### 1. Clone o Repositório

```bash
git clone https://github.com/kauavitorrodrigues/as-frontend.git
```

### 2. Instale as Dependências

Navegue até o diretório do projeto e instale as dependências usando:

```bash
cd projeto-amigo-secreto
npm install
# ou
yarn install
# ou
pnpm install
# ou
bun install
```

### 3. Inicie o Servidor de Desenvolvimento

Execute o servidor de desenvolvimento com:

```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
# ou
bun dev
```

### 4. Abra no Navegador

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para visualizar o resultado.

## Estrutura do Projeto

- **Frontend**: Desenvolvido com Next.js e [Shadcn UI](https://shadcn.dev) para criar uma interface moderna e responsiva. As páginas de consulta e administração estão localizadas em `app/event/[id]/page.tsx`.
- **Backend**: APIs para consulta e administração.

## Fontes

O projeto usa `next/font` para otimizar e carregar a fonte Inter, uma fonte personalizada do Google.

## Aprenda Mais

Para aprender mais sobre o Next.js, confira os seguintes recursos:

- [Documentação do Next.js](https://nextjs.org/docs) - Conheça os recursos e APIs do Next.js.
- [Aprenda Next.js](https://nextjs.org/learn) - Um tutorial interativo de Next.js.
- Confira o [repositório do Next.js no GitHub](https://github.com/vercel/next.js) - Seu feedback e contribuições são bem-vindos!

## Deploy no Vercel

A maneira mais fácil de implantar sua aplicação Next.js é usar a Plataforma Vercel, dos criadores do Next.js.

Consulte nossa [documentação de implantação do Next.js](https://nextjs.org/docs/deployment) para mais detalhes.