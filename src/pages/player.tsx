import { MessageCircle } from 'lucide-react'

import { Header } from '../components/Header'
import { Video } from '../components/Video'
import { Module } from '../components/Module'

export function Player() {
  return (
    <div className="flex h-screen items-center justify-center bg-zinc-950 text-zinc-50">
      <div className="flex w-[1100px] flex-col gap-6">
        <div className="flex items-center justify-between">
          <Header />

          <button className="flex items-center gap-2 rounded bg-violet-500 px-3 py-2 text-sm font-medium text-white hover:bg-violet-600">
            <MessageCircle className="h-4 w-4" />
            Deixar feedback
          </button>
        </div>

        <main className="relative flex overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900 pr-80 shadow">
          <div className="flex-1">
            <Video />
          </div>
          <aside className="scrollbar scrollbar-thin scrollbar-track-zinc-950 scrollbar-thumb-zinc-800 absolute bottom-0 right-0 top-0 w-80 divide-y-2 divide-zinc-900 overflow-y-scroll border-l border-zinc-800 bg-zinc-900">
            <Module
              moduleIndex={0}
              title="Desvendando o Redux"
              amountOfLessons={3}
            />
            <Module
              moduleIndex={1}
              title="Desvendando o Redux"
              amountOfLessons={3}
            />
            <Module
              moduleIndex={2}
              title="Desvendando o Redux"
              amountOfLessons={3}
            />
          </aside>
        </main>
      </div>
    </div>
  )
}
