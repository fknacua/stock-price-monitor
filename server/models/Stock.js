import mongoose from "mongoose";

const stockSchema = mongoose.Schema({
    ticker: String,
    price: Number,
    updatedDateTime: {
        type: Date,
        value: new Date()
    }
})

const Stock = mongoose.model("Stock", stockSchema);

export default Stock;