// routes/users.js
import express from "express";
import { UserModel } from "../models/user";
// const express = require("express");
const router = express.Router();
// const Users = require("../models/user");

// Create a new user
router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    // console.log(req.body);
    const user = await UserModel.create({ name, email, password });

    res.json(user);
  } catch (err) {
    res.status(500).json({ error: "User registration failed" });
  }
});

// Get all users
router.get("/", async (req, res) => {
  // console.log(req);
  try {
    const users = await UserModel.findAll();
    // const users = { name: "saif" };
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: "Failed to retrieve users" });
  }
});

module.exports = router;
