import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { loginRequest } from '../services/authService'
import { registerRequest } from '../services/authService'

// A sessão fica em localStorage na chave "auth-storage". Os portais estáticos
// (public/portais/auth-guard.js) leem essa mesma chave para saber quem está logado.
export const AUTH_STORAGE_KEY = 'auth-storage'

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

    {
      name: AUTH_STORAGE_KEY,
      version: 1,
      partialize: (state) => ({ user: state.user, token: state.token }),
      // v0 não guardava o perfil (role): essas sessões antigas são descartadas
      // e o utilizador faz login de novo.
      migrate: (persisted, version) =>
        version < 1 ? { user: null, token: null } : persisted,
    }
  )
)
