const API_URL = import.meta.env.VITE_API_URL

/*  LOGIN */
export async function loginRequest(data) {
  if (!API_URL) {
    await new Promise((res) => setTimeout(res, 1000))

    if (
      data.email === 'admin@admin.com' &&
      data.password === '123456'
    ) {
      return {
        token: 'fake-jwt-token',
        user: {
          id: 1,
          name: 'Admin',
          email: data.email,
        },
      }
    }

    throw new Error('Credenciais inválidas')
  }

  const loginResponse = await fetch(`${API_URL}/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })

  if (!loginResponse.ok) {
    const error = await loginResponse.json()
    throw new Error(error.message || 'Erro ao autenticar')
  }

  return loginResponse.json()
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
