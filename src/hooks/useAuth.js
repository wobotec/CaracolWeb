import { useAuthStore } from '../stores/auth.store'

export function useAuth() {
  const store = useAuthStore()

  return {
    login: store.login,
    logout: store.logout,
    register: store.register,
    loading: store.loading,
    error: store.error,
    token: store.token,
    user: store.user,
    isAuthenticated: !!store.token,
  }
}
