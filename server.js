let express = require("express");
let app = express();

app.get("/", function (request, response) {
  response.send("My First API");
});

app.get("/snacks", function (req, res) {
  res.send("Hey get me some Snacks...!");
});

app.listen(3000, function () {
  console.log("First API running on port 3000!!");
});
