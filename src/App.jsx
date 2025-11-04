import React from 'react'
import Hero from './components/Hero'
import FeatureCards from './components/FeatureCards'
import AnimatedTimeline from './components/AnimatedTimeline'
import InsightsPanel from './components/InsightsPanel'

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50">
      <header className="mx-auto w-full max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-emerald-500" />
            <span className="text-lg font-semibold text-slate-900">HerbVedaChain</span>
          </div>
          <nav className="hidden items-center gap-6 text-sm text-slate-700 sm:flex">
            <a href="#features" className="hover:text-slate-900">Features</a>
            <a href="#insights" className="hover:text-slate-900">AI Insights</a>
            <a href="#lifecycle" className="hover:text-slate-900">Lifecycle</a>
          </nav>
          <a href="#" className="rounded-lg bg-slate-900 px-3 py-2 text-sm font-medium text-white hover:bg-slate-800">Get started</a>
        </div>
      </header>

      <main className="mx-auto max-w-7xl space-y-8 px-6 pb-16">
        <Hero />
        <FeatureCards />
        <div id="lifecycle">
          <AnimatedTimeline />
        </div>
        <InsightsPanel />
      </main>

      <footer className="border-t border-slate-200 bg-white/60 backdrop-blur">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 text-sm text-slate-600 md:flex-row">
          <p>© {new Date().getFullYear()} HerbVedaChain. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-slate-900">Privacy</a>
            <a href="#" className="hover:text-slate-900">Security</a>
            <a href="#" className="hover:text-slate-900">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
