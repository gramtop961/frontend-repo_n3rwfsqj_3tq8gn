import React from 'react'
import { motion } from 'framer-motion'
import { LineChart, Activity, Bot } from 'lucide-react'

function Sparkline() {
  const points = [5, 9, 7, 12, 11, 14, 13, 18, 16, 20]
  const width = 260
  const height = 80
  const max = Math.max(...points)
  const min = Math.min(...points)
  const d = points
    .map((p, i) => {
      const x = (i / (points.length - 1)) * width
      const y = height - ((p - min) / (max - min)) * height
      return `${i === 0 ? 'M' : 'L'}${x.toFixed(1)},${y.toFixed(1)}`
    })
    .join(' ')

  return (
    <svg width={width} height={height} className="overflow-visible">
      <defs>
        <linearGradient id="g" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor="#34d399" />
          <stop offset="100%" stopColor="#06b6d4" />
        </linearGradient>
      </defs>
      <path d={d} fill="none" stroke="url(#g)" strokeWidth="3" />
    </svg>
  )
}

export default function AIPanels({ role = 'farmer' }) {
  return (
    <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="col-span-2 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
      >
        <div className="mb-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-600">
              <LineChart size={20} />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-600">Forecast</p>
              <h3 className="text-lg font-semibold text-slate-900">{role === 'farmer' ? 'Yield & demand' : role === 'distributor' ? 'Route demand' : 'Quality & capacity'}</h3>
            </div>
          </div>
          <span className="rounded-full bg-emerald-50 px-2 py-1 text-xs font-medium text-emerald-600">Hybrid: LSTM + Prophet</span>
        </div>
        <div className="mt-2 rounded-xl bg-slate-50 p-4">
          <Sparkline />
        </div>
        <div className="mt-3 grid grid-cols-3 gap-3 text-center text-sm">
          <div className="rounded-lg bg-slate-50 p-3">
            <p className="text-slate-500">Peak</p>
            <p className="font-semibold text-slate-900">Week 6</p>
          </div>
          <div className="rounded-lg bg-slate-50 p-3">
            <p className="text-slate-500">Region</p>
            <p className="font-semibold text-slate-900">Western</p>
          </div>
          <div className="rounded-lg bg-slate-50 p-3">
            <p className="text-slate-500">Confidence</p>
            <p className="font-semibold text-emerald-600">92%</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.05 }}
        className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
      >
        <div className="mb-3 flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-500/10 text-amber-600">
            <Activity size={20} />
          </div>
          <div>
            <p className="text-sm font-medium text-slate-600">Anomalies</p>
            <h3 className="text-lg font-semibold text-slate-900">Autoencoder alerts</h3>
          </div>
        </div>
        <ul className="space-y-2 text-sm text-slate-700">
          <li className="flex items-center justify-between rounded-lg bg-slate-50 px-3 py-2">
            <span>Batch HV-2031 · Moisture spike</span>
            <span className="text-amber-600">High</span>
          </li>
          <li className="flex items-center justify-between rounded-lg bg-slate-50 px-3 py-2">
            <span>Route deviation · 14 km off</span>
            <span className="text-orange-600">Medium</span>
          </li>
          <li className="flex items-center justify-between rounded-lg bg-slate-50 px-3 py-2">
            <span>Pesticide residue near threshold</span>
            <span className="text-yellow-600">Watch</span>
          </li>
        </ul>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="col-span-1 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm lg:col-span-3"
      >
        <div className="mb-3 flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-violet-500/10 text-violet-600">
            <Bot size={20} />
          </div>
          <div>
            <p className="text-sm font-medium text-slate-600">AYUSH Chatbot</p>
            <h3 className="text-lg font-semibold text-slate-900">Guidance & confidence</h3>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
          <div className="rounded-xl bg-slate-50 p-4">
            <p className="text-xs uppercase tracking-wide text-slate-500">Query</p>
            <p className="mt-1 text-sm text-slate-800">Stress & sleep disorder</p>
          </div>
          <div className="rounded-xl bg-slate-50 p-4">
            <p className="text-xs uppercase tracking-wide text-slate-500">Suggested</p>
            <p className="mt-1 text-sm text-slate-800">Ashwagandha, Brahmi, Jatamansi</p>
          </div>
          <div className="rounded-xl bg-slate-50 p-4">
            <p className="text-xs uppercase tracking-wide text-slate-500">Confidence</p>
            <p className="mt-1 text-sm font-semibold text-emerald-600">0.88</p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
