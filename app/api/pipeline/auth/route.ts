import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  const { password } = await request.json()

  if (password && password === process.env.PIPELINE_PASSWORD) {
    const response = NextResponse.json({ ok: true })
    response.cookies.set('pipeline_auth', password, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60 * 24 * 7,
      sameSite: 'lax',
      path: '/',
    })
    return response
  }

  return NextResponse.json({ error: 'Forkert adgangskode' }, { status: 401 })
}
