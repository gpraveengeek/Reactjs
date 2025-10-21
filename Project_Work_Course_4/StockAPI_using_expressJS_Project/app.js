import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import stockRoutes from "./routes/stock.routes.js";
import {connectDB} from "./config/db.config.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());


connectDB();

app.get("/", (req, res) => {
  res.send("Finnhub API with MongoDB Cache is running!");
});

app.use("/api/stocks", stockRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
