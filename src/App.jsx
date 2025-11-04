import React from 'react'
import { Routes, Route, useLocation, Link } from 'react-router-dom'
import AuthForm from './components/AuthForm'
import Dashboard from './components/Dashboard'

export default function App() {
  const location = useLocation()
  const isDashboard = location.pathname.startsWith('/dashboard')

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50">
      <header className="mx-auto w-full max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-emerald-500" />
            <span className="text-lg font-semibold text-slate-900">HerbVedaChain</span>
          </Link>
          <nav className="hidden items-center gap-6 text-sm text-slate-700 sm:flex">
            {!isDashboard && (
              <>
                <Link to="/" className="hover:text-slate-900">Login</Link>
                <Link to="/signup" className="hover:text-slate-900">Signup</Link>
              </>
            )}
            {isDashboard && (
              <>
                <a href="#" className="hover:text-slate-900">Docs</a>
                <a href="#" className="hover:text-slate-900">Support</a>
              </>
            )}
          </nav>
          {!isDashboard ? (
            <Link to="/signup" className="rounded-lg bg-slate-900 px-3 py-2 text-sm font-medium text-white hover:bg-slate-800">Get started</Link>
          ) : (
            <Link to="/" className="rounded-lg bg-white px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 border border-slate-200">Logout</Link>
          )}
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 pb-16">
        <Routes>
          <Route path="/" element={<AuthForm mode="login" />} />
          <Route path="/signup" element={<AuthForm mode="signup" />} />
          <Route path="/dashboard/:role" element={<Dashboard />} />
        </Routes>
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
