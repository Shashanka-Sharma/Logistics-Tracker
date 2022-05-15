const mongoose = require('mongoose');

const inventorySchema = new mongoose.Schema({
    name: String,
    quantity: Number,
    warehouse: {type: String, default: "ShopifyHQ"}
})

const Item = mongoose.model('Item', inventorySchema);

module.exports = Item;