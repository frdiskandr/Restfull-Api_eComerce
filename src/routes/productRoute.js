import { Router } from "express";
import AuthMiddleware from "../middleware/authMiddleware.js";
import Controller from "../controller/productController.js"

const ProductRoute = Router();
ProductRoute.use(AuthMiddleware);

ProductRoute.get("/allproduct",Controller.GetAllProduct);
ProductRoute.post("/product/create",Controller.CreateProduct);
ProductRoute.put("/product/:id",Controller.UpdateProduct);
ProductRoute.delete("/product/:id",Controller.DeleteProduct);


export default ProductRoute;