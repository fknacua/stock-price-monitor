import mongoose, { mongo } from 'mongoose';
import Stock from "./models/Stock.js"
const CONNECTION_URL = "mongodb+srv://admin:testadmin123@cluster0.vjg3w0e.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true, dbName: "stock_monitor" })
    .then(() => console.log(`Server running`))
    .catch((err) => console.log(err.message));

const seedStocks = [
    {
        ticker: "GOOG",
        price: "10.10",
        updatedDateTime: new Date(),
        source: "yahoo",
    },
    {
        ticker: "GOOG",
        price: "11.10",
        updatedDateTime: new Date(),
        source: "yahoo",
    },
    {
        ticker: "GOOG",
        price: "12.10",
        updatedDateTime: new Date(),
        source: "yahoo",
    },
    {
        ticker: "GOOG",
        price: "13.10",
        updatedDateTime: new Date(),
        source: "yahoo",
    },
    {
        ticker: "GOOG",
        price: "14.10",
        updatedDateTime: new Date(),
        source: "yahoo",
    },
    {
        ticker: "TSLA",
        price: "90.10",
        updatedDateTime: new Date(),
        source: "yahoo",
    },
    {
        ticker: "TSLA",
        price: "91.10",
        updatedDateTime: new Date(),
        source: "yahoo",
    },
    {
        ticker: "TSLA",
        price: "92.10",
        updatedDateTime: new Date(),
        source: "yahoo",
    },
    {
        ticker: "TSLA",
        price: "93.10",
        updatedDateTime: new Date(),
        source: "yahoo",
    },
    {
        ticker: "TSLA",
        price: "94.10",
        updatedDateTime: new Date(),
        source: "yahoo",
    },

    
    {
        ticker: "GOOG",
        price: "180.10",
        updatedDateTime: new Date(),
        source: "twelve",
    },
    {
        ticker: "GOOG",
        price: "181.10",
        updatedDateTime: new Date(),
        source: "twelve",
    },
    {
        ticker: "GOOG",
        price: "182.10",
        updatedDateTime: new Date(),
        source: "twelve",
    },
    {
        ticker: "GOOG",
        price: "183.10",
        updatedDateTime: new Date(),
        source: "twelve",
    },
    {
        ticker: "GOOG",
        price: "184.10",
        updatedDateTime: new Date(),
        source: "twelve",
    },
    {
        ticker: "TSLA",
        price: "1080.10",
        updatedDateTime: new Date(),
        source: "twelve",
    },
    {
        ticker: "TSLA",
        price: "1081.10",
        updatedDateTime: new Date(),
        source: "twelve",
    },
    {
        ticker: "TSLA",
        price: "1082.10",
        updatedDateTime: new Date(),
        source: "twelve",
    },
    {
        ticker: "TSLA",
        price: "1083.10",
        updatedDateTime: new Date(),
        source: "twelve",
    },
    {
        ticker: "TSLA",
        price: "1084.10",
        updatedDateTime: new Date(),
        source: "twelve",
    }
];

const seedDB = async () => {
    await Stock.deleteMany({});
    await Stock.insertMany(seedStocks);
}

seedDB().then(() => {
    console.log("Default data seeding done!")
    mongoose.connection.close();
});