import z from "zod";
import { zfd } from "zod-form-data";

export const addPartnerSchema = zfd.formData({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  participation: z
    .number()
    .min(0, "Participation must be a positive number")
    .max(100, "Participation cannot exceed 100"),
});

export type TAddPartnerFormData = z.infer<typeof addPartnerSchema>;