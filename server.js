
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import authRoutes from "./routes/authRoutes.js";
import courseRoutes from "./routes/courseRoutes.js";
import paymentRoutes from "./routes/paymentRoutes.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("MongoDB Connected"))
.catch(err=>console.log(err));

app.use("/api/auth", authRoutes);
app.use("/api/courses", courseRoutes);
app.use("/api/payments", paymentRoutes);

app.listen(5000, ()=>console.log("Server running on 5000"));
