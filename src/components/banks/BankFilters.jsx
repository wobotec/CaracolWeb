import { toPadding } from "chart.js/helpers";

export default function BankFilters({ filter, setFilter}){
    return (
        <div className="mb-3">
            <div className="d-flex gap-3 row" style={{padding: "10px", width: "50%", margin: "0px auto"}}>
                <div className="col-full">
                    <p className="text-center">Modo de visulização</p>
                </div>
                <div className="col-md-4">
                    <input 
                        type="radio"
                        name="filter"
                        onChange={() => setFilter("Activo")}
                        defaultChecked
                        /> Activos
                </div>
                <div className="col-md-4">
                    <input 
                        type="radio"
                        name="filter"
                        onChange={() => setFilter("Bloqueado")}
                        /> Bloqueado
                </div>
                <div className="col-md-4">
                    <input
                        type="radio"
                        name="filter"
                        onChange={() => setFilter("Todos")}
                    /> Todos
                </div>
            </div>
        </div>
    )
}