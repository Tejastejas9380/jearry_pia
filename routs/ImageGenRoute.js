const express = require("express");
const { imgGenerate } = require("../controllers/imgController");
const router = express.Router();

router.post("/generate-image", imgGenerate);

module.exports = router;