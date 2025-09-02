const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "Hello DevOps Project 3 🚀 - Node.js Express CI" });
});

module.exports = router;


