import { rest } from "msw"
import { API_BASE_URL } from "../../constants/app-static-constants"
import { MOCK_PRICESOURCES, MOCK_STOCK_GET_RES, MOCK_TICKERS } from "./mock-data/mock-data"

export const handlers = [
    rest.get(`${API_BASE_URL}/yahoo/GOOG`, (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json(MOCK_STOCK_GET_RES)
        )
    }),
    rest.get(`${API_BASE_URL}/priceSources`, (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json(MOCK_PRICESOURCES)
        )
    }),
    rest.get(`${API_BASE_URL}/tickers`, (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json(MOCK_TICKERS)
        )
    })
]