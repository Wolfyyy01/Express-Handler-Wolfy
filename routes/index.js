const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  let args = {
    title: "Express Wolfy",
  };
  res.render("index.ejs", args);
});

module.exports = router;
