import { useState } from "react";

export default function SuspensionHeader(){

const [mode,setMode] = useState("activos")

return(

<div className="d-flex justify-content-between align-items-center mb-4 ">

{/* Busca */}
<input
type="text"
className="form-control search-input"
placeholder="Buscar Aluno..."
/><br />

{/* Controles */}
<div className="d-flex align-items-center gap-3 row mb-3">

{/* Total */}
<div className="total-box col-md-4">
<span>Total Activos</span><br />
<strong className="text-success text-center">3615</strong>
</div>

{/* Radios */}
<div className="col-md-4">
<label className="me-2 ">Modo:</label><br />
<input
type="radio"
checked={mode==="activos"}
onChange={()=>setMode("activos")}

/> Activos

<input
type="radio"
className="ms-2"
checked={mode==="suspensos"}
onChange={()=>setMode("suspensos")}
/>  Suspensos
</div>

{/* Botão */}
<button className="btn btn-danger">
Suspender Aluno
</button>

</div><br />

</div>

)

}