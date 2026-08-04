'use client'
import { useState, useCallback } from 'react'
import LeadModal from './LeadModal'

export type Lead = {
  id: string
  navn: string
  virksomhed: string
  email: string
  telefon: string
  kilde: string
  status: string
  vaerdi: number
  noter: string
  created_at: string
  updated_at: string
}

const COLUMNS = [
  { id: 'prospect', label: 'Prospect', color: '#4A6FA5' },
  { id: 'dialog', label: 'Dialog', color: '#1C6B3A' },
  { id: 'tilbud', label: 'Tilbud', color: '#CC7722' },
  { id: 'aktiv', label: 'Aktiv', color: '#1C2544' },
  { id: 'afsluttet', label: 'Afsluttet', color: '#888888' },
  { id: 'tabt', label: 'Tabt', color: '#cc2222' },
]

function formatDKK(v: number) {
  if (!v) return ''
  return new Intl.NumberFormat('da-DK', { style: 'currency', currency: 'DKK', maximumFractionDigits: 0 }).format(v)
}

export default function KanbanBoard({ initialLeads }: { initialLeads: Lead[] }) {
  const [leads, setLeads] = useState<Lead[]>(initialLeads)
  const [modal, setModal] = useState<{ open: boolean; lead?: Lead }>({ open: false })

  const refresh = useCallback(async () => {
    const res = await fetch('/api/pipeline/leads')
    if (res.ok) setLeads(await res.json())
  }, [])

  async function handleStatusChange(lead: Lead, newStatus: string) {
    setLeads(prev => prev.map(l => l.id === lead.id ? { ...l, status: newStatus } : l))
    await fetch(`/api/pipeline/leads/${lead.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status: newStatus }),
    })
  }

  const totalAktiv = leads
    .filter(l => l.status === 'aktiv')
    .reduce((sum, l) => sum + (l.vaerdi || 0), 0)

  const totalPipeline = leads
    .filter(l => ['prospect', 'dialog', 'tilbud'].includes(l.status))
    .reduce((sum, l) => sum + (l.vaerdi || 0), 0)

  return (
    <div style={{ minHeight: '100vh', background: '#f0eeee', fontFamily: 'Arial, sans-serif' }}>
      {/* Header */}
      <div style={{ background: '#1C2544', color: 'white', padding: '18px 28px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <div style={{ fontSize: 10, opacity: 0.4, letterSpacing: 3, textTransform: 'uppercase', marginBottom: 3 }}>We Lead Projects</div>
          <h1 style={{ margin: 0, fontSize: 20, fontWeight: 700, letterSpacing: -0.5 }}>Pipeline</h1>
        </div>
        <div style={{ display: 'flex', gap: 28, alignItems: 'center' }}>
          {totalAktiv > 0 && (
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: 10, opacity: 0.4, textTransform: 'uppercase', letterSpacing: 1 }}>Aktiv</div>
              <div style={{ fontSize: 16, fontWeight: 700, color: '#4ade80' }}>{formatDKK(totalAktiv)}</div>
            </div>
          )}
          {totalPipeline > 0 && (
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: 10, opacity: 0.4, textTransform: 'uppercase', letterSpacing: 1 }}>Pipeline</div>
              <div style={{ fontSize: 16, fontWeight: 700 }}>{formatDKK(totalPipeline)}</div>
            </div>
          )}
          <div style={{ width: 1, height: 36, background: 'rgba(255,255,255,0.15)' }} />
          <div style={{ fontSize: 12, opacity: 0.4 }}>{leads.length} leads</div>
          <button
            onClick={() => setModal({ open: true })}
            style={{ background: '#cc2222', color: 'white', border: 'none', borderRadius: 6, padding: '9px 18px', fontSize: 13, fontWeight: 700, cursor: 'pointer', letterSpacing: 0.3 }}
          >
            + Ny lead
          </button>
        </div>
      </div>

      {/* Board */}
      <div style={{ padding: '20px 20px 40px', overflowX: 'auto' }}>
        <div style={{ display: 'flex', gap: 14, minWidth: 'max-content', alignItems: 'flex-start' }}>
          {COLUMNS.map(col => {
            const colLeads = leads.filter(l => l.status === col.id)
            const colValue = colLeads.reduce((sum, l) => sum + (l.vaerdi || 0), 0)
            return (
              <div key={col.id} style={{ width: 265, background: 'white', borderRadius: 10, boxShadow: '0 1px 4px rgba(0,0,0,0.07)', overflow: 'hidden' }}>
                {/* Column header */}
                <div style={{ padding: '12px 14px 10px', borderBottom: '1px solid #f0eeee', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
                    <div style={{ width: 8, height: 8, borderRadius: '50%', background: col.color, flexShrink: 0 }} />
                    <span style={{ fontWeight: 700, fontSize: 13, color: '#2d1a1a' }}>{col.label}</span>
                    <span style={{ background: '#f0eeee', color: '#999', fontSize: 10, fontWeight: 700, padding: '1px 6px', borderRadius: 8 }}>{colLeads.length}</span>
                  </div>
                  {colValue > 0 && <span style={{ fontSize: 11, color: '#aaa' }}>{formatDKK(colValue)}</span>}
                </div>

                {/* Cards */}
                <div style={{ padding: 8, display: 'flex', flexDirection: 'column', gap: 7, minHeight: 60 }}>
                  {colLeads.map(lead => (
                    <div
                      key={lead.id}
                      onClick={() => setModal({ open: true, lead })}
                      style={{
                        background: '#fafafa',
                        border: '1px solid #ece8e8',
                        borderLeft: `3px solid ${col.color}`,
                        borderRadius: 7,
                        padding: '11px 12px',
                        cursor: 'pointer',
                      }}
                    >
                      <div style={{ fontWeight: 700, fontSize: 13, color: '#2d1a1a', marginBottom: 2 }}>{lead.navn}</div>
                      {lead.virksomhed && (
                        <div style={{ fontSize: 11, color: '#888', marginBottom: 7 }}>{lead.virksomhed}</div>
                      )}
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8 }}>
                        {lead.vaerdi > 0
                          ? <span style={{ fontSize: 11, fontWeight: 700, color: '#1C2544' }}>{formatDKK(lead.vaerdi)}</span>
                          : <span />
                        }
                        <select
                          value={lead.status}
                          onChange={e => { e.stopPropagation(); handleStatusChange(lead, e.target.value) }}
                          onClick={e => e.stopPropagation()}
                          style={{ fontSize: 10, border: '1px solid #e8e0e0', borderRadius: 4, padding: '2px 4px', color: '#999', background: 'white', cursor: 'pointer' }}
                        >
                          {COLUMNS.map(c => <option key={c.id} value={c.id}>{c.label}</option>)}
                        </select>
                      </div>
                      {lead.noter && (
                        <div style={{ fontSize: 11, color: '#bbb', marginTop: 6, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                          {lead.noter}
                        </div>
                      )}
                    </div>
                  ))}

                  {colLeads.length === 0 && (
                    <div style={{ textAlign: 'center', color: '#ddd', fontSize: 12, padding: '16px 0' }}>–</div>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {modal.open && (
        <LeadModal
          lead={modal.lead}
          onClose={() => setModal({ open: false })}
          onSaved={() => { setModal({ open: false }); refresh() }}
        />
      )}
    </div>
  )
}
