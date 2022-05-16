const connectTOMongoose = require("./db");

connectTOMongoose();

// https://expressjs.com/en/starter/hello-world.html
const express = require("express");
const app = express();
const port = 7000;

app.use(express.json());

app.use("/name", require("./routes/route"));

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}/`);
});
