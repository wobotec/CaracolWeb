import { Outlet } from 'react-router-dom'
import { Navbar } from './Navbar'
import { Sidebar } from './Sidebar'
import { Footer } from './Footer'
import { Breadcrumbs } from './Breadcrumbs'

export function AppLayout() {
  return (
    <div className="d-flex vh-100">
      <Sidebar />

      <div className="d-flex flex-column">
        <Navbar title="Dashboard" />
        <Breadcrumbs />

        <main className="d-flex p-6 bg-secondary ">
          <Outlet />
        </main>

        <Footer />
      </div>
    </div>
  )
}
