import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
} from 'chart.js';

import { Pie } from 'react-chartjs-2'

ChartJS.register(  ArcElement, Tooltip, Legend );

export default function PieChart({ labels, data }) {
    const chartData = {
        labels,
        datasets: [
            {
                data,
                backgroundColor: [
                    '#0d6efd',
                    '#dc3545',
                    '#ffc107',
                    '#198754',
                ],
            }
        ]
    }
    return <Pie data={chartData} />;
}