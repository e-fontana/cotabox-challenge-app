import z from "zod";
import { zfd } from "zod-form-data";

export const registerSchema = zfd.formData({
  name: z.string().min(1, "Name is required"),
  username: z.string().min(1, "Username is required"),
  password: z.string().min(1, "Password is required"),
});

export type TRegisterFormData = z.infer<typeof registerSchema>;

export type TRegisterFormResponse = {
  access_token: string;
  refresh_token: string;
};
