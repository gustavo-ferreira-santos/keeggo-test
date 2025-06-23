# cypress-web-keeggo

Projeto para automação de testes e2e utilizando o framework Cypress

## Sumário

- [Pré-requisitos](#pré-requisitos)
- [Instalação das dependencias](#instalação-das-dependencias)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Executando os Testes](#executando-os-testes)
- [Gerando Relatórios](#gerando-relatórios)

## Pré-requisitos

Para executar o projeto é necessário:

- git;
- Node.js;
- NPM.

## Instalação das dependencias

Como todas as dependências já estão listadas no arquivo `package.json`, simplesmente execute o comando `npm install` na raiz do projeto.

## Estrutura do Projeto

A estrutura do projeto é a seguinte:

```plaintext
## 📁 Estrutura do Projeto

cypress/
├── e2e/
│ └── users/
│   └── users.cy.js # Testes para a api de Users
├── support/
│ └── requests/
│   └── userRequests.js # Configurações das requisições (GET, POST, PUT, DELETE)
cypress.config.js # Configuração do Cypress (baseUrl, etc)
package.json # Dependências e scripts
```

## Executando os Testes

Para executar os testes com o cypress no modo interativo utilize o comando:

- npx cypress open

Para executar os testes em modo headless (sem interface gráfica), use:

- npx cypress run

## Gerando Relatórios

Os relatórios dos testes são gerados usando o mochawesome, após a execução do teste eles serão salvos em cypress/reports/mocha.

## CI

Foi configurado apenas como exemplo uma pipeline utilizando github action no repositório, como os testes foram feitos apontando para um localhost os mesmos vão ser executados com falha.
