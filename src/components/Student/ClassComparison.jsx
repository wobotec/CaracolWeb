import { Bar } from "react-chartjs-2"

import {
    Chart as chartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Tooltip,
    Legend
} from "chart.js"

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Tooltip,
    Legend
)

export default function ClassComparison({ periods }) {
    
    const labels = periods.map(p => `${p.year}-${p.semester}`)

    const studentAvg = periods.map(p => p.average)
    const classAvg = periods.map(p => p.classAverage)

    const data = {
        labels,
        datasets: [
            {
                label: 'Aluno',
                data: studentAvg,
                backgroundColor: '#0d6efd'
            },
            {
                label: 'Turma',
                data: classAvg,
                backgroundColor: '#198754'
            }
        ]
    }

    return (
        <div className="mb-4">
            <h6>Comparativo com Média da Turma</h6>
            <Bar data={data} />
        </div>
    )
}