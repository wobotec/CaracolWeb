import { useState, useEffect } from 'react'
import { useAuth } from '../../../hooks/useAuth'
import { useNavigate } from 'react-router-dom'
import { Input } from '../../Input/input'

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
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }
  
  return (
    <div className=" d-flex justify-content-center align-items-center min-vh-100 vw-100  bg-light" >
      <div className=" card shadow p-4" style={{width: "400px", height: "400px"}}>
      <h3 className="text-center mb-4">
        Login
      </h3>
     <form onSubmit={handleSubmit} className="d-flex flex-column align-items-center w-100">
       <Input
        label="Email"
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Digite seu email"
      />

      <Input
        label="Senha"
        name="password"
        type="password"
        value={form.password}
        onChange={handleChange}
        placeholder="Digite sua senha"
      />


      <button disabled={loading} className="btn btn-primary text-white px-4 py-2 w-100">
        {loading ? 'Entrando...' : 'Login'}
      </button>

      {error && <p className="text-darnger text-sm">{error}</p>}
    </form>
    </div>
  </div>
  )
}
