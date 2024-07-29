-- DropForeignKey
ALTER TABLE "telefones" DROP CONSTRAINT "telefones_usuario_id_fkey";

-- DropForeignKey
ALTER TABLE "usuarios" DROP CONSTRAINT "usuarios_endereco_id_fkey";

-- AddForeignKey
ALTER TABLE "telefones" ADD CONSTRAINT "telefones_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "usuarios"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "usuarios" ADD CONSTRAINT "usuarios_endereco_id_fkey" FOREIGN KEY ("endereco_id") REFERENCES "enderecos"("id") ON DELETE CASCADE ON UPDATE CASCADE;
