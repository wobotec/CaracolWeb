import { Navigate, Outlet } from 'react-router-dom'

export function PrivateRoute() {
  const isAuthenticated = true //Depois vai se mudar pelo verdadeiro estado de autenticação deixei em autenticado so para teste

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />
}
