import  readlineSync from 'readline-sync';
import  {PrismaClient,Prisma} from "@prisma/client"
const prisma = new PrismaClient()

export const updateBookService = async()=>{
  try {
        const bookID = Number(readlineSync.question("Enter Book ID: "))
         const existingBook = await prisma.book.findUnique({where: { bookID:bookID },
        });
        if (!existingBook) {
          console.log(`Book ID: ${bookID} not found.`);
          return;
        }
         const title = readlineSync.question(`Book title (${existingBook.title}): `) || existingBook.title;
        const authorName = readlineSync.question(`Author name (${existingBook.authorName}): `) || existingBook.authorName;
        const category = readlineSync.question(`Category (${existingBook.category}): `) || existingBook.category;
        const publishedDate = readlineSync.question(`Published date (${existingBook.publishedDate}): `) || existingBook.publishedDate;
        await prisma.book.update({
            where: {
                bookID:bookID
            },
            data: {
              title:title,
              authorName:authorName,
              category:category,
              publishedDate:publishedDate
            }
        })
    console.log(`Book ID: ${bookID} has been updated.`)
  } catch (error) {
    console.log(error)
  }
}