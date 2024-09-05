<p align="center">
  <a href="" rel="noopener">
 <img height="100%" src="https://utfprbg.wordpress.com/wp-content/uploads/2018/03/logo-utfpr.jpg" alt="Project logo"></a>
</p>

<h3 align="center">Projeto 2 - BackEnd</h3>
<h4 align="center">Prof. Adriano Rivolli</h4>

<p align="center"> 
  O projeto tem como objetivo a aplicação dos conceitos e temas abordados em sala de aula, utilizando as tecnologias indicadas para a criação de uma API REST com autenticação, CRUDs e uma lógica de negócios personalizada.
    <br> 
</p>

<hr />

## Funcionalidades

### Autenticação e Gerenciamento de Usuários (30%)
1. **Cadastro de usuários**: Uma rota que permite o cadastro de usuários com dados pessoais e credenciais (usuário e senha).
2. **Administração**: Um ou mais usuários administradores com privilégios para alterar, excluir usuários e criar novos administradores.
3. **Login e Autenticação**: Rota de login que gera um token JWT para acesso às rotas protegidas.
4. **Gerenciamento de administradores**: Rotas para criação e remoção de administradores por um administrador.
5. **Alteração de dados**: Usuários podem alterar seus próprios dados pessoais, e administradores podem alterar dados de qualquer usuário.

### Sistema CRUD (30%)
- Implementação de operações de CRUD completo para 3 ou 4 entidades (dependendo se o trabalho é individual ou em dupla).
- As entidades possuem relações de um-para-muitos ou muitos-para-muitos, de acordo com o tema proposto.
- Operações de inserção, alteração e exclusão restritas a usuários autenticados.
- Implementação de paginação nas listagens com os parâmetros `limite` (5, 10 ou 30 itens) e `página` (ponto de início da consulta).
- Validação de dados e envio de mensagens de erro ou sucesso personalizadas.

### Lógica de Negócio, Instalador e Documentação (40%)
- Implementação de uma operação especial que realiza lógica de negócios personalizada, que pode incluir inserção, consultas complexas, ou processamento de dados.
- Rota **GET /install/** que inicializa o banco de dados, cria tabelas ou coleções e insere dados iniciais (mínimo de 5 registros por tabela/coleção).
- Rota **GET /docs** que disponibiliza a documentação da API, gerada com Swagger.

## Tecnologias Utilizadas
- **Framework**: [Express](https://expressjs.com/)
- **Banco de dados**: Relacional (SQlite com Sequelize)
- **Autenticação**: JWT (JSON Web Token)
- **Documentação**: Swagger

## Estrutura de Diretórios

A organização da arquitetura do projeto segue boas práticas, garantindo modularidade e escalabilidade. A seguir a estrutura básica do projeto:

```
/src
  /controllers
  /models
  /routes
  /services
  /config
  /database
.env
README.md
```

## Configuração e Instalação

### Requisitos
- Node.js
- Banco de dados (SQlite)
- Git

### Passos para Configuração
1. Clone o repositório:
   ```bash
   git clone https://github.com/weslleysilv4/project2_backend.git
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Inicie o servidor:
   ```bash
   npm start
   ```
   
4. Execute a rota de instalação do banco de dados:
   ```bash
   GET /install/
   ```

## Documentação da API

A documentação da API está disponível através da rota `/docs`, que utiliza Swagger para descrever as rotas, parâmetros, e exemplos de requisições/respostas.

## Contribuição

1. Faça um fork do projeto
2. Crie sua feature branch: `git checkout -b minha-feature`
3. Commit suas alterações: `git commit -m 'Minha nova feature'`
4. Faça o push para a branch: `git push origin minha-feature`
5. Abra um Pull Request

## Considerações Finais

Este projeto foi desenvolvido de acordo com os requisitos da disciplina, visando aplicar os conceitos de desenvolvimento web back-end e boas práticas de programação.
