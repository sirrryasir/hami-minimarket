import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import env from "./lib/env.js";
import productRoutes from "./routes/productRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import mongoose from "mongoose";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);

// Root route
app.get("/", (req, res) => {
  res.send("Hami MiniMarket API is running");
});

// Connect to DB & Start Server
const startServer = async () => {
  mongoose.set("strictQuery", true);
  await connectDB();
  app.listen(env.PORT, () => {
    console.log(`Server is running on port http://localhost:${env.PORT}`);
  });
};

startServer();
