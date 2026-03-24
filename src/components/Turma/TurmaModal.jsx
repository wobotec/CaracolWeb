import {useState, useEffect} from "react"

export default function TurmaModal({ onClose, show }) {

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
                            <h5>Nova Turma</h5>
                            <button
                                className="btn-close"
                                onClick={onClose}
                            ></button>
                        </div>

                        <form onSubmit={(e) => {
                            e.preventDefault();
                        }}>

                        <div className="modal-body">
                            <input 
                                className="form-control mb-3"
                                name="name"
                                placeholder="Turma"
                            />
                            <input 
                                className="form-control mb-3"
                                name="periodo"
                                placeholder="Periodo"
                            />
                            <input 
                                className="form-control mb-3"
                                name="Lotacao"
                                placeholder="Lotacao"
                            />
                            <input 
                                className="form-control mb-3"
                                name="sala"
                                placeholder="Sala"
                            />
                        </div>

                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    onClick={onClose}
                                >
                                    Cancelar
                                </button>

                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                >
                                    Salvar
                                </button>
                            </div>

                        </form>

                    </div>
                </div>
            </div>
        </>
    );
}