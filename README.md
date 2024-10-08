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
  -	GET /users: Retorna todos os usuários;
  -	GET /users/{id}: Retorna um usuário específico de acordo com ID do usuário;
  -	POST /users: Cadastra um novo usuário;
  -	PUT /users/{id}: Atualiza os dados de um usuário específico de acordo com o ID do usuário;
  -	DELETE /users/{id}: Deleta os dados de um usuário específico de acordo com ID do usuário;
  - POST /users/login: Autentica um usuário e retorna o token JWT.


1. **Anuncios:** :heavy_check_mark:
  -	GET /exchanges: Retorna todos os anúncios;
  -	GET /exchanges/{id}: Retorna um anúncio específico de acordo com o ID do anúncio;
  -	GET /exchanges/users/{id_user}: Retorna todos os anúncios de um usuário específico de acordo com o ID do usuário; 
  -	POST /exchanges: Cria um novo anúncio;
  -	PATH /exchanges/state/{id}: Alterna o estado de um anúncio (de ativo para inativo e vice-versa) e insere o valor da “data_conclusao” quando altera para inativo;
  -	PUT /exchanges/{id}: Atualiza os dados de um anúncio específico de acordo com o ID do anúncio;
  -	DELETE /exchanges/{id}: Deleta os dados de um anúncio específico de acordo com o ID do anúncio.



2. **Mensagens:** :heavy_check_mark:
  -	GET messages/{id}: Retorna uma mensagem especifica;
  - GET messages/all: Retorna todas as conversas relacionadas a um usuário;
  - GET messages/conversation/{usuarioRemetenteId}/{usuarioDestinatarioId}: todas as mensagens trocadas entre dois usuários específicos;
  -	POST /messages: Envia mensagens referentes a um anúncio específico de acordo com o ID do anúncio (ID do anúncio deve ser passado no body). Tem relacionamento com usuários (um usuário envia para outro usuário);
  -	PATH /messages/{id}/read: Marca mensagem como lida (altera "lido: FALSE" para "lido: TRUE").


3. **Avaliacoes:** :heavy_check_mark:
  -	POST /reviews: Cria uma avaliação referente a um anúncio específico de acordo com o ID do anúncio (ID do anúncio deve ser passado no body);
  -	GET /reviews/{id_anuncio}/exchanges: Retorna todas as avaliações referentes a um anúncio específico de acordo com o ID do anúncio;
  -	PATH /reviews/{id}/like: Curte uma avaliação (altera o campo qtd_like);
  -	PUT /reviews/{id}: Altera os dados de uma avaliação específica de acordo com ID da avaliação;
  -	DELETE /reviews/{id}: Deleta os dados de uma avaliação específica de acordo com ID da avaliação.


## Instação das depedências :arrow_down_small:

```bash
$ npm install
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
