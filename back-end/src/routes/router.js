const {Router} = require('express');
const router = new Router();

const warehouseRouter = require('.warehouse/warehouse');
const inventoryRouter = require('.inventory/inventory');

router.use('/warehouse', warehouseRouter);
router.use('/inventory', inventoryRouter);

module.exports = router;
