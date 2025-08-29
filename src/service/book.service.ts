
import  {PrismaClient,Prisma} from "@prisma/client"
const prisma = new PrismaClient()

export interface Book{
    title: string,
    category: string,
    authorName: string
    publishedDate: string,
    isAvailable:   boolean
}   

//response 
interface BookResponse{
    status:number,
    message: any
}

// query interface
export interface BookQuery{
    title?: string,
    authorName?: string,
    category?: string,
    publishedDate?: string,

}

//retrieve book
export const getBookService = async (query: BookQuery): Promise<BookResponse> => {
  try {
    const where: Prisma.BookWhereInput = {};
    if (query.title) {
      where.title = { contains: query.title};
    }
    if (query.authorName) {
      where.authorName = { contains: query.authorName};
    }
    if (query.category) {
      where.category = { contains: query.category};
    }
    const books = await prisma.book.findMany({
      where: where,
    });
    if(books.length == 0){
        return {
            status:404,
            message:"Book is not found"
        }
    }
    return {
      status: 200,
      message: {
        data: books,
      },
    };
  } catch (error) {
    console.error("Error in getBookService:", error);
    return {
      status: 500,
      message: {
        error: "An error occurred while fetching books.",
      },
    };
  }
};

//add book 
export const addBookService = async(bookData:Book): Promise<BookResponse> => {
    try {
       const isExist = await prisma.book.findFirst({
        where:{
            title: bookData.title,
            authorName:bookData.authorName
        }
       })
       if(isExist){
           return {
            status:200,
            message: `${bookData.title} already exist`
        } 
       }
       await prisma.book.create({
        data:{
            title: bookData.title,
            authorName: bookData.authorName,
            category: bookData.category,
            publishedDate: bookData.publishedDate,
            isAvailable: bookData.isAvailable,
        }
       })
    return {
        status:200,
        message: `${bookData.title} book has successfully added to library management`
    }
    } catch (error) {
        console.log(error)
        return {
            status:500,
            message: error
        }
    }
}

//update book 
export interface BookUpdateData {
  title?: string;
  authorName?: string;
  category?: string;
  publishedDate?: string;
  isAvailable?: boolean;
}

export const updateBookService = async(bookID: number,updatedBookData: BookUpdateData): Promise<BookResponse> =>{
  try {
        await prisma.book.update({
            where: {
                bookID: bookID
            },
            data:{
                title: updatedBookData.title,
                authorName: updatedBookData.authorName,
                category: updatedBookData.category,
                publishedDate: updatedBookData.publishedDate,
                isAvailable: updatedBookData.isAvailable
            }
        })
    return {
            status:500,
            message: `Book ID: ${bookID} has been updated.`
        }
  } catch (error) {
      return {
            status:500,
            message: error
      }
  }
}