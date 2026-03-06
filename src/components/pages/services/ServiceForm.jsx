import { useState } from "react";

export default function ServiceForm({ onAdd }) {
    const [service, setService] = useState({
        name: '',
        regime: 'IVA',
        imposto: 'ISE',
        taxa: 0
    });
    const handleChange = (e) => {
        setService({ ...service, [e.target.name]: e.target.value });
    }
    const handleSubmit = () => {
        if (!service.name) {
            alert("Informe o nome do serviço!");
            return;
        }

        onAdd(service);

        setService({
            name: '',
            regime: 'IVA',
            imposto: 'ISE',
            taxa: 0
        });
    }
    return (
        <div className="card p-3 mb-3">
            <div className="row">
                <div className="col-md-4 ">
                    <input
                        className="form-control"
                        placeholder="Tipo de Serviço"
                        name="name"
                        value={service.name}
                        onChange={handleChange}
                    />
                </div>
                <div className="col-md-3 ">
                    <select
                        className="form-control"
                        name="imposto"
                        onChange={handleChange}
                    >
                        <option value="IVA">IVA</option>
                        <option value="ISE">ISE</option>
                    </select>
                </div>
                <div className="col-md-2 ">
                    <input
                        className="form-control"
                        name="taxa"
                        value={service.taxa}
                        onChange={handleChange}
                    />
                </div>
                <div className="col-md-3">

                    <button className="btn btn-primary w-100" onClick={handleSubmit}>
                        ✓
                    </button>
                </div>
            </div>
        </div>
    )
}