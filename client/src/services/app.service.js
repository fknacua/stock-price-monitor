import axios from "axios";
import { API_BASE_URL } from "../constants/app-static-constants";

export const getRecentStocks = (ticker, priceSource) => axios.get(`${API_BASE_URL}/${priceSource}/${ticker}`);
export const getStockUpdates = () => axios.get(`${API_BASE_URL}/refresh`);

export const getPriceSources = () => axios.get(`${API_BASE_URL}/priceSources`);
export const getTickers = () => axios.get(`${API_BASE_URL}/tickers`);
