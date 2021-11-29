import React from "react";
import Chart from "../../components/charts/Chart";
import FeaturedNews from "../../components/FeaturedNews/FeaturedNews";
import { useState, useEffect, useLayoutEffect } from "react";
import { monthNames } from "../../constants";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import "./Home.css";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import Footer from "../../components/Footer/Footer";
import axios from "axios";
import Topbar from "../../components/Topbar/Topbar";
import Sidebar from "../../components/Sidebar/Sidebar";

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

  useEffect(() => {
    const filteredYearData = allData.filter((item) => {
      return parseInt(item.created_on.split("-")[0]) === getSelectedYear;
    });

    setFilterData(filteredYearData);
  }, [allData, getSelectedYear]);

  useEffect(() => {
    const filteredYearData = allData.filter((item) => {
      if (checkedMonthList[0] === 0) return true;
      return checkedMonthList.includes(parseInt(item.created_on.split("-")[1]));
    });
    setFilterData(filteredYearData);
  }, [allData, checkedMonthList]);

  console.log(charData);
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
      <Topbar />
      <div className="container">
        <Sidebar
          setSelectedYearData={setSelectedYear}
          checkedMonthList={checkedMonthList}
          setMonthCheckedList={setMonthCheckedList}
        />

        <div className="home">
          <FeaturedNews positive={positive} negative={negative} />
          <Chart
            data={charData}
            title=" "
            grid
            dataKey="Data"
            positive={positive}
            negative={negative}
          />
          <div className="homeWidgets">
            <WidgetLg filteredData={filteredData} />
            <WidgetSm />
          </div>
          <div className="homeFooter">
            <Footer alldata={filteredData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
