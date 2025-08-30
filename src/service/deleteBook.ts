import  readlineSync from 'readline-sync';
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();


export const deleteBookService = async()=> {
  try {
  const bookID = Number(readlineSync.question("Book ID: "))
  const isExist =await prisma.book.findFirst({
    where:{
      bookID:bookID
    }
  })
  if(!isExist){
    console.log(`book ID: ${bookID} not found`)
    return
  }
   await prisma.book.delete({
      where:{
        bookID:bookID
      }
    })
   console.log(`Book ID: ${bookID} has been deleted.`)
  } catch (error) {
    console.log(`error on delete service ${error}`)
  }
}