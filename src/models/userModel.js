// src/models/userModel.js:
import prisma from '../config/prismaClient.js';

// busca um usuario no banco de dados com base no email
// usa o método findUnique do Prisma Client
const byEmailUser = async (email) => {
  return await prisma.usuarios.findUnique({
    where: { email },
  });
};

// busca todos os usuários no banco de dados e Inclui os dados relacionados de enderecos e telefones usando o parametro include
// usa o método findMany do Prisma Client
const allUsers = async() => {
	return await prisma.usuarios.findMany({
		include: {
			enderecos: true,
			telefones: true,
		},
	});
};

// busca um usuário no banco de dados com base no ID. Inclui dados relacionados de enderecos e telefones usando include
// usa o método findMany do Prisma Client
const byIdUser = async(id) => {
	return await prisma.usuarios.findUnique({
		where: {id},
		include: {
			enderecos: true,
			telefones: true
		},
	});
};

// cria um novo usuário no banco de dados. Inclui a criação de dados relacionados de enderecos e telefones usando parametro include
// usa o método create do Prisma Client
const createUser = async(dataUser) => {
	return await prisma.usuarios.create({
		data: {
			nome: dataUser.nome,
			email: dataUser.email,
			senha: dataUser.senha,
			enderecos: {
				create: {
					logradouro: dataUser.enderecos.logradouro,
					numero: dataUser.enderecos.numero,
					bairro: dataUser.enderecos.bairro,
					complemento: dataUser.enderecos.complemento,
					cep: dataUser.enderecos.cep,
					municipio: dataUser.enderecos.municipio,
					uf: dataUser.enderecos.uf,
				},
			},
			telefones: {
				create: dataUser.telefones.map(telefone => ({
					contato: telefone.contato,
				})),
			},
		},
		include: {
			enderecos: true,
			telefones: true,
		},
	});
};

// atualiza um usuário no banco de dados com base no ID. Inclui a atualização de dados relacionados de enderecos e telefones usando parametro include
// usa o método update do Prisma Client
const updateUser = async(id, dataUser) => {
	// atualiza o usuário
	const updatedUser = await prisma.usuarios.update({
	  where: {id},
	  data: {
		nome: dataUser.nome,
		email: dataUser.email,
		senha: dataUser.senha,
	  },
	  include: {
		enderecos: true,
		telefones: true,
	  },
	});
  
	// atualiza os endereços
	if (dataUser.enderecos) {
	  await prisma.enderecos.update({
		where: { id: updatedUser.endereco_id },
		data: {
		  logradouro: dataUser.enderecos.logradouro,
		  numero: dataUser.enderecos.numero,
		  bairro: dataUser.enderecos.bairro,
		  complemento: dataUser.enderecos.complemento,
		  cep: dataUser.enderecos.cep,
		  municipio: dataUser.enderecos.municipio,
		  uf: dataUser.enderecos.uf,
		},
	  });
	}
  
	// atualiza os telefones
	if (dataUser.telefones) {
	  await prisma.telefones.deleteMany({
		where: { usuario_id: id },
	  });
	  await prisma.telefones.createMany({
		data: dataUser.telefones.map(telefone => ({
		  contato: telefone.contato,
		  usuario_id: id,
		})),
	  });
	}
  
	return updatedUser;
  };
  

// Deleta um usuário no banco de dados com base no ID
// usa o método delete do Prisma Client
const deleteUser = async(id) => {
	// Busca o usuário e seus endereços
	const user = await prisma.usuarios.findUnique({
	  where: { id },
	  include: { enderecos: true },
	});
  
	if (user) {
	  // Deleta os telefones associados ao usuário
	  await prisma.telefones.deleteMany({
		where: { usuario_id: id },
	  });
  
	  // Deleta o usuário
	  await prisma.usuarios.delete({
		where: { id },
	  });
  
	  // Verifica se o endereço associado ainda está em uso por outros usuários
	  const enderecoEmUso = await prisma.usuarios.findMany({
		where: { endereco_id: user.endereco_id },
	  });
  
	  if (enderecoEmUso.length === 0) {
		// Se o endereço não estiver mais em uso, deleta o endereço
		await prisma.enderecos.delete({
		  where: { id: user.endereco_id },
		});
	  }
	}
  
	return user;
};
  

// As funções são agrupadas em um objeto userModel e
// exportadas para que possam ser usadas em outras partes da aplicação.
const userModel = {
  byEmailUser,
  allUsers,
  byIdUser,
  createUser,
  updateUser,
  deleteUser,
};

export default userModel;


