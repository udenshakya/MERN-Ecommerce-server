import express from "express";
import { adminOnly } from "../middlewares/auth.js";
import {
  deleteProduct,
  getAdminProducts,
  getAllCategoriess,
  getAllProducts,
  getLatestProducts,
  getSingleProduct,
  newProduct,
  updateProduct,
} from "../controllers/product.js";
import { singleUpload } from "../middlewares/multer.js";

const app = express.Router();

// create new product /api/v1/product/new
app.post("/new", adminOnly, singleUpload, newProduct);

// to get all products with filters
app.get("/all",getAllProducts)

// to get latest 5 products
app.get("/latest", getLatestProducts);

// to get all unique categories
app.get("/categories", getAllCategoriess);

// to get all products
app.get("/admin-products",adminOnly, getAdminProducts);

app
  .route("/:id")
  .get(getSingleProduct)
  .put(adminOnly, singleUpload, updateProduct)
  .delete(adminOnly, deleteProduct);

export default app;
