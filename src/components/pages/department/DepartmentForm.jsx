import { useState } from 'react';

export default function DepartmentForm({ show, onClose, onSave }) {
    const [form, setForm] = useState({
        name: '',
        cabecalho: '',
        directorPedagogico: '',
        directorGeneral: ''
    });
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };
    const handleSubmit = () => {
        if(!form.name){
            alert("Nome do departamento é obrigatório!");
            return;
        }
        onSave(form);
        setForm({
            name: '',
            cabecalho: '',
            directorPedagogico: '',
            directorGeneral: ''
        });
        onClose();
    };
    if(!show) return null;
    return (
        <div className="modal fade show d-block" tabIndex="-1">
            <div className="modal-dialog modal-lg">
                <div className="modal-content">
                    <div className='modal-header'>
                        <h5 className='modal-title'>Cadastrar Departamento</h5>
                        <button className="btn-close" onClick={onClose}></button>
                    </div>
                    <div className='modal-body'>
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <label className='form-label'>Nome do Departamento</label>    
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Nome do Departamento"
                                    className="form-control"
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label className='form-label'>Cabeçalho</label>
                                <input
                                    type="text"
                                    name="cabecalho"
                                    placeholder="Cabeçalho"
                                    className="form-control"
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label className='form-label'>Diretor Pedagógico</label>
                                <input
                                    type="text"
                                    name="directorPedagogico"
                                    placeholder="Dr. Pedagógico"
                                    className="form-control"
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label className='form-label'>Diretor Geral</label>
                                <input
                                    type="text"
                                    name="directorGeneral"
                                    placeholder="Dr. Geral"
                                    className="form-control"
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                    </div>
                    <div className='modal-footer'>
                        <button className='btn btn-secondary' onClick={onClose}>Cancelar</button>
                        <button className='btn btn-primary' onClick={handleSubmit}>Salvar</button>
                    </div>               
                </div>
            </div>
        </div>
    );
}