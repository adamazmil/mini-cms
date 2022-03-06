require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const app = express();
const port = process.env.PORT;
var video = require("./routes/VideoRouter.js");
app.use(bodyParser.json());
app.use(morgan("dev"));
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.get("/api", (request, response) => {
  response.json({ info: "Video serving cms webapp" });
});
app.use("/api", video);
app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
