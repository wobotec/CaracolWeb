import { useState } from 'react'
import { useAuth } from '../../../hooks/useAuth'
import { useNavigate } from 'react-router-dom'

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

  const nextStep = () => {
    if (step === 1 && (!form.name || !form.email)) return
    if (
      step === 2 &&
      (!form.password || form.password !== form.confirmPassword)
    )
      return

    setStep(step + 1)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await register(form)
    navigate('/login')
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Registro – Passo {step}</h2>

      {/* STEP 1 */}
      {step === 1 && (
        <>
          <input
            placeholder="Nome"
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
          />

          <input
            placeholder="Email"
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
          />

          <button type="button" onClick={nextStep}>
            Próximo
          </button>
        </>
      )}

      {/* STEP 2 */}
      {step === 2 && (
        <>
          <input
            type="password"
            placeholder="Senha"
            onChange={(e) =>
              setForm({ ...form, password: e.target.value })
            }
          />

          <input
            type="password"
            placeholder="Confirmar senha"
            onChange={(e) =>
              setForm({
                ...form,
                confirmPassword: e.target.value,
              })
            }
          />

          <button type="submit" disabled={loading}>
            {loading ? 'Registrando...' : 'Finalizar'}
          </button>
        </>
      )}

      {error && <p>{error}</p>}
    </form>
  )
}
