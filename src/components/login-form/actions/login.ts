"use server";

import { COOKIES } from "@/lib/common/cookies";
import { kyUser } from "@/lib/kyUser";
import { actionClient } from "@/lib/safe-actions";
import { cookies } from "next/dist/server/request/cookies";
import {
  loginSchema,
  TLoginFormData,
  TLoginFormResponse,
} from "./dto/login.dto";

export const loginUser = actionClient
  .inputSchema(loginSchema)
  .action(async ({ parsedInput }: { parsedInput: TLoginFormData }) => {
    const response = await kyUser.post<TLoginFormResponse>("auth/login", {
      json: parsedInput,
    });

    const cookieStore = await cookies();
    const responseData = await response.json();

    cookieStore.set(COOKIES.AUTH, responseData.access_token, {
      httpOnly: true,
      maxAge: 60 * 60 * 24,
      sameSite: "strict",
      path: "/",
      secure: process.env.NODE_ENV === "production",
    });

    cookieStore.set(COOKIES.REFRESH_TOKEN, responseData.refresh_token, {
      httpOnly: true,
      maxAge: 60 * 60 * 24 * 7,
      sameSite: "strict",
      path: "/",
      secure: process.env.NODE_ENV === "production",
    });

    return responseData;
  });
