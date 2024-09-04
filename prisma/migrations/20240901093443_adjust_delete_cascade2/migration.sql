-- DropForeignKey
ALTER TABLE "mensagens" DROP CONSTRAINT "mensagens_anuncio_id_fkey";

-- AddForeignKey
ALTER TABLE "mensagens" ADD CONSTRAINT "mensagens_anuncio_id_fkey" FOREIGN KEY ("anuncio_id") REFERENCES "anuncios"("id") ON DELETE CASCADE ON UPDATE CASCADE;
