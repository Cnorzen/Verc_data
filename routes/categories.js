import express from "express";
const categoryRouter = express.Router();
categoryRouter.get("/", (req, res) => {
    res.send("Get all categories");
});
categoryRouter.post("/", (req, res) => {
    res.send("Add new category");
});
categoryRouter.get("/:id", (req, res) => {
    res.send("category details");
});
categoryRouter.put("/:id", (req, res) => {
    res.send("Update category");
});
categoryRouter.delete("/:id", (req, res) => {
    res.send("Delete category");
});
export default categoryRouter;
