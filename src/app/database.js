import { PrismaClient } from "@prisma/client";
import Logger from "./logger.js";

const prisma = new PrismaClient();
prisma.$on("query", (e) => Logger.info(e.query, e.params, e.duration)); 
prisma.$on("error", (e) => Logger.error(e.message, e));
prisma.$on("info", (e) => Logger.warn(e.message, e));

export default prisma;