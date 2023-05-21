const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const port = 3030;

const app = express();

app.use(cors());
app.use(bodyParser.json());

var signUser = [];
console.log(userInformation);

app.post("/post", (req, res) => {
  const { userInformation } = req.body;

  res.send({
    success: true,
    data: "yas",
  });
});

app.listen(port, () => {
  console.log(`Connected to the local server by http://localhost:${port}`);
});
