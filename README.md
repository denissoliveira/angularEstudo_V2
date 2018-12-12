# Meat

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.1.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## 1. Iniciando o Backend

#### Instalando o json-server

`npm install -g json-server` Iniciando o serviço (raiz da aplicação)

`json-server db.json`

nodemon (Observando arquivos modificados) `npm i nodemon -g`

Para usar como servidor https `nodemon -w backend backend/dist/server.jss`

## 2. Produção 
#### configuração de build de desenv
`ng build`

#### configuração de build de produção
`ng build --prod`

#### O mesmo vale para ng serve padrão para teste
`ng serve --prod`

##### - copie o conteúdo da pasta dist e coloqe em seu servidor (exp tomcat)


## 3. Base href
#####Criar deploys em subdiretorios - vê video da aula ou procurar na documentação
ng build --prod --bh=/nomeDiretorio/

### ChangeLog 
`npm i -g standard-version` ou `npm i --save-dev standard-version`

# Add an npm run script to your package.json:

```json
{
  "scripts": {
    "release": "standard-version"
  }
}
```
"release": "standard-version",
    "release-as": "npm run release -- --release-as 0.0.0"

Mais em https://github.com/conventional-changelog/standard-version/blob/master/README.md


## 4. @types em packege.json
Usado no autocomplet