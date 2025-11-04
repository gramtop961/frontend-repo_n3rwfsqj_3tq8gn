import React from 'react'
import { useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Shield, Map, Package, Truck, FlaskConical } from 'lucide-react'
import RoleSwitcher from './RoleSwitcher'
import AIPanels from './AIPanels'

const roleMeta = {
  farmer: {
    title: 'Farmer Dashboard',
    desc: 'Geo‑tag harvests, view sustainable zones, and track payouts.',
    chips: ['Geo-fence OK', 'Seasonal window: Open', 'Soil moisture: Stable'],
    icon: Map,
  },
  lab: {
    title: 'Lab Dashboard',
    desc: 'Quality assays: moisture, pesticide, DNA barcode verification.',
    chips: ['Samples: 12 pending', 'SOP ver. 3.2', 'Chain-of-custody intact'],
    icon: FlaskConical,
  },
  processor: {
    title: 'Processor Dashboard',
    desc: 'Batching, sterilization, and drying workflows with QA gates.',
    chips: ['Batches: 4 active', 'Dryer #2: 65% load', 'Sterilization cycle due'],
    icon: Package,
  },
  distributor: {
    title: 'Distributor Dashboard',
    desc: 'Optimize routes, maintain cold-chain, ensure custody transfers.',
    chips: ['Fleet: 8 active', 'Cold-chain: Nominal', 'ETA variance: -6%'],
    icon: Truck,
  },
  regulator: {
    title: 'Regulator Dashboard',
    desc: 'Compliance oversight, recalls, and audit trails across network.',
    chips: ['Audits: 2 open', 'Recalls: 0', 'Policy ver. 1.9'],
    icon: Shield,
  },
}

export default function Dashboard() {
  const { role = 'farmer' } = useParams()
  const meta = roleMeta[role] || roleMeta.farmer
  const Icon = meta.icon

  return (
    <div className="space-y-8">
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500 text-white">
              <Icon size={20} />
            </div>
            <div>
              <h1 className="text-2xl font-semibold text-slate-900">{meta.title}</h1>
              <p className="text-sm text-slate-600">{meta.desc}</p>
            </div>
          </div>
          <RoleSwitcher />
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {meta.chips.map((c) => (
            <motion.span
              key={c}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700"
            >
              {c}
            </motion.span>
          ))}
        </div>
      </div>

      <AIPanels role={role} />

      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
        >
          <h3 className="text-base font-semibold text-slate-900">Recent activity</h3>
          <ul className="mt-3 space-y-2 text-sm text-slate-700">
            <li className="rounded-lg bg-slate-50 px-3 py-2">Event committed on-chain · 2m ago</li>
            <li className="rounded-lg bg-slate-50 px-3 py-2">Signature verified · 14m ago</li>
            <li className="rounded-lg bg-slate-50 px-3 py-2">Policy check passed · 1h ago</li>
          </ul>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
        >
          <h3 className="text-base font-semibold text-slate-900">Smart contract status</h3>
          <div className="mt-3 grid grid-cols-2 gap-3 text-sm">
            <div className="rounded-lg bg-emerald-50 p-3 text-emerald-700">Seasonal window: Open</div>
            <div className="rounded-lg bg-blue-50 p-3 text-blue-700">Geo-fence: Valid</div>
            <div className="rounded-lg bg-amber-50 p-3 text-amber-700">Quality: Pending</div>
            <div className="rounded-lg bg-teal-50 p-3 text-teal-700">Custody: Intact</div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
        >
          <h3 className="text-base font-semibold text-slate-900">Next best actions</h3>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-700">
            <li>Review flagged batch metrics</li>
            <li>Confirm custody transfer with OTP</li>
            <li>Schedule QA re-test for outliers</li>
          </ul>
        </motion.div>
      </div>
    </div>
  )
}
