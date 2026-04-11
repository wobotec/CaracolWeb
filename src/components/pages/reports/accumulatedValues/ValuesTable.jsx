export default function ValuesTable({data}){

return(

<div className="table-responsive">

<table className="table table-bordered table-hover">

<thead className="table-primary">
<tr>
<th>ID</th>
<th>ALUNO</th>
<th>TROCO GUARDADO</th>
</tr>
</thead>

<tbody>

{data.map((item)=>(
<tr key={item.id}>
<td>{item.id}</td>
<td>{item.name}</td>
<td>
{
new Intl.NumberFormat('pt-BR', {
style: 'currency',
currency: 'BRL'
}).format(item.value)
}
</td>
</tr>
))}

</tbody>

</table>

</div>

)

}