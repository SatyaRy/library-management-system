import { Router } from "express";
import { addBookController, deleteBookController, getBookController, updateBookController } from "../controller/book.controller";

export const route = Router()
route.post("/book",addBookController)
route.get("/book",getBookController)
route.patch("/book",updateBookController)
route.delete("/book",deleteBookController)