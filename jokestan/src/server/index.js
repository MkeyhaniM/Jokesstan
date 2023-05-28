const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const port = 3030;
const app = express();

app.use(cors());
app.use(bodyParser.json());

var signUser = [];

const Jokestan = "Jokestan";

app.post("/post", (req, res) => {
  const { userInformation } = req.body;

  if (userInformation) {
  
    res.send({
      success: true,
      data: userInformation,
      token: [Jokestan],
    });
  } else {
    res.send({
      success: true,
      data: userInformation,
      token: null,
    });
  }
});

app.listen(port, () =>
  console.log(`Connected to the local server by http://localhost:${port}`)
);
