export default function SearchBar({search,setSearch}){

return(

<div className="input-group my-3" style={{padding: "20px;", width: "100%"}}>

<div >

<input
type="text"
className="form-control border-start-0 rounded-end-pill"
placeholder="Buscar Aluno..."
value={search}
onChange={(e)=>setSearch(e.target.value)}
/>
</div>

</div>

)

}