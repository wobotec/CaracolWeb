export default function SearchBar({search,setSearch}){

return(

<div className="input-group my-3">

<span className="input-group-text bg-light border-end-0 rounded-start-pill">
🔍
</span>

<input
type="text"
className="form-control border-start-0 rounded-end-pill"
placeholder="Buscar Aluno..."
value={search}
onChange={(e)=>setSearch(e.target.value)}
/>

</div>

)

}