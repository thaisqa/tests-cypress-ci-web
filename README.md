# Cypress + Cucumber + Page Objects

Projeto de automação de testes E2E utilizando Cypress, Cucumber e o padrão Page Objects.

## Pré-requisitos

- Node.js (>= 16)
- npm

## Instalação

```bash
npm install

## Execução Local

### Rodar todos os testes em modo headless

```bash
npm test

ou

```bash
npx cypress run

### Abrir o Cypress em modo interativo

```bash
npm run cy:open

Ou

```bash
npx cypress open


## Relatórios de Teste

Após a execução dos testes, um relatório em HTML será gerado automaticamente na pasta `cypress/reports`.