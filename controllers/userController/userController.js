// user PrismaClient from @prisma/client
const { PrismaClient } = require("@prisma/client");
// define prisma making new Class PrismaClient
const prisma = new PrismaClient();

// make Class userController
class userController {
  // make function asynchronus
  static async loginPost(req, res) {
    // use trycatch easy handling and maintain
    try {
      // use json for API JSON return
      return res.status(200).json({
        status: "success",
        message: "welcome",
      });
    } catch (error) {
      return res.status(400).json({ status: "error", message: error.message });
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
    } catch (error) {}
  }

  // make function asynchronus
  static async registerGet(req, res) {
    try {
    } catch (error) {}
  }
}
module.exports = userController;
