import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import './rate-donut.styles.css';

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
    labels: ['Finished Training', 'Chapter A', 'Chapter B', 'Chapter C', "Haven't started yet"],
    datasets: [
        {
            data: [22, 20, 7, 22, 34],
            backgroundColor: [
                '#fff'
            ],
            hoverBackgroundColor: [
                '#0e62ff',
                '#c2c2c2',
                '#8400d5',
                '#425f57',
                '#ed1c25'
            ],
            borderColor: [
                '#ebebeb'
            ],
            borderWidth: 2,
        },
    ],
};

const bgColor = {
    0: '#0e62ff',
    1: '#c2c2c2',
    2: '#8400d5',
    3: '#425f57',
    4: '#ed1c25',
}

const options =
{
    responsive: true,
    plugins: {
        tooltip: {
            enabled: false,
        },
        legend: {
            display: true,
            position: 'bottom',
            align: 'left',
            color: '#333',
            labels: {
                generateLabels: function (chart) {
                    const data = chart.data;
                    if (data.labels.length && data.datasets.length) {
                        return data.labels.map((label, index) => {
                            const dataset = data.datasets[0];
                            const backgroundColor = bgColor[index];
                            const borderColor = dataset.borderColor[index % dataset.borderColor.length];

                            return {
                                text: label,
                                fillStyle: backgroundColor,
                                strokeStyle: borderColor,
                                lineWidth: dataset.borderWidth,
                                hidden: !chart.getDataVisibility(index),
                                index: index
                            };
                        });
                    }
                    return [];
                },
                font: {
                    size: 10,
                },
                padding: 20,
            },
        },
    },
    onHover: (event, arcElement, chart) => {
        const { ctx } = chart;
        // console.log(event);
        // console.log(arcElement);
        const index = arcElement[0] && arcElement[0].index;
        console.log(chart);
        // ctx.save();
        // ctx.shadowBlur = 10;
        // ctx.shadowColor = '#000';
        // ctx.fillText('Hi!', '2rem', '2rem')

        // !chart && ctx.restore();
    },
};

const textCenter = {
    id: 'textCenter',
    beforeDatasetsDraw(chart, args, options) {
        const { ctx } = chart;
        ctx.save();

        if (chart._active.length > 0) {
            const label = chart.config.data.labels[chart._active[0].index];
            ctx.font = '500 15px Inter';
            ctx.fillStyle = '#000';
            ctx.textAlign = 'center';
            ctx.fillText(label, chart.getDatasetMeta(0).data[0].x, chart.getDatasetMeta(0).data[0].y);
        }
        ctx.restore();
    }
}

const RateDonut = () => {
    return (
        <div className='rdn-container'>
            <h3>Chapter Wise Status</h3>
            <div className='rdn-chart'>
                <Doughnut data={data} options={options} plugins={[textCenter]} />
            </div>
        </div>
    );
}

export default RateDonut;