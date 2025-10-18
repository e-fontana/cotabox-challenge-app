import z from "zod";
import { zfd } from "zod-form-data";

export const addPartnerSchema = zfd.formData({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  participationPercentage: z.coerce.number().min(0).max(100),
});

export type TAddPartnerFormData = z.infer<typeof addPartnerSchema>;
