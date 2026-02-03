import { create } from 'zustand'
import { logger } from './middleware'

export const useNotificationsStore = create(
  logger((set) => ({
    notifications: [],

    addNotification: (notification) =>
      set((state) => ({
        notifications: [...state.notifications, notification],
      })),

    removeNotification: (id) =>
      set((state) => ({
        notifications: state.notifications.filter(
          (n) => n.id !== id
        ),
      })),

    clearNotifications: () => set({ notifications: [] }),
  }))
)
