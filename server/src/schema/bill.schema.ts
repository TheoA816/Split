import { ZodSchema, z } from "zod";

const ItemSchema: ZodSchema = z.object({
  name: z.string(),
  cost: z.number(),
  quantity: z.number(),
});

export const ParticipantSchema: ZodSchema = z.object({
  email: z.string(),
  owed: z.number(),
  paid: z.string(),
});

export const BillSchema: ZodSchema = z.object({
  title: z.string(),
  items: z.array(ItemSchema),
  participants: z.array(ParticipantSchema),
});
