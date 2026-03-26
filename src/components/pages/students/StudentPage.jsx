import { useState } from 'react'
import { student as data } from './mockStudent'
import StudentSearch from '../../Student/StudentSearch'
import StudentStats from '../../Student/StudentStats'
import StudentTable from '../../Student/StudentTable'

export default function StudentPage(){
    const [search, setSearch] = useState("")

    const filtered = data.filter(s =>
        s.name.toLowerCase().includes(search.toLowerCase())
    )
    return (
        <div className='container mt-4'>
            <h3 className='mb-3'>Dados gerais dos alunos</h3>
            <StudentSearch search={search} setSearch={setSearch} />
            <StudentStats student={filtered} />
            <StudentTable student={filtered} />
        </div>
    )
}