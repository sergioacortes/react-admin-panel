import ("./home.scss")

import ChartBox from "../../components/chartBox/chartBox";
import TopBox from "../../components/topbox/topbox";

import { chartBoxUser } from "../../data/chartBoxUser";
import { chartBoxProduct } from "../../data/chartBoxProduct";
import { chartBoxConversion } from "../../data/chartBoxConversion";
import { chartBoxRevenue } from "../../data/chartBoxRevenue";
import BarChartBox from "../../components/barChartBox/barChartBox";

import { barChartBoxRevenue } from "../../data/barChartBoxRevenue";
import { barChartBoxVisit } from "../../data/barChartBoxVisit";

import PieChartBox from "../../components/pieChartBox/pieChartBox";
import BigChartBox from "../../components/bigChartBox/bigChartBox";

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
                <PieChartBox />
            </div>
            <div className="box box5">
                <ChartBox {...chartBoxConversion} />
            </div>
            <div className="box box6">
                <ChartBox {...chartBoxRevenue} />
            </div>
            <div className="box box7">
                <BigChartBox />
            </div>
            <div className="box box8">
                <BarChartBox {...barChartBoxVisit} />
            </div>
            <div className="box box9">
                <BarChartBox {...barChartBoxRevenue} />
            </div>
        </div>
    )
}

export default Home;