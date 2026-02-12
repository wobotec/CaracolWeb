import { createContext, useContext, useEffect, useState } from "react"

const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [token, setToken] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const storedToken = localStorage.getItem("token")
    const storedUser = localStorage.getItem("user")

    if (storedToken && storedUser) {
      setToken(storedToken)
      setUser(JSON.parse(storedUser))
    }

    setLoading(false)
  }, [])

  function login(data) {
    setToken(data.token)
    setUser(data.user)

    localStorage.setItem("token", data.token)
    localStorage.setItem("user", JSON.stringify(data.user))

    startAutoLogout(data.token)
  }

  function logout() {
    setToken(null)
    setUser(null)
    localStorage.clear()
    window.location.href = "/login"
  }

  function startAutoLogout(token) {
    try {
      const payload = JSON.parse(atob(token.split(".")[1]))
      const exp = payload.exp * 1000
      const timeout = exp - Date.now()

      if (timeout > 0) {
        setTimeout(logout, timeout)
      } else {
        logout()
      }
    } catch {
      // token fake (só para testes)
      setTimeout(logout, 3600000)
    }
  }

  return (
    <AuthContext.Provider value={{ user, token, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
