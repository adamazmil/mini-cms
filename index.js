const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
var video = require("./routes/VideoRouter.js");
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.get("/", (request, response) => {
  response.json({ info: "Video serving cms webapp" });
});
app.use("/", video);
app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
