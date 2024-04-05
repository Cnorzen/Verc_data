class BookController {
  getAllBook(req, res) {
    console.log("books");
    res.send("All books");
  }
  getlBookDetail(req, res) {
    console.log("Book detail");
    res.send("book detail");
  }
  creadBook(req, res) {
    console.log("add book");
    res.send("add book");
  }
  updateBook(req, res) {
    console.log("update book");
    res.send("update book");
  }
  deleteBook(req, res) {
    console.log("delete book");
    res.send("delete book");
  }
}
export default BookController;
