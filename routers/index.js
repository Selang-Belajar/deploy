// use Router from express
const { Router } = require("express");
// use userRouter from user folder
const userRouter = require("./user/userRouter");
const categoryRouter = require("./category/categoryRouter");
const roadmapRouter = require("./roadmap/roadmapRouter");

// define router from Router()
const router = Router();

// router use userRouter
router.use(userRouter);
router.use(categoryRouter);
router.use(roadmapRouter);

// export router for use in index.js ( main )
module.exports = router;
