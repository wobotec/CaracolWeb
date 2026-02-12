import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
import { useEffect } from 'react'

export function PrivateRoute() {
  const { token } = useAuth()

  // logout automática caso token expirar
  useEffect(() => {
   {/* if (!token) return */}

   {/* try {
      const payload = JSON.parse(atob(token.split('.')[1]))
      const exp = payload.exp * 1000

      if (Date.now() > exp) {
        logout()
      }

      const timer = setTimeout(() => {
        logout()
      }, exp - Date.now())

      return () => clearTimeout(timer)
    } catch {
      logout()
    }
  }, [token, logout])
*/}
  // não autenticado
  if (!token) {
    return <Navigate to="/login" replace />
  }

  // autenticado
  return <Outlet />
  })
}
