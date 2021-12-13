const mongoose = require("mongoose");
const { Schema } = mongoose;

const OrdersSchema = new Schema({

    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },

    customer_name: {
      type: String,
      required: true
      
    },
    mobile: {
      type: Number,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    address: {
      type: String,
      required: true
    },
    product_id: {
      type: String,
      required: true
    },
    product_name: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    delivery_date: {
      type: Date,
      default: Date.now
    },
    order_status: {
      type: String,
      required: true
    },
    source: {
      type: String,
      required: true
    },
    purchase_date: {
      type: Date,
      default: Date.now,
    },  
});

module.exports = mongoose.model("orders", OrdersSchema);
