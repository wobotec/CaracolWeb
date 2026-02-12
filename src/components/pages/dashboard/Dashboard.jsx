import { useAuth } from '../../../hooks/useAuth'

export default function Dashboard(){
    const { user, token, logout } = useAuth()

    return (
        <div>
      <h1>Dashboard</h1>

      <p>Bem-vindo {user?.name}</p>
      <p>Bem-vindo {token}</p>
      <button onClick={logout}>
        Logout
      </button>
    </div>
  
    )
}