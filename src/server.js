const express = require("express")

const app = express();

const connect = require("./config/db.js")

app.use(express.json());

const productController = require("./controller/armChair.controller")

app.use("/products", productController)

app.listen(2345, async () => {
    connect()
    console.log("Listening to port 2345")
})