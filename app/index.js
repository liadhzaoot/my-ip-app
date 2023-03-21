const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");
app.use(cors());

app.get("/get-my-ip", cors({ origin: "http://localhost:3002" }), (req, res) => {
  res.send(req.headers["x-forwarded-for"] || req.socket.remoteAddress || null);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
