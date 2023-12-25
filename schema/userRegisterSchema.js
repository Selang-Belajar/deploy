const { z } = require("zod");

const validateRegisterSchema = z.object({
  body: z.object({
    name: z.string().min(3),
    email: z.string().email(),
    password: z.string().min(8),
  }),
});

module.exports = validateRegisterSchema;
