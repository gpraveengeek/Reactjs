import axios from "axios";
import { FINNHUB_BASE_URL, FINNHUB_API_KEY } from "../config/finnhub.config.js";
import { CompanyProfileModel, SymbolModel, SearchCacheModel } from "../models/mongo.model.js";
import { StockQuote, CompanyProfile, SymbolItem, SearchResult } from "../models/stock.model.js";

export const StockRepository = {
  async getQuote(symbol) {
    const res = await axios.get(`${FINNHUB_BASE_URL}/quote`, {
      params: { symbol, token: FINNHUB_API_KEY },
    });
    return new StockQuote(res.data);
  },

  async getProfile(symbol) {
    let cached = await CompanyProfileModel.findOne({ symbol });
    if (cached && Date.now() - cached.updatedAt.getTime() < 24 * 60 * 60 * 1000) {
      return cached;
    }

    const res = await axios.get(`${FINNHUB_BASE_URL}/stock/profile2`, {
      params: { symbol, token: FINNHUB_API_KEY },
    });
    const profile = new CompanyProfile(res.data);

    await CompanyProfileModel.findOneAndUpdate({ symbol }, profile, { upsert: true, new: true });

    return profile;
  },

  async getSymbols(exchange) {
    let cached = await SymbolModel.find({ exchange });
    if (cached.length > 0) {
      return cached;
    }

    const res = await axios.get(`${FINNHUB_BASE_URL}/stock/symbol`, {
      params: { exchange, token: FINNHUB_API_KEY },
    });

    const symbols = res.data.map((i) => new SymbolItem(i));
    await SymbolModel.insertMany(symbols);

    return symbols;
  },

  async searchCompany(query) {
    const cached = await SearchCacheModel.findOne({ query });
    if (cached) return cached.results;

    const res = await axios.get(`${FINNHUB_BASE_URL}/search`, {
      params: { q: query, token: FINNHUB_API_KEY },
    });
    const results = res.data.result.map((i) => new SearchResult(i));

    await SearchCacheModel.create({ query, results });

    return results;
  },
};
