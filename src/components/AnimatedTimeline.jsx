import React from 'react'
import { motion } from 'framer-motion'

const steps = [
  { title: 'Harvest', desc: 'Geo‑tagged collection with zone validation' },
  { title: 'Lab QA', desc: 'Moisture, pesticide, DNA barcode checks' },
  { title: 'Processing', desc: 'Batching, sterilization, drying' },
  { title: 'Distribution', desc: 'Cold-chain, route tracking, custody' },
  { title: 'Regulator', desc: 'Compliance review and recall readiness' },
]

export default function AnimatedTimeline() {
  return (
    <section className="mx-auto mt-12 max-w-7xl px-6">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-slate-900 md:text-3xl">Animated batch lifecycle</h2>
        <p className="mt-1 text-slate-600">Follow every state change from field to shelf in real time.</p>
      </div>

      <div className="relative">
        <div className="absolute left-0 right-0 top-5 hidden h-1 rounded bg-slate-200 md:block" />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-5">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="relative rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
            >
              <div className="mb-2 flex items-center gap-2">
                <div className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                <span className="text-xs font-medium text-slate-500">Step {i + 1}</span>
              </div>
              <h3 className="text-base font-semibold text-slate-900">{s.title}</h3>
              <p className="mt-1 text-sm text-slate-600">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
