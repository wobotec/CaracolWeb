import { Link, useLocation } from "react-router-dom"
import { useAuth } from "../../../hooks/useAuth"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHouse, faCommentSms } from "@fortawesome/free-solid-svg-icons"

export default function Sidebar() {
  const location = useLocation()
  const { user, logout } = useAuth()

  const menu = [
    { icon: faHouse, name: "Dashboard", path: "/" },
    { icon: faCommentSms, name: "MSM", path: "/mensagem" },
    { icon: faHouse, name: "Alunos", path: "/alunos" },
    { icon: faHouse, name: "Professores", path: "/professores" },
    { icon: faHouse, name: "Implementação", path: "/implementacao" },
    { icon: faHouse, name: "Financeiro", path: "/financeiro" },
    { icon: faHouse, name: "Transporte", path: "/transporte" },
    { icon: faHouse, name: "Relatórios", path: "/relatorios" },
    { icon: faHouse, name: "Configurações", path: "/config" },
  ]

  return (
    <div
      className="bg-primary text-white d-flex flex-column pt-3"
      style={{
        width: "230px",
        minHeight: "100vh",
      }}
    >
      {/* LOGO */}
      <div className="d-flex align-items-center gap-3 p-4">
        <div className="dropdown profile-element">
          <span>
            <img alt="foto perfil" className="rounded-circle" src="img/profile_small.jpg" />
          </span>
          <div>  
          <a data-toggle="dropdown" className="dropdown-toggle" href="#">
              <span className="block m-t-xs">
                <strong className="font-bold text-white">
                  {user?.name}
                </strong>
              </span> <br />
              <span className="text-muted text-xs block">Director </span>
            
          </a>
          <ul className="dropdown-menu animated fadeInRight m-t-xs">
            <li><a className="dropdown-item"  href="#profile.html">Perfil</a></li>
            <li><a className="dropdown-item" href="#contacts.html">Contactos</a></li>
            <li className="divider"></li>
            <li><a className="dropdown-item" href="login.html">Logout</a></li>
          </ul>
        </div>
        </div>
        <div className="logo-element">
          <img alt="image" src="img/logo_small.png" />
        </div>
      </div>
      {/* MENU */}
      <ul className="nav  flex-column gap-2">
        {menu.map((item) => (
          <li key={item.path}>
            <Link
              to={item.path}
              className={`nav-link text-white ${location.pathname === item.path
                  ? ""
                  : ""
                }`}  style={{borderLeft: location.pathname === item.path ? "3px solid white " : "none"}}
            >
              <FontAwesomeIcon icon={item.icon} className="me-2" />
              {item.name}
            </Link>
          </li>
        ))}
      </ul>

    </div>
  )
}
