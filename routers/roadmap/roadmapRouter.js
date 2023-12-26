// use Router from express
const { Router } = require("express");

// define router from Router()
const router = Router();

// use userController
const roadmapController = require("../../controllers/roadmapController/roadmapController");
const { createRoadmap, relationRoadmapToCategory } = roadmapController;

router.post("/roadmap", createRoadmap);
router.post("/roadmap/:id", relationRoadmapToCategory);
module.exports = router;
