// use Router from express
const { Router } = require("express");
// use userRouter from user folder
const userRouter = require("./user/userRouter");

// define router from Router()
const router = Router();

// router use userRouter
router.use(userRouter);

// export router for use in index.js ( main )
module.exports = router;
