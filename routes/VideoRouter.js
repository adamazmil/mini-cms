var express = require("express");
var router = express.Router();
const db = require("../queries");

//VIDEO ROUTES

//GET request for list of all video
router.get("/videos", db.getVideos);
//GET request for one Video
router.get("/videos/:id", db.getVideosById);
//POST request for creating video
router.post("/videos", db.createVideo);
//PUT REQUEST TO UPDATE VIDEO
router.put("/videos/:id", db.updateVideo);
//DELETE REQUST TO DELETE VIDEO
router.delete("/videos/:id", db.deleteVideo);

module.exports = router;
