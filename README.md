# Couple Closet Backend

Backend completo para o produto **Couple Closet**, pronto para escalar e integrar com o frontend Loveable e Shopify.

## Stack
- Node.js + TypeScript
- Express
- PostgreSQL + Prisma
- JWT Authentication
- Swagger / OpenAPI

## Setup local
1. Copie o arquivo de ambiente:
   ```bash
   cp .env.example .env
   ```
2. Ajuste as variáveis de ambiente (`DATABASE_URL`, `JWT_*`, `SHOPIFY_*`).
3. Instale dependências:
   ```bash
   npm install
   ```
4. Gere o Prisma Client e rode migrations:
   ```bash
   npm run prisma:generate
   npm run prisma:migrate
   ```
5. Rode seeds iniciais:
   ```bash
   npm run prisma:seed
   ```
6. Inicie o servidor:
   ```bash
   npm run dev
   ```

## Endpoints principais (prefixo `/api`)

### Autenticação
- `POST /auth/register`
- `POST /auth/login`
- `POST /auth/refresh`
- `GET /auth/me`

### Quizzes
- `GET /quizzes`
- `GET /quizzes/:id`
- `POST /quizzes/results`
- `GET /quizzes/me/results`

### Ideias de Encontro
- `GET /date-ideas`
- `POST /date-ideas` (admin)
- `GET /date-ideas/recommendations`

### Shopify / Loja
- `GET /products`
- `GET /products/:id`
- `POST /orders`
- `GET /me/orders`

### Wishlist
- `GET /me/wishlist` (query `coupleId`)
- `POST /me/wishlist` (query `coupleId`)
- `PATCH /wishlist/:itemId`

### Admin
- `GET /admin/users`
- `GET /admin/orders`
- `POST /admin/quizzes`
- `POST /admin/date-ideas`

## Documentação
Swagger disponível em `/docs` após iniciar o servidor.

## Observações
- O estoque e catálogo são sincronizados via Shopify API.
- A API espera JWT no header `Authorization: Bearer <token>`.
- Use o campo `coupleId` (query) quando operar wishlists e recomendações por casal.
