import express from "express";
import routes from "./routes/main.js";
import connectMongoDB from "./config/dbconfig.js";
import { configDotenv } from "dotenv";
configDotenv;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const port = process.env.PORT || 3000;
const url = process.env.DB_URL || "mongodb://localhost:27017/mydb";
// Kết nối
connectMongoDB(url);

routes(app);
app.listen(port, () => {
   console.log(`Example app listening on port ${port}`);
});
