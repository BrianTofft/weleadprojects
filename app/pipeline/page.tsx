import { getSupabase } from '@/lib/supabase'
import KanbanBoard from './KanbanBoard'

export const dynamic = 'force-dynamic'

export default async function PipelinePage() {
  const { data: leads } = await getSupabase()
    .from('leads')
    .select('*')
    .order('created_at', { ascending: false })

  return <KanbanBoard initialLeads={leads ?? []} />
}
