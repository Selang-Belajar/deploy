const { z } = require("zod");

class userSchema {
  static validateLoginSchema = z.object({
    body: z.object({
      email: z.string().email(),
      password: z.string().min(8),
    }),
  });

  static validateRegisterSchema = z.object({
    body: z.object({
      name: z.string().min(3),
      email: z.string().email(),
      password: z.string().min(8),
    }),
  });
}

module.exports = userSchema;
