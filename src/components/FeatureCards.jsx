import React from 'react'
import { Shield, Map, Cpu, Bot, Lock, Activity } from 'lucide-react'
import { motion } from 'framer-motion'

const features = [
  {
    title: 'Permissioned Blockchain',
    desc: 'Role-based access on Hyperledger-style networks with immutable audits.',
    icon: Shield,
    color: 'from-emerald-500 to-teal-500',
  },
  {
    title: 'Geo‑Tagging & Fencing',
    desc: 'GPS-anchored harvests validated against sustainable zones.',
    icon: Map,
    color: 'from-sky-500 to-blue-500',
  },
  {
    title: 'AI/ML Forecasting',
    desc: 'Hybrid rules + DL for demand and yield predictions.',
    icon: Cpu,
    color: 'from-violet-500 to-fuchsia-500',
  },
  {
    title: 'NLP Chatbot',
    desc: 'Transformer guidance for AYUSH-aligned herb recommendations.',
    icon: Bot,
    color: 'from-amber-500 to-orange-500',
  },
  {
    title: 'Security & Privacy',
    desc: 'mTLS, JWT, key vaults and privacy-first data handling.',
    icon: Lock,
    color: 'from-rose-500 to-pink-500',
  },
  {
    title: 'Anomaly Detection',
    desc: 'Deep autoencoders flag quality and logistics outliers.',
    icon: Activity,
    color: 'from-lime-500 to-emerald-500',
  },
]

export default function FeatureCards() {
  return (
    <section id="features" className="mx-auto mt-12 max-w-7xl px-6">
      <div className="mb-6 flex items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-semibold text-slate-900 md:text-3xl">Core capabilities</h2>
          <p className="mt-1 text-slate-600">Built for traceability, safety, and intelligent decisions.</p>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
          >
            <div className={`absolute inset-x-0 -top-20 h-40 bg-gradient-to-r ${f.color} opacity-10 blur-2xl`} />
            <div className="relative z-10">
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-slate-900 text-white shadow">
                <f.icon size={22} />
              </div>
              <h3 className="text-lg font-semibold text-slate-900">{f.title}</h3>
              <p className="mt-1 text-sm text-slate-600">{f.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
