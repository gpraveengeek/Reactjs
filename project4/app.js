import express from "express";
import axios from "axios";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
app.use(cors());

const FINNHUB_API = "https://finnhub.io/api/v1";
const API_KEY = process.env.FINNHUB_API_KEY;

//Get all stock symbols for an exchange
app.get("/symbols/:exchange", async (req, res) => {
  const { exchange } = req.params; // e.g. US, NS, TO, HK, etc.
  try {
    const response = await axios.get(`${FINNHUB_API}/stock/symbol`, {
      params: { exchange, token: API_KEY },
    });
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

//Get current quote
app.get("/quote/:symbol", async (req, res) => {
  const { symbol } = req.params;
  try {
    const response = await axios.get(`${FINNHUB_API}/quote`, {
      params: { symbol, token: API_KEY },
    });
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

//Get company profile
app.get("/profile/:symbol", async (req, res) => {
  const { symbol } = req.params;
  try {
    const response = await axios.get(`${FINNHUB_API}/stock/profile2`, {
      params: { symbol, token: API_KEY },
    });
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

//Get historical candle data
app.get("/candles/:symbol", async (req, res) => {
  const { symbol } = req.params;
  const { resolution = "D", from, to } = req.query; // resolution: 1,5,15,30,60,D,W,M
  try {
    const response = await axios.get(`${FINNHUB_API}/stock/candle`, {
      params: {
        symbol,
        resolution,
        from,
        to,
        token: API_KEY,
      },
    });
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
