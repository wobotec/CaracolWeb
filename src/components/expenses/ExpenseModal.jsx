import { useState } from "react"

export default function ExpenseModal({ show, onClose, onSave}){
    console.log("Modal recebeu:", show)
    const [form, setForm] = useState({
        tipo: "",
        motivo: "",
        valor: "",
        observacao: "",
        origem: ""
    })
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = () => {
        if (!form.tipo || !form.valor) return

        onSave({
            ...form,
            id: Date.now(),
            data: new Date().toISOString().split("T")[0],
            usuario: "Admin"
        })
        onClose()
    }
    if(!show) return null
    
    return(
        <div className="modal d-block bg-dark bg-opacity-50">
            <div className="modal-dialog">
                <div className="modal-content p-4">
                    <h5 className="mb-3">Nova Despesa</h5>
                    <select 
                        name="tipo"
                        className="form-select mb-2"
                        onChange={handleChange}
                    >
                        <option>Tipo de Despesa</option>
                        <option>Transporte</option>
                        <option>Alimentação</option>
                    </select>
                    <input 
                        name="valor"
                        className="form-control mb-2"
                        placeholder="Débito"
                        onChange={handleChange}
                    />
                    <textarea
                        name="observacao"
                        className="form-control mb-2"
                        placeholder="Observação"
                        onChange={handleChange}
                    />
                    <select 
                        name="origem"
                        className="form-select mb-3"
                        onChange={handleChange}
                    >
                        <option>Origem dos valores</option>
                        <option>Numerário</option>
                        <option>Banco</option>
                    </select>
                    <button 
                        className="btn btn-primary w-100"
                        onClick={handleSubmit}
                    >
                        Cadastrar
                    </button>
                    <button 
                        className="btn btn-secondary w-100 mt-2"
                        onClick={onClose}
                    >
                        Cancelar
                    </button>
                </div>
            </div>
        </div>
    )
}