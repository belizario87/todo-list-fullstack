const express = require("express");
require("dotenv").config();
const port = process.env.PORT;
console.log("Port", port);

const app = express();

app.listen(port, () => {
  console.log("Server rodando na porta: ", port);
});
