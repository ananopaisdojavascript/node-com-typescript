import express from "express";
import router from "./routes";

const app = express();
const port = 3000;

app.get("/", (_req, res) => {
  res.send("Hello Cutie!");
});

app.use(router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

export default app;
