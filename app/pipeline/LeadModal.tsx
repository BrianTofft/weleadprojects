'use client'
import { useState } from 'react'
import type { Lead } from './KanbanBoard'

const STATUSES = [
  { id: 'prospect', label: 'Prospect' },
  { id: 'dialog', label: 'Dialog' },
  { id: 'tilbud', label: 'Tilbud' },
  { id: 'aktiv', label: 'Aktiv' },
  { id: 'afsluttet', label: 'Afsluttet' },
  { id: 'tabt', label: 'Tabt' },
]

const KILDER = [
  { id: 'linkedin', label: 'LinkedIn' },
  { id: 'findprojektleder', label: 'FindProjektleder' },
  { id: 'findaikonsulenter', label: 'FindAIKonsulenter' },
  { id: 'netvaerk', label: 'Netværk' },
  { id: 'website', label: 'Website' },
  { id: 'andet', label: 'Andet' },
]

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '9px 12px',
  border: '1px solid #e8e0e0',
  borderRadius: 6,
  fontSize: 14,
  boxSizing: 'border-box',
  outline: 'none',
  color: '#2d1a1a',
  fontFamily: 'Arial, sans-serif',
}

const labelStyle: React.CSSProperties = {
  fontSize: 11,
  fontWeight: 700,
  color: '#aaa',
  display: 'block',
  marginBottom: 4,
  textTransform: 'uppercase',
  letterSpacing: 1,
}

type Props = {
  lead?: Lead
  onClose: () => void
  onSaved: () => void
}

export default function LeadModal({ lead, onClose, onSaved }: Props) {
  const isEdit = !!lead
  const [form, setForm] = useState({
    navn: lead?.navn ?? '',
    virksomhed: lead?.virksomhed ?? '',
    email: lead?.email ?? '',
    telefon: lead?.telefon ?? '',
    kilde: lead?.kilde ?? 'andet',
    status: lead?.status ?? 'prospect',
    vaerdi: lead?.vaerdi ?? 0,
    noter: lead?.noter ?? '',
  })
  const [saving, setSaving] = useState(false)
  const [deleting, setDeleting] = useState(false)

  function set(field: string, value: string | number) {
    setForm(f => ({ ...f, [field]: value }))
  }

  async function handleSave(e: React.FormEvent) {
    e.preventDefault()
    setSaving(true)
    const url = isEdit ? `/api/pipeline/leads/${lead!.id}` : '/api/pipeline/leads'
    await fetch(url, {
      method: isEdit ? 'PATCH' : 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })
    setSaving(false)
    onSaved()
  }

  async function handleDelete() {
    if (!confirm(`Slet "${lead!.navn}"?`)) return
    setDeleting(true)
    await fetch(`/api/pipeline/leads/${lead!.id}`, { method: 'DELETE' })
    setDeleting(false)
    onSaved()
  }

  return (
    <div
      style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.45)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000, fontFamily: 'Arial, sans-serif' }}
      onClick={e => { if (e.target === e.currentTarget) onClose() }}
    >
      <div style={{ background: 'white', borderRadius: 12, width: 500, maxHeight: '92vh', overflow: 'auto', boxShadow: '0 24px 64px rgba(0,0,0,0.35)' }}>
        <div style={{ padding: '18px 24px', borderBottom: '1px solid #e8e0e0', display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'sticky', top: 0, background: 'white', zIndex: 1 }}>
          <h2 style={{ margin: 0, fontSize: 17, color: '#2d1a1a', fontWeight: 700 }}>
            {isEdit ? lead!.navn : 'Ny lead'}
          </h2>
          <button onClick={onClose} style={{ background: 'none', border: 'none', fontSize: 22, cursor: 'pointer', color: '#aaa', lineHeight: 1, padding: '0 4px' }}>×</button>
        </div>

        <form onSubmit={handleSave} style={{ padding: '20px 24px', display: 'flex', flexDirection: 'column', gap: 14 }}>
          <div>
            <label style={labelStyle}>Navn *</label>
            <input style={inputStyle} value={form.navn} onChange={e => set('navn', e.target.value)} required autoFocus={!isEdit} />
          </div>

          <div>
            <label style={labelStyle}>Virksomhed</label>
            <input style={inputStyle} value={form.virksomhed} onChange={e => set('virksomhed', e.target.value)} />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            <div>
              <label style={labelStyle}>Email</label>
              <input style={inputStyle} type="email" value={form.email} onChange={e => set('email', e.target.value)} />
            </div>
            <div>
              <label style={labelStyle}>Telefon</label>
              <input style={inputStyle} value={form.telefon} onChange={e => set('telefon', e.target.value)} />
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            <div>
              <label style={labelStyle}>Status</label>
              <select style={inputStyle} value={form.status} onChange={e => set('status', e.target.value)}>
                {STATUSES.map(s => <option key={s.id} value={s.id}>{s.label}</option>)}
              </select>
            </div>
            <div>
              <label style={labelStyle}>Kilde</label>
              <select style={inputStyle} value={form.kilde} onChange={e => set('kilde', e.target.value)}>
                {KILDER.map(k => <option key={k.id} value={k.id}>{k.label}</option>)}
              </select>
            </div>
          </div>

          <div>
            <label style={labelStyle}>Estimeret værdi (DKK)</label>
            <input
              style={inputStyle}
              type="number"
              min="0"
              step="5000"
              value={form.vaerdi || ''}
              placeholder="0"
              onChange={e => set('vaerdi', e.target.value)}
            />
          </div>

          <div>
            <label style={labelStyle}>Noter</label>
            <textarea
              style={{ ...inputStyle, minHeight: 90, resize: 'vertical' }}
              value={form.noter}
              onChange={e => set('noter', e.target.value)}
              placeholder="Kontekst, næste skridt, hvem der er kontakt..."
            />
          </div>

          <div style={{ display: 'flex', gap: 10, justifyContent: 'space-between', paddingTop: 4, borderTop: '1px solid #e8e0e0', marginTop: 4 }}>
            {isEdit ? (
              <button
                type="button"
                onClick={handleDelete}
                disabled={deleting}
                style={{ background: 'none', border: '1px solid #f0d0d0', color: '#cc2222', borderRadius: 6, padding: '9px 16px', fontSize: 13, cursor: 'pointer' }}
              >
                {deleting ? 'Sletter...' : 'Slet lead'}
              </button>
            ) : <div />}
            <div style={{ display: 'flex', gap: 10 }}>
              <button
                type="button"
                onClick={onClose}
                style={{ background: 'none', border: '1px solid #e8e0e0', color: '#666', borderRadius: 6, padding: '9px 16px', fontSize: 13, cursor: 'pointer' }}
              >
                Annuller
              </button>
              <button
                type="submit"
                disabled={saving}
                style={{ background: saving ? '#e8e0e0' : '#cc2222', color: saving ? '#aaa' : 'white', border: 'none', borderRadius: 6, padding: '9px 22px', fontSize: 14, fontWeight: 700, cursor: saving ? 'default' : 'pointer' }}
              >
                {saving ? 'Gemmer...' : isEdit ? 'Gem ændringer' : 'Opret lead'}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
