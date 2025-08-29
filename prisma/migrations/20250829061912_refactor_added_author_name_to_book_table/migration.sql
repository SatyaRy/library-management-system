/*
  Warnings:

  - You are about to drop the column `authorID` on the `Book` table. All the data in the column will be lost.
  - You are about to drop the `Author` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `Book` DROP FOREIGN KEY `Book_authorID_fkey`;

-- DropIndex
DROP INDEX `Book_authorID_key` ON `Book`;

-- AlterTable
ALTER TABLE `Book` DROP COLUMN `authorID`;

-- DropTable
DROP TABLE `Author`;
