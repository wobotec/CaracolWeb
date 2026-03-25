import { Link, useLocation } from "react-router-dom"
import { useAuth } from "../../../hooks/useAuth"
import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHouse, faCommentSms, faUserGraduate, faUsers, faFile, faPrint, faSackDollar, faGear, faBus } from "@fortawesome/free-solid-svg-icons"

export default function Sidebar() {
  const location = useLocation()
  const { user, logout } = useAuth()
  const [openMenu, setOpenMenu] = useState(null)

  const toggleMenu = (name) => {
    setOpenMenu((current) => (current === name ? null : name))
  }

  const menu = [
    { icon: faHouse, name: "Dashboard", path: "/" },
    { icon: faCommentSms, name: "MSM", path: "/mensagem" },
    {
      icon: faUserGraduate,
      name: "Alunos",
      submenu: [
        { name: "Lista de Alunos", path: "/alunos" },
        { name: "Cadastrar Aluno", path: "/alunos/novo" },
        { name: "Confirmar Aluno", path: "/alunos/confirmacao" },
      ],
    },
    { icon: faUsers, name: "Professores", path: "/professores" },
    {
      icon: faFile,
      name: "Implementação",
      submenu: [
        { name: "Classes", path: "/Classe" },
        { name: "Disciplina", path: "/Disciplina" },
      ],
    },
    { icon: faSackDollar, name: "Financeiro",
      submenu: [
        { name: "Serviços", path: "/servicos" },
        { name: "Custo serviço", path: "/custo-servico" },
      ]
    },
    { icon: faBus, name: "Transporte", path: "/transporte" },
    { icon: faPrint, name: "Relatórios", path: "/relatorios" },
    { 
      icon: faGear, 
      name: "Definicao", 
      submenu: [
        { name: "Ano Lectivo", path: "/ano-lectivo"},
        { name: "Departamento", path: "/departamentos"},
        { name: "Configuracao", path: "/escolas"},
      ], 
    },
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
      <ul className="nav flex-column gap-2">
        {menu.map((item) => (
          <li key={item.name}>
            {item.submenu ? (
              <>
                <button
                  type="button"
                  className={`btn btn-link text-start w-100 text-white d-flex align-items-center justify-content-between ${
                    location.pathname.startsWith(item.path) ? "fw-bold" : ""
                  }`}
                  onClick={() => toggleMenu(item.name)}
                  style={{ textDecoration: "none" }}
                >
                  <span>
                    <FontAwesomeIcon icon={item.icon} className="me-2" />
                    {item.name}
                  </span>
                  <span className="ms-2">{openMenu === item.name ? "▾" : "▸"}</span>
                </button>

                <ul className={`nav flex-column ps-3 ${openMenu === item.name ? "d-block" : "d-none"}`}>
                  {item.submenu.map((sub) => (
                    <li key={sub.path}>
                      <Link
                        to={sub.path}
                        className={`nav-link text-white py-1 ${location.pathname === sub.path ? "fw-bold" : ""}`}
                        style={{ borderLeft: location.pathname === sub.path ? "3px solid white" : "none" }}
                      >
                        {sub.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <Link
                to={item.path}
                className={`nav-link text-white ${location.pathname === item.path ? "fw-bold" : ""}`}
                style={{ borderLeft: location.pathname === item.path ? "3px solid white" : "none" }}
              >
                <FontAwesomeIcon icon={item.icon} className="me-2" />
                {item.name}
              </Link>
            )}
          </li>
        ))}
      </ul>

    </div>
  )
}
