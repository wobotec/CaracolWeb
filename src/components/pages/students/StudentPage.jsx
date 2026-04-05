import { useState } from 'react'
import { student as data } from './mockStudent'
import StudentSearch from '../../Student/StudentSearch'
import StudentStats from '../../Student/StudentStats'
import StudentTable from '../../Student/StudentTable'
import PageBase from '../../Layout/PageBase/PageBase'

export default function StudentPage() {
    const [search, setSearch] = useState("")

    const filtered = data.filter(s =>
        s.name.toLowerCase().includes(search.toLowerCase())
    )
    return (
        <PageBase title="Dados geral" subtitle="Dos alunos">
            <StudentSearch search={search} setSearch={setSearch} />
            <StudentStats student={filtered} />
            <StudentTable student={filtered} />
        </PageBase>
    )
}