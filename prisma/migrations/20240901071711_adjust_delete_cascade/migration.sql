-- DropForeignKey
ALTER TABLE "anuncios" DROP CONSTRAINT "anuncios_anunciante_id_fkey";

-- DropForeignKey
ALTER TABLE "avaliacoes" DROP CONSTRAINT "avaliacoes_anuncio_id_fkey";

-- DropForeignKey
ALTER TABLE "avaliacoes" DROP CONSTRAINT "avaliacoes_usuario_avaliador_id_fkey";

-- DropForeignKey
ALTER TABLE "mensagens" DROP CONSTRAINT "mensagens_usuario_destinatario_id_fkey";

-- DropForeignKey
ALTER TABLE "mensagens" DROP CONSTRAINT "mensagens_usuario_remetente_id_fkey";

-- AddForeignKey
ALTER TABLE "anuncios" ADD CONSTRAINT "anuncios_anunciante_id_fkey" FOREIGN KEY ("anunciante_id") REFERENCES "usuarios"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "avaliacoes" ADD CONSTRAINT "avaliacoes_anuncio_id_fkey" FOREIGN KEY ("anuncio_id") REFERENCES "anuncios"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "avaliacoes" ADD CONSTRAINT "avaliacoes_usuario_avaliador_id_fkey" FOREIGN KEY ("usuario_avaliador_id") REFERENCES "usuarios"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "mensagens" ADD CONSTRAINT "mensagens_usuario_destinatario_id_fkey" FOREIGN KEY ("usuario_destinatario_id") REFERENCES "usuarios"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "mensagens" ADD CONSTRAINT "mensagens_usuario_remetente_id_fkey" FOREIGN KEY ("usuario_remetente_id") REFERENCES "usuarios"("id") ON DELETE CASCADE ON UPDATE CASCADE;
