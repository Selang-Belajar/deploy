// use Router from express
const { Router } = require("express");

// define router from Router()
const router = Router();

// use userController
const categoryController = require("../../controllers/categoryController/categoryController");
const { createCategory } = categoryController;

router.post("/category", createCategory);
module.exports = router;
