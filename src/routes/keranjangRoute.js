import { Router } from "express";
import AuthMiddleware from "../middleware/authMiddleware.js";
import keranjangController from "../controller/keranjangController";

const KeranjangRoute = Router();
KeranjangRoute.use(AuthMiddleware);

KeranjangRoute.get("/",keranjangController.GetKeranjang);
KeranjangRoute.post("/",keranjangController.AddProduct);
KeranjangRoute.put("/",keranjangController.UpdateProduct);
KeranjangRoute.delete("/",keranjangController.DeleteProduct);

export default KeranjangRoute;