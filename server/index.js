import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose, { mongo } from 'mongoose';

import stocksRoutes from './routes/stocks-rts.js';

const app = express();
app.use(cors());
app.use("/stocks", stocksRoutes);

const CONNECTION_URL = "mongodb+srv://admin:testadmin123@cluster0.vjg3w0e.mongodb.net/?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true, dbName: "stock_monitor" })
    .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
    .catch((err) => console.log(err.message));