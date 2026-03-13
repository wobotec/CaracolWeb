import { useState } from "react";

export default function ServiceForm({ onAdd }) {
    const [name, setName] = useState('');

    const handleSubmit = () => {
        if (!name) {
            alert("Informe o nome da referência!");
            return;
        }
        
        onAdd({ name });

        setName('');
    }
    return (
        <div className="card p-3 mb-3">
            <div className="row">
                <div className="col-md-8">
                    <input
                        className="form-control"
                        placeholder="Tipo de serviço"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="col-md-4">
                    <button className="btn btn-primary w-100" onClick={handleSubmit}>
                        ✓
                    </button>
                </div>
            </div>
        </div>
    )
}