const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const port = 2020;

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.post("/post", (req, res) => {
    
});
