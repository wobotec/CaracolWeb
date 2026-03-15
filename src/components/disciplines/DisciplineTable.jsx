import { useState } from "react"
import DisciplineModal from "./DisciplineModal"

export default function DisciplineTable(){

const [showModal,setShowModal] = useState(false)

const [disciplines,setDisciplines] = useState([])

function addDiscipline(newDiscipline){

setDisciplines([...disciplines,newDiscipline])
setShowModal(false)

}

return(

<div>

<div className="d-flex justify-content-between mb-3">

<div>

<button className="btn  me-2">
Editar
</button>

<button className="btn  me-2">
Eliminar
</button>

<button className="btn ">
Estado
</button>

</div>

<button
className="btn btn-primary"
onClick={()=>setShowModal(true)}
>
Adicionar Disciplina
</button>

</div>

<table className="table table-bordered">

<thead>

<tr>
<th>Disciplina</th>
<th>Professor</th>
<th>Carga Horária</th>
</tr>

</thead>

<tbody>

{disciplines.map(d=>(
<tr key={d.id}>
<td>{d.name}</td>
<td>{d.teacher}</td>
<td>{d.hours}</td>
</tr>
))}

</tbody>

</table>

{showModal && (
<DisciplineModal
addDiscipline={addDiscipline}
close={()=>setShowModal(false)}
/>
)}

</div>

)

}