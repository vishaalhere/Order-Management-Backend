const express = require("express");
const router = express.Router();
const fetchuser = require("../middleware/fetchuser");
const Order = require("../models/Orders");
const user = require("../models/User");
// const { body, validationResult } = require("express-validator");

// ROUTE 1: Get All the orders using: GET "/api/orders/fetchallorders". Login required
router.get("/fetchallorders", fetchuser, async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user.id });
    res.json(orders);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

// ROUTE 2: Add a new order using: POST "/api/orders/addorder". Login required
router.post("/addorder", fetchuser, async (req, res) => {
  try {
    const {
      customer_name,
      mobile,
      email,
      address,
      product_id,
      product_name,
      price,
      order_status,
      source,
    } = req.body;

    const order = await new Order({
      user: req.user.id,
      customer_name,
      mobile,
      email,
      address,
      product_id,
      product_name,
      price,
      order_status,
      source,
    });
    const savedOrder = await order.save();

    res.json(savedOrder);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

// ROUTE 4: Delete an existing order using: DELETE "/api/orders/deleteorder". Login required
router.delete("/deleteorder/:id", fetchuser, async (req, res) => {
  try {
    // Find the order to be delete and delete it
    let order = await Order.findById(req.params.id);
    if (!order) {
      return res.status(404).send("Not Found");
    }
    // console.log(order.user.toString() + "," + req.user.id);
    // Allow deletion only if user owns this order
    if (order.user.toString() !== req.user.id) {
      return res.status(401).send("Not Allowed");
    }

    order = await Order.findByIdAndDelete(req.params.id);
    res.json({ Success: "order has been deleted", order: order });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
