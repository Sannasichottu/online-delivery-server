var express = require("express");
var router = express.Router();
const { authenticate, permit } = require("../../library/authenticate");
var { Order } = require("../../model/order");

router.get("/list-order", [authenticate,permit("ADMIN")],async(req,res) => {
    let orders = await Order.find();
    res.json(orders);
});

module.exports = router;