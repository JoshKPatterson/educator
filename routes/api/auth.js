const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const config = require("config");
const jwt = require("jsonwebtoken");
const auth = require("../../middleware/auth");

// User Model
const User = require("../../models/User");

// @route POST api/auth
// @desc Authenticate User
// @access Public
router.post("/", (req, res) => {
  const { email, password } = req.body;

  // Simple Validaton
  if (!email || !password) {
    return res.status(400).json({ msg: "Please Enter All Fields" });
  }

  // Check For Existing User
  User.findOne({ email }).then((user) => {
    if (!user) return res.status(400).json({ msg: "User Does Not Exist" });

    // Validate Password
    bcrypt.compare(password, user.password).then((isMatch) => {
      if (!isMatch) return res.status(400).json({ msg: "Invalid Credentials" });

      // jwt.sign({ id: user.id }, config.get("jwtSecret"), (err, token) => {
      jwt.sign({ id: user.id }, (config?.get('jwtSecret') || process.env.JWT_SECRET ), (err, token) => {
        if (err) throw err;
        res.json({
          token,
          user: {
            id: user.id,
            name: user.name,
            email: user.email,
            stats: user.stats,
          },
        });
      });
    });
  });
});

// @route GET api/auth/user
// @desc Get User Data
// @access Private
router.get("/user", auth, (req, res) => {
  User.findById(req.user.id)
    .select("-password")
    .then((user) => res.json(user));
});

module.exports = router;
