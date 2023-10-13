const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    P_name: String,
    P_desc: String,
    P_price: Number,
    updeted_at:{ type: Date,default: Date.now}
})

module.exports =mongoose.model('Product',ProductSchema)