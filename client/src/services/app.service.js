import axios from "axios";

const baseUrl = "http://localhost:5000/stocks"

export const getRecentStocks = (ticker, priceSource) => axios.get(`${baseUrl}/${priceSource}/${ticker}`);
export const getStockUpdates = () => axios.get(`${baseUrl}/refresh`);

export const getPriceSources = () => axios.get(`${baseUrl}/priceSources`);
export const getTickers = () => axios.get(`${baseUrl}/tickers`);
