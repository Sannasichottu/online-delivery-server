const mongoose = require("mongoose");

const OrderSchema = mongoose.Schema({
  totalPrice: {
    type: Number,
  },
  productList: [
    {
      product: {
        type: mongoose.Types.ObjectId,
        ref: "product",
      },
      priceDetails: {
        type: {
          price: {
            type: String,
          },
          unit: {
            type: String,
          },
        },
      },
    },
  ],
  discount: {
    type: Number,
  },
  orderStatus: {
    type: String,
    enum: ["PENDING", "CANCELED", "COMPLETED"],
  },
  notes: {
    type: String,
  },
  deliveryCharge: {
    type: Number,
  },
  user : {
      type : mongoose.Types.ObjectId,
      ref : "user"
  },
  createdAt : {
      type : Date,
      default : new Date()
  }
});

const Order = mongoose.model("order", OrderSchema);

module.exports = {Order}
