import express from "express";
import { StockController } from "../controllers/stock.controller.js";

const router = express.Router();

router.get("/quote/:symbol",StockController.getQuote);
router.get("/profile/:symbol", StockController.getProfile);
router.get("/symbols/:exchange", StockController.getSymbols);
router.get("/search/:query",StockController.searchCompany);

export default router;
