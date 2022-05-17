const {Router} = require('express');
const router = new Router({mergeParams: true});
const path = require('path');

const Inventory = require('../../models/Inventory')

router.post('/create', async (req, res) => {
    const itemName = req.body.name;
    const itemQuantity = req.body.amount;

    const duplicateInventory = await Inventory.find({name: itemName})

    if (duplicateInventory.length > 0) {
        res.status(400).json({success: false, error: 'This item already exists'});
    }
    else {
        try {
            const inventory = new Inventory({
                name: itemName,
                quantity: itemQuantity
            });
            await inventory.save();
            res.json({success: true});
        } catch (err) {
            res.status(500).json({success: false, error: 'Server error'});
        }
    }
})


module.exports = router;