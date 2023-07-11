import data from "../../data/data";
import './main.styles.css';

import Header from "../header/header.component";
import LineGraph from "../line-graph/line-graph.component";
import RateDoughnut from "../rate-donut/rate-doughnut.component";
import PipeBarChart from "../pipe-barchart/pipe-barchart.components";
import Progress from "../progress/progress.component";
import SimpleDoughnut from "../simple-doughnut/simple-doughnut.component";
import SemiPipeBarChart from "../semi-pipe-barchart/semi-pipe-barchart.components";

const Main = () => {

    const lineData = data.lineGraph;

    return (
        <div className='main'>
            <Header />
            <div className='insights-container'>
                <div className="first-row-container">
                    {
                        lineData.title.map(
                            (title, index) => {
                                return (
                                    <LineGraph
                                        title={title}
                                        net={lineData.net[index]}
                                        change={lineData.change_num[index]}
                                        changeRate={lineData.change_rate[index]}
                                        key={index} />
                                );
                            }
                        )
                    }
                </div>
                <div className="second-row-container">
                    <RateDoughnut />
                    <PipeBarChart />
                </div>
                <div className="third-row-container">
                    <Progress />
                    <SimpleDoughnut />
                    <SemiPipeBarChart />
                </div>
            </div>
        </div>
    )
}

export default Main;
