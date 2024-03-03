import { ZodSchema, z } from "zod";

export const UserSignupSchema = z.object({
  email: z.string(),
  password: z.string(),
});
