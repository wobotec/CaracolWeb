import { Routes, Route} from 'react-router-dom'
import   AppLayout   from '../Layout/AppLayout'
import { PrivateRoute } from './PrivateRoute'
import AuthLayout from '../Layout/AuthLayout';

import Login from '../pages/auth/Login'
import Dashboard from '../pages/dashboard/Dashboard'
import StudentList from '../pages/students/StudentsList'
import StudentForm from '../pages/students/StudentForm'
import NotFound from '../pages/notFound/NotFound'
import Register from '../pages/auth/register'

import Profile from "../pages/user/Profile/Profile";
import Settings from "../pages/user/Settings/Settings";



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
          <Route path="/alunos" element={<StudentList />} />
          <Route path="/alunos/novo" element={<StudentForm />} />
          <Route path="/perfil" element={<Profile />} />
        <Route path="/configuracoes" element={<Settings />} />
        </Route>
      </Route>

     <Route path="*" element={<NotFound />} />    

      

      </Routes> 
    

  )
}
