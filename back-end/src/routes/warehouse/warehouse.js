const {Router} = require('express');
const router = new Router({mergeParams: true});
const path = require('path');

const Warehouse = require('../../models/Warehouse');

router.post('/create', async (req, res) => {
    console.log(req.body.name)
    try {
        const warehouses = new Warehouse({
            location: req.body.name
        });
        await warehouses.save()
        res.json({success: true});
        console.log(`warehouse post was successful: ${req.body.name}`)
    } catch (err) {
        console.log("warehouse post failed")
        console.log(err)
        res.status(500).json({success: false, error: 'Server error'});
    }
})

module.exports = router;