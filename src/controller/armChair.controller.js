const express = require("express")
const router = express.Router();

const Product=require("../models/armChair.module")
router.post("", async (req, res) => {
    const product = await Product.create(req.body)
    return res.status(201).send({ product })
})
router.get("", async (req, res) => {
    const product = await Product.find().lean().exec();
    return res.status(200).send({ product })
})
router.patch("/:id", async (req, res) => {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true }).lean().exec();
    return res.status(200).send({ product })
})
module.exports = router