import data from "../../data/data";
import './main.styles.css';

import Header from "../header/header.component";
import LineGraph from "../line-graph/line-graph.component";
import RateDonut from "../rate-donut/rate-donut.component";

const Main = () => {

    const lineData = data.lineGraph;

    return (
        <div className='main'>
            <Header />
            <div className='insights-container'>
                <div className="lg-container">
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
                <div>
                    <RateDonut />
                </div>
            </div>
        </div>
    )
}

export default Main;
