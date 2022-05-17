const {Router} = require('express');
const router = new Router({mergeParams: true});
const path = require('path');

const Warehouse = require('../../models/Warehouse');

router.post('/create', async (req, res) => {
    const warehouse = req.body.name
    const duplicateWarehouses = await Warehouse.find({location: warehouse});
  
    if (duplicateWarehouses.length > 0) {
        res.status(400).json({success: false, error: 'A warehouse at this location already exists'});
    } else {
        try {
            const warehouses = new Warehouse({
                location: warehouse
            });
            await warehouses.save()
            res.json({success: true});
            } catch (err) {
            res.status(500).json({success: false, error: 'Server error'});
        }
    }
})

router.get('/getWarehouse', async (req, res) => {
    const allWarehouses = await Warehouse.find();
    res.json({success: true, warehouses: allWarehouses});  
});


module.exports = router;