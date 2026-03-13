import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
import { useEffect } from 'react'

export function PrivateRoute() {
  const { token, logout } = useAuth()

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

  // autenticado
  return <Outlet />
}
