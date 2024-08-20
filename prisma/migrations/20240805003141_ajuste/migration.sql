/*
  Warnings:

  - You are about to drop the column `genero_livro_solicidado` on the `anuncios` table. All the data in the column will be lost.
  - Added the required column `genero_livro_solicitado` to the `anuncios` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "anuncios" DROP COLUMN "genero_livro_solicidado",
ADD COLUMN     "genero_livro_solicitado" VARCHAR(100) NOT NULL;
