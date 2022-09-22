import mongoose from "mongoose";

const tickerSchema = mongoose.Schema({
    tickerId: String,
    tickerName: String
})

const Ticker = mongoose.model("Ticker", tickerSchema);

export default Ticker;