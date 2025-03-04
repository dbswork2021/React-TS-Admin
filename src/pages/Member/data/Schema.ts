import { z } from "zod";

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const memberSchema = z.object({
  id: z.number(),
  username: z.string(),
  balance: z.number(),
  withdrawPassword: z.string(),
  status: z.number(),
  create_at: z.string(),
  ip: z.string().ip(),
  area: z.string(),
});

export type TMember = z.infer<typeof memberSchema>;
