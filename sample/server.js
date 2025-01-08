/* ******************************************
 * This is the application server
 * ******************************************/
const express = require("express");
const app = express();

/* ******************************************
 * Default GET route
 * ******************************************/
app.get("/", (req, res) => {
  res.send("Welcome home!");
});

/* ******************************************
 * Server host name and port
 * ******************************************/
const HOST = "localhost";
const PORT = 3000;

/* ******************************************
 * Start the server and log confirmation
 * ******************************************/
app.listen(PORT, () => {
  console.log(`trial app listening on ${HOST}:${PORT}`);
});
