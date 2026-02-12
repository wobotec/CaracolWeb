import { Routes, Route} from 'react-router-dom'
import   AppLayout   from '../Layout/AppLayout'
import { PrivateRoute } from './PrivateRoute'
import AuthLayout from '../Layout/AuthLayout';

import Login from '../pages/auth/Login'
import Dashboard from '../pages/dashboard/Dashboard'
import NotFound from '../pages/notFound/NotFound'
import Register from '../pages/auth/register'


export default function AppRoutes() {
  return (
     <Routes>

<Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>


      <Route element={<PrivateRoute />}>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Dashboard />} />
        </Route>
      </Route>

     <Route path="*" element={<NotFound />} />    
      
      </Routes> 
    

  )
}
