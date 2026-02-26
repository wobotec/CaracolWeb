import { useState } from 'react'

export default function StudentStep3({updateField, prev}) {
    const [responsaveis, setResponsaveis] = useState([])

    function addResponsavel() {
        setResponsaveis(prev => [...prev, { name: "", phone: "" }])
    }

    return (
        <div>
            <div className="mb-3">
                <label>Foto</label>
                <input type="file" className="form-control" onChange={(e) => updateField("photo", e.target.files[0])} />
            </div>
            <div className="mb-3">
                <label>Documentos</label>
                <input type="file" multiple className="form-control" onChange={(e) => updateField("documents", e.target.files)}
                />
            </div>
            <hr />
            <h6>Responsáveis</h6>
            {responsaveis.map((r, index) => (
                <div key={index} className="row g-2 mb-2">
                    <div className="col-md-6">
                        <input className="form-control" placeholder="Nome" />
                    </div>
                    <div className="col-md-6">
                        <input className="form-control" placeholder="Telefone" />
                    </div>
                </div>
                ))}
                <button className="btn btn-outline-primary mb-3" onClick={addResponsavel}> + Adicionar Responsável</button>
                <div className="d-flex justify-content-between">
                    <button className="btn btn-secondary" onClick={prev}>Anterior</button>
                    <button className="btn btn-success">Finalizar cadastro</button>
                </div>
            </div>
    )
}