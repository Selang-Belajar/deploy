// user PrismaClient from @prisma/client
const { PrismaClient } = require("@prisma/client");
// define prisma making new Class PrismaClient
const prisma = new PrismaClient();

class categoryController {
  static async createCategory(req, res) {
    try {
      const category = await prisma.category.create({
        data: {
          name: req.body.name,
        },
      });
      return res.status(201).json({
        status: "success",
        message: "Category successfuly created",
        data: category,
      });
    } catch (error) {
      return res.status(400).json({ status: "error", message: error });
    }
  }
}
module.exports = categoryController;
