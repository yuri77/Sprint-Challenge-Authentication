const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const restrict = require("./authenticate-middleware.js");

function generateToken(user) {
  const payload = {
    username: user.username,
    id: user.id
  };
  const options = {
    expiresIn: "1d"
  };
  return jwt.sign(
    payload,
    process.env.JWT_SECRET || "let it be a secret 43q56",
    options
  );
}

router.post("/register", (req, res) => {
  // implement registration
});

router.post("/login", (req, res) => {
  // implement login
});

module.exports = router;
