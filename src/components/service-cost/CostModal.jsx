import { useState } from "react";

export default function CostModal({addCost,close}){

const [service,setService] = useState("")
const [price,setPrice] = useState("")

function handleSubmit(e){

e.preventDefault()

addCost({
id:Date.now(),
service,
price
})

}

return(

<div className="modal d-block">

<div className="modal-dialog">

<div className="modal-content">

<div className="modal-header">

<h5>Novo Custo</h5>

<button 
className="btn-close"
onClick={close}
></button>

</div>

<form onSubmit={handleSubmit}>

<div className="modal-body">

<label>Serviço</label>
<input
className="form-control mb-3"
value={service}
onChange={(e)=>setService(e.target.value)}
required
/>

<label>Custo</label>
<input
className="form-control"
value={price}
onChange={(e)=>setPrice(e.target.value)}
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