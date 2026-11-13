import { normalizeRole } from '../config/roles'
import { MOCK_USERS } from './mockUsers'

const API_URL = import.meta.env.VITE_API_URL

/**
 * Garante que o utilizador devolvido tem um perfil (role) válido.
 * Sem role reconhecido o login é recusado — nunca assumimos "funcionário" por omissão.
 */
function withRole(user) {
  const role = normalizeRole(user?.role ?? user?.perfil ?? user?.tipo)
  if (!role) {
    throw new Error('Perfil de acesso não reconhecido. Contacte a secretaria.')
  }
  return { ...user, role }
}

/*  LOGIN
 *  O campo "email" aceita e-mail ou matrícula. A resposta da API deve conter
 *  { token, user: { ..., role: 'funcionario' | 'professor' | 'aluno' | 'encarregado' } }
 */
export async function loginRequest(data) {
  if (!API_URL) {
    await new Promise((res) => setTimeout(res, 600))

    const id = String(data.email ?? '').trim().toLowerCase()
    const found = MOCK_USERS.find(
      (u) =>
        u.identifiers.some((i) => i.toLowerCase() === id) &&
        u.password === data.password
    )

    if (!found) throw new Error('Credenciais inválidas')

    return {
      token: 'fake-jwt-token',
      user: withRole({
        id: found.id,
        name: found.name,
        email: found.identifiers.find((i) => i.includes('@')) ?? null,
        role: found.role,
      }),
    }
  }

  const loginResponse = await fetch(`${API_URL}/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })

  if (!loginResponse.ok) {
    const error = await loginResponse.json().catch(() => ({}))
    throw new Error(error.message || 'Erro ao autenticar')
  }

  const body = await loginResponse.json()
  return { ...body, user: withRole(body.user) }
}

/*  REGISTER  */
export async function registerRequest(data) {
  if (!API_URL) {
    await new Promise((res) => setTimeout(res, 1000))

    return {
      message: 'Usuário registrado com sucesso',
    }
  }

  const registerResponse = await fetch(`${API_URL}/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })

  if (!registerResponse.ok) {
    const error = await registerResponse.json()
    throw new Error(error.message || 'Erro ao registrar')
  }

  return registerResponse.json()
}
