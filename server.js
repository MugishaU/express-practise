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

server.post("/reverse", (req, res) => {
  let originalText = JSON.parse(req.body);
  let reversed = originalText.split("").reverse().join("");
  res.send(JSON.stringify(reversed));
});

server.post("/meme", (req, res) => {
  let caption = JSON.parse(req.body);
  let funny = [];

  for (let i = 0; i < caption.length; i++) {
    let letter = caption[i];
    if (letter === " ") {
      funny.push(letter);
    } else {
      if (i % 2 === 0) {
        funny.push(letter.toUpperCase());
      } else {
        funny.push(letter.toLowerCase());
      }
    }
  }
  funny = funny.join("");
  res.end(JSON.stringify(funny));
});
