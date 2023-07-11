import './line-graph.styles.css';

import { AiOutlineRise } from 'react-icons/ai';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

const options = {
    responsive: true,
    plugins: {
        legend: {
            display: false,
        },
        filler: {
            propagate: false
        }
    },

    maintainAspectRatio: false,
    scales: {
        x: {
            grid: {
                display: false
            },
            ticks: {
                font: {
                    size: 8,
                }
            }
        },
        y: {
            display: false,
        }
    },
    elements: {
        line: {
            tension: 0
        }
    },
    interaction: {
        intersect: true
    }
};

const labels = ["M", "T", "W", "T", "F", "S", "S"];

const dataRise = () => {
    return {
        labels,
        datasets: [{
            data: [0, 100, 60, 60, 110, 70, 0],
            pointStyle: false,
            fill: "start",
            backgroundColor: (context) => {
                const ctx = context.chart.ctx;
                const gradient = ctx.createLinearGradient(0, 0, 0, 200);
                gradient.addColorStop(0, "#018e42");
                gradient.addColorStop(0.65, "#fff");
                return gradient;
            },
            borderColor: "#fff"
        }]
    };
};

const dataFall = () => {
    return {
        labels,
        datasets: [{
            data: [0, 100, 60, 60, 110, 70, 0],
            pointStyle: false,
            fill: "start",
            backgroundColor: (context) => {
                const ctx = context.chart.ctx;
                const gradient = ctx.createLinearGradient(0, 0, 0, 200);
                gradient.addColorStop(0, "#ed222b");
                gradient.addColorStop(0.65, "#fff");
                return gradient;
            },
            borderColor: "#fff"
        }]
    };
};

const LineGraph = ({ title, net, change, changeRate }) => {
    return (
        <div className='line-container'>
            <h3>{title}</h3>
            <div className='line-data'>
                <div className='num-data'>
                    <p className='net'>{net}</p>
                    <div className='change-container'>
                        <span className='change-rate'>
                            <span className='change-per-icon'><AiOutlineRise /></span>&nbsp;{changeRate}%
                        </span>
                        <span>&nbsp;{change}</span>
                    </div>
                </div>
                <div className='line-graph'>
                    <Line options={options} data={parseInt(change) > 0 ? dataRise() : dataFall()} />
                </div>
            </div>
        </div>
    );
}

export default LineGraph;