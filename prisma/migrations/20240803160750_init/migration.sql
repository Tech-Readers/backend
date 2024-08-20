/*
  Warnings:

  - The primary key for the `anuncios` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `anuncios` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `avaliacoes` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `avaliacoes` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `enderecos` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `enderecos` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `mensagens` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `mensagens` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `telefones` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `telefones` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `usuarios` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `usuarios` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Made the column `data_criacao` on table `anuncios` required. This step will fail if there are existing NULL values in that column.
  - Changed the type of `anunciante_id` on the `anuncios` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Made the column `data_avaliacao` on table `avaliacoes` required. This step will fail if there are existing NULL values in that column.
  - Changed the type of `usuario_avaliador_id` on the `avaliacoes` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `anuncio_id` on the `avaliacoes` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Made the column `numero` on table `enderecos` required. This step will fail if there are existing NULL values in that column.
  - Made the column `bairro` on table `enderecos` required. This step will fail if there are existing NULL values in that column.
  - Made the column `data_envio` on table `mensagens` required. This step will fail if there are existing NULL values in that column.
  - Made the column `lido` on table `mensagens` required. This step will fail if there are existing NULL values in that column.
  - Changed the type of `usuario_remetente_id` on the `mensagens` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `usuario_destinatario_id` on the `mensagens` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `anuncio_id` on the `mensagens` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `usuario_id` on the `telefones` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Made the column `data_cadastro` on table `usuarios` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `endereco_id` to the `usuarios` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "anuncios" DROP CONSTRAINT "anuncios_anunciante_id_fkey";

-- DropForeignKey
ALTER TABLE "avaliacoes" DROP CONSTRAINT "avaliacoes_anuncio_id_fkey";

-- DropForeignKey
ALTER TABLE "avaliacoes" DROP CONSTRAINT "avaliacoes_usuario_avaliador_id_fkey";

-- DropForeignKey
ALTER TABLE "mensagens" DROP CONSTRAINT "mensagens_anuncio_id_fkey";

-- DropForeignKey
ALTER TABLE "mensagens" DROP CONSTRAINT "mensagens_usuario_destinatario_id_fkey";

-- DropForeignKey
ALTER TABLE "mensagens" DROP CONSTRAINT "mensagens_usuario_remetente_id_fkey";

-- DropForeignKey
ALTER TABLE "telefones" DROP CONSTRAINT "telefones_usuario_id_fkey";

-- DropForeignKey
ALTER TABLE "usuarios" DROP CONSTRAINT "usuarios_endereco_id_fkey";

-- DropIndex
DROP INDEX "usuarios_endereco_id_key";

-- AlterTable
ALTER TABLE "anuncios" DROP CONSTRAINT "anuncios_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" UUID NOT NULL DEFAULT gen_random_uuid(),
ALTER COLUMN "data_criacao" SET NOT NULL,
DROP COLUMN "anunciante_id",
ADD COLUMN     "anunciante_id" UUID NOT NULL,
ADD CONSTRAINT "anuncios_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "avaliacoes" DROP CONSTRAINT "avaliacoes_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" UUID NOT NULL DEFAULT gen_random_uuid(),
ALTER COLUMN "data_avaliacao" SET NOT NULL,
DROP COLUMN "usuario_avaliador_id",
ADD COLUMN     "usuario_avaliador_id" UUID NOT NULL,
DROP COLUMN "anuncio_id",
ADD COLUMN     "anuncio_id" UUID NOT NULL,
ADD CONSTRAINT "avaliacoes_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "enderecos" DROP CONSTRAINT "enderecos_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" UUID NOT NULL DEFAULT gen_random_uuid(),
ALTER COLUMN "numero" SET NOT NULL,
ALTER COLUMN "bairro" SET NOT NULL,
ADD CONSTRAINT "enderecos_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "mensagens" DROP CONSTRAINT "mensagens_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" UUID NOT NULL DEFAULT gen_random_uuid(),
ALTER COLUMN "data_envio" SET NOT NULL,
ALTER COLUMN "lido" SET NOT NULL,
DROP COLUMN "usuario_remetente_id",
ADD COLUMN     "usuario_remetente_id" UUID NOT NULL,
DROP COLUMN "usuario_destinatario_id",
ADD COLUMN     "usuario_destinatario_id" UUID NOT NULL,
DROP COLUMN "anuncio_id",
ADD COLUMN     "anuncio_id" UUID NOT NULL,
ADD CONSTRAINT "mensagens_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "telefones" DROP CONSTRAINT "telefones_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" UUID NOT NULL DEFAULT gen_random_uuid(),
DROP COLUMN "usuario_id",
ADD COLUMN     "usuario_id" UUID NOT NULL,
ADD CONSTRAINT "telefones_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "usuarios" DROP CONSTRAINT "usuarios_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" UUID NOT NULL DEFAULT gen_random_uuid(),
ALTER COLUMN "data_cadastro" SET NOT NULL,
DROP COLUMN "endereco_id",
ADD COLUMN     "endereco_id" UUID NOT NULL,
ADD CONSTRAINT "usuarios_pkey" PRIMARY KEY ("id");

-- AddForeignKey
ALTER TABLE "anuncios" ADD CONSTRAINT "anuncios_anunciante_id_fkey" FOREIGN KEY ("anunciante_id") REFERENCES "usuarios"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "avaliacoes" ADD CONSTRAINT "avaliacoes_anuncio_id_fkey" FOREIGN KEY ("anuncio_id") REFERENCES "anuncios"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "avaliacoes" ADD CONSTRAINT "avaliacoes_usuario_avaliador_id_fkey" FOREIGN KEY ("usuario_avaliador_id") REFERENCES "usuarios"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "mensagens" ADD CONSTRAINT "mensagens_anuncio_id_fkey" FOREIGN KEY ("anuncio_id") REFERENCES "anuncios"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "mensagens" ADD CONSTRAINT "mensagens_usuario_destinatario_id_fkey" FOREIGN KEY ("usuario_destinatario_id") REFERENCES "usuarios"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "mensagens" ADD CONSTRAINT "mensagens_usuario_remetente_id_fkey" FOREIGN KEY ("usuario_remetente_id") REFERENCES "usuarios"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "telefones" ADD CONSTRAINT "telefones_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "usuarios"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "usuarios" ADD CONSTRAINT "usuarios_endereco_id_fkey" FOREIGN KEY ("endereco_id") REFERENCES "enderecos"("id") ON DELETE CASCADE ON UPDATE CASCADE;
