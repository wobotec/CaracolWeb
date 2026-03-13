import { useState } from "react"

export default function StudentStep2({data, updateField, next, prev}) {
    
    const [loading, setLoading] = useState(false)

    async function searchCEP(cep) {
        setLoading(true)
        try {
            const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`)

            const result = await response.json()

            updateField("street", result.logradouro)
            updateField("city", result.localidade)
            updateField("state", result.uf)
        }
        finally {
            setLoading(false)
        }
    }
    return(
            <div className="row g-3">
                <div className="col-md-4">
                    <label >CEP</label>
                        <input className="form-control" onBlur={(e) => searchCEP(e.target.value)} />
                </div>
                <div className="col-md-6">
                    <label >Rua</label>
                        <input className="form-control"  />
                </div>
                <div className="col-md-4">
                    <label >Cidade</label>
                        <input className="form-control" />
                </div>
                <div className="col-md-2">
                    <label >Estado</label>
                        <input className="form-control" />
                </div>
                <div className="mt-4 d-flex justify-content-between">
                    <button className="btn btn-secondary" onClick={prev}>Anterior</button>
                    <button className="btn btn-primary" onClick={next} >Próximo</button>
                </div>
            </div>
    )
}   