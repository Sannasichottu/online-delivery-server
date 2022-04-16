var express = require ("express");
var router = express.Router();
var {authenticate, permit} = require ("../../library/authenticate")
var {Product} = require("../../model/product");

router.get("/", [authenticate,permit("ADMIN")], async (req,res) => {
    let products = await Product.find();
    res.json(products)
});

router.post("/",[authenticate, permit("ADMIN")], async (req, res)=>{ 
    var product = new Product(req.body)
    await product.save();
    res.json({
        message : "Product Created!"
    });
});

router.get("/:productId", [authenticate,permit("ADMIN")],async (req,res) => {
    var product = await Product.findById(req.params.productId)
    res.json(product);
})

router.put("/:productId",[authenticate,permit("ADMIN")], async (req,res) => {
    var product = await Product.findByIdAndUpdate(req.params.productId,req.body)
    res.json({
        message : "Product Edited"
    });
})


module.exports = router;