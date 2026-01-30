import { Routes, Route } from 'react-router-dom'
import { AppLayout } from '@/components/layout/AppLayout'
import { PrivateRoute } from './PrivateRoute'

import Login from '@/pages/Login'
import Dashboard from '@/pages/Dashboard'
import Users from '@/pages/Users'
import NotFound from '@/pages/NotFound'

export function AppRoutes() {
  return (
    <Routes>

      {/* Public */}
      <Route path="/login" element={<Login />} />

      {/* Private */}
      <Route element={<PrivateRoute />}>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
        </Route>
      </Route>

      {/* 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
