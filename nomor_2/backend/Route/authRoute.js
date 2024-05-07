const express = require("express");
const passport = require("../Oauth2/oauth");

const router = express.Router();

router.get("/login", passport.authenticate("oauth2"));

router.get(
  "/callback",
  passport.authenticate("oauth2", { failureRedirect: "/login" }),
  async (req, res) => {
    try {
      res.redirect("/");
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
);

module.exports = router;
