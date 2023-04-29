const express = require("express");
const path = require("path");
const httpProxy = require("http-proxy");
const app = express();
const PORT = process.env.PORT || 3001;

const proxy = httpProxy.createProxyServer();

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Content-Type", "application/json");

  next();
});

// Proxy all requests to the API server
app.all("/api/*", (req, res) => {
  proxy.web(req, res, {
    target: "https://obscure-bayou-28121.herokuapp.com",
  });
});

// Serve your static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}

// Serve the index.html file for all other routes
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
