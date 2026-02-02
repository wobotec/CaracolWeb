import { useAuthStore } from '../store/auth.store'

export const useAuth = () => {
  const { token, isAuthenticated, login, logout } = useAuthStore()
  return { token, isAuthenticated, login, logout }
}
