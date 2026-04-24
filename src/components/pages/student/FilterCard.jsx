export default function FilterCard(){

return(

<div className="card p-3">

<h5>Classe Actual</h5>

<label>Ano lectivo</label>
<select className="form-select mb-2">
<option>2023/2024</option>
</select>

<label>Curso</label>
<select className="form-select mb-2">
<option>Sem Opção</option>
</select>

<label>Classe</label>
<select className="form-select mb-2">
<option>1ª Classe</option>
</select>

<label>Turma</label>
<select className="form-select mb-2">
<option>1M/A</option>
</select>

<p className="small text-muted">
Turma pertencente ao período: Manhã <br/>
Capacidade máxima de Alunos: 45
</p>

<button className="btn btn-primary w-100">
Buscar...
</button>

</div>

)
}