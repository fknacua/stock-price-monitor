import express from "express";
import { getRecentStocks } from '../controllers/stocks-ctl.js';

const router = express.Router();

router.get(`/:priceSourceId/:ticker`, getRecentStocks);

export default router;