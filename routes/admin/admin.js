var express = require ("express");
var router = express.Router();
var productRoute = require("./product")

router.use("/product",productRoute)



module.exports = router;