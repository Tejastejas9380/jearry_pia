const express = require("express");
const { askAI } = require("../controllers/AiController");
const router = express.Router();

// send AI promt
router.post("/ask-ai", askAI);

module.exports = router;