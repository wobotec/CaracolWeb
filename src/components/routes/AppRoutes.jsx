import { Routes, Route } from 'react-router-dom'
import AppLayout from '../Layout/AppLayout'
import { PrivateRoute } from './PrivateRoute'
import AuthLayout from '../Layout/AuthLayout';
import Login from '../pages/auth/Login';
import Dashboard from '../pages/dashboard/Dashboard';
import StudentList from '../pages/students/StudentsList';
import StudentForm from '../pages/students/StudentForm';
import StudentsAcademico from '../pages/students/StudentsAcademico';
import StudentConfirm from '../pages/students/StudentConfirm';
import StudentPage from '../pages/students/StudentPage';
import StudentDropOut from '../pages/students/StudentDropOut';
import SchoolForm from '../pages/school/SchoolForm';
import SchoolList from '../pages/school/SchoolList';
import AcademicYearPage from '../pages/academicYear/AcademicYear';
import DepartmentsList from '../pages/department/DepartmentsList';
import Services from '../pages/services/Services';
import NotFound from '../pages/notFound/NotFound';
import Register from '../pages/auth/register';
import Classes from '../pages/classes/Classes';
import Disciplina from '../pages/disciplina/DisciplinesPage';
import ServiceCostPage from '../pages/service-cost/ServiceCostPage';
import Profile from "../pages/user/Profile/Profile";
import Settings from "../pages/user/Settings/Settings";
import AccumulatedValuesPage from "../pages/reports/accumulatedvalues/AccumulatedValuesPage";



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
          <Route path="/alunos/dados-pessoal" element={<StudentPage />} />
          <Route path="/alunos/desistente" element={<StudentDropOut />} />
          <Route path="/alunos/academico" element={<StudentsAcademico/>} />
          <Route path="/escolas/nova" element={<SchoolForm />} />
          <Route path="/escolas" element={<SchoolList />} />
          <Route path="/ano-lectivo" element={<AcademicYearPage />} />
          <Route path="/departamentos" element={<DepartmentsList />} />
          <Route path="/servicos" element={<Services />} />
          <Route path="/Classe" element={<Classes />} />
          <Route path='/Disciplina' element={<Disciplina />} />
          <Route path='/custo-servico' element={<ServiceCostPage />} />
          <Route path="/perfil" element={<Profile />} />
          <Route path="/configuracoes" element={<Settings />} />
        </Route>
      </Route>

      <Route path="/lockscreen" element={<Lockscreen />} />
      <Route path="*" element={<NotFound />} />

    </Routes>
  )
}
