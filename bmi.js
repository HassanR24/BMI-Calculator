const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  var weight = Number(req.body.Weight);
  var height = Number(req.body.Height);
  var result = weight / (height * height);
  var roundedResult = result.toFixed(2);
  res.send(
    "<h1 style='margin: 50px 40%;'>Your BMI is " + roundedResult + "</h1>"
  );
});

app.listen(3000, function () {
  console.log("Server is running on port 3000");
});
