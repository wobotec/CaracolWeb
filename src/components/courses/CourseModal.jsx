import { useState } from "react";

export default function CourseModal({addCourse,close}){

const [department,setDepartment] = useState("")
const [course,setCourse] = useState("")
const [type,setType] = useState("")

function handleSubmit(e){

e.preventDefault()

addCourse({

id:Date.now(),
department,
course,
type

})

}

return(

<div className="modal d-block">

<div className="modal-dialog">

<div className="modal-content">

<div className="modal-header">

<h5>Novo Curso</h5>

<button 
className="btn-close"
onClick={close}
></button>

</div>

<form onSubmit={handleSubmit}>

<div className="modal-body">

<label>Departamento</label>
<input
className="form-control mb-2"
value={department}
onChange={(e)=>setDepartment(e.target.value)}
required
/>

<label>Curso</label>
<input
className="form-control mb-2"
value={course}
onChange={(e)=>setCourse(e.target.value)}
required
/>

<label>Tipo</label>
<input
className="form-control"
value={type}
onChange={(e)=>setType(e.target.value)}
required
/>

</div>

<div className="modal-footer">

<button
type="button"
className="btn btn-secondary"
onClick={close}
>
Cancelar
</button>

<button
type="submit"
className="btn btn-primary"
>
Salvar
</button>

</div>

</form>

</div>

</div>

</div>

)

}