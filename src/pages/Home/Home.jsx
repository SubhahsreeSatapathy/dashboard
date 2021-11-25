import React from "react";
import Chart from "../../components/charts/Chart";
import FeaturedNews from "../../components/FeaturedNews/FeaturedNews";
import { userdata } from "../../dummydata";
import { useState, useEffect } from "react";
import { useLayoutEffect } from "react";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import "./Home.css";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import Footer from "../../components/Footer/Footer";
import axios from "axios";
const Home = () => {
  const [positive, setPositive] = useState();
  const [negative, setNegative] = useState();
  const [alldata, setData] = useState([]);
  useLayoutEffect(() => {
    axios.get("https://newerver.herokuapp.com/allNew").then((response) => {
      setData(response.data);
      console.log(alldata);
    });
    // const getNew = fetch("https://newerver.herokuapp.com/allNew");
    // getNew
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((data) => {
    //     setData(data);
    //     console.log(data);

    //     console.log("All data", alldata);
    //   });
    const positiveData = alldata.filter((item) => item.label === "POSITIVE");
    console.log("length of positive data", positiveData.length);
    setPositive(positiveData.length);
    const negativeData = alldata.filter((item) => item.label === "NEGATIVE");
    console.log("length of negative data", negativeData.length);
    setNegative(negativeData.length);
  }, []);
  return (
    <div className="home">
      <FeaturedNews positive={positive} negative={negative} />
      <Chart data={userdata} title=" " grid dataKey="Data" />
      <div className="homeWidgets">
        <WidgetLg alldata={alldata} />
        <WidgetSm />
      </div>
      <div className="homeFooter">
        <Footer alldata={alldata} />
      </div>
    </div>
  );
};

export default Home;
