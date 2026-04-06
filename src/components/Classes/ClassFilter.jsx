export default function ClassFilter(){

return(

<div className="card p-3">

<h6 className="mb-3">
Preencha os dados para ver as turmas
</h6>

<label>Curso</label>
<select className="form-select mb-3">
<option>Enfermagem</option>
</select>

<label>Classe</label>
<select className="form-select mb-3">
<option>10ª Classe</option>
</select>

<button className="btn btn-primary w-100">
Buscar
</button>

</div>

)

}