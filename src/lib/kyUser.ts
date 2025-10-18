import ky from "ky";
import { cookies } from "next/headers";
import { COOKIES } from "./common/cookies";
import { toastFlash } from "./flash-toaster/flash-toaster";

export const kyUser = ky.create({
  prefixUrl: process.env.API_URL,
  hooks: {
    beforeRequest: [
      async (request) => {
        if (typeof window === "undefined") {
          const cookieStore = await cookies();
          const token = cookieStore.get(COOKIES.AUTH)?.value;
          if (token) request.headers.set("Authorization", `Bearer ${token}`);
        }
      },
    ],
    beforeError: [
      async (err) => {
        try {
          const status = err.response?.status;
          const body = err.response
            ? await err.response.json().catch(() => null)
            : null;
          if (body && typeof body === "object") {
            const errorMessage = (body as { message?: unknown }).message;
            if (errorMessage) err.message = String(errorMessage);
          } else if (status === 500) err.message = "Erro desconhecido";
          if (status && status !== 401 && status !== 404)
            toastFlash(err.message);
        } catch {}
        return err;
      },
    ],
  },
});
