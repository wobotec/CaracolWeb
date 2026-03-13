import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { loginRequest } from '../services/authService'
import { registerRequest } from '../services/authService'

export const useAuthStore = create(
  persist(
    (set) => ({
      user: null,
      token: null,
      loading: false,
      error: null,

      login: async (data) => {
        set({ loading: true, error: null })
        try {

          const res = await loginRequest(data)
          
          set({
            user: res.user,
            token: res.token,
            loading: false,
          })
        } catch (err) {
          set({
            error: err.message,
            loading: false,
          })
        }
      },
      register: async (data) => {
        try {
          set({ loading: true, error: null })
      
          await registerRequest(data)
      
          set({ loading: false })
        } catch (err) {
          set({
            error: err.message,
            loading: false,
          })
        }
      },

      logout: () =>
        set({ user: null, token: null }),
    }),

    { name: 'auth-storage' }
  )
)
