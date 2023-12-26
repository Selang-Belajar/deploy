// user PrismaClient from @prisma/client
const { PrismaClient } = require("@prisma/client");
// define prisma making new Class PrismaClient
const prisma = new PrismaClient();

class roadmapController {
  static async getAllRoadmap(req, res) {
    try {
      const roadmap = await prisma.roadmap.findMany({});
      return res.status(200).json({ status: "success", message: roadmap });
    } catch (error) {
      return res.status(200).json({ status: "success", message: error });
    }
  }
  static async getRoadmapById(req, res) {
    try {
      const roadmap = await prisma.roadmap.findFirst({
        where: { id: parseInt(req.params.id) },
      });
      return res.status(200).json({ status: "success", message: roadmap });
    } catch (error) {
      return res.status(200).json({ status: "success", message: error });
    }
  }
  static async createRoadmap(req, res) {
    try {
      const roadmap = await prisma.roadmap.create({
        data: {
          name: req.body.name,
        },
      });
      return res.status(201).json({
        status: "success",
        message: "Roadmap successfuly created",
        data: roadmap,
      });
    } catch (error) {
      return res.status(400).json({ status: "error", message: error });
    }
  }

  static async relationRoadmapToCategory(req, res) {
    try {
      const roadmap = await prisma.roadmap.update({
        where: {
          id: parseInt(req.params.id),
        },
        data: {
          categories: {
            connect: [{ id: 1 }, { id: 2 }],
          },
        },
      });
      return res.status(201).json({
        status: "success",
        message: "Roadmap already include in Category",
        data: roadmap,
      });
    } catch (error) {
      return res.status(400).json({ status: "error", message: error.message });
    }
  }
}
module.exports = roadmapController;
