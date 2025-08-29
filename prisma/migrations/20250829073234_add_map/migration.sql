/*
  Warnings:

  - You are about to drop the column `authorName` on the `Book` table. All the data in the column will be lost.
  - You are about to drop the column `isAvailable` on the `Book` table. All the data in the column will be lost.
  - You are about to drop the column `publishedDate` on the `Book` table. All the data in the column will be lost.
  - Added the required column `author_name` to the `Book` table without a default value. This is not possible if the table is not empty.
  - Added the required column `is_available` to the `Book` table without a default value. This is not possible if the table is not empty.
  - Added the required column `published_date` to the `Book` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Book` DROP COLUMN `authorName`,
    DROP COLUMN `isAvailable`,
    DROP COLUMN `publishedDate`,
    ADD COLUMN `author_name` VARCHAR(191) NOT NULL,
    ADD COLUMN `is_available` BOOLEAN NOT NULL,
    ADD COLUMN `published_date` VARCHAR(191) NOT NULL;
