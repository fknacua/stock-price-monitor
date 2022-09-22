import mongoose from "mongoose";

const priceSourceSchema = mongoose.Schema({
    priceSourceId: String,
    priceSourceName: String
})

const PriceSource = mongoose.model("PriceSource", priceSourceSchema);

export default PriceSource;