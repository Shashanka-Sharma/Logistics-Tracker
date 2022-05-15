const mongoose = require('mongoose');

const warehouseSchema = mongoose.Schema({
    location: String
})

const Warehouse = mongoose.model('Warehouse', warehouseSchema);

module.exports = Warehouse;