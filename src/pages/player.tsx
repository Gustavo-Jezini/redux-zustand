import { MessageCircle } from 'lucide-react'

import { Header } from '../components/Header'
import { Video } from '../components/Video'
import { Module } from '../components/Module'
import { useAppSelector } from '../store'
import { useCurrentLesson } from '../store/slices/player'
import { useEffect } from 'react'
import { api } from '../lib/axios'

export function Player() {
  const modules = useAppSelector((state) => {
    // Não desestruturar pois se não vem o slice inteiro
    // Queremos apenas modules
    return state.player.course?.modules
  })

  const { currentLesson } = useCurrentLesson()

  useEffect(() => {
    api.get('./courses/1').then((response) => {
      console.log(response.data)
    })
  }, [])

  useEffect(() => {
    if (currentLesson) {
      document.title = currentLesson?.title
    }
  }, [currentLesson])

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
          <aside className="absolute bottom-0 right-0 top-0 w-80 divide-y-2 divide-zinc-900 overflow-y-scroll border-l border-zinc-800 bg-zinc-900 scrollbar-thin scrollbar-track-zinc-950 scrollbar-thumb-zinc-800">
            {modules &&
              modules.map((module, index) => (
                <Module
                  key={module.id}
                  moduleIndex={index}
                  title={module.title}
                  amountOfLessons={module.lessons.length}
                />
              ))}
          </aside>
        </main>
      </div>
    </div>
  )
}
