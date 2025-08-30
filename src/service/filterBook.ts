import  readlineSync  from 'readline-sync';
import  {PrismaClient,Prisma} from "@prisma/client"
const prisma = new PrismaClient()


//retrieve book by title and author
export const getBookService = async () => {
  try {
    const where: Prisma.BookWhereInput = {};
    const searchTitle = readlineSync.question("Search by Title (press Enter to skip): ");
    if (searchTitle) {
      where.title = { contains: searchTitle };
    }
    const searchAuthor = readlineSync.question("Search by Author (press Enter to skip): ");
    if (searchAuthor) {
      where.authorName = { contains: searchAuthor };
    }
    const book = await prisma.book.findMany({ where:where });
    book.forEach((b) => {
      console.log(
        `ID: ${b.bookID} | Title: ${b.title} | Author: ${b.authorName} | Category: ${b.category} | Published: ${b.publishedDate} | Available: ${b.isAvailable}`);
    });
    if(book.length === 0){
       console.log("Books are not available!")
    }
  } catch (error) {
    console.error("Error in getBookService:", error);
  }
};

