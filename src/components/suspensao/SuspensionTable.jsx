import { useState } from "react";

export default function SuspensionTable(){

const [selected,setSelected] = useState(null)

const students = [
{ id:1, name:"Carlos Tunga Cangala"},
{ id:3, name:"Domingas Cassinda Mariano"},
{ id:5, name:"Érica Maria Melo Beianavi"},
{ id:6, name:"Eliane Maria Fernando Vicente"}
]

return(

<div className="table-responsive">

<table className="table table-bordered table-hover">

<thead className="table-primary text-center">

<tr>
<th>ID</th>
<th>Nome</th>
</tr>

</thead>

<tbody>

{students.map(s=>(
<tr
key={s.id}
onClick={()=>setSelected(s.id)}
className={selected === s.id ? "table-primary text-white" : ""}
style={{cursor:"pointer"}}
>

<td>{s.id}</td>
<td>{s.name}</td>

</tr>
))}

</tbody>

</table>

</div>

)

}