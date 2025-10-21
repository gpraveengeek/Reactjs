import mongoose from "mongoose";

const CompanyProfileSchema = new mongoose.Schema(
  {
    symbol: { type: String, required: true, unique: true },
    name: String,
    exchange: String,
    ipoDate: String,
    marketCap: Number,
    currency: String,
    country: String,
    logo: String,
    website: String,
    lastUpdated: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

const SymbolSchema = new mongoose.Schema(
  {
    exchange: String,
    symbol: String,
    displaySymbol: String,
    name: String,
    type: String,
    currency: String,
  },
  { timestamps: true }
);

const SearchCacheSchema = new mongoose.Schema(
  {
    query: { type: String, required: true, unique: true },
    results: [
      {
        symbol: String,
        name: String,
        type: String,
        currency: String,
      },
    ],
    lastUpdated: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

export const CompanyProfileModel = mongoose.model("CompanyProfile", CompanyProfileSchema);
export const SymbolModel = mongoose.model("Symbol", SymbolSchema);
export const SearchCacheModel = mongoose.model("SearchCache", SearchCacheSchema);