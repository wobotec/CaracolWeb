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

const Menu = () => {
    return ( <>
        <nav className="navbar-default navbar-static-side" role="navigation">
                    <div className="sidebar-collapse">
                        <ul className="nav metismenu" id="side-menu">
                            <li className="nav-header">
                                <div className="dropdown profile-element">
                                    <span>
                                        <img className="img-circle" src={iconProfile}/>
                                    </span>
                                    <a data-toggle="dropdown" className="dropdown-toggle" href="#">
                                        <span className="clear">
                                            <span className="block m-t-xs">
                                                <strong className="font-bold">
                                                    Pedro
                                                    Panzo
                                                </strong>
                                            </span> <span className="text-muted text-xs block">Director <b className="caret"></b></span>
                                        </span>
                                    </a>
                                    <ul className="dropdown-menu animated fadeInRight m-t-xs">
                                        <li><a href="#profile.html">Perfil</a></li>
                                        <li><a href="#contacts.html">Contactos</a></li>
                                        <li className="divider"></li>
                                        <li><a href="login.html">Logout</a></li>
                                    </ul>
                                </div>
                                <div className="logo-element">
                                    <img alt="image" src={iconSmall} />
                                </div>
                            </li>

                            <li>
                                <a href="index" ><img src={iconhome} /><span> Home</span></a>
                            </li>
                            <li>
                                <a href="#layouts.html"><img src={iconsms} /><span className="nav-label"> SMS | Email</span></a>
                            </li>
                            <li>
                                <a><img src={iconStud}/> <span className="nav-label"> Aluno</span></a>
                                <ul className="nav nav-second-level collapse">
                                    <li><a href="index">Inscrição</a></li>
                                    <li><a href="Index">Confirmação</a></li>
                                    <li><a href="Index">Dados Académicos</a></li>
                                    <li><a href="DadosPessoais">Dados Pessoais</a></li>
                                    <li><a href="Index">Suspensão</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="mailbox.html">
                                    <img src={iconstaff} /><span className="nav-label">
                                        Funcionários
                                    </span>
                                </a>
                                <ul className="nav nav-second-level collapse">
                                    <li><a href="Index">Administrativos</a></li>
                                    <li><a href="Index">Professores</a></li>
                                    <li><a href="Index">Utilizadores</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="mailbox.html">
                                    <img src={iconbooks} /><span className="nav-label">
                                        Implementações
                                    </span>
                                </a>
                                <ul className="nav nav-second-level collapse">
                                    <li><a href="Curso" >Curso</a></li>
                                    <li><a href="classNamee">classNamee</a></li>
                                    <li><a href="Aluno" >Turma</a></li>
                                    <li><a href="Discplinas">Discplinas</a></li>
                                    <li><a href="Alyno" >Horário</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="mailbox.html">
                                    <img src={iconorder} /><span className="nav-label">
                                        Pedagógico
                                    </span>
                                </a>
                                <ul className="nav nav-second-level collapse">
                                    <li><a href="Index">Lançamento de notas</a></li>
                                    <li><a href="Index">Cumprimento de notas</a></li>
                                    <li><a href="Index">Notas implantadas</a></li>
                                    <li><a href="Index">Transição de classNamee</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="mailbox.html">
                                    <img src={iconmoney} /><span className="nav-label">
                                        Finanças
                                    </span>
                                </a>
                                <ul className="nav nav-second-level collapse">
                                    <li><a href="Index">Pagamentos</a></li>
                                    <li><a href="Index">Despesas</a></li>
                                    <li><a href="Index">Acumulados</a></li>
                                    <li>
                                        <a href="#">Estatísticas financeira<span className="fa arrow"></span></a>
                                        <ul className="nav nav-third-level">
                                            <li>
                                                <a href="#">Estatística financeira</a>
                                            </li>
                                            <li>
                                                <a href="#">Estatísticas em tempo real</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li><a href="Index">Banco</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="mailbox.html">
                                    <img src={icontransport} /><span className="nav-label">
                                        Serviço de Transporte
                                    </span>
                                </a>
                                <ul className="nav nav-second-level collapse">
                                    <li><a href="Index">Viaturas</a></li>
                                    <li><a href="Index">Controlo de Rotas</a></li>
                                    <li><a href="Index">Controlo de pessageiros</a></li>
                                    <li><a href="Index">Pagamentos</a></li>
                                    <li><a href="Index">Custos</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="#">
                                    <img src={iconprint}/> <span className="nav-label">Impressões </span><span className="fa arrow"></span>
                                </a>
                                <ul className="nav nav-second-level collapse">
                                    <li> <a href="#">Imp. Administrativas</a></li>
                                    <li> <a href="#">Imp. Pedagógicas</a></li>
                                    <li> <a href="#">Imp. Finançeiras</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="#">
                                    <img src={iconsettings}/> <span className="nav-label">Definições </span><span className="fa arrow"></span>
                                </a>
                                <ul className="nav nav-second-level collapse">
                                    <li> <a href="Index">Ano lectivo</a></li>
                                    <li> <a href="#">Departamento</a></li>
                                    <li> <a href="#">Serviços</a></li>
                                    <li> <a href="#">Custo de serviços</a></li>
                                    <li> <a href="Index">Configurações</a></li>
                                </ul>
                            </li>

                        </ul>
                    </div>
                </nav>
        </> );
}
 
export default Menu;