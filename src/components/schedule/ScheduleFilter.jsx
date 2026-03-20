export default function ScheduleFilter(){

return(

<div className="card p-4">

<h5 className="mb-3">HORÁRIO</h5>

<label>Ano lectivo</label>
<select className="form-select mb-3">
<option>2023/2024</option>
</select>

<label>Curso</label>
<select className="form-select mb-3">
<option>Sem Opção</option>
</select>

<label>Classe</label>
<select className="form-select mb-3">
<option>1ª Classe</option>
</select>

<label>Turma</label>
<select className="form-select mb-3">
<option>A</option>
</select>

<p className="small text-muted">
Turma pertencente ao período: Manhã <br/>
Capacidade máxima: 45
</p>

<button className="btn btn-primary w-100">
Buscar
</button>

</div>

)

}