import Product from "../models/ProductModel.js";

class ProductController {
  async getAllProduct(req, res) {
    try {
      const products = await Product.find({});
      return res.status(200).json({ message: "Lấy toàn bộ sản phẩm thành công", products });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async getProductDetail(req, res) {
    try {
      const product = await Product.findById(req.params.id);
      if (product) {
        return res.status(200).json({ message: "Lấy chi tiết sản phẩm thành công", product });
      }
      return res.status(404).json({ message: "Không tìm thấy sản phẩm" });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async createProduct(req, res) {
    try {
      const data = await Product.create(req.body);
      return res.status(200).json({ message: "Thêm sản phẩm thành công", data });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async updateProduct(req, res) {
    try {
      const data = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (data) {
        return res.status(200).json({ message: "Cập nhật sản phẩm thành công", data });
      }
      return res.status(404).json({ message: "Không tìm thấy sản phẩm cần cập nhật" });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async deleteProduct(req, res) {
    try {
      const data = await Product.findByIdAndDelete(req.params.id);
      if (data) {
        return res.status(200).json({ message: "Xóa sản phẩm thành công" });
      }
      return res.status(404).json({ message: "Không tìm thấy sản phẩm cần xóa" });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
}

export default ProductController;
