// const express = require("express");
import express from "express";

export const router = express.Router();

// Import the router from home.js
const userRouter = require("./users");

// Mount the userRouter at the root path
router.use("/user", userRouter);
// router.use("/user/register", userRouter);

// Add other routes if needed
// Example: router.use('/users', usersRouter);
