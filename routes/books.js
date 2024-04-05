import express from "express";
import BookController from "../controllers/bookController.js";

const booksRouter = express.Router();
const bookController = new BookController();
booksRouter.get("/", bookController.getAllBook);
booksRouter.get("/:id", bookController.getlBookDetail);
booksRouter.post("/", bookController.creadBook);
booksRouter.put("/:id", bookController.updateBook);
booksRouter.delete("/:id", bookController.deleteBook);
export default booksRouter;
