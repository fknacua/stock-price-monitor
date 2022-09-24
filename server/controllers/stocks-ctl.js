import PriceSource from "../models/PriceSource.js";
import Stock from "../models/Stock.js";
import Ticker from "../models/Ticker.js";

export const getRecentStocks = async (req, res) => {
    try {
        const _priceSourceId = req.params.priceSourceId;
        const _ticker = req.params.ticker;
        const recentStockList = await Stock.find({ ticker: _ticker, source: _priceSourceId }).sort({updatedDateTime: -1});

        res.status(200).send(recentStockList);
    } catch (error) {
        handleAPIException(res, error);
    }
}

export const getPriceSources = async (req, res) => {
    try {
        const priceSourceList = await PriceSource.find();

        res.status(200).send(priceSourceList);
    } catch (error) {
        handleAPIException(res, error);
    }
}

export const getTickers = async (req, res) => {
    try {
        const tickerList = await Ticker.find();

        res.status(200).send(tickerList);
    } catch (error) {
        handleAPIException(res, error);
    }
}

const handleAPIException = (res, error) => {
    return res.status(500).send({message: error.message});
}