import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { logger } from './middleware'

export const useAuthStore = create(
  logger(
    persist(
      (set) => ({
        token: null,
        isAuthenticated: false,

        login: (token) =>
          set({
            token,
            isAuthenticated: true,
          }),

        logout: () =>
          set({
            token: null,
            isAuthenticated: false,
          }),
      }),
      {
        name: 'auth-storage',
      }
    )
  )
)
