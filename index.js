const express = require("express");

const route = require("./routers");

const app = express();

app.use(route);

app.listen(3000, () => {
  console.log("Running in port localhost:3000");
});
