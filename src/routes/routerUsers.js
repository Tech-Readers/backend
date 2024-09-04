// src/controllers/routerUsers.js:
import express from 'express';
import userController from '../controllers/userController.js';
import authMiddleware from '../middleware/authMiddleware.js';
import upload from '../middleware/uploadMulter.js';



// cria uma instância do Router do Express para definir as rotas relacionadas aos usuários.
const routerUsers = express.Router();


// 1. ROTAS PUBLICAS:

// POST / --> chama o método createUser do userController para criar um novo usuário
routerUsers.post('/', upload.single('image') , userController.createUser);

// POST /login -->  chama o método login do userController para autenticar um usuário e gerar um token JWT
routerUsers.post('/login', userController.login);


// 2. ROTAS PRIVADAS - AUTENTICADAS:

// GET / --> chama o método allUsers do userController para obter todos os usuários
routerUsers.get('/', authMiddleware, userController.allUsers);

// GET /:id -->  chama o método byIdUser do userController para obter um usuário específico pelo ID
// usa authMiddleware para garantir que apenas usuários autenticados possam acessar essa rota
routerUsers.get('/:id', authMiddleware, userController.byIdUser);

// PUT /:id -->  chama o método updateUser do userController para atualizar um usuário específico pelo ID
// usa authMiddleware para garantir que apenas usuários autenticados possam acessar essa rota
routerUsers.put('/:id', upload.single('image'), authMiddleware, userController.updateUser);

// DELETE /:id -->  chama o método deleteUser do userController para deletar um usuário específico pelo ID
// usa authMiddleware para garantir que apenas usuários autenticados possam acessar essa rota
routerUsers.delete('/:id', authMiddleware, userController.deleteUser);


// exporta routerUsers para que possa ser usado em outras partes da aplicação
export default routerUsers;




