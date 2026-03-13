export default function AdvancedFilters({ onChange }) {
    function handleFilterChange(name, value) {
        onChange(prev => ({ ...prev, [name]: value }));
    }
    return (
        <div className="row g-3 mb-3">
            <div className="col-md-3">
                <select className="form-select" onChange={(e) => handleFilterChange('status', e.target.value)}>
                    <option value="">Status</option>
                    <option value="Ativo">Ativo</option>
                    <option value="Desactivo">Desactivo</option>
                </select>
            </div>
            <div className="col-md-3">
                <select className="form-select" onChange={(e) => handleFilterChange('periodo', e.target.value)}>
                    <option value="">Período</option>
                    <option value="manha">Manhã</option>
                    <option value="tarde">Tarde</option>
                    <option value="noite">Noite</option>
                </select>
            </div>
        </div>
    );
}