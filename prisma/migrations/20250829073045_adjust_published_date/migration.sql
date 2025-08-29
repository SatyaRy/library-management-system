/*
  Warnings:

  - You are about to drop the column `publised_date` on the `Book` table. All the data in the column will be lost.
  - Added the required column `publishedDate` to the `Book` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Book` DROP COLUMN `publised_date`,
    ADD COLUMN `publishedDate` VARCHAR(191) NOT NULL;
