const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
const db = require("./queries");

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.get("/", (request, response) => {
  response.json({ info: "Video serving cms webapp" });
});
app.get("/videos", db.getVideos);
app.get("/videos/:id", db.getVideosById);
app.post("/videos", db.createVideo);
app.put("/videos/:id", db.updateVideo);
app.delete("/videos/:id", db.deleteVideo);
app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
