import { useState } from 'react'
import { useAuth } from '../../../hooks/useAuth'
import { useNavigate } from 'react-router-dom'
import { Input } from '../../Input/input'

export default function Register() {
  const { register, loading, error } = useAuth()
  const navigate = useNavigate()

  const [step, setStep] = useState(1)

  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  const nextStep = () => {
    if (step === 1 && (!form.name || !form.email)) return
    if (step === 2 && (!form.password || form.password !== form.confirmPassword)) return

    setStep(step + 1)
  }

  const prevStep = () => {
    setStep(step - 1)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await register(form)
    navigate('/login')
  }

  return (
    <div className=" vw-100 vh-100 d-flex justify-content-center align-items-center">
      <div className="card shadow p-4" style={{width: "400px", height: "400px"}}>
        
        <h3 className="text-center mb-4">
          Registro
        </h3>

        <form onSubmit={handleSubmit} className="d-flex flex-column align-items-center w-100"> 

          {/* STEP 1 */}
          {step === 1 && (
            <>
              <Input
                label="Nome"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Digite seu nome"
              />

              <Input
                label="Email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Digite seu email"
              />

              <button
                type="button"
                className="btn btn-primary w-100"
                onClick={nextStep}
              >
                Próximo
              </button>
            </>
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <>
              <Input
                label="Senha"
                name="password"
                type="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Digite sua senha"
              />

              <Input
                label="Confirmar senha"
                name="confirmPassword"
                type="password"
                value={form.confirmPassword}
                onChange={handleChange}
                placeholder="Confirme a senha"
              />

              <div className="d-flex gap-2">
                <button
                  type="button"
                  className="btn btn-secondary w-50"
                  onClick={prevStep}
                >
                  Voltar
                </button>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn btn-success w-60"
                >
                  {loading ? 'Registrando...' : 'Finalizar'}
                </button>
              </div>
            </>
          )}

          {error && (
            <p className="text-danger mt-3 text-center">
              {error}
            </p>
          )}
        </form>
      </div>
    </div>
  )
}
