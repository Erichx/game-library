const express = required(express);

const app = express;

app.get("/", (req, res) => {
  res.send("WE are at home  :D ");
});

app.listen(3001);
