import { cookies } from "next/headers"

export async function toastFlash(message: string) {
  const cookieStore = await cookies()
  const payload = { message, t: Date.now() }
  cookieStore.set('flash', JSON.stringify(payload), {
    path: '/',
    expires: new Date(Date.now() + 5 * 1000),
  })
}