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
  const [positive, setPositive] = useState(0);
  const [negative, setNegative] = useState(0);
  const [alldata, setData] = useState([]);
  useLayoutEffect(() => {
    axios
      .get("https://newerver.herokuapp.com/allNew")
      .then((response) => {
        setData(response?.data);
        let positiveData =
          response?.data &&
          !!response?.data.length &&
          response?.data.filter((item) => item?.label === "POSITIVE");
        setPositive(positiveData?.length);
        console.log("length of +ve", positiveData?.length);
        let negativeData =
          response?.data &&
          !!response?.data.length &&
          response?.data.filter((item) => item?.label === "NEGATIVE");
        setNegative(negativeData?.length);
      })
      .catch((error) => console.log(error.response));
  }, []);
  return (
    <div className="home">
      {console.log(positive)}
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
