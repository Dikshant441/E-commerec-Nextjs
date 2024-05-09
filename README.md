
## E-commerce using Nextjs

# Tech Stack
-> Nextjs
-> Prisma
-> Stripe
-> Tailwind

# Project Building
1. Dependency installation
    - npx create-next-app@latest
    - npm i --save-dev ts-node
    - npm i prisma --save-dev
    - npx prisma init --datasource-provider sqlite
    - and fix error of schema.prisma formatting
    - npx prisma migration dev --name init

2. Tailwind component library(shadcn/ui) installation
    - npx shadcn-ui@latest init
    - 