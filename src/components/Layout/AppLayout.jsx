import { Outlet } from "react-router-dom"
import Sidebar from "./SideBar/sidebar"
import Sidebar1 from "./SideBar/Sidebar1"
import Topbar from "./TopBar/topBar"
import Footer from "./Footer.jsx"

export default function AppLayout(props) {
  return (
    <div id="wrapper">

      {/* SIDEBAR */}
      <Sidebar />

      {/* CONTEÚDO */}
      <div id="page-wrapper" className="gray-bg">

        <Topbar />

        {props.children}

        <Footer />
      </div>
    </div>
  )
}
