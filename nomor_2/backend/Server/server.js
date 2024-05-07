const express = require("express");
const session = require("express-session");
const passport = require("./oauth");
const cookieParser = require("cookie-parser");
const authRoutes = require("./authRoutes");

const app = express();
const PORT = 3000;

app.use(cookieParser());
app.use(
  session({
    secret: "your_session_secret",
    resave: false,
    saveUninitialized: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use("/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`Server berjalan pada port ${PORT}`);
});
