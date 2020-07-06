<h1 align="center">
  <img alt="Fastfeet" title="Fastfeet" src="./.github/logo.png" width="300px" />
</h1>

<p align="center">
  <img src=".github/reactjs.svg" alt="ReactJS" />&nbsp;&nbsp;&nbsp;&nbsp;
  <img src=".github/hooks.svg" alt="React Hooks"/>&nbsp;&nbsp;&nbsp;&nbsp;
  <img src=".github/flux.svg" alt="Arquitetura Flux"/>
</a>

<p align="center">
  <a href="#rocket-sobre">Sobre</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#camera-preview">Preview</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#pushpin-funcionalidades">Funcionalidades</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#hammer-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#computer-como-usar">Como usar</a>&nbsp;&nbsp;&nbsp;
</p>

## :rocket: Sobre
Este é um projeto fictício feito para uma gestão de encomendas de uma transportadora chamada FastFeet.

Esta é a 2/3 partes de um projeto como todo. O mesmo foi construído utilizando as tecnlologias mais populares de JavaScript e do mercado.

Se você ainda não baixou as partes (1/3) ou (3/3), você vai encontrar elas abaixo, siga os passos para uma instalação correta:
- [(1/3) Api](https://github.com/dariobennaia/api-fastfeet)
- [(3/3) App](https://github.com/dariobennaia/mobile-fastfeet)

<br/><br/>
O usuario para acessar a aplicação caso você tenha rodado a api conforme os passos e executado as `seeds` é:

login: admin@fastfeet.com<br/>
senha: 123456

## :camera: Preview

![Farmers Market Finder Demo](./.github/preview.gif)

## :pushpin: Funcionalidades

Uma descrição resumida das funcionalidades presentes na aplicação.

### Autenticação
Funcionalidade responsável pelo gerenciamento de acesso a aplicação e todos os demais módulos a seguir.

### Gestão de encomendas
O gerenciamento de encomendas se divide nas seguintes partes.

1. Listagem: Funcionalidade resposável por listar todas as encomendas criadas.
2. Informação: Funcionalidade responsável por exibir as informações da encomenda.
2. Cadastro: Funcionalidade resposável por cadastrar encomendas.
3. Edição: Funcionalidade resposável por editar/atualizar as informções referentes a uma encomenda criada.
4. Exclusão: Funcionalidade resposável por excluir as encomendas criadas.

### Gestão de destinatários
O gerenciamento de destinatários se divide nas seguintes partes.

1. Listagem: Funcionalidade resposável por listar todas os destinatários criados.
2. Informação: Funcionalidade responsável por exibir as informações do destinatário.
2. Cadastro: Funcionalidade resposável por cadastrar destinatários.
3. Edição: Funcionalidade resposável por editar/atualizar as informções referentes a um destinatário criado.
4. Exclusão: Funcionalidade resposável por excluir destinatários criados.

### Gestão de entregadores
O gerenciamento de entregadores se divide nas seguintes partes.

1. Listagem: Funcionalidade resposável por listar todas os entregadores criados.
2. Informação: Funcionalidade responsável por exibir as informações do entregador.
2. Cadastro: Funcionalidade resposável por cadastrar entregadores.
3. Edição: Funcionalidade resposável por editar/atualizar as informções referentes a um entregador criado.
4. Exclusão: Funcionalidade resposável por excluir os entregadores criados.

### Gestão de problemas
O gerenciamento de problemas se divide nas seguintes partes.

1. Listagem: Funcionalidade resposável por listar todos os problemas informados pelo entregador.
2. Informação: Funcionalidade responsável por exibir as informações do problema.
3. Cancelamento de entrega: Funcionalidade resposável por cancelar uma entrega com base nas informações do problema informado.


## :hammer: Tecnologias
Este Projeto foi desenvolvido usando as seguintes tecnologias:

-  [ReactJS](https://reactjs.org/)
-  [Create React App Configuration Override](https://github.com/sharegate/craco)
-  [Redux](https://redux.js.org/)
-  [Redux Saga](https://redux-saga.js.org/)
-  [React Router](https://github.com/ReactTraining/react-router)
-  [Styled Components](https://www.styled-components.com/)
-  [Axios](https://github.com/axios/axios)
-  [History](https://www.npmjs.com/package/history)
-  [Immer](https://github.com/immerjs/immer)
-  [Polished](https://polished.js.org/)
-  [React Toastify](https://fkhadra.github.io/react-toastify/)
-  [ReactJs PopUp](https://www.npmjs.com/package/reactjs-popup)
-  [React Confirm Alert](https://www.npmjs.com/package/react-confirm-alert)
-  [React Icons](http://react-icons.github.io/react-icons/)
-  [Unform Web](https://www.npmjs.com/package/@unform/web)
-  [Yup](https://www.npmjs.com/package/yup)
-  [Date Fns](https://date-fns.org/)  
-  [Reactotron](https://infinite.red/reactotron)

## :computer: Como usar

Para instalar a aplicação você precisará executar os passos informados abaixo.

### Instalação básica

```bash
# Clone o repositório
$ git clone https://github.com/dariobennaia/web-fastfeet

# Entre na pasta do projeto
$ cd web-fastfeet

# Instale as dependências
$ yarn install

# Crie o arquivo .env com base no modelo .env.example e preencha suas informações corretamente.
$ cp .env.example .env

# Execute a aplicação
$ yarn start
```

### Instalação usando o nosso :heart: amorzinho, o [docker](https://www.docker.com/).

:rotating_light: Importante! Certifique-se de que você possui o docker instalado em sua maquina. A versão usada no desenvolvimento deste projeto foi: [Docker 19.03.5](https://docs.docker.com/engine/release-notes/) e o [Docker Compose 1.25.3](https://docs.docker.com/compose/release-notes/). Para mais informações consulte a [documentação](https://www.docker.com/) oficial.

```bash
# Clone o repositório
$ git clone https://github.com/dariobennaia/web-fastfeet

# Entre na pasta do projeto
$ cd web-fastfeet

# Crie o arquivo .env com base no modelo .env.example e preencha suas informações corretamente.
$ cp .env.example .env

# Execute o gerenciador do docker para subir a aplicação
$ docker-compose up
```

:rotating_light: Cuidado ao definir 'http://localhost:3000' nas variaveis de ambiente quando usar o docker, o mesmo pode não conseguir se comunicar.

Se precisar buildar as informações novamente basta executar:
```bash
# Execute o gerenciador do docker para subir a aplicação
$ docker-compose up --build
```

---
Feito com carinho por [Dário Santos](https://www.linkedin.com/in/dario-bennaia/) :purple_heart: :rocket:!