const {Router} = require('express');
const router = new Router({mergeParams: true});
const path = require('path');

const Warehouse = require('../../models/Warehouse');

router.post('/create', async (res, req) => {
    try {
        const warehouse = new Warehouse({
            location: req.body.name
        });
        await warehouse.save()
        res.json({success: true});
    } catch (err) {
        res.status(500).json({success: false, error: 'Server error'});
    }
})

module.exports = router;