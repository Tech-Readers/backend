<h1>Conectando Leitores</h1> 

<p align="center">
  <img src="http://img.shields.io/static/v1?label=javascript&message=ES6&color=f7df1e&style=for-the-badge&logo=javascript"/>
  <img src="http://img.shields.io/static/v1?label=Node&message=20.10.0&color=5fa04e&style=for-the-badge&logo=nodedotjs"/>
  <img src="http://img.shields.io/static/v1?label=Draw.io&message=24.6.4&color=f08705&style=for-the-badge&logo=diagramsdotnet"/>
  <img src="http://img.shields.io/static/v1?label=Prisma&message=5.16.2&color=2d3748&style=for-the-badge&logo=prisma"/>
  <img src="http://img.shields.io/static/v1?label=JWT&message=9.0.2&color=000000&style=for-the-badge&logo=jsonwebtokens"/>
  <img src="http://img.shields.io/static/v1?label=DOTENV&message=16.4.5&color=ECD53F&style=for-the-badge&logo=dotenv"/>
  <img src="http://img.shields.io/static/v1?label=Cors&message=2.8.5&color=000000&style=for-the-badge&logo=cors"/>
  <img src="http://img.shields.io/static/v1?label=Multer&message=1.4.5&color=EB844E&style=for-the-badge&logo=multer"/>
  <img src="http://img.shields.io/static/v1?label=Insomnia&message=9.3.2&color=4000bf&style=for-the-badge&logo=insomnia"/>
  <img src="http://img.shields.io/static/v1?label=Git&message=2.45.2&color=f05032&style=for-the-badge&logo=git"/>
  <img src="http://img.shields.io/static/v1?label=GitHub&message=2024&color=181717&style=for-the-badge&logo=github"/>
  <img src="http://img.shields.io/static/v1?label=STATUS&message=CONCLUIDO&color=green&style=for-the-badge"/>
  <img src="http://img.shields.io/static/v1?label=License&message=MIT&color=green&style=for-the-badge"/>
</p>

> Status do Projeto: :heavy_check_mark: (concluido) | :warning: (em desenvolvimento) | :x: (não iniciada)

### Tópicos 

:small_blue_diamond: [Arquitetura do Backend](#arquitetura-do-backend-triangular_ruler-straight_ruler) :heavy_check_mark:

:small_blue_diamond: [Rotas - EndPoints](#Rotas---EndPoints-arrows_clockwise) :heavy_check_mark:

:small_blue_diamond: [Instação das depedências](#instação-das-depedências-arrow_down_small) 

:small_blue_diamond: [Executar app](#executar-app-arrow_forward) 

... 

## Arquitetura do Backend :triangular_ruler: :straight_ruler:

```plaintext
  Conectando Leitores
  |
  |
  |  prisma/
  |  │
  |  ├── migrations
  |  |
  |  └── schema.prisma
  |
  |  src/
  |  │
  |  ├── controllers/
  |  │ └── userController.js
  |  │ └── exchangeController.js
  |  │ └── messageController.js
  |  │ └── reviewController.js
  |  │
  |  ├── services/
  |  │ └── userService.js
  |  │ └── exchangeService.js
  |  │ └── messageService.js
  |  │ └── reviewService.js
  |  │
  |  ├── models/
  |  │ └── userModel.js
  |  │ └── exchangeModel.js
  |  │ └── messageModel.js
  |  │ └── reviewModel.js
  |  │
  |  ├── middleware/
  |  │ └── authMiddleware.js
  |  │ └── uploadMulter.js
  |  │
  |  ├── routes/
  |  │ └── routerUser.js
  |  │ └── routerExchange.js
  |  │ └── routerMessage.js
  |  │ └── routerReview.js
  |  │
  |  ├── utils/
  |  │ └── jwt.js
  |  │ └── uploadFirebase.js
  |  │
  |  ├── config/
  |  │ └── prismaClient.js
  |  | └── firebase.js
  |  │
  |  └── server.js
  |
  ├── .env
  | 
  └── serviceAccount.json
```




**Descrição:** :heavy_check_mark:

1. **Models:** Responsáveis por definir a estrutura dos dados e interagir com o banco de dados. Por exemplo,  o Prisma ORM para a interação com o banco de dados.
2. **Controllers:** Controlam a lógica de entrada e saída. Recebem as requisições, chamam os serviços necessários e retornam as respostas apropriadas.
3. **Services:** Contêm a lógica de negócio. São responsáveis por processar os dados e aplicar as regras de negócio antes de salvar ou buscar informações no banco de dados.
4. **Middleware:** Contêm funções intermediárias que processam as requisições antes de chegarem aos controladores. Usados para autenticação, validação, tratamento de erros, etc. Nele passamos as autenticações de sessão, ou seja, os tokens JWT.
5. **Routes:** Definem as rotas da aplicação e associam cada rota ao controlador correspondente.
6. **Utils:** Contêm funções utilitárias que podem ser usadas em diversas partes da aplicação. Por exemplo, geração e verificação de tokens JWT.
7. **Config:** Contêm arquivos de configuração, como a configuração do banco de dados, prismaClient.js.
8. **Server:** Arquivo principal que inicializa o servidor e configura o middleware base.



## Rotas - EndPoints :arrows_clockwise:

1. **Usuarios:** :heavy_check_mark:
   
  **-	GET /users**
  - Descrição: Retorna todos os usuários cadastrados. 
  - Autenticação: Bearer Token.
  - Resposta:
    - 200 OK: Lista de usuários.
    - Exemplo de Resposta:
```
json
      [
        {
          "id": "uuid",
          "nome": "Nome do Usuário",
          "email": "email@example.com",
          "data_cadastro": "2024-10-14T12:00:00Z"
        }
      ] 
```

  **-	GET /users/{id}**
  - Descrição: Retorna um usuário específico de acordo com o ID do usuário.
  - Autenticação: Bearer Token.
  - Resposta:
    - 404 Not Found: Usuário não encontrado.
    - 200 OK: Detalhes do usuário. Exemplo de Resposta:
```
json
      {
        "id": "uuid",
        "nome": "Nome do Usuário",
        "email": "email@example.com",
        "data_cadastro": "2024-10-14T12:00:00Z"
      } 
```
  
  **-POST /users**
  - Descrição: Cadastra um novo usuário.
  - Autenticação: Não é necessária.
  - Parâmetros (JSON):
```
json
    {
      "nome": "Nome do Usuário",
      "email": "email@example.com",
      "senha": "password123"
    } 
```
  - Resposta:
    - 201 Created: Usuário criado com sucesso.
    - 400 Bad Request: E-mail já registrado.
  
  **-PUT /users/{id}**
  - Descrição: Atualiza os dados de um usuário específico de acordo com o ID do usuário.
  - Autenticação: Bearer Token.
  - Parâmetros (JSON):
```
json
    {
      "nome": "Novo Nome",
      "email": "novoemail@example.com"
    } 
```
  - Resposta:
    - 200 OK: Usuário atualizado com sucesso.
    - 404 Not Found: Usuário não encontrado.

  **-DELETE /users/{id}**
  - Descrição: Deleta os dados de um usuário específico de acordo com o ID do usuário.
  - Autenticação: Bearer Token.
  - Resposta:
    - 204 No Content.
    - 404 Not Found: Usuário não encontrado.
  
  **-POST /users/login**
  - Descrição: Autentica um usuário e retorna o token JWT.
  - Autenticação: Não é necessária.
  - Parâmetros (JSON):
```
json
    {
      "email": "email@example.com",
      "senha": "password123"
    }
```
  - Resposta:
    - 200 OK: Token JWT retornado.
    - 401 Unauthorized: Credenciais inválidas.


2. Anúncios :heavy_check_mark:
   
  **- GET /exchanges**
  - Descrição: Retorna todos os anúncios.
  - Autenticação: Bearer Token.
  - Resposta:
    - 200 OK: Lista de objetos JSON.
  
  **-GET /exchanges/{id}**
  - Descrição: Retorna um anúncio específico de acordo com o ID do anúncio.
  - Autenticação: Bearer Token.
  - Resposta:
    - 200 OK: Detalhes do anúncio (objeto em JSON).
    - 404 Not Found: Anúncio não encontrado.
  
  **-GET /exchanges/users/{id_user}**
  - Descrição: Retorna todos os anúncios de um usuário específico de acordo com o ID do usuário.
  - Autenticação: Bearer Token.
  - Resposta:
    - 200 OK: Lista de objetos JSON.
  
  **-POST /exchanges**
  - Descrição: Cria um novo anúncio.
  - Autenticação: Bearer Token.
  - Parâmetros (JSON):
```
json
    {
      "titulo": "Título do Anúncio",
      "titulo_livro_oferecido": "Livro Oferecido",
      "titulo_livro_solicitado": "Livro Solicitado",
      "descricao": "Descrição"
    }
```
  - Resposta:
    - 201 Created: Anúncio criado com sucesso.

  **- PATCH /exchanges/state/{id}**
  - Descrição: Alterna o estado de um anúncio (de ativo para inativo e vice-versa) e insere o valor da "data_conclusao" quando o anúncio é inativado.
  - Autenticação: Bearer Token.
  - Resposta:
    - 200 OK: Estado alterado com sucesso.
    - 404 Not Found: Anúncio não encontrado.
  
  **-PUT /exchanges/{id}**
  - Descrição: Atualiza os dados de um anúncio específico.
  - Autenticação: Bearer Token.
  - Parâmetros (JSON):
```
json
    {
      "titulo": "Novo Título",
      "descricao": "Nova Descrição"
    }
```
  - Resposta:
    - 200 OK: Objeto JSON.
    - 404 Not Found: Anúncio não encontrado.
  
  **-DELETE /exchanges/{id}**
  - Descrição: Deleta um anúncio específico.
  - Autenticação: Bearer Token.
  - Resposta:
    - 204 No Content.
    - 404 Not Found: Anúncio não encontrado.


3. Mensagens :heavy_check_mark:
   
  **-GET /messages/{id}**
 - Descrição: Retorna uma mensagem específica.
 - Autenticação: Bearer Token.
 - Resposta:
    - 200 OK: Objeto JSON.
    - 404 Not Found: Mensagem não encontrada.
  
  **-GET /messages/all**
  - Descrição: Retorna todas as conversas relacionadas a um usuário.
  - Autenticação: Bearer Token.
  - Resposta:
    - 200 OK: Lista de objetos JSON.
  
  **-GET /messages/conversation/{usuarioRemetenteId}/{usuarioDestinatarioId}**
  - Descrição: Retorna todas as mensagens trocadas entre dois usuários específicos.
  - Autenticação: Bearer Token.
  - Resposta:
    - 200 OK: Lista de objetos JSON.

  **-POST /messages**
  - Descrição: Envia uma mensagem referente a um anúncio específico.
  - Autenticação: Bearer Token.
  - Parâmetros (JSON):
```
json
    {
      "usuario_destinatario_id": "uuid",
      "texto": "Conteúdo da mensagem"
    }
```
  - Resposta:
    - 201 Created: Mensagem enviada com sucesso.
  
  **-PATCH /messages/{id}/read**
  - Descrição: Marca uma mensagem como lida (altera o campo "lido" de false para true).
  - Autenticação: Bearer Token.
  - Resposta:
    - 200 OK: Mensagem marcada como lida.
    - 404 Not Found: Mensagem não encontrada.


4. Avaliações :heavy_check_mark:
   
  **-POST /reviews**
 - Descrição: Cria uma avaliação referente a um anúncio específico.
 - Autenticação: Bearer Token.
 - Parâmetros (JSON):
```
json
    {
      "anuncio_id": "uuid",
      "nota": 5,
      "comentario": "Ótima troca"
    }
```
  - Resposta:
    - 201 Created: Objeto JSON.

  **-GET /reviews/{id_anuncio}/exchanges**
  - Descrição: Retorna todas as avaliações de um anúncio específico.
  - Autenticação: Bearer Token.
  - Resposta:
    - 200 OK: Lista de objetos JSON.
  
  **-PATCH /reviews/{id}/like**
  - Descrição: Curte uma avaliação (incrementa o campo qtd_like).
  - Autenticação: Bearer Token.
  - Resposta:
    - 200 OK: Avaliação curtida com sucesso.
  
  **-PUT /reviews/{id}**
  - Descrição: Altera os dados de uma avaliação específica.
  - Autenticação: Bearer Token.
  - Parâmetros (JSON):
```
json
    {
      "nota": 4,
      "comentario": "Boa experiência"
    }
```
  - Resposta:
    - 200 OK: Objeto JSON.
  
  **-DELETE /reviews/{id}**
  - Descrição: Deleta uma avaliação específica.
  - Autenticação: Bearer Token.
  - Resposta:
    - 204 No Content.


## Instação das depedências :arrow_down_small:

```bash
$ npm install
```

## Iniciação e migration Database :file_folder:

```bash
$ npx prisma generate
$ npx prisma migrate dev --name init
```

## Executar app :arrow_forward:

**development:**
```bash
$ npm run dev
```

```bash
Running on http://localhost:8000/
```
...  

## Licença 

The [MIT License]() (MIT)

Copyright :copyright: 2024 - Conectando Leitores
