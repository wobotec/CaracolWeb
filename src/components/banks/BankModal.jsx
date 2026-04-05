import { useState } from 'react'

export default function BankModal({ show, onClose, onSave }){
    const [ form, setForm] = useState({
        beneficiario: "",
        numero: "",
        banco: "",
        iban: ""
    })
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = () => {
        if(!form.beneficiario || !form.numero) return

        onSave({
            ...form,
            id: Date.now(),
            estado: "Activo"
        })
        onClose()
    }
    if(!show) return null

    return (
        <div className='modal d-block bg-dark bg-opacity-50'>
            <div className='modal-dialog modal-lg'>
                <div className='modal-content p-4'>
                    <div className='d-flex justify-content-between mb-3'>
                        <h5>Cadastrar Banco</h5>
                        <button className='btn-close' onClick={onClose}></button>
                    </div>
                    <div className='row'>
                        <div className='col-md-6 mb-3'>
                            <label className='form-label'>Beneficiário</label>
                            <input 
                                name='beneficiario'
                                className='form-control'
                                onChange={handleChange}
                            />
                        </div>
                        <div className='col-md-6 mb-3'>
                            <label className='form-label'> Número da Conta </label>
                            <input
                                name="numero"
                                className='form-control'
                                onChange={handleChange}
                            />
                        </div>
                        <div className='col-md-6 md-3'>
                            <label className='form-label'>Banco</label>
                            <input 
                                name="banco"
                                className='form-control'
                                onChange={handleChange}
                            />
                        </div>
                        <div className='col-md-6 md-3'>
                            <label className='form-label'>IBAN</label>
                            <input
                                name='iban'
                                className='form-control'
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <button
                        className='btn btn-primary w-100 mt-2'
                        onClick={handleSubmit}
                    >
                        Cadastrar
                    </button>
                </div>
            </div>
        </div>
    )
}