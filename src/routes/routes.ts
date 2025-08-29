import { Router } from "express";
import { addBookController, getBookController } from "../controller/book.controller";

export const route = Router()
route.post("/book",addBookController)
route.get("/book",getBookController)
 