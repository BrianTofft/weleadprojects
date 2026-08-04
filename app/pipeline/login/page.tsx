'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function PipelineLogin() {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError('')

    const res = await fetch('/api/pipeline/auth', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password }),
    })

    if (res.ok) {
      router.push('/pipeline')
      router.refresh()
    } else {
      setError('Forkert adgangskode')
      setLoading(false)
    }
  }

  return (
    <div style={{ minHeight: '100vh', background: '#1C2544', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Arial, sans-serif' }}>
      <div style={{ background: 'white', borderRadius: 12, padding: '40px 48px', width: 360, boxShadow: '0 20px 60px rgba(0,0,0,0.3)' }}>
        <div style={{ marginBottom: 32 }}>
          <div style={{ fontSize: 11, color: '#cc2222', fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase', marginBottom: 8 }}>We Lead Projects</div>
          <h1 style={{ margin: 0, fontSize: 24, fontWeight: 700, color: '#2d1a1a' }}>Pipeline</h1>
          <p style={{ margin: '6px 0 0', fontSize: 14, color: '#aaa' }}>Intern adgang</p>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="Adgangskode"
            autoFocus
            style={{
              width: '100%',
              padding: '11px 14px',
              border: '1px solid #e8e0e0',
              borderRadius: 6,
              fontSize: 15,
              marginBottom: 12,
              boxSizing: 'border-box',
              outline: 'none',
              color: '#2d1a1a',
            }}
          />
          {error && <p style={{ color: '#cc2222', fontSize: 13, margin: '0 0 12px' }}>{error}</p>}
          <button
            type="submit"
            disabled={loading || !password}
            style={{
              width: '100%',
              background: loading || !password ? '#e8e0e0' : '#cc2222',
              color: loading || !password ? '#aaa' : 'white',
              border: 'none',
              borderRadius: 6,
              padding: '12px',
              fontSize: 15,
              fontWeight: 700,
              cursor: loading || !password ? 'default' : 'pointer',
              transition: 'background 0.15s',
            }}
          >
            {loading ? 'Logger ind...' : 'Log ind'}
          </button>
        </form>
      </div>
    </div>
  )
}
