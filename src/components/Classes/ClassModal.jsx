import {useState, useEffect} from "react"
export default function ClassModal({ show, onClose, onSave, editing }) {


export default function ClassModal({ show, onClose, onSave, editing}){
    const [form, setForm] = useState({
        name: "",
        type: "Transição"
    })
    useEffect(() =>{
        if(editing){
            setForm(editing)
        }
    }, [editing])

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = () => {
        onSave(form)
        onClose()
    }

    if (!show) return null;

    return (
        <>
            {/* BACKDROP */}
            <div className="modal-backdrop fade show"></div>

            {/* MODAL */}
            <div className="modal fade show d-block">
                <div className="modal-dialog">
                    <div className="modal-content">

                        <div className="modal-header">
                            <h5>{editing ? "Editar Classe" : "Nova Classe"}</h5>
                            <button
                                className="btn-close"
                                onClick={onClose}
                            ></button>
                        </div>
                        <div className="modal-body">
                            <input 
                                className="form-control mb-3"
                                name="name"
                                placeholder="Nome da classe"
                                value={form.name}
                                onChange={handleChange}
                            />
                            <select 
                                className="form-select"
                                name="type"
                                value={form.type}
                                onChange={handleChange}
                            >
                                <option>Transição</option>
                                <option>Exame</option>
                            </select>
                        </div>

                        <div className="modal-footer">
                            <button
                                className="btn btn-secondary"
                                onClick={onClose}
                            >
                                Cancelar
                            </button>

                            <button
                                className="btn btn-primary"
                                onClick={handleSubmit}
                            >
                                Salvar
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}