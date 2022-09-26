import mongoose from 'mongoose';
import { Server } from "socket.io";
import Stock from './models/Stock.js';
import createServer from './utils/server.js';
import dotenv from "dotenv";

const app = createServer();
dotenv.config();
let server;

const CONNECTION_URL = process.env.CONNECTION_URL;
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true, dbName: "stock_monitor" })
    .then(() => {
        server = app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
        const io = new Server(server, {
            pingTimeout: 60000,
            cors: {
                origin: "http://localhost:3000"
            }
        });

        io.on("connection", (socket) => {
            let intervalFn;
            console.log("Connection started");

            socket.on("SEARCH", () => {
                // SIMULATE PRICE CHANGES AFTER SEARCH
                console.log("Simulation Start, update data will be inserted after 5 seconds")
                intervalFn = setTimeout(() => {
                    insertSimulatorData();
                    console.log("Updates ready, FE will be notified of updates")
                    socket.emit("UPDATES_READY", { hasUpdates: true });
                    console.log("Simulation Done")
                }, 5000)
            })
        
            socket.on("disconnect", () => {
                console.log("Connection terminated")
                if (intervalFn) clearInterval(intervalFn);
            })
        });
    })
    .catch((err) => console.log(err.message));


// HELPER METHOD FOR TESTING ONLY
function insertSimulatorData() {
    Stock.insertMany([
        {
            ticker: "GOOG",
            price: Number(Math.random() * 99).toFixed(2),
            updatedDateTime: new Date(),
            source: "yahoo",
        },
        {
            ticker: "TSLA",
            price: Number(Math.random() * 99).toFixed(2),
            updatedDateTime: new Date(),
            source: "yahoo",
        },
        {
            ticker: "AMZN",
            price: Number(Math.random() * 99).toFixed(2),
            updatedDateTime: new Date(),
            source: "yahoo",
        },
        
        {
            ticker: "GOOG",
            price: Number(Math.random() * 999).toFixed(2),
            updatedDateTime: new Date(),
            source: "twelve",
        },
        {
            ticker: "TSLA",
            price: Number(Math.random() * 999).toFixed(2),
            updatedDateTime: new Date(),
            source: "twelve",
        },
        {
            ticker: "AMZN",
            price: Number(Math.random() * 999).toFixed(2),
            updatedDateTime: new Date(),
            source: "twelve",
        },
    ]);
}