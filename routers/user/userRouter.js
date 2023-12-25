// use Router from express
const { Router } = require("express");

// define router from Router()
const router = Router();

// use userController
const userController = require("../../controllers/userController/userController");
const { loginPost, registerPost } = userController;

// make router get
router.get("/register", (req, res) => {
  res.send("berhasil");
});

// make router post
router.post("/login", loginPost);
router.post("/register", registerPost);

module.exports = router;
