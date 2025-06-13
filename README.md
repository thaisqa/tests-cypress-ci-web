# Cypress + Cucumber + Page Objects

Projeto de automação de testes E2E utilizando Cypress, Cucumber e o padrão Page Objects.
O projeto roda na pipeline do gitActions e utiliza docker.

## Pré-requisitos

- Node.js (>= 16)
- npm

## Instalação

```bash
npm install
```

## Execução Local

### Rodar todos os testes em modo headless

```bash
npm test
```

### Abrir o Cypress em modo interativo

```bash
npm run cy:open
```

## Execução com Docker

### Buildar o docker
1- Abra o docker

2- Execute no terminal 
```bash 
docker build -t cypress-tests . 
```
### Executar os testes com docker
```bash 
docker run --rm cypress-tests
```

## Relatórios de Teste

Após a execução dos testes, um relatório em HTML será gerado automaticamente na pasta `cypress/reports`.

## Autora
- [Thaís Ferreira](https://github.com/thaisqa)