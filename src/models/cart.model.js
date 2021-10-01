const mongoose = require("mongoose")

const cartSchema = new mongoose.Schema({
    id: { type: Number, required: true },
    items:[{type:mongoose.Schema.Types.ObjectId,ref:"product",required:true}]
})

const Items = mongoose.model('item', cartSchema)
module.exports =Items