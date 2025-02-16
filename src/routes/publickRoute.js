import { Router } from "express";
import prisma from "../app/database.js";

const PublicRoute = Router();

PublicRoute.get("/alluser", async (req, res, next) => {
    try{
        const result = await prisma.user.findMany({}); 
        res.status(200).json(result);
    }catch(e){
        next(e);
    }
})
PublicRoute.delete("/delete", async (req, res, next) => {
    try{
        await prisma.user.deleteMany({});
        res.status(200).json({message: "Data deleted"});
    }catch(e){
        next(e);
    }
})
export default PublicRoute;