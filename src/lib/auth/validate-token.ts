import { cookies } from "next/headers";
import { kyUser } from "../kyUser";
import { COOKIES } from "../common/cookies";

type TGetUserResponse = {
  id: string;
  name: string;
  username: string;
  role: "USER" | "ADMIN";
};

export async function validateToken() {
  const cookieStore = await cookies()
  const accessToken = cookieStore.get(COOKIES.AUTH)?.value
  const refreshToken = cookieStore.get(COOKIES.REFRESH_TOKEN)?.value

  if (!refreshToken) {
    return false
  }

    if (accessToken) {
    try {
      await kyUser.get<TGetUserResponse>("users/me");
      return true
    } catch {
      cookieStore.delete(COOKIES.AUTH)
      cookieStore.delete(COOKIES.REFRESH_TOKEN)
      return false
    }
  }
}
