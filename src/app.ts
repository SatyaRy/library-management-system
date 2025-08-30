import readlineSync from "readline-sync";
import dotenv from "dotenv";
import {
  getBookService,
} from "./service/filterBook";
import { PrismaClient, Prisma } from "@prisma/client";
import { addBookByCSV, addBookService } from "./service/addBook";
import { updateBookService } from "./service/updateBook";
import { deleteBookService } from "./service/deleteBook";
const prisma = new PrismaClient();
dotenv.config();
const main = async () => {
  let choice = 0;
  while (choice !== 5) {
    console.log(`
      _________________________
        Library Management CLI
        1. Add Book
        2. Update Book
        3. Delete Book
        4. Filter Books
        5. Export CSV file directly
        6. Exist
      _________________________
        `);

    choice = Number(readlineSync.question("Enter your choice: "));
    switch (choice) {
      case 1:
        await addBookService();
        break;
      case 2:
        await updateBookService();
        break;
      case 3:
        await deleteBookService();
        break;
      case 4:
        await getBookService();
        break;
      case 5:
        await addBookByCSV();
      case 6:
        console.log("Exiting program. Goodbye!");
        break;
      default:
        console.log("Invalid choice. Try again.");
    }
  }
  await prisma.$disconnect();
};

main();
