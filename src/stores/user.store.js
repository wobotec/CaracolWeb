import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { logger } from './middleware'

export const useUserStore = create(
  logger(
    persist(
      (set) => ({
        user: null,

        setUser: (user) => set({ user }),
        clearUser: () => set({ user: null }),
      }),
      {
        name: 'user-storage',
      }
    )
  )
)
