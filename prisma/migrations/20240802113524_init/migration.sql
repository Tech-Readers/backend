/*
  Warnings:

  - A unique constraint covering the columns `[endereco_id]` on the table `usuarios` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "usuarios_endereco_id_key" ON "usuarios"("endereco_id");
