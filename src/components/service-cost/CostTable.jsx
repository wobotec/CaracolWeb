import { useState } from "react";
import CostModal from "./CostModal";

export default function CostTable(){

const [showModal,setShowModal] = useState(false)

const [costs,setCosts] = useState([
{ id:1, service:"Matrícula", price:4000 },
{ id:2, service:"Confirmação", price:3000 }
])

function addCost(newCost){

setCosts([...costs,newCost])
setShowModal(false)

}

return(

<div>

<div className="d-flex justify-content-between mb-3">

<div>
<button className="btn btn-secondary me-2">Editar</button>
<button className="btn btn-danger">Eliminar</button>
</div>

<button 
className="btn btn-primary"
onClick={()=>setShowModal(true)}
>
Novo Custo
</button>

</div>

<table className="table">

<thead>
<tr>
<th>Serviço</th>
<th>Custo</th>
</tr>
</thead>

<tbody>

{costs.map(cost=>(
<tr key={cost.id}>
<td>{cost.service}</td>
<td>{cost.price}</td>
</tr>
))}

</tbody>

</table>

{showModal && (
<CostModal
addCost={addCost}
close={()=>setShowModal(false)}
/>
)}

</div>

)

}