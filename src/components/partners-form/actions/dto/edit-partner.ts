import z from "zod";
import { zfd } from "zod-form-data";

export const editPartnerSchema = zfd.formData({
  id: z.string(),
  firstName: z.string().min(1, "First name is required").optional(),
  lastName: z.string().min(1, "Last name is required").optional(),
  participationPercentage: z.coerce
    .number()
    .min(0, "Participation must be a positive number")
    .max(100, "Participation cannot exceed 100")
    .optional(),
});

export type TEditPartnerData = z.infer<typeof editPartnerSchema>;
