
var express = require('express');
var router = express.Router();


router.post('/', function (req, res, next) {
    const orders = [
        {topping: 'cherry', quantity: 2},
        {topping: 'plain', quantity: 6},
        {topping: 'chocolate', quantity: 3}
    ]
    res.json(orders);
});

module.exports = router;