import express from "express";
import { getRecentStocks, getPriceSources, getTickers } from '../controllers/stocks-ctl.js';

const router = express.Router();

router.get(`/:priceSourceId/:ticker`, getRecentStocks);
router.get(`/priceSources`, getPriceSources);
router.get(`/tickers`, getTickers);

export default router;