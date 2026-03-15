export default function DisciplineFilter(){

return(

<div className="card p-3">

<h6 className="mb-3">
Preencha os dados para ver as disciplinas
</h6>

<label>Ano lectivo</label>
<select className="form-select mb-3">
<option>2023/2024</option>
</select>

<label>Curso</label>
<select className="form-select mb-3">
<option>Sem Opção</option>
</select>

<label>Classe</label>
<select className="form-select mb-3"></select>

<label>Turma</label>
<select className="form-select mb-3"></select>

<button className="btn btn-primary w-100">
Buscar
</button>

</div>

)

}