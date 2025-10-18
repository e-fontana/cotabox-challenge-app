"use server";

import { kyUser } from "@/lib/kyUser";
import { actionClient } from "@/lib/safe-actions";
import { TLoginFormData, TLoginFormResponse } from "./dto/login.dto";
import { registerSchema, TRegisterFormData } from "./dto/register.dto";

export const registerUser = actionClient
  .inputSchema(registerSchema)
  .action(async ({ parsedInput }: { parsedInput: TRegisterFormData }) => {
    const response = await kyUser.post<TLoginFormResponse>("auth/register", {
      json: parsedInput,
    });

    const responseData = await response.json();

    return responseData;
  });
