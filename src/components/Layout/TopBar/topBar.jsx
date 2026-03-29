import { Link } from "react-router-dom";

const TopBar = () => {
  return ( <>
  <div className="row border-bottom">
      <nav className="navbar navbar-static-top  " role="navigation" style={{ marginBottom: 0 }}>
          <div className="navbar-header">
              <a className="navbar-minimalize minimalize-styl-2 btn btn-primary " href="#">
                  <i className="fa fa-bars"></i>
              </a>
          </div>
          <ul className="nav navbar-top-links navbar-right">
              <li><Link to="/lockscreen"><i className="fa fa-lock"></i></Link></li>

              <li className="dropdown">
                  <a className="dropdown-toggle count-info" data-toggle="dropdown" href="#">
                      <i className="fa fa-envelope"></i> <span className="label label-danger">1</span>
                  </a>
                  <ul className="dropdown-menu dropdown-messages">
                      <li>
                          <div className="dropdown-messages-box">
                              <a href="profile.html" className="pull-left">
                                  <img alt="image" className="img-circle" src="img/a7.jpg" />
                              </a>
                              <div className="media-body">
                                  <small className="pull-right">46h atrás</small>
                                  <strong>Pedro Panzo</strong> Começou seguir <strong>
                                      West
                                      João
                                  </strong>. <br />
                                  <small className="text-muted">3 dias atrás ás 7:58 - 04.03.2026</small>
                              </div>
                          </div>
                      </li>
                      <li className="divider"></li>
                      <li>
                          <div class="text-center link-block">
                              <a href="mailbox.html">
                                  <i class="fa fa-envelope"></i> <strong>Ler Todas</strong>
                              </a>
                          </div>
                      </li>                        
                  </ul>
              </li>
              <li className="dropdown">
                  <a className="dropdown-toggle count-info" data-toggle="dropdown" href="#">
                      <i className="fa fa-bell"></i> <span className="label label-danger">2</span>
                  </a>
                  <ul className="dropdown-menu dropdown-alerts">
                      <li>
                          <a href="mailbox.html">
                              <div>
                                  <i className="fa fa-calendar fa-fw"></i> Seu software expirou! Contacte a Wobotec
                                  <span className="pull-right text-muted small">4 minutos atrás</span>
                              </div>
                          </a>
                      </li>
                      <li className="divider"></li>
                      <li>
                          <a href="profile.html">
                              <div>
                                  <i className="fa fa-users fa-fw"></i> Tem 18 Professores que não fora atribuidos rempos lectivos.
                                  <span className="pull-right text-muted small">12 minutos atrás</span>
                              </div>
                          </a>
                      </li>
                  </ul>
              </li>
              <li><a><i className="fa fa-gift"></i></a></li>

              <li>
                  <a href="login.html">
                      <i className="fa fa-sign-out"></i> Sair
                  </a>
              </li>
          </ul>

      </nav>
  </div>
  </> );
}

export default TopBar;