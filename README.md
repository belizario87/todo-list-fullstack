# Todo List API

Este é o README para a API de gerenciamento de tarefas (tasks). Este documento explica como funciona a API, como utilizá-la, descreve os módulos utilizados e como rodar a instância do MySQL usando Docker.

## Sumário

- [Instalação](#instalação)
- [Uso](#uso)
- [Módulos Utilizados](#módulos-utilizados)
- [Docker](#docker)
- [Como Funciona o Fluxo e as Responsabilidades](#como-funciona-o-fluxo-e-as-responsabilidades)

## Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/todo-list.git
   ```
2. Depois de instalar o [NodeJS](#https://nodejs.org/en/download/package-manager/current) navegue até o diretório do projeto:
   ```bash
   cd todo-list
   ```
3. Instale as dependências:
   ```bash
   npm i express nodemon dotenv mysql2
   ```

## Uso

1. Crie um arquivo `.env` na raiz do projeto e configure as variáveis de ambiente necessárias:
   ```env
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=sua_senha
   DB_NAME=todo_list
   ```
2. Inicie o servidor:
   ```bash
   npm run start dev
   ```

## Módulos Utilizados

- **Express**: Framework para construção de aplicações web e APIs.
- **Nodemon**: Ferramenta que reinicia automaticamente o servidor quando há mudanças no código.
- **Dotenv**: Carrega variáveis de ambiente de um arquivo `.env`.
- **MySQL2**: Cliente MySQL para Node.js com suporte a Promises.
- **Docker**: Plataforma para desenvolvimento, envio e execução de aplicações em containers.

## Docker

Para rodar a instância do MySQL usando Docker, siga os passos abaixo:

1. Baixe a imagem do MySQL:
   ```bash
   docker pull mysql:latest
   ```
2. Rode o container do MySQL:
   ```bash
   docker run --name mysql-container-todolist -e MYSQL_ROOT_PASSWORD=sua_senha -e MYSQL_USER=seu_usuario -e MYSQL_DATABASE=nome_database -p 3306:3306 -d mysql:latest
   ```

## Como Funciona o Fluxo e as Responsabilidades

1. **Router**: Recebe a requisição HTTP e direciona para o controlador apropriado.
2. **Controlador**: Processa a requisição, aplica a lógica de negócio e chama o modelo.
3. **Modelo**: Interage com o banco de dados MySQL para extrair ou manipular os dados necessários.
4. **Resposta**: O controlador envia a resposta de volta ao cliente.

### Exemplo de Fluxo

1. O cliente faz uma requisição `GET /tasks`.
2. O router direciona a requisição para o controlador `tasksController`.
3. O controlador chama o modelo `tasksModel` para buscar as tarefas no banco de dados.
4. O modelo retorna os dados para o controlador.
5. O controlador envia os dados de volta ao cliente como resposta.

---

Esperamos que este README tenha sido útil. Para mais informações, consulte a documentação dos módulos utilizados.
