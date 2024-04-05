import booksRouter from "./books.js";
import blogsRouter from "./blogs.js";
import productsRouter from "./products.js";
import authRouter from "./auth.js";
import categoriesRouter from "./categories.js";
import genresRouter from "./genres.js";
import moviesRouter from "./movies.js";

export default function routes(app) {
  app.get("/", (req, res) => {
    res.send("Hello world ");
  });
  app.use("/books", booksRouter);
  app.use("/blogs", blogsRouter);
  app.use("/products", productsRouter);
  app.use("/auth", authRouter);
  app.use("/movies", moviesRouter); 
  app.use("/categories", categoriesRouter);
  app.use("/genres", genresRouter);
}
