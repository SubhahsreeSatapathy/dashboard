import React from "react";
import Chart from "../../components/charts/Chart";
import FeaturedNews from "../../components/FeaturedNews/FeaturedNews";
import { userdata } from "../../dummydata";
import { useState } from "react";
import { useLayoutEffect } from "react";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import "./Home.css";
import WidgetLg from "../../components/widgetLg/WidgetLg";

const Home = () => {
  const [alldata, setData] = useState([]);
  useLayoutEffect(() => {
    const getNew = fetch("https://newerver.herokuapp.com/allNew");
    getNew
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setData(data);
        console.log(alldata);
      });
  }, []);
  return (
    <div className="home">
      <FeaturedNews />
      <Chart data={userdata} title=" " grid dataKey="Data" />
      <div className="homeWidgets">
        <WidgetLg />
        <WidgetSm />
      </div>
      <div className="homeFooter">home footer</div>
    </div>
  );
};

export default Home;
