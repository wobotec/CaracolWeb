import { useAuth } from "../../../hooks/useAuth"

export default function Topbar() {
  const { user, logout } = useAuth()

  return (
    <div className="bg-white border-bottom px-4 py-3 d-flex justify-content-between align-items-center">

      <div>
        <strong>Dashboard</strong>
      </div>

      <div className="d-flex align-items-center gap-3">
        <span className="text-muted">
          {user?.name}
        </span>
        <button
          onClick={logout}
          className="btn btn-outline-danger btn-sm"
        >
          Logout
        </button>
      </div>

    </div>
  )
}
