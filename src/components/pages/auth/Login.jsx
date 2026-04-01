import { useState, useEffect } from 'react'
import { useAuth } from '../../../hooks/useAuth'
import { useNavigate } from 'react-router-dom'
import { Input } from '../../Input/input'
import './login.css'

import splash1 from './../../../assets/img/splash/splash1.png';




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
    <div class="card-wrapper">
      <div class="panel-left">


        <img className='splash' src={splash1} alt="Splash" />
      </div>


      <div class="divider-v"></div>
      <div class="panel-right">
        <h2>Login</h2>
        <form onSubmit={handleSubmit} className="d-flex flex-column align-items-center w-100">

          <div class="input-group-custom">
            <span class="icon"><i class="fa fa-user"></i></span>
            <input type="text" label="Email" value={form.email}
              onChange={handleChange} name="email" placeholder="Digite seu email" />
          </div>

          <div class="input-group-custom">
            <span class="icon"><i class="fa fa-lock"></i></span>
            <input label="Senha" name="password" value={form.password} type="password" onChange={handleChange}
            placeholder="Digite sua senha" />
          </div>

          <div>
            <button disabled={loading} class="btn-login btn-primary">{loading ? 'Entrando...' : 'Login'}</button>
          </div>                

          {error && <p className="text-darnger text-sm">{error}</p>}
        </form>
      </div>
    </div>
  )
}
