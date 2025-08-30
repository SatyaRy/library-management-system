
import  {PrismaClient,Prisma} from "@prisma/client"
const prisma = new PrismaClient()

//book data
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
    bookID?: number
    title?: string,
    authorName?: string,
    category?: string,
    publishedDate?: string,
    isAvailable?: boolean
}


//retrieve book
export const getBookService = async (query: BookQuery): Promise<BookResponse> => {
  try {
    const where: Prisma.BookWhereInput = {};
    const allBooks = await prisma.book.findMany()
    if (query.title) {
      where.title = { contains: query.title};
    }
    if (query.authorName) {
      where.authorName = { contains: query.authorName};
    }
    if (query.category) {
      where.category = { contains: query.category};
    }
    const book = await prisma.book.findMany({
      where: where,
    });
    if(book.length === 0){
        return {
            status:404,
            message:"Books are not available!"
        }
    }else{
       return {
        status: 200,
        message: {
          data: allBooks,
        },
    };
    }
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
export const addBookService = async(data:Book): Promise<BookResponse> => {
    try {
       const isExist = await prisma.book.findFirst({
        where:{
            title: data.title,
            authorName:data.authorName
        }
       })
       if(isExist){
           return {
            status:200,
            message: `${data.title} already exist`
        } 
       }
       await prisma.book.create({
        data:{
            title: data.title,
            authorName: data.authorName,
            category: data.category,
            publishedDate: data.publishedDate,
            isAvailable: data.isAvailable,
        }
       })
    return {
        status:200,
        message: `${data.title} book has successfully added to library management`
    }
    } catch (error) {
        console.log(error)
        return {
            status:500,
            message: error
        }
    }
}


export const updateBookService = async(updatedBookData: BookQuery): Promise<BookResponse> =>{
  try {
        await prisma.book.update({
            where: {
                bookID: updatedBookData.bookID
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
            message: `Book ID: ${updatedBookData.bookID} has been updated.`
        }
  } catch (error) {
    console.log(error)
      return {
            status:500,
            message: error
      }
  }
}


export const deleteBookService = async(bookID: number): Promise<BookResponse> => {
  try {
  const isExist =await prisma.book.findUnique({
    where:{
      bookID:bookID
    }
  })
  if(!isExist){
    return {
      status:404,
      message: `book ID: ${bookID} not found`
    }
  }
   await prisma.book.delete({
      where:{
        bookID:bookID
      }
    })
    return {
      status:200,
      message: `Book ID: ${bookID} has been deleted.`
    }
  } catch (error) {
    console.log(`error on delete service ${error}`)
    return {
      status: 500,
      message: error
    }
  }
}