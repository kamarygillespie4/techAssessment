const express = require("express");
const path = require("path");
const db = require("./config/connection");
const routes = require("./routes");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3001;
const httpProxy = require("http-proxy");

const proxy = httpProxy.createProxyServer();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Content-Type", "application/json");

  next();
});

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}

app.all("/api/*", (req, res) => {
  proxy.web(req, res, {
    target: "https://obscure-bayou-28121.herokuapp.com",
  });
});

app.use(routes);

db.once("open", () => {
  app.listen(PORT, () => console.log(`🌍 Now listening on localhost:${PORT}`));
});
