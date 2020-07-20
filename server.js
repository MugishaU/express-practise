const express = require("express");
const cors = require("cors");
const server = express();
server.use(cors());
const port = 3000;

server.listen(port, () =>
  console.log(`Express server running from http://localhost:${port}`)
);
