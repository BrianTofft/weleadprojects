import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl

  if (pathname.startsWith('/api/pipeline/auth')) {
    return NextResponse.next()
  }

  if (pathname.startsWith('/pipeline') || pathname.startsWith('/api/pipeline')) {
    if (pathname === '/pipeline/login') {
      return NextResponse.next()
    }

    const auth = request.cookies.get('pipeline_auth')?.value
    const password = process.env.PIPELINE_PASSWORD

    if (!password || auth !== password) {
      if (pathname.startsWith('/api/')) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
      }
      return NextResponse.redirect(new URL('/pipeline/login', request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/pipeline/:path*', '/api/pipeline/:path*'],
}
