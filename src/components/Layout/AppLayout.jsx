import { Outlet } from "react-router-dom"
import  Sidebar  from "./SideBar/sidebar"
import Topbar from "./TopBar/topBar"

export default function AppLayout() {
  return (
    <div className="d-flex ">

      {/* SIDEBAR */}
      <Sidebar />

      {/* CONTEÚDO */}
      <div className="flex-grow-1">

        <Topbar />

        <main className="p-4 bg-light min-vh-100 vw-100" >
          <Outlet />
        </main>

      </div>
    </div>
  )
}
