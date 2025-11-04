import React from 'react'
import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative h-[70vh] min-h-[520px] w-full overflow-hidden rounded-2xl bg-slate-900">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/5EwoDiC2tChvmy4K/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-slate-900/60 to-slate-950 pointer-events-none" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl text-white"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            Live 3D cover — DNA & pharma theme
          </div>
          <h1 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
            HerbVedaChain
          </h1>
          <p className="mt-4 text-base/relaxed text-slate-200 md:text-lg/relaxed">
            A permissioned blockchain with AI, ML and DL intelligence for end‑to‑end
            traceability of Ayurvedic herbs — from geo‑tagged harvest to final packaging.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="#features"
              className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-4 py-2 text-white shadow hover:bg-emerald-600"
            >
              Explore Features
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="#insights"
              className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-4 py-2 text-white backdrop-blur hover:bg-white/20"
            >
              AI Insights
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
