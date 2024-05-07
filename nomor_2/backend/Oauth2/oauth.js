require('dotenv').config({path: '../.env'});

const passport = require("passport");
const OAuth2Strategy = require("passport-oauth2").Strategy;
const jwt = require("jsonwebtoken");
const uuid = require("uuid").v4;

const secretKey = process.env.SECRET_KEY; 
const clientID = process.env.CLIENT_ID; 
const clientSecret = process.env.CLIENT_SECRET; 

passport.use(
  "oauth2",
  new OAuth2Strategy(
    {
      authorizationURL: "https://oauth.provider.com/authorize",
      tokenURL: "https://oauth.provider.com/token",
      clientID,
      clientSecret,
      callbackURL: "/auth/callback",
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const id = uuid();
        const session_exp = Date.now() + 60000;
        const username = profile.username;
        l;
        const token = jwt.sign({ id, username, session_exp }, secretKey);
        done(null, token);
      } catch (error) {
        done(error);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((obj, done) => {
  done(null, obj);
});

module.exports = passport;
