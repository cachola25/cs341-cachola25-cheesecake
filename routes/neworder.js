
/*Author: Jayven Cachola*/

var express = require("express");
var router = express.Router();
var dbms = require("./dbms").dbquery;

router.get('/', function(req, res, next) {
  res.send("Placeholder");
});

router.post("/", function (req, res, next) {

    var query = 'INSERT INTO ORDERS (MONTH, DAY, QUANTITY, TOPPING, NOTES) VALUES ("AUG", 08, "' + 
    req.body.quantity + '", "' + req.body.topping + '", "' + req.body.notes + '")';

    dbms(query, (err, result) => {

        if(err) {
            console.log(err);
            res.send("Error");
        } else {
            res.send("Success");
            res.json(result);
        }
    });
});