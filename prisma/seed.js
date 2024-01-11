const { PrismaClient } = require("@prisma/client");
const bcrypt = require("../lib/bcrypt");
const { generateHash } = bcrypt;

const prisma = new PrismaClient();

const users = [
  {
    name: "atheo",
    email: "atheos810@gmail.com",
    password: generateHash("adminselangbelajar"),
  },
  {
    name: "rangga",
    email: "rangga@gmail.com",
    password: generateHash("admin"),
  },
  {
    name: "nara",
    email: "nara@gmail.com",
    password: generateHash("admin"),
  },
  {
    name: "adi",
    email: "adi@gmail.com",
    password: generateHash("admin"),
  },
];

async function main() {
  for (const user of users) {
    await prisma.user.create({
      data: user,
    });
  }

  console.log("Seed data success");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
