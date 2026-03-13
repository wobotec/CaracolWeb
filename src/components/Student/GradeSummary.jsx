import { line } from "react-chartjs-2"
import { 
    Chart as ChartJS, 
    CategoryScale, 
    LinearScale, 
    PointElement, 
    LineElement, 
    Tooltip, 
    Legend } from "chart.js"

    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Tooltip,
        Legend
    )

    export default function GradeSummary({ periods }) {
        const labels = periods.map(p => `${p.year} - ${p.semester}`)
        const averages = periods.map(p => p.average)

        const data = {
            labels,
            datasets: [
                {
                    label: 'Média Geral',
                    data: averages,
                    borderColor: '#0d6efd',
                    backgroundColor: 'rgba(13, 110, 253, 0.2)',
                    tension: 0.4
                }
            ]
        }

        const overalAverage = averages.reduce((a, b) => a + b, 0) / averages.length
        
        return (
            <div className="mb-4">
                <h6>Média Geral</h6>
                <h4 className="fw-bold text-primary">{overalAverage.toFixed(1)}</h4>
                <line data={data} />
            </div>
        )
    }   