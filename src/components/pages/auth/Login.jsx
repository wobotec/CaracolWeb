import { useState, useEffect } from 'react'
import { useAuth } from '../../../hooks/useAuth'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const { login, loading, error, isAuthenticated } = useAuth()
  const navigate = useNavigate()

  const [form, setForm] = useState({
    email: '',
    password: '',
  })

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/', { replace: true })
    }
  }, [isAuthenticated, navigate])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.email || !form.password) return
    await login(form)
  }

  return (
    <form onSubmit={handleSubmit} className="py-3">
      <input
      value={form.email}
        placeholder="Email"
        onChange={(e) =>
          setForm({ ...form, email: e.target.value })
        }
      />

      <input
        value={form.password}
        type="password"
        placeholder="Senha"
        onChange={(e) =>
          setForm({ ...form, password: e.target.value })
        }
        className ="border p-2 w-100"
      />

      <button disabled={loading} className="bg-black text-white px-4 py-2 w-100">
        {loading ? 'Entrando...' : 'Login'}
      </button>

      {error && <p className="text-darnger text-sm">{error}</p>}
    </form>
  )
}
