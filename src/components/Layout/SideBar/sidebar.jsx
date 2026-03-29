import iconProfile from "./../../../assets/img/profile_small.jpg";

import iconbooks from "./../../../assets/img/Icons/books.png";
import iconhome from "./../../../assets/img/Icons/home.png";
import iconmoney from "./../../../assets/img/Icons/money.png";
import iconprint from "./../../../assets/img/Icons/print.png";
import icontransport from "./../../../assets/img/Icons/transport.png";
import iconorder from "./../../../assets/img/Icons/order.png";
import iconsettings from "./../../../assets/img/Icons/settings.png";
import iconsms from "./../../../assets/img/Icons/sms.png";
import iconstaff from "./../../../assets/img/Icons/staff.png";
import iconStud from "./../../../assets/img/Icons/student.png";
import iconSmall from "./../../../assets/img/logo_small.png";

import { Link, useLocation } from "react-router-dom"
import { useAuth } from "../../../hooks/useAuth"
import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHouse, faCommentSms, faUserGraduate, faUsers, faFile, faPrint, faSackDollar, faGear, faBus } from "@fortawesome/free-solid-svg-icons"

export default function Sidebar() {
  const location = useLocation()
  const { user } = useAuth()
  const [openMenu, setOpenMenu] = useState(null)

  const toggleMenu = (name) => {
    setOpenMenu((current) => (current === name ? null : name))
  }

  const menu = [
    {
      icon: faHouse,
      name: "Home | Dashboard",
      submenu: [
        { name: "Home", path: "/Dashboard/" },
        { name: "Dashboard 1", path: "/Dashboard/Dashboard1" },
        { name: "Dashboard 2", path: "/Dashboard/Dashboard2" },
        { name: "Dashboard 3", path: "/Dashboard/Dashboard3" }, ,
      ],
    },
    { icon: faCommentSms, name: "SMS | Email", path: "/mensagem" },
    {
      icon: faUserGraduate,
      name: "Aluno",
      submenu: [
        { name: "Inscrição", path: "/alunos" },
        { name: "Confirmação", path: "/alunos/confirmacao" },
        { name: "Dados Academicos", path: "/alunos/confirmacao" },
        { name: "Dados Pessoais", path: "/alunos/academico" },
        { name: "Suspensão", path: "/alunos/suspensao" },
      ],
    },
    {
      icon: faUsers,
      name: "Funcionários",
      submenu: [
        { name: "Administrativos", path: "/professores" },
        { name: "Professores", path: "/professores" },
        { name: "Utilizadores", path: "/professores" },
      ],
    },
    {
      icon: faFile,
      name: "Implementações",
      submenu: [
        { name: "Classes", path: "/Classe" },
        { name: "Curso", path: "/Curso" },
        { name: "classe", path: "/classe" },
        { name: "Turma", path: "/Turma" },
        { name: "Horário", path: "/Horario" },
      ],
    },
    {
      icon: faFile,
      name: "Pedagógico",
      submenu: [
        { name: "Lançamento de notas", path: "/Classe" },
        { name: "Cumprimento de notas", path: "/Curso" },
        { name: "Notas implantadas", path: "/classe" },
        { name: "Transição de classe", path: "/Turma" },
      ],
    },
    {
      icon: faSackDollar, name: "Finanças",
      submenu: [
        { name: "Pagamentos", path: "/Pagamentos" },
        { name: "Despesas", path: "/Despesas" },
        { name: "Acumulados", path: "/Acumulados" },
        { name: "Estatísticas financeira", path: "/Acumulados" },
        { name: "Banco", path: "/Acumulados" },
      ]
    },
    {
      icon: faBus, name: "Serviço de Transporte",
      submenu: [
        { name: "Viaturas", path: "/Viaturas" },
        { name: "Controlo de Rotas", path: "/Despesas" },
        { name: "Controlo de pessageiros", path: "/Acumulados" },
        { name: "Pagamentos", path: "/Acumulados" },
        { name: "Custos", path: "/Acumulados" },
      ]
    },
    {
      icon: faPrint, name: "Impressões",
      submenu: [
        { name: "Imp. Administrativas", path: "/Viaturas" },
        { name: "Imp. Pedagógicas", path: "/Despesas" },
        { name: "Imp. Finançeiras", path: "/Acumulados" },
      ]
    },
    {
      icon: faGear,
      name: "Definições",
      submenu: [
        { name: "Ano lectivo", path: "/ano-lectivo" },
        { name: "Departamento", path: "/departamentos" },
        { name: "Serviços", path: "/escolas" },
        { name: "Custo de serviços", path: "/escolas" },
        { name: "Configurações", path: "/escolas" },
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
      {/* Perfil */}
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
              <li><a className="dropdown-item" href="#profile.html">Perfil</a></li>
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
                  className={`btn btn-link text-start w-100 text-white d-flex align-items-center justify-content-between ${location.pathname.startsWith(item.path) ? "fw-bold" : ""
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
              <li>
              <Link
                to={item.path}
                className={`nav-link text-white ${location.pathname === item.path ? "fw-bold" : ""}`}
                style={{ borderLeft: location.pathname === item.path ? "3px solid white" : "none" }}
              >
                <FontAwesomeIcon icon={item.icon} className="me-2" />
                {item.name}
              </Link>
              </li>
            )}
          </li>
        ))}
      </ul>

    </div>
  )
}
