import cors from 'cors';
import express from 'express';
import stocksRoutes from '../routes/stocks-rts.js';

function createServer() {
    const app = express();
    app.use(cors());
    app.use("/stocks", stocksRoutes);

    return app;
}

export default createServer;