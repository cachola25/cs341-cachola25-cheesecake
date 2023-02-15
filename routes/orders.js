/*Author: Jayven Cachola*/


var express = require('express');
var router = express.Router();

//Prof said it is okay to have get and post
router.get('/', function (req, res, next) {
    // Get orders from database
    const orders = [
        {topping: 'cherry', quantity: 2},
        {topping: 'plain', quantity: 6},
        {topping: 'chocolate', quantity: 3}
    ]
    res.json(orders);
});

router.post('/', function (req, res, next) {
    // Post orders from database
    const orders = [
        {topping: 'cherry', quantity: 2},
        {topping: 'plain', quantity: 6},
        {topping: 'chocolate', quantity: 3}
    ]
    res.json(orders);
});

module.exports = router;