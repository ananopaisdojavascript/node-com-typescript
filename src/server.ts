import express from "express";
const app = express();
const port = 3000;

app.get("/", (_req, res) => {
  res.send("Hello Cutie!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
