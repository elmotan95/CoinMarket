export interface MarketPrice {
  pair: string;
  latestPrice: number;
  day: number;
  week: number;
  month: number;
  year: number;
  priceChangeStatus: string;
}
