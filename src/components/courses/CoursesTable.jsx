import { useState } from "react";
import CourseModal from "./CourseModal";

export default function CoursesTable(){

const [showModal,setShowModal] = useState(false)

const [courses,setCourses] = useState([

{ id:1, department:"Ensino Geral", course:"Sem Opção", type:"GERAL" },
{ id:2, department:"Ensino Geral", course:"CFB", type:"PUNIV" },
{ id:3, department:"Ensino Geral", course:"CEJ", type:"PUNIV" },
{ id:4, department:"Saúde", course:"Enfermagem", type:"TÉCNICO" }

])

function addCourse(newCourse){

setCourses([...courses,newCourse])
setShowModal(false)

}

function deleteCourse(id){

setCourses(courses.filter(c=>c.id !== id))

}

return(

<div>

<div className="d-flex justify-content-between mb-3">

<div>
<button className="btn  me-2">Editar</button>
<button className="btn ">Eliminar</button>
</div>

<button 
className="btn btn-primary"
onClick={()=>setShowModal(true)}
>
Novo Curso
</button>

</div>

<table className="table table-bordered">

<thead>

<tr>
<th>Departamento</th>
<th>Curso</th>
<th>Tipo</th>
</tr>

</thead>

<tbody>

{courses.map(c=>(

<tr key={c.id}>

<td>{c.department}</td>
<td>{c.course}</td>
<td>{c.type}</td>

</tr>

))}

</tbody>

</table>

{showModal && (
<CourseModal
addCourse={addCourse}
close={()=>setShowModal(false)}
/>
)}

</div>

)

}