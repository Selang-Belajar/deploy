// user PrismaClient from @prisma/client
const { PrismaClient } = require("@prisma/client");
// define prisma making new Class PrismaClient
const prisma = new PrismaClient();

// use Schema
const userRegisterSchema = require("../../schema/userRegisterSchema");
const userLoginSchema = require("../../schema/userLoginSchema");

// use bcrypt
const bcrypt = require("bcrypt");

// make Class userController
class userController {
  // make function asynchronus
  static async loginPost(req, res) {
    // use trycatch easy handling and maintain
    try {
      await userLoginSchema.parse({ body: req.body });
      // use json for API JSON return
      return res.status(200).json({
        status: "success",
        message: "welcome",
      });
    } catch (error) {
      return res.status(400).json({ status: "error", message: error.issues });
    }
  }

  // make function asynchronus
  static async loginGet(req, res) {
    try {
    } catch (error) {}
  }

  // make function asynchronus
  static async registerPost(req, res) {
    try {
      // make validation form json
      await userRegisterSchema.parse({ body: req.body });

      const media = await prisma.user.findFirst({
        where: { email: req.body.email },
      });

      // check if users exist
      if (media) {
        return res
          .status(409)
          .json({ status: "error", message: "email already exist" });
      }
      const password = await bcrypt.hashSync(req.body.password, 10);

      const user = await prisma.user.create({
        data: {
          name: req.body.name,
          email: req.body.email,
          password: password,
        },
      });

      // use json for API JSON return
      return res.status(201).json({
        status: "success",
        message: "your account has been created",
        data: {
          id: user.id,
          name: user.name,
          email: user.email,
        },
      });
    } catch (error) {
      return res.status(400).json({ status: "error", message: error.issues });
    }
  }

  // make function asynchronus
  static async registerGet(req, res) {
    try {
    } catch (error) {}
  }
}
module.exports = userController;
