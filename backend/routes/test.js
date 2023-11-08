// const express = require("express");
import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  console.log(req.url);
  res.send("Hello, Express.js!");
});

module.exports = router;
