import readlineSync from "readline-sync";
import { PrismaClient } from "@prisma/client";
import { Book } from "../interface/bookInterface";
import fs from "fs";
import csv from "csv-parser";
const prisma = new PrismaClient();

export const addBookService = async () => {
  try {
    const bookInput: Book = {
      title: readlineSync.question("Book title: "),
      authorName: readlineSync.question("Author name: "),
      category: readlineSync.question("Category: "),
      publishedDate: readlineSync.question("published date: "),
      isAvailable:
        readlineSync.question("Is available (true/false): ") === "true",
    };
    const isExist = await prisma.book.findFirst({
      where: {
        title: bookInput.title,
        authorName: bookInput.authorName,
      },
    });
    if (isExist) {
      return {
        status: 200,
        message: `${bookInput.title} already exist`,
      };
    }
    await prisma.book.create({
      data: bookInput,
    });
    console.log(
      `${bookInput.title} book has successfully added to library management`
    );
  } catch (error) {
    console.log(`Error on function add book ${error}`);
  }
};


//insert data by csv file
export const addBookByCSV = async ()=>{
  try {
    const filePath = readlineSync.question("📂 Enter the path to your CSV file: ");
    const result: any[] = []
    fs.createReadStream(filePath)
    .pipe(csv())
    .on("data",(data)=>{
      console.log(data)
      result.push(data)
    })
    .on("end",async()=>{
      for(const row of result){
        await prisma.book.create({
          data:{
            title: row.title,
            authorName: row.authorName,
            isAvailable: row.isAvailable == "true"? true: false,
            category: row.category,
            publishedDate: row.publishedDate
          }
        })
      }
      console.log("Import completed successfully");
    })
  } catch (error) {
    console.log("CSV contains invalid data")
  }
}
