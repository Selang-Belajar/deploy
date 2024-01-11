// user PrismaClient from @prisma/client
const { PrismaClient } = require("@prisma/client");
// define prisma making new Class PrismaClient
const prisma = new PrismaClient();

// use Schema
const userSchema = require("../../schema/userSchema");
// destruct Schema
const { validateLoginSchema, validateRegisterSchema } = userSchema;

// use bcrypt
const bcrypt = require("bcrypt");

// use jsonwebtoken
const jwt = require("jsonwebtoken");

const {
  JWT_SECRET,
  JWT_SECRET_REFRESH_TOKEN,
  JWT_ACCESS_TOKEN_EXPIRED,
  JWT_REFRESH_TOKEN_EXPIRED,
} = process.env;

// make Class userController
class userController {
  // make function asynchronus
  static async loginPost(req, res) {
    // use trycatch easy handling and maintain
    try {
      await validateLoginSchema.parse({ body: req.body });

      // check user if exist
      const media = await prisma.user.findFirst({
        where: { email: req.body.email },
      });

      if (!media) {
        return res
          .status(400)
          .json({ status: "error", message: "email doesn't exist" });
      }

      const password = await bcrypt.compareSync(
        req.body.password,
        media.password
      );

      if (!password) {
        return res
          .status(400)
          .json({ status: "error", message: "password not match" });
      }

      const { email } = req.body;

      // make token jwt
      const token = jwt.sign({ email }, JWT_SECRET, {
        expiresIn: JWT_ACCESS_TOKEN_EXPIRED,
      });

      // make refresh token
      const refresh_token = jwt.sign({ email }, JWT_SECRET_REFRESH_TOKEN, {
        expiresIn: JWT_REFRESH_TOKEN_EXPIRED,
      });

      // use json for API JSON return
      return res.status(200).json({
        status: "success",
        data: {
          token: token,
          refresh_token: refresh_token,
        },
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
      await validateRegisterSchema.parse({ body: req.body });

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
