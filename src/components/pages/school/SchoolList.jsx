import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function SchoolList( ) {
    
    const [schools] = useState([
        { id: 1, name: 'Colégio A', owner: 'João Silva', province: 'Luanda' },
        { id: 2, name: 'Escola B', owner: 'Maria Santos', province: 'Benguela' },
        { id: 3, name: 'Escola C', owner: 'Carlos Oliveira', province: 'Namibe' } 
    ])

    return (
        <div className="card shadow-sm">
            <div className='card-body'>
                <div className="d-flex justify-content -between mb-3">
                    <h5 >Escolas</h5>
                    <Link to="/schools/create" className="btn btn-primary">Adicionar/Nova Escola</Link>
                </div>
                <div className='table-responsive'>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Proprietário</th>
                                <th>Província</th>
                                <th>Acções</th>
                            </tr>
                        </thead>
                        <tbody>
                            {schools.map(school => (
                                <tr key={school.id}>
                                    <td>{school.name}</td>
                                    <td>{school.owner}</td>
                                    <td>{school.province}</td>
                                    <td>
                                        <Link  className="btn btn-sm btn-info me-2">Ver</Link>
                                        <Link className='btn btn-sm btn-warning me-2'>Editar</Link>
                                        <button className="btn btn-sm btn-danger">Eliminar</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                </div>
            </div>
        </div>
    )
}