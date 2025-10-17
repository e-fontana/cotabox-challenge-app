import z from "zod";

export const deletePartnerSchema = z.object({
  partnerId: z.string({ error: "Partner ID is required" }),
});

export type TDeletePartnerParams = z.infer<typeof deletePartnerSchema>;
