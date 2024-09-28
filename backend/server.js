require("dotenv").config();
const app = require("./app");

const port = process.env.PORT || 3131;

app.listen(port, () => {
  console.log("Server rodando na porta: ", port);
});
