require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

const comicsRoute = require("./routes/comics");
const charactersRoute = require("./routes/characters");

app.use(comicsRoute);
app.use(charactersRoute);

app.all("*", (req, res) => {
  res.json({ message: "Page not found" });
});

app.listen(process.env.PORT, () => {
  console.log("Server has started");
});
