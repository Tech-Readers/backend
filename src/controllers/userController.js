// userController.js:
import userService from '../services/userService.js'

// chama o serviço allUsers para obter todos os usuários
// retorna os usuários com status 200 (OK) em caso de sucesso
// retorna uma mensagem de erro com status 500 (Internal Server Error) em caso de falha
const allUsers = async (req, res) => {
	try {
		const users = await userService.allUsers();

		// remover a senha, endereço e telefones de cada usuário para ser exibido a lista de usuarios sem dados sensiveis
		const usersPublic = users.map(user => {
			const { senha, enderecos, endereco_id, telefones, ...userPublic } = user;
			return userPublic;
		});
	  
		res.status(200).json(usersPublic);

		// res.status(200).json(users);
	} catch (error) {
		res.status(500).json({error: error.message});
	};
};

// Chama o serviço byIdUser para obter um usuário pelo ID
// se o usuário não for encontrado, retorna status 404 (Not Found)
// retorna status 200 (OK) em caso de sucesso
// apenas o próprio usuário pode ver todos os seus dados, enquanto outros usuários só podem ver o id, nome e email
// retorna uma mensagem de erro com status 500 (Internal Server Error) em caso de falha.
const byIdUser = async (req, res) => {
	try {
		const user = await userService.byIdUser(req.params.id);
	
		if (!user) {
		  return res.status(404).json({ error: 'Usuário não encontrado' });
		}
	
		if (req.user.id === user.id) {
		  // Se o usuário autenticado está solicitando seus próprios dados, retorna todos os dados
		  res.status(200).json(user);
		} else {
		  // Caso contrário, retorna apenas o id, nome e email
		  const { id, nome, email, image } = user;
		  res.status(200).json({ id, nome, email, image });
		}
	} catch (error) {
		res.status(500).json({error: error.message});
	};
};

  

// chama o serviço createUser para criar um novo usuário com os dados fornecidos no corpo da requisição
// retorna o usuário criado com status 201 (Created) em caso de sucesso
// retorna uma mensagem de erro com status 500 (Internal Server Error) em caso de falha
const createUser = async (req, res) => {
	try {
		const user = await userService.createUser(req.body, req.file);
		res.status(201).json(user);
	} catch (error) {
		res.status(500).json({error: error.message});
	};
};

// chama o serviço updateUser para atualizar os dados do usuário com o ID fornecido
// retorna o usuário atualizado com status 200 (OK) em caso de sucesso
// retorna uma mensagem de erro com status 500 (Internal Server Error) em caso de falha
const updateUser = async (req, res) => {
	try {
		const user = await userService.updateUser(req.params.id, req.body, req.file);
		res.status(200).json(user);
	} catch (error) {
		res.status(500).json({error: error.message});
	};
};


// chama o serviço deleteUser para excluir o usuário com o ID fornecido
// retorna status 204 (No Content) em caso de sucesso (sem conteúdo de resposta)
// retorna uma mensagem de erro com status 500 (Internal Server Error) em caso de falha
const deleteUser = async (req, res) => {
	try {
		await userService.deleteUser(req.params.id);
		res.status(204).send();
	} catch (error) {
		res.status(500).json({error: error.message});
	};
};

// chama o serviço login para autenticar o usuário com email e senha fornecidos
// retorna o usuário autenticado e o token JWT com status 200 (OK) em caso de sucesso
// retorna uma mensagem de erro com status 500 (Internal Server Error) em caso de falha
const login = async (req, res) => {
	try {
		const {email, senha} = req.body;
		const {user, token} = await userService.login(email, senha);
		res.status(200).json({id: user.id, nome: user.nome, token});
	} catch (error) {
		res.status(500).json({error: error.message});
	};
};



// exporta todas as funções do controlador para serem usadas em outras partes da aplicação, como nas rotas
const userController = {
	allUsers,
  	byIdUser,
  	createUser,
 	updateUser,
  	deleteUser,
	login,
}

export default userController;





