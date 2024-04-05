class BlogController {
  getAllBlog(req, res) {
    console.log("blogs");
    res.send("All blogs");
  }
  getDetailBlog(req, res) {
    console.log("blogs");
    res.send("Detail blogs");
  }
  creadBlog(req, res) {
    console.log("blogs");
    res.send("add blogs");
  }
  updateBlog(req, res) {
    console.log("blogs");
    res.send("update blogs");
  }
  deleteBlog(req, res) {
    console.log("blogs");
    res.send("delete blogs");
  }
}
export default BlogController;
