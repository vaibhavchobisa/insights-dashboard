import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import "./rate-doughnut.styles.css";

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
    labels: [
        "Finished Training",
        "Chapter A",
        "Chapter B",
        "Chapter C",
        "Haven't Started Yet",
    ],
    datasets: [
        {
            data: [22, 20, 7, 22, 34],
            backgroundColor: ["#fff"],
            hoverBackgroundColor: [
                "#0e62ff",
                "#c2c2c2",
                "#8400d5",
                "#425f57",
                "#ed1c25",
            ],
            borderColor: ["#ebebeb"],
            borderWidth: 2,
        },
    ],
};

const bgColor = {
    0: "#0e62ff",
    1: "#c2c2c2",
    2: "#8400d5",
    3: "#425f57",
    4: "#ed1c25",
};

const options = {
    responsive: true,
    plugins: {
        tooltip: {
            enabled: false,
            backgroundColor: "#ffffff",
            opacity: 0.4,
            titleColor: "#000",
            xAlign: "right",
            external: function (context) {
                let tooltipEl = document.getElementById("chartjs-tooltip");

                if (!tooltipEl) {
                    tooltipEl = document.createElement("div");
                    tooltipEl.id = "chartjs-tooltip";
                    tooltipEl.innerHTML = "<table></table>";
                    document.body.appendChild(tooltipEl);
                }

                const tooltipModel = context.tooltip;
                if (tooltipModel.opacity === 0) {
                    tooltipEl.style.opacity = 0;
                    return;
                }

                tooltipEl.classList.remove("above", "below", "no-transform");

                function getBody(bodyItem) {
                    return `${bodyItem.lines}%`;
                }

                if (tooltipModel.body) {
                    const bodyLines = tooltipModel.body.map(getBody);
                    let innerHtml = "<thead>";
                    innerHtml += "</thead><tbody>";

                    bodyLines.forEach(function (body) {
                        let style = "background:" + "transparent";
                        style += "; color:" + "black";
                        style += "; border-width: 2px";
                        style += "; font-weight: bolder";
                        const span = '<span style="' + style + '">' + body + "</span>";
                        innerHtml += "<tr><td>" + span + "</td></tr>";
                    });
                    innerHtml += "</tbody>";

                    let tableRoot = tooltipEl.querySelector("table");
                    tableRoot.innerHTML = innerHtml;
                }

                const position = context.chart.canvas.getBoundingClientRect();

                tooltipEl.style.opacity = 1;
                tooltipEl.style.position = "absolute";

                tooltipEl.style.left =
                    position.left + window.scrollX + tooltipModel.caretX - 10 + "px";
                tooltipEl.style.top =
                    position.top + window.scrollY + tooltipModel.caretY - 10 + "px";

                tooltipEl.style.padding =
                    tooltipModel.padding + "px " + tooltipModel.padding + "px";
                tooltipEl.style.pointerEvents = "none";
            },
        },
        legend: {
            display: true,
            position: "bottom",
            color: "#333",
            align: "start",
            labels: {
                textAlign: 'center',
                usePointStyle: true,
                generateLabels: function (chart) {
                    const data = chart.data;
                    if (data.labels.length && data.datasets.length) {
                        return data.labels.map((label, index) => {
                            const dataset = data.datasets[0];
                            const backgroundColor = bgColor[index];
                            const borderColor =
                                dataset.borderColor[index % dataset.borderColor.length];

                            return {
                                text: label,
                                fillStyle: backgroundColor,
                                strokeStyle: borderColor,
                                lineWidth: dataset.borderWidth,
                                hidden: !chart.getDataVisibility(index),
                                index: index,
                            };
                        });
                    }
                    return [];
                },
                font: {
                    size: 10,
                },
                padding: 15,
            },
        },
    },
    // onHover: (event, arcElement, chart) => {
    //     console.log(event, arcElement);
    // },
};

const textCenter = {
    id: "textCenter",
    beforeDatasetsDraw(chart) {
        const { ctx } = chart;
        ctx.save();

        if (chart._active.length > 0) {
            const label = chart.config.data.labels[chart._active[0].index];
            ctx.font = "500 11px Inter";
            ctx.fillStyle = "#000";
            ctx.textAlign = "center";
            ctx.fillText(
                label,
                chart.getDatasetMeta(0).data[0].x,
                chart.getDatasetMeta(0).data[0].y
            );
        }
        ctx.restore();
    },
};

const RateDoughnut = () => {
    return (
        <div className="rdn-container">
            <h3 id="rdn-header">Chapter Wise Status</h3>
            <div className="rdn-chart">
                <Doughnut data={data} options={options} plugins={[textCenter]} />
            </div>
        </div>
    );
};

export default RateDoughnut;