const express = require("express")

const app = express();

const path = require("path")

//-----------------mongoose connection to the database----------------------
const connect = require("./config/db.js")

//-----------------middleware package is used to read json file----------------- 
app.use(express.json());

//-------------will show file available in public folder------------------
app.use(express.static(path.join(__dirname,"../public")))
// app.set("views", path.join(__dirname, 'view'))
app.set("view engine", "ejs")

//------------------will fetch the static html file from the public folder-----------
app.get("/pepperfry", (req, res) => {
    res.status(200).sendFile(path.join(__dirname,"../public",'final_index.html'))
})
const productController = require("./controller/armChair.controller")

app.use("/products", productController)

app.listen(2345, async () => {
    connect()
    console.log("Listening to port 2345")
})



