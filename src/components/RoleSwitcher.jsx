import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'

const roles = [
  { key: 'farmer', label: 'Farmer' },
  { key: 'lab', label: 'Lab' },
  { key: 'processor', label: 'Processor' },
  { key: 'distributor', label: 'Distributor' },
  { key: 'regulator', label: 'Regulator' },
]

export default function RoleSwitcher() {
  const navigate = useNavigate()
  const { role } = useParams()

  return (
    <div className="flex flex-wrap gap-2">
      {roles.map((r, i) => (
        <motion.button
          key={r.key}
          whileHover={{ y: -2 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          onClick={() => navigate(`/dashboard/${r.key}`)}
          className={`rounded-full px-3 py-1.5 text-sm font-medium shadow-sm ${
            role === r.key
              ? 'bg-emerald-600 text-white'
              : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
          }`}
        >
          {r.label}
        </motion.button>
      ))}
    </div>
  )
}
