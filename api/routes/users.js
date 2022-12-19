const express = require("express");
const { getProfile } = require("../controllers/users");

const router = express.Router();

router.get("/profile", getProfile);

module.exports = router;
