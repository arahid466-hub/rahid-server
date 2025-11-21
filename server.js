const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Rahid ka server successfully chal raha hai!");
});

app.listen(3000, () => {
  console.log("Server 3000 port par chal raha hai...");
});
