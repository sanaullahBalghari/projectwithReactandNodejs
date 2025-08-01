import express from "express"
import cors from "cors"
import dotenv from "dotenv";
dotenv.config();
import cookieParser from "cookie-parser";


const app=express();

app.use(cors({
  origin: process.env.CORS_ORIGIN, // e.g. "http://localhost:3000"
  credentials: true,               // allow cookies & authorization headers
}));


app.use(express.json({limit:'16kb'}))
app.use(express.urlencoded({extended:true, limit:"16kb"}))
app.use(express.static("public"));
app.use(cookieParser())


//router import

import userRouter from "./routes/user.routes.js";
import categoryRoutes from "./routes/category.routes.js";
import productRoutes from "./routes/product.routes.js";
import cartRoutes from './routes/cart.routes.js';
import orderRoutes from "./routes/order.routes.js";

//routes declicaration

// app.use('/users', userRouter)
app.use('/api/v1/users', userRouter)
app.use("/api/categories", categoryRoutes);
app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/orders", orderRoutes);



// http:localhost/8000/api/v1/users/register 
// http:localhost/8000/api/orders/place
// http:localhost/8000//api/cart



export {app}


