/*
  Warnings:

  - You are about to drop the column `anuncio_id` on the `mensagens` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "mensagens" DROP CONSTRAINT "mensagens_anuncio_id_fkey";

-- AlterTable
ALTER TABLE "mensagens" DROP COLUMN "anuncio_id";
