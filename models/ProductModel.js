import mongoose from "mongoose";
const Schema = mongoose.Schema;

const ProductSchema = new Schema(
   {
      title: { type: String },
      description: { type: String },
      author: { type: String },
      image: { type: String },
      price: { type: Number },
      rate: { type: Number },
   },
   { timestamps: true, versionKey: false }
);

const Product = mongoose.model("Product", ProductSchema);
export default Product;
