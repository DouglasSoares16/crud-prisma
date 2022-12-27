/*
  Warnings:

  - Added the required column `type` to the `techs` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "TypeTech" AS ENUM ('FRONT', 'BACK', 'FULLSTACK');

-- AlterTable
ALTER TABLE "techs" ADD COLUMN     "type" "TypeTech" NOT NULL;
