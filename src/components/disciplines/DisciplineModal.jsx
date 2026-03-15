import { useState } from "react"

export default function DisciplineModal({addDiscipline,close}){

const [name,setName] = useState("")
const [teacher,setTeacher] = useState("")
const [hours,setHours] = useState("")

function handleSubmit(e){

e.preventDefault()

addDiscipline({

id:Date.now(),
name,
teacher,
hours

})

}

return(

<div className="modal d-block">

<div className="modal-dialog">

<div className="modal-content">

<div className="modal-header">

<h5>Adicionar Disciplina</h5>

<button className="btn-close" onClick={close}></button>

</div>

<form onSubmit={handleSubmit}>

<div className="modal-body">

<label>Disciplina</label>
<input
className="form-control mb-2"
value={name}
onChange={(e)=>setName(e.target.value)}
required
/>

<label>Professor</label>
<input
className="form-control mb-2"
value={teacher}
onChange={(e)=>setTeacher(e.target.value)}
required
/>

<label>Carga Horária</label>
<input
className="form-control"
value={hours}
onChange={(e)=>setHours(e.target.value)}
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