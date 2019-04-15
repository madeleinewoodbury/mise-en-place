const express = require("express");
const router = express.Router();

// @route   GET api/users/test
// @desc    Tests users route
// @access  Public
router.get("/test", (req, res) => res.json({ msg: "Users Works" }));

router.post("/test", (req, res) => {
  const newUser = {
    name: req.params.name,
    email: req.params.email
  };

  res.json(newUser);
});

module.exports = router;
