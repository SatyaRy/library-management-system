import {deleteBookService, updateBookService } from './../service/book.service';
import { addBookService ,getBookService,Book} from "../service/book.service"
import { Request, Response } from "express";

export const addBookController = async(req:Request,res:Response) =>{
    const {title,authorName,category,publishedDate,isAvailable} = req.body 
    const data: Book= {
        title,
        category,
        authorName,
        publishedDate,
        isAvailable
    }
    const response = await addBookService(data)
    res.status(response.status).json(response)
}

export const getBookController = async(req: Request, res: Response)=>{
    const response = await getBookService( req.query)
    res.status(response.status).json(response)
}


export const updateBookController = async(req: Request, res: Response)=>{
    const response = await updateBookService(req.body)
    res.status(response.status).json(response)
}


export const deleteBookController = async(req: Request, res: Response) =>{
    const {bookID} = req.body
    const response = await deleteBookService(bookID)
    res.status(response.status).json(response)
}