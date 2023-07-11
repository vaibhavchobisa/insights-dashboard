import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

import './simple-doughnut.styles.css';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
    labels: ['Passed', 'Failed'],
    datasets: [
        {
            label: 'No of Workers',
            data: [1423, 134],
            backgroundColor: [
                '#008e41',
                '#ed1c25'
            ],
            borderColor: [
                '#008e41',
                '#ed1c25'
            ],
            borderWidth: 1,
            cutout: 70,
        },
    ],
};

const options = {
    responsive: true,
    plugins: {
        tooltip: {
            enabled: true,
        },
        legend: {
            display: true,
            position: "right",
            color: "#000",
            align: "start",
            labels: {
                textAlign: 'center',
                usePointStyle: true,
                font: {
                    size: 12,
                    weight: 'bolder'
                },
                padding: 15,
            },
        },
    },
};

const SimpleDoughnut = () => {
    return (
        <div className='sdn-container'>
            <h3 id='sdn-header'>Quiz passing %</h3>
            <div className='sdn-chart'>
                <Doughnut data={data} options={options} />
            </div>
        </div>
    );
}

export default SimpleDoughnut;