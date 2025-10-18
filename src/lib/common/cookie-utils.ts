import { cookies } from 'next/headers'

interface CookieOptions {
  httpOnly?: boolean
  secure?: boolean
  sameSite?: 'strict' | 'lax' | 'none'
  path?: string
  domain?: string
  expires?: Date
  maxAge?: number
}

export async function setSecureCookie(
  name: string,
  value: string,
  options: CookieOptions = {},
) {
  const cookieStore = await cookies()

  const defaultOptions: CookieOptions = {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: process.env.NODE_ENV === 'production' ? 'lax' : 'strict',
    path: '/',
  }

  // Adicionar domínio apenas em produção
  if (process.env.NODE_ENV === 'production' && process.env.COOKIE_DOMAIN) {
    defaultOptions.domain = process.env.COOKIE_DOMAIN
  }

  const finalOptions = { ...defaultOptions, ...options }

  cookieStore.set(name, value, finalOptions)
}

export async function deleteCookie(name: string) {
  const cookieStore = await cookies()
  cookieStore.delete(name)
}

export async function getCookie(name: string) {
  const cookieStore = await cookies()
  return cookieStore.get(name)?.value
}
