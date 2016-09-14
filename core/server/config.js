module.exports = {
  port: process.env.PORT || 3000,
  mongoUri: "mongodb://localhost/connection",
  secret: "sretnuh-monev",
  saveUninitialized: true,
  resave: true
};
