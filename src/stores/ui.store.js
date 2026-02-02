import { create } from 'zustand'
import { logger } from './middleware'

export const useUIStore = create(
  logger((set) => ({
    theme: 'light',
    sidebarOpen: true,

    toggleTheme: () =>
      set((state) => ({
        theme: state.theme === 'light' ? 'dark' : 'light', //Tema light(padrao) ou dark
      })),

    toggleSidebar: () =>
      set((state) => ({
        sidebarOpen: !state.sidebarOpen,
      })),
  }))
)
