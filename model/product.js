const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  priceList: {
    type: [
      {
        price: {
          type: Number,
        },
        unit: {
          type: String,
        },
      },
    ],
  },
  inStock : {
      type : Boolean
  },
  description : {
      type : String
  },
  publish : {
    type : String,
    default : true
  }
});

const Product = mongoose.model("product", ProductSchema);

module.exports = { Product };
