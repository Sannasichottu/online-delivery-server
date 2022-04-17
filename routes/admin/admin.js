var express = require ("express");
var router = express.Router();
var productRoute = require("./product");
var ordersRoute = require("./orders");
const { route } = require("../user/users");

router.use("/product",productRoute);
router.use("/order",ordersRoute)



module.exports = router;