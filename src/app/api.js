import express from "express";
import ErrorMiddleware from "../middleware/ErrorMiddleware.js";
import PublicRoute from "../routes/publickRoute.js";
import UserRoute from "../routes/userRoute.js";
import ProductRoute from "../routes/productRoute.js";

// initial app
const app = express();
app.use(express.json());

// routes public
app.use(PublicRoute);
app.use('/user', UserRoute);
app.use('/store', ProductRoute);

// error middleware
app.use(ErrorMiddleware);

export default app;