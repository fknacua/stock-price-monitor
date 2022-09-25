// import mongoose, { mongo } from 'mongoose';
// import Stock from "./models/Stock.js"
// const CONNECTION_URL = "mongodb+srv://admin:testadmin123@cluster0.vjg3w0e.mongodb.net/?retryWrites=true&w=majority";

// mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true, dbName: "stock_monitor" })
//     .then(() => console.log(`Server running`))
//     .catch((err) => console.log(err.message));

// const seedDB = () => {
//     let ctr = 0;
//     // Insert a new dummy data in the db every 30 secs - but only max 5 times
//     const intervalFn = setInterval(() => {
//         if (ctr < 10) {
//             console.log("ctr -> ", ctr);
//             Stock.insertMany([
//                 {
//                     ticker: "GOOG",
//                     price: Number(Math.random() * 99).toFixed(2),
//                     updatedDateTime: new Date(),
//                     source: "yahoo",
//                 },
//                 {
//                     ticker: "TSLA",
//                     price: Number(Math.random() * 99).toFixed(2),
//                     updatedDateTime: new Date(),
//                     source: "yahoo",
//                 },
//                 {
//                     ticker: "AMZN",
//                     price: Number(Math.random() * 99).toFixed(2),
//                     updatedDateTime: new Date(),
//                     source: "yahoo",
//                 },
                
//                 {
//                     ticker: "GOOG",
//                     price: Number(Math.random() * 999).toFixed(2),
//                     updatedDateTime: new Date(),
//                     source: "twelve",
//                 },
//                 {
//                     ticker: "TSLA",
//                     price: Number(Math.random() * 999).toFixed(2),
//                     updatedDateTime: new Date(),
//                     source: "twelve",
//                 },
//                 {
//                     ticker: "AMZN",
//                     price: Number(Math.random() * 999).toFixed(2),
//                     updatedDateTime: new Date(),
//                     source: "twelve",
//                 },
//             ]);
//             ctr += 1;
//         } else {
//             mongoose.connection.close();
//             clearInterval(intervalFn);
//             console.log("Simulation Done")
//         }
//     }, 30000)
// }

// seedDB();