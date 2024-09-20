import ("./home.scss")

import ChartBox from "../../components/chartBox/chartBox";
import TopBox from "../../components/topbox/topbox";

import { chartBoxUser } from "../../data/chartBoxUser";
import { chartBoxProduct } from "../../data/chartBoxProduct";
import { chartBoxConversion } from "../../data/chartBoxConversion";
import { chartBoxRevenue } from "../../data/chartBoxRevenue";

const Home = () => {
    return (
        <div className="home">
            <div className="box box1">
                <TopBox />
            </div>
            <div className="box box2">
                <ChartBox {...chartBoxUser} />
            </div>
            <div className="box box3">
                <ChartBox {...chartBoxProduct} />
            </div>
            <div className="box box4">
                
            </div>
            <div className="box box5">
                <ChartBox {...chartBoxConversion} />
            </div>
            <div className="box box6">
                <ChartBox {...chartBoxRevenue} />
            </div>
            <div className="box box7">
            </div>
            <div className="box box8"></div>
            <div className="box box9"></div>
        </div>
    )
}

export default Home;