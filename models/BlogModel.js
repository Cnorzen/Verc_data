import mongoose from "mongoose";
const Schema = mongoose.Schema;

const BlogSchema = new Schema(
   {
      title: { type: String, required: true },
      content: { type: String },
      author: { type: String },
      publishDate: { type: Number },
      summary: { type: String },
   },
   { timestamps: true, versionKey: false }
);
const Blog = mongoose.model("Blog", BlogSchema);
export default Blog;
