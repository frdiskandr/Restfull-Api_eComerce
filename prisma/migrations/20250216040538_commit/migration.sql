/*
  Warnings:

  - You are about to drop the column `session` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "session",
ADD COLUMN     "token" TEXT NOT NULL DEFAULT '';
