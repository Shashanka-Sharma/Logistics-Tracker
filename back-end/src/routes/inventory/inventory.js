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
});

router.post('/update', async (req, res) => {
    const itemName = req.body.name;
    let itemQuantity = parseInt(req.body.amount);

    try {
        const item = await Inventory.findOne({name: itemName});
        if (item) {
            item.quantity += itemQuantity;
        }
        if (item.quantity < 0) {
            item.quantity = 0;
        }
        item.markModified('quantity');
        item.save();
        res.json({success: true});
    } catch (err) {
        console.log('Error editing item');
        console.log(err);
        res.status(500).json({success: false, error: 'Server error'});
    }
});

router.post('/delete', async (req, res) => {
    const itemName = req.body.name;

    try {
        await Inventory.findOneAndDelete({name: itemName})
        item.save();
    } catch (err) {
        console.log('Error editing item');
        console.log(err);
        res.status(500).json({success: false, error: 'Server error'});

    }
});

router.post('/assign', async (req, res) => {
    const itemName = req.body.name;
    const assignment = req.body.warehouse;

    try {
        let item = await Inventory.findOne({name: itemName});

        if (item) {
            item.warehouse = assignment;
        }
        item.markModified('warehouse');
        item.save();
        res.json({success: true});
    } catch (err) {
        console.log('Error editing item');
        console.log(err);
        res.status(500).json({success: false, error: 'Server error'});
    }
});

router.get('/getInventory', async (req, res) => {
    const allInventory = await Inventory.find();
    res.json({success: true, inventories: allInventory});
})


module.exports = router;