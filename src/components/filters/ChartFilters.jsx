export default function ChartFilters({ onChange }) {
    return (
        <div className="d-flex gap-3 mb-3">
            <select className="form-select" onChange={(e) =>
                onChange("periodo", e.target.value)
            }>
                <option value="mensal">Mensal</option>
                <option value="trimestral">Trimestral</option>
                <option value="anual">Anual</option>
            </select>

            <select 
            className="form-select" 
            onChange={(e) =>
                onChange("turma", e.target.value)
            }>
                <option value="todas">Todas Turmas</option>
                <option value="turmaA">Turma A</option>
                <option value="turmaB">Turma B</option>
                <option value="turmaC">Turma C</option> 
            </select>
        </div>
    );
} 