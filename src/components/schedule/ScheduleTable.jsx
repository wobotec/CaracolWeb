import { useState } from "react";

export default function ScheduleTable(){

const [showHours, setShowHours] = useState(true);

const data = [
{
time:"07h30 - 08h15",
mon:"L. Francesa",
tue:"FAI",
wed:"Ética",
thu:"L. Inglesa",
fri:"Física"
}
];

return(
<div>
<div className="d-flex justify-content-between mb-3">

<button className="btn btn-primary">
Adicionar Tempos
</button>

<div className="d-flex gap-4">

{/* Modo */}
<div>
<label className="me-2">Modo:</label>

<input
type="radio"
name="mode"
defaultChecked
/> Disciplinas

<input
type="radio"
name="mode"
className="ms-2"
/> Professores
</div>

{/* Mostrar Horas */}
<div>
<label className="me-2">Mostrar Horas:</label>

<input
type="radio"
name="showHours"
checked={showHours === true}
onChange={()=>setShowHours(true)}
/> Sim

<input
type="radio"
name="showHours"
className="ms-2"
checked={showHours === false}
onChange={()=>setShowHours(false)}
/> Não
</div>

</div>
</div>
<table className="table table-bordered text-center">
    
<thead className="table-primary">
<tr>
{showHours && <th>Horas</th>}
<th>Segunda</th>
<th>Terça</th>
<th>Quarta</th>
<th>Quinta</th>
<th>Sexta</th>
</tr>
</thead>
<tbody>

{data.map((row,index)=>(
<tr key={index}>

{showHours && <td>{row.time}</td>}

<td>{row.mon}</td>
<td>{row.tue}</td>
<td>{row.wed}</td>
<td>{row.thu}</td>
<td>{row.fri}</td>

</tr>
))}

</tbody>
</table>
</div>
)
}