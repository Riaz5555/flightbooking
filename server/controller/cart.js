// @author: Md Sydul Islam Riaz
// @description: This file contains login for adding item to cart, getting all cart items for a particular user, and deleting item from the cart.
// @feature: Cart Management

const Cart = require("../models/cartModel");
const mongodb = require("mongodb");
const axios = require("axios").default;
const baseURL = require("../config/URL.json")["baseURL"];

function delay(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

module.exports.getItems = (req, res) => {
  Cart.find({ userId: req.params.userId })
    .then((info) => {
      var output = [];
      let userId = req.params.userId;
