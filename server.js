const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const server = express();
server.use(cors());
server.use(bodyParser.text());
const port = 3000;

server.listen(port, () =>
  console.log(`Express server running from http://localhost:${port}`)
);

server.post("/", (req, res) => {
  let originalText = JSON.parse(req.body);
  let reversed = originalText.split("").reverse().join("");
  res.send(JSON.stringify(reversed));
});
