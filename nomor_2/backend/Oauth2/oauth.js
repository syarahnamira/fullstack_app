// oauth.js
const passport = require("passport");
const OAuth2Strategy = require("passport-oauth2").Strategy;
const jwt = require("jsonwebtoken");
const uuid = require("uuid").v4;

const secretKey = "superrahasia";
const clientID =
  "1018282106828-asg6232mcdiui0k50k36utu60oeq831p.apps.googleusercontent.com";
const clientSecret = "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";

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
