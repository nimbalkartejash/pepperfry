const mongoose=require("mongoose")
const productSchema =new mongoose.Schema({
    id: { type: Number, require: true },
    name: { type: String, require: true },
    price: { type: Number, require: true },
    url: { type: String, require: true },
    brand: { type: String, require: true }
}, {
    versionKey: false,
    timeStamp: true
})
module.exports= mongoose.model("product", productSchema)