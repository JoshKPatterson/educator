const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const config = require("config");
const jwt = require("jsonwebtoken");

// User Model
const User = require("../../models/User");

// @route POST api/users
// @desc Register New User
// @access Public
router.post("/", (req, res) => {
  const { name, email, password } = req.body;

  // Simple Validaton
  if (!name || !email || !password) {
    return res.status(400).json({ msg: "Please Enter All Fields" });
  }

  // Check For Existing User
  User.findOne({ email }).then((user) => {
    if (user) return res.status(400).json({ msg: "User Already Registered" });

    const newUser = new User({
      name,
      email,
      password,
    });

    // Create Salt & Hash
    bcrypt.genSalt(5, (err, salt) => {
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        if (err) throw err;
        newUser.password = hash;
        // newUser.markModified("test");
        newUser.save().then((user) => {
          // jwt.sign({ id: user.id }, config.get("jwtSecret"), (err, token) => {
          jwt.sign({ id: user.id }, process.env.JWT_SECRET, (err, token) => {
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
  });
});

module.exports = router;
