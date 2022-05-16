const mongoose = require('mongoose');

const warehouseSchema = mongoose.Schema({
    location: String
})

const Warehouse = mongoose.model('warehouses', warehouseSchema);

module.exports = Warehouse;