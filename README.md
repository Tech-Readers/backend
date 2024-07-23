<h1>Conectando Leitores</h1> 

<p align="center">
  <img src="https://img.shields.io/static/v1?label=react&message=18.2.0&color=61dafb&style=for-the-badge&logo=REACT"/>
  <img src="https://img.shields.io/static/v1?label=HTML&message=5&color=e34f26&style=for-the-badge&logo=html5"/>
  <img src="https://img.shields.io/static/v1?label=CSS&message=3&color=1572b6&style=for-the-badge&logo=css3"/>
  <img src="http://img.shields.io/static/v1?label=javascript&message=ES6&color=f7df1e&style=for-the-badge&logo=javascript"/>
  <img src="http://img.shields.io/static/v1?label=Node&message=20.10.0&color=5fa04e&style=for-the-badge&logo=nodedotjs"/>
  <img src="http://img.shields.io/static/v1?label=Draw.io&message=24.6.4&color=f08705&style=for-the-badge&logo=diagramsdotnet"/>
  <img src="http://img.shields.io/static/v1?label=Workbench MySQL&message=8.0.38&color=4479a1&style=for-the-badge&logo=mysql&logoColor=f5f5f5"/>
  <img src="http://img.shields.io/static/v1?label=PostgreSQL&message=16&color=4169e1&style=for-the-badge&logo=postgresql&logoColor=f5f5f5"/>
  <img src="http://img.shields.io/static/v1?label=Prisma&message=5.16.2&color=2d3748&style=for-the-badge&logo=prisma"/>
  <img src="http://img.shields.io/static/v1?label=Insomnia&message=9.3.2&color=4000bf&style=for-the-badge&logo=insomnia"/>
  <img src="http://img.shields.io/static/v1?label=Git&message=2.45.2&color=f05032&style=for-the-badge&logo=git"/>
  <img src="http://img.shields.io/static/v1?label=GitHub&message=2024&color=181717&style=for-the-badge&logo=github"/>
  <img src="http://img.shields.io/static/v1?label=STATUS&message=EM%20DESENVOLVIMENTO&color=yellow&style=for-the-badge"/>
  <img src="http://img.shields.io/static/v1?label=License&message=MIT&color=green&style=for-the-badge"/>
</p>

> Status do Projeto: :heavy_check_mark: (concluido) | :warning: (em desenvolvimento) | :x: (não iniciada)

### Tópicos 

:small_blue_diamond: [Arquitetura do Backend](#arquitetura-do-backend-file_folder) :warning:


... 

## Arquitetura do Backend :file_folder:
<p align="justify">

src/
│
├── controllers/
│ └── userController.js
│ └── bookController.js
│ └── exchangeController.js
│ └── messageController.js
│ └── reviewController.js
│
├── services/
│ └── userService.js
│ └── bookService.js
│ └── exchangeService.js
│ └── messageService.js
│ └── reviewService.js
│
├── models/
│ └── userModel.js
│ └── bookModel.js
│ └── exchangeModel.js
│ └── messageModel.js
│ └── reviewModel.js
│
├── middleware/
│ └── authMiddleware.js
│ └── errorMiddleware.js
│
├── routes/
│ └── userRoutes.js
│ └── bookRoutes.js
│ └── exchangeRoutes.js
│ └── messageRoutes.js
│ └── reviewRoutes.js
│
├── utils/
│ └── jwt.js
│
├── config/
│ └── db.js
│ └── prisma.js
│
└── server.js



</p>



**Descrição:** :heavy_check_mark:
<p align="justify">

1. Models: Responsáveis por definir a estrutura dos dados e interagir com o banco de dados. Por exemplo,  o Prisma ORM para a interação com o banco de dados
2. Controllers: Controlam a lógica de entrada e saída. Recebem as requisições, chamam os serviços necessários e retornam as respostas apropriadas.
3. Services: Contêm a lógica de negócio. São responsáveis por processar os dados e aplicar as regras de negócio antes de salvar ou buscar informações no banco de dados.
4. Middleware: Contêm funções intermediárias que processam as requisições antes de chegarem aos controladores. Usados para autenticação, validação, tratamento de erros, etc. Nele passamos as autenticações de sessão, ou seja, os tokens JWT.
5. Routes: Definem as rotas da aplicação e associam cada rota ao controlador correspondente.
6. Utils: Contêm funções utilitárias que podem ser usadas em diversas partes da aplicação. Por exemplo, geração e verificação de tokens JWT.
7. Config: Contêm arquivos de configuração, como a configuração do banco de dados e do Prisma.
8. Server: Arquivo principal que inicializa o servidor e configura o middleware base.

</p>

 
... 

## Licença 

The [MIT License]() (MIT)

Copyright :copyright: 2024 - Conectando Leitores
