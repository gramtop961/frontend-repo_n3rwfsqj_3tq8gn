import React, { useState } from 'react'
import { useNavigate, useLocation, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { User, Lock, Mail } from 'lucide-react'

const roles = ['farmer', 'lab', 'processor', 'distributor', 'regulator']

export default function AuthForm({ mode = 'login' }) {
  const navigate = useNavigate()
  const location = useLocation()
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    role: 'farmer',
  })
  const [loading, setLoading] = useState(false)

  const currentMode = mode || (location.pathname.includes('signup') ? 'signup' : 'login')

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const onSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    // Simulate auth then route to role dashboard
    setTimeout(() => {
      setLoading(false)
      const role = form.role || 'farmer'
      navigate(`/dashboard/${role}`)
    }, 700)
  }

  return (
    <div className="mx-auto mt-10 w-full max-w-md">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
      >
        <div className="border-b border-slate-200 bg-gradient-to-r from-emerald-50 to-teal-50 px-6 py-4">
          <h1 className="text-xl font-semibold text-slate-900">
            {currentMode === 'login' ? 'Welcome back' : 'Create your account'}
          </h1>
          <p className="text-sm text-slate-600">
            Access role-based dashboards with AI insights.
          </p>
        </div>
        <form onSubmit={onSubmit} className="space-y-4 px-6 py-6">
          {currentMode === 'signup' && (
            <div>
              <label className="text-sm font-medium text-slate-700">Full name</label>
              <div className="mt-1 flex items-center rounded-lg border border-slate-300 bg-white px-3">
                <User size={16} className="text-slate-400" />
                <input
                  required
                  name="name"
                  value={form.name}
                  onChange={onChange}
                  className="w-full border-0 bg-transparent p-2 text-sm outline-none"
                  placeholder="e.g., Asha Patil"
                />
              </div>
            </div>
          )}

          <div>
            <label className="text-sm font-medium text-slate-700">Email</label>
            <div className="mt-1 flex items-center rounded-lg border border-slate-300 bg-white px-3">
              <Mail size={16} className="text-slate-400" />
              <input
                required
                type="email"
                name="email"
                value={form.email}
                onChange={onChange}
                className="w-full border-0 bg-transparent p-2 text-sm outline-none"
                placeholder="you@example.com"
              />
            </div>
          </div>

          <div>
            <label className="text-sm font-medium text-slate-700">Password</label>
            <div className="mt-1 flex items-center rounded-lg border border-slate-300 bg-white px-3">
              <Lock size={16} className="text-slate-400" />
              <input
                required
                type="password"
                name="password"
                value={form.password}
                onChange={onChange}
                className="w-full border-0 bg-transparent p-2 text-sm outline-none"
                placeholder="••••••••"
              />
            </div>
          </div>

          {currentMode === 'signup' && (
            <div>
              <label className="text-sm font-medium text-slate-700">Role</label>
              <select
                name="role"
                value={form.role}
                onChange={onChange}
                className="mt-1 w-full rounded-lg border border-slate-300 bg-white p-2 text-sm"
              >
                {roles.map((r) => (
                  <option key={r} value={r}>
                    {r.charAt(0).toUpperCase() + r.slice(1)}
                  </option>
                ))}
              </select>
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="flex w-full items-center justify-center rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800 disabled:opacity-60"
          >
            {loading ? 'Please wait…' : currentMode === 'login' ? 'Login' : 'Create account'}
          </button>

          <div className="pt-2 text-center text-sm text-slate-600">
            {currentMode === 'login' ? (
              <span>
                New here?{' '}
                <Link to="/signup" className="font-medium text-emerald-600 hover:underline">
                  Create an account
                </Link>
              </span>
            ) : (
              <span>
                Already have an account?{' '}
                <Link to="/" className="font-medium text-emerald-600 hover:underline">
                  Login
                </Link>
              </span>
            )}
          </div>
        </form>
      </motion.div>
    </div>
  )
}
