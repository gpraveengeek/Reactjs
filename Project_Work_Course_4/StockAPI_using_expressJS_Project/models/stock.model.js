export class StockQuote {
  constructor({ c, d, dp, h, l, o, pc, t }) {
    this.currentPrice = c;         // Current price
    this.change = d;               // Change
    this.percentChange = dp;       // Change in percentage
    this.high = h;                 // High price of the day
    this.low = l;                  // Low price of the day
    this.open = o;                 // Open price of the day
    this.previousClose = pc;       // Previous close price
    this.timestamp = t;            // Timestamp
  }
}

export class CompanyProfile {
  constructor({ name, ticker, exchange, ipo, marketCapitalization, currency, country, logo, weburl }) {
    this.name = name;
    this.symbol = ticker;
    this.exchange = exchange;
    this.ipoDate = ipo;
    this.marketCap = marketCapitalization;
    this.currency = currency;
    this.country = country;
    this.logo = logo;
    this.website = weburl;
  }
}

export class SymbolItem {
  constructor({ symbol, displaySymbol, description, type, currency }) {
    this.symbol = symbol;
    this.displaySymbol = displaySymbol;
    this.name = description;
    this.type = type;
    this.currency = currency;
  }
}

export class SearchResult {
  constructor({ symbol, description, type, currency }) {
    this.symbol = symbol;
    this.name = description;
    this.type = type;
    this.currency = currency;
  }
}
