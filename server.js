const express = require("express");
var path = require("path");
const app = express();

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname + "/dist/static/index.html"));
});

app.all("*", function (req, res) {
  res.redirect("/");
});

// Serve the files on port 3000.
app.listen(3000, function () {
  console.log("Example app listening on port 3000!\n");
});
