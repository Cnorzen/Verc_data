// import express from "express";
// import ProductController from "../controllers/productController.js";

// const productsRouter = express.Router();
// const productController = new ProductController();
// productsRouter.get("/", productController.getAllProduct);
// productsRouter.get("/:id", productController.getProductDetail);
// productsRouter.post("/", productController.createProduct);
// productsRouter.put("/:id", productController.updateProduct);
// productsRouter.delete("/:id", productController.deleteProduct);
// export default productsRouter;


// productsRouter.js


import express from "express";
import ProductController from "../controllers/productController.js";
import checkPermission from "../middleware/checkPermission.js";
import { validateCreateProduct, validateUpdateProduct } from "../middleware/validateProduct.js";

const productsRouter = express.Router();
const productController = new ProductController();

// Middleware kiểm tra quyền cho các route POST, PUT, DELETE
const handleValidation = async (req, res, next) => {
  const { error } = req.method === "POST" ? validateCreateProduct(req.body) : validateUpdateProduct(req.body);
  if (error) return res.status(400).json({ message: error.details[0].message });
  next();
};

productsRouter.post("/", checkPermission, handleValidation, async (req, res) => {
  await productController.createProduct(req, res);
});

productsRouter.put("/:id", checkPermission, handleValidation, async (req, res) => {
  await productController.updateProduct(req, res);
});

productsRouter.delete("/:id", checkPermission, async (req, res) => {
  await productController.deleteProduct(req, res);
});

// Thêm trường categorye khi lấy sản phẩm (ALL + Detail)
productsRouter.get("/", async (req, res) => {
  await productController.getAllProduct(req, res);
});

productsRouter.get("/:id", async (req, res) => {
  await productController.getProductDetail(req, res);
});

export default productsRouter;
