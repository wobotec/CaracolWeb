import { Outlet } from "react-router-dom"
import  Sidebar  from "./SideBar/sidebar"
import  Sidebar1  from "./SideBar/Sidebar1"
import Topbar from "./TopBar/topBar"
import Footer from "./Footer"

export default function AppLayout() {
  return (
    <div id="wrapper">

      {/* SIDEBAR */}
      <Sidebar1 />

      {/* CONTEÚDO */}
      <div id="page-wrapper" className="gray-bg">

        <Topbar />          
        
        <Outlet />               

        <Footer />
      </div>
    </div>
  )
}
