import { NextResponse } from 'next/server'

function mask(v: string | undefined) {
  if (!v) return { present: false }
  return { present: true, length: v.length, start: v.slice(0, 8), end: v.slice(-6) }
}

export async function GET() {
  return NextResponse.json({
    url: mask(process.env.NEXT_PUBLIC_SUPABASE_URL),
    serviceRole: mask(process.env.SUPABASE_SERVICE_ROLE_KEY),
    anon: mask(process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY),
  })
}
