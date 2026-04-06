import { useState } from "react";
import ClassModal from "./ClassModal";

export default function ClassesTable(){

const [showModal,setShowModal] = useState(false)

const [classes,setClasses] = useState([

{ id:1, turma:"A", periodo:"Manhã", lotacao:65, sala:11 },
{ id:2, turma:"B", periodo:"Tarde", lotacao:65, sala:11 },
{ id:3, turma:"C", periodo:"Tarde", lotacao:65, sala:16 }

])

function addClass(newClass){

setClasses([...classes,newClass])
setShowModal(false)

}

function deleteClass(id){

setClasses(classes.filter(c=>c.id !== id))

}

return(

<div>

<div className="d-flex justify-content-between mb-3">

<div>
<button className="btn  me-2">
Editar
</button>

<button className="btn ">
Eliminar
</button>
</div>

<button
className="btn btn-primary"
onClick={()=>setShowModal(true)}
>
Nova Turma
</button>

</div>

<table className="table table-bordered">

<thead>

<tr>
<th>Turma</th>
<th>Período</th>
<th>Lotação</th>
<th>Sala</th>
</tr>

</thead>

<tbody>

{classes.map(c=>(
<tr key={c.id}>
<td>{c.turma}</td>
<td>{c.periodo}</td>
<td>{c.lotacao}</td>
<td>{c.sala}</td>
</tr>
))}

</tbody>

</table>

{showModal && (
<ClassModal
addClass={addClass}
close={()=>setShowModal(false)}
/>
)}

</div>

)

}