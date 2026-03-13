import { useState } from 'react';
export default function AcademicYearFormModal({ onClose, onSave }) {
    const [year, setYear] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [error, setError] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        if (!year || !startDate || !endDate) {
            setError("Todos os campos são obrigatórios");
            return;
        }
        if (new Date(startDate) >= new Date(endDate)) {
            setError("Data de início deve ser anterior à data de fim");
            return;
        }
        onSave({ year, startDate, endDate });
    }
    return (
        <div className="modal d-block" tabIndex="-1">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Novo Ano Lectivo</h5>
                        <button type="button" className="btn-close" onClick={onClose}></button>
                    </div>
                        <form onSubmit={handleSubmit}>
                            <div className="modal-body">
                                {error && ( <div className="alert alert-danger">{error}</div>)}
                                <div className="mb-3">
                                    <label>Ano Lectivo</label>
                                    <input className="form-control" placeholder='Ex: 2024/2025' value={year} onChange={(e) => setYear(e.target.value)} />
                                </div>
                                <div className="mb-3">
                                    <label>Data Início</label>
                                <input type="date" className="form-control" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
                            </div>
                            <div className="mb-3">
                                <label>Data Final</label>
                                <input type="date" className="form-control" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
                            </div>
                        </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={onClose}>Cancelar</button>
                        <button type="button" className="btn btn-primary">Salvar</button>
                    </div>
                    </form>
                </div>
            </div>
        </div>
    )
}