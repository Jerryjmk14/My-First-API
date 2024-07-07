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

app.get("/ingredients", function (request, response) {
  response.send(ingredients);
});

app.get("/snacks", function (req, res) {
  res.send("Hey get me some Snacks...!");
});

app.post("/ingredients", function (req, res) {
  let ingredient = req.body;
  if (!ingredient || ingredient.text === "") {
    res.status(500).send({ error: "Your ingredient must have text" });
  } else {
    ingredients.push(ingredient);
    res.status(200).send(ingredients);
  }
});

app.put("/ingredients/:ingredientId", function (req, res) {
  let newText = req.body.text;
  if (!newText || newText === "") {
    res.status(500).send({ error: "You must provide an ingredient name" });
  } else {
    for (let x = 0; x < ingredients.length; x++) {
      let ing = ingredients[x];

      if (ing.id === req.params.ingredientId) {
        ing.text = newText;
        break;
      }
    }
    res.send(ingredients);
  }
});

app.listen(3000, function () {
  console.log("First API running on port 3000!!");
});
