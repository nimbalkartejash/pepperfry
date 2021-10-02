const express = require("express")
const router = express.Router();

// const Product=require("../models/armChair.model")
const Items = require("../models/cart.model")

router.post("", async (req, res) => {
    const items = await Items.create(req.body)
    return res.status(201).send({ items })
})

router.get("", async (req, res) => {
    const items = await Items.find().populate("product").lean().exec();
    return res.status(200).send({ items })
})

router.get("/:id", async (req, res) => {
    const items = await Items.findById(req.params.id).populate("product").lean().exec();
    return res.status(200).send({ items })
})

router.patch("/:id", async (req, res) => {
    const items = await Items.findByIdAndUpdate(req.params.id, req.body, { new: true }).lean().exec();
    return res.status(200).send({items })
})
module.exports = router