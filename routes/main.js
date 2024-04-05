import booksRouter from "./books.js";
import blogsRouter from "./blogs.js";
import categoryRouter from "./categories.js";
import productsRouter from "./products.js";
import authRouter from "./auth.js";

export default function routes(app) {
  app.get("/", (req, res) => {
    res.send("Hello world ");
  });
  app.use("/books", booksRouter);
  app.use("/blogs", blogsRouter);
  app.use("/categories", categoryRouter);
  app.use("/products", productsRouter);
  app.use("/auth", authRouter);
}
