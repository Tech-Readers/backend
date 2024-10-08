import { verifyToken } from '../utils/jwt.js';
import prisma from '../config/prismaClient.js';

const authMiddleware = async (req, res, next) => {
  // obter o token JWT do cookie em vez do cabeçalho Authorization
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ error: 'Acesso negado. Token não fornecido!' });
  }

  try {
    // verifica se o token é válido e retorna os dados decodificados (incluindo o id do usuário)
    const decoded = verifyToken(token);
    req.user = await prisma.usuarios.findUnique({
      where: { id: decoded.id },
      select: { id: true, nome: true, email: true },
    });

    if (!req.user) {
      return res.status(404).json({ error: 'Usuário não encontrado.' });
    }

    next();
  } catch (error) {
    res.status(401).json({ error: 'Token inválido.' });
  }
};

export default authMiddleware;



