const mongoose = require('mongoose');

const inventorySchema = new mongoose.Schema({
    name: String,
    quantity: Number,
    warehouse: {type: String, default: "ShopifyHQ", required: false}
}, {
    minimize: false,
  })

const Inventory = mongoose.model('inventory', inventorySchema);

module.exports = Inventory;