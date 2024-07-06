let express = require("express");
let app = express();

let bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

let ingredients = [
  {
    id: "24kjd4",
    text: "Eggs",
  },
  {
    id: "464nkmd",
    text: "Milk",
  },
  {
    id: "mndj578",
    text: "Mango",
  },
  {
    id: "2aks45",
    text: "Apples",
  },
];

app.get("/", function (request, response) {
  response.send(ingredients);
});

app.get("/snacks", function (req, res) {
  res.send("Hey get me some Snacks...!");
});

app.post("/", function (req, res) {
  let ingredient = res.body;
  if (!ingredient || ingredient === "") {
    res.status(500).send({ error: "Your ingredient must have text" });
  } else {
    ingredients.push(ingredient);
    res.status(200).send(ingredients);
  }
});

app.listen(3000, function () {
  console.log("First API running on port 3000!!");
});
