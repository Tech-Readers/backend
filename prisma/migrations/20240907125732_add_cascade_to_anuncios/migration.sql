-- DropForeignKey
ALTER TABLE "anuncios" DROP CONSTRAINT "anuncios_anunciante_id_fkey";

-- AddForeignKey
ALTER TABLE "anuncios" ADD CONSTRAINT "anuncios_anunciante_id_fkey" FOREIGN KEY ("anunciante_id") REFERENCES "usuarios"("id") ON DELETE CASCADE ON UPDATE CASCADE;
