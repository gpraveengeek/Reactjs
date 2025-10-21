import { StockRepository } from "../repository/stock.repository.js";

export const StockController = {
  async getQuote(req, res) {
    try {
      const { symbol } = req.params;
      const data = await StockRepository.getQuote(symbol);
      res.json(data);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  async getProfile(req, res) {
    try {
      const { symbol } = req.params;
      const data = await StockRepository.getProfile(symbol);
      res.json(data);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  async getSymbols(req, res) {
    try {
      const { exchange } = req.params;
      const data = await StockRepository.getSymbols(exchange);
      res.json(data);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
  
  async searchCompany(req, res) {
    try {
      const { query } = req.params;
      const data = await StockRepository.searchCompany(query);

      if (!data || data.length === 0) {
        return res.status(404).json({ message: "No matching companies found." });
      }

      const formatted = data.map((item) => ({
        symbol: item.symbol,
        name: item.description,
        type: item.type,
        currency: item.currency,
      }));

      res.json(formatted);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
};
