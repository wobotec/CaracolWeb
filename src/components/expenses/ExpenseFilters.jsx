export default function ExpenseFilters({ filters, setFilters }){
    return (
        <div className="row g-3 align-items-center">
            <div className="col-full text-center">
                <h4>Pesquisa por tipo de despesa e intervalo de tempo</h4>
            </div>
            <div className="col-md-3" >
                <select 
                    className="form-select"
                    onChange={(e) => setFilters({...filters, tipo: e.target.value})}
                >
                    <option>Tipo</option>
                    <option>Transporte</option>
                    <option>Alimentação</option>
                </select>
            </div>
            <div className="col-md-4">
               <input 
                    type="date"
                    className="form-control"
                    onChange={(e) => setFilters({...filters, de: e.target.value})}
                />
            </div>
            <div className="col-md-4">
                <input 
                   type="date"
                   className="form-control"
                   onChange={(e) => setFilters({...filters, de: e.target.value})}
                />
            </div>
        </div>
    )
}