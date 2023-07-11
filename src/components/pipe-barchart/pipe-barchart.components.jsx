import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

import './pipe-barchart.styles.css';

export const options = {
    responsive: true,
    layout: {
        padding: {
            // left: 400
        }
    },
    plugins: {
        tooltip: {
            enabled: false,
        },
        legend: {
            display: false,
        },
        title: {
            display: false,
        },
    },
    scales: {
        x: {
            offset: true,
            grid: {
                display: false
            },
            border: {
                display: false
            },
            ticks: {
                // padding: 50,
                // categorySpacing: 0.8,
                maxRotation: 0,
                // autoSkipPadding: 80,
            },
        },
        y: {
            // offset: true,
            grid: {
                display: false,
            },
            border: {
                display: false
            },
            ticks: {
                stepSize: 100,
                // padding: 100,
                maxRotation: 0,
                // autoSkipPadding: 10,
            },
        },
    },
};

const labels = ['3 Jun', '4 Jun', '5 Jun', '6 Jun', '7 Jun', '8 Jun', '9 Jun', '10 Jun', '11 Jun', '12 Jun', '13 Jun', '14 Jun'];

export const data = {
    labels,
    datasets: [
        {
            data: [100, 120, 120, 240, 260, 200, 210, 100, 300, 350, 380, 400],
            backgroundColor: '#397eff',
            borderRadius: 100,
            borderSkipped: false,
            // barThickness: 20,
            grouped: false,
            categoryPercentage: 0.6,
            barPercentage: 0.6,
        },
        {
            data: [400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400],
            backgroundColor: '#e6efff',
            borderRadius: 100,
            borderSkipped: false,
            categoryPercentage: 0.6,
            barPercentage: 0.6,
            // barThickness: 20,
        },
    ],
};

const PipeBarChart = () => {
    return (
        <div className='pbc-container'>
            <h3 className='pbc-header'>Last 14 days active workers in training <span>Last 14 days</span></h3>
            <div className='pbc-chart'>
                <Bar options={options} data={data} />
            </div>
        </div>
    );
}

export default PipeBarChart;