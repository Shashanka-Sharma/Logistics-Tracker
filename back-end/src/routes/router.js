const {Router} = require('express');

const router = new Router
const warehouseRouter = require('.warehouse/warehouse');
const inventoryRouter = require('.inventory/inventory');

module.exports = router;
