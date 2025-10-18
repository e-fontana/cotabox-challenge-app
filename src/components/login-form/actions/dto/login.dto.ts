import z from "zod";
import { zfd } from "zod-form-data";

export const loginSchema = zfd.formData({
  username: z.string().min(1, "Username is required"),
  password: z.string().min(1, "Password is required"),
});

export type TLoginFormData = z.infer<typeof loginSchema>;

export type TLoginFormResponse = {
  access_token: string;
  refresh_token: string;
};
