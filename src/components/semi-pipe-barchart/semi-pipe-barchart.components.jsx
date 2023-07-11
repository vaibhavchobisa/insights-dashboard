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

import './semi-pipe-barchart.styles.css';

const options = {
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
                // display: false,
            },
            border: {
                display: false
            },
            ticks: {
                stepSize: 40,
                // padding: 100,
                maxRotation: 0,
                // autoSkipPadding: 10,
            },
        },
    },
};

const labels = ['S', 'M', 'T', 'W', 'T', 'F', 'S', 'M', 'T', 'W'];
const values = [30, 60, 50, 60, 50, 70, 50, 30, 60, 50];

const data = {
    labels,
    datasets: [
        {
            data: values,
            backgroundColor: '#397eff',
            // barThickness: 20,
            grouped: false,
            categoryPercentage: 0.6,
            barPercentage: 0.6,
        },
        {
            data: values.map(num => num * 2),
            backgroundColor: '#e6efff',
            borderRadius: 100,
            categoryPercentage: 0.6,
            barPercentage: 0.6,
            // barThickness: 20,
        },
    ],
};

const SemiPipeBarChart = () => {
    return (
        <div className='spbc-container'>
            <h3 className='spbc-header'>daily training completions <span>Last 7 days</span></h3>
            <div className='spbc-chart'>
                <Bar options={options} data={data} />
            </div>
        </div>
    );
}

export default SemiPipeBarChart;