import { Link, useLocation } from "react-router-dom"

export default function Sidebar() {
  const location = useLocation()

  const menu = [
    { name: "Dashboard", path: "/" },
    { name: "MSM", path: "/mensagem" },
    { name: "Alunos", path: "/alunos" },
    { name: "Professores", path: "/professores" },
    { name: "Implementação", path: "/implementacao" },
    { name: "Financeiro", path: "/financeiro" },
    { name: "Transporte", path: "/transporte" },
    { name: "Relatórios", path: "/relatorios" },
    { name: "Configurações", path: "/config" },
  ]

  return (
    <div
      className="bg-primary text-white d-flex flex-column p-3"
      style={{
        width: "230px",
        minHeight: "100vh",
      }}
    >
      {/* LOGO */}
      <h4 className="text-center mb-4">Caracol</h4>

      {/* MENU */}
      <ul className="nav nav-pills flex-column gap-2">
        {menu.map((item) => (
          <li key={item.path}>
            <Link
              to={item.path}
              className={`nav-link text-white ${
                location.pathname === item.path
                  ? "bg-light text-dark"
                  : ""
              }`}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>

    </div>
  )
}
