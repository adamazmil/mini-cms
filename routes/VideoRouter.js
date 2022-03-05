var express = require("express");
var router = express.Router();
const db = require("../queries");

router.get("/videos", db.getVideos);
router.get("/videos/:id", db.getVideosById);
router.post("/videos", db.createVideo);
router.put("/videos/:id", db.updateVideo);
router.delete("/videos/:id", db.deleteVideo);

module.exports = router;
