var express = require("express");
var router = express.Router();
const db = require("../queries");
const { requiresAuth } = require("express-openid-connect");
//VIDEO ROUTES

//GET request for list of all video
router.get("/videos", db.getVideos);
//GET request for one Video
router.get("/videos/:id", db.getVideosById);
//POST request for creating video
router.post("/videos", requiresAuth(), db.createVideo);
//PUT REQUEST TO UPDATE VIDEO
router.put("/videos/:id", requiresAuth(), db.updateVideo);
//DELETE REQUST TO DELETE VIDEO
router.delete("/videos/:id", requiresAuth(), db.deleteVideo);
//GET request for default video
//router.get("/default", db.getDefaultVideo);
router.get("/default", function (req, res) {
  const uuid = "d0438c4b-21f0-4944-8e1a-46c32876c913";
  res.sendFile("/" + uuid + ".mp4", { root: "./public/media" });
});
module.exports = router;
