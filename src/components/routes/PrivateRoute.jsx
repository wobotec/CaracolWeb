import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
import { useEffect } from 'react'
import { ROLES, normalizeRole, homeFor } from '../../config/roles'

// Sai do React e vai para um portal HTML estático.
function ExternalRedirect({ url }) {
  useEffect(() => {
    window.location.replace(url)
  }, [url])
  return null
}

// allowedRoles: perfis que podem entrar nestas rotas (por omissão só funcionários).
export function PrivateRoute({ allowedRoles = [ROLES.FUNCIONARIO] }) {
  const { token, user, logout } = useAuth()

  // AUTO LOGOUT (para teste)
  useEffect(() => {
    if (!token) return

    // token fake
    if (token === 'fake-jwt-token') {
      const timer = setTimeout(() => {
        logout()
      }, 60 * 60 * 1000)

      return () => clearTimeout(timer)
    }

    // token real 
    try {
      const payload = JSON.parse(atob(token.split('.')[1]))
      const exp = payload.exp * 1000

      if (Date.now() > exp) {
        logout()
        return
      }

      const timer = setTimeout(() => {
        logout()
      }, exp - Date.now())

      return () => clearTimeout(timer)
    } catch {
      logout()
    }
  }, [token, logout])

  // não autenticado
  if (!token) {
    return <Navigate to="/login" replace />
  }

  // autenticado, mas com perfil que não pertence a esta área:
  // manda cada um para o seu próprio portal.
  const role = normalizeRole(user?.role)
  if (!role || !allowedRoles.includes(role)) {
    const dest = homeFor(role)
    return dest.external
      ? <ExternalRedirect url={dest.url} />
      : <Navigate to="/login" replace />
  }

  // autenticado e autorizado
  return <Outlet />
}
