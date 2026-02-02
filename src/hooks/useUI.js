import { useUIStore } from '../store/ui.store'

export const useUI = () => {
  const {
    theme,
    sidebarOpen,
    toggleTheme,
    toggleSidebar,
  } = useUIStore()

  return {
    theme,
    sidebarOpen,
    toggleTheme,
    toggleSidebar,
  }
}
