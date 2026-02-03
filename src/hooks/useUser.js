import { useUserStore } from '../store/user.store'

export const useUser = () => {
  const {
    user,
    setUser,
    clearUser,
  } = useUserStore()

  return {
    user,
    setUser,
    clearUser,
  }
}
