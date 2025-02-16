import { Router } from "express";
import Controller from "../controller/userController.js";
import AuthMiddleware from "../middleware/authMiddleware.js";

const UserRoute = Router();

UserRoute.post("/auth/register", Controller.register);
UserRoute.post("/auth/login", Controller.login);


UserRoute.use(AuthMiddleware);
UserRoute.get("/", Controller.getUser)
UserRoute.put("/profile/update", Controller.updateProfile);
UserRoute.post("/store/create", Controller.CreateStore);
UserRoute.patch("/store/update", Controller.UpdateStore);
export default UserRoute;