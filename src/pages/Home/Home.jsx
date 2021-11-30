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
  const [allData, setData] = useState([]);
  const [filteredData, setFilterData] = useState([]);
  const [getSelectedYear, setSelectedYear] = useState(2021);
  const [checkedMonthList, setMonthCheckedList] = useState([
    new Date().getMonth() + 1,
  ]);
  const [checkedCategoryList, setCheckedCategoryList] = useState([]);
  const [charData, setChartData] = useState([]);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios
      .get("https://newerver.herokuapp.com/allNew")
      .then((response) => {
        setData(response?.data);
        console.log("all data ", response);

        let positiveData =
          response?.data &&
          !!response?.data.length &&
          response?.data.filter((item) => item?.label === "POSITIVE");

        setPositive(positiveData?.length);

        let negativeData =
          response?.data &&
          !!response?.data.length &&
          response?.data.filter((item) => item?.label === "NEGATIVE");
        setNegative(negativeData?.length);

        const userData = [];
        const positiveList = [];
        positiveList.fill(0, 0, 11);
        const negativeList = [];
        negativeList.fill(0, 0, 11);
        let n_count = 0,
          p_count = 0;
        response?.data?.forEach((item) => {
          const getCurrMonthIndex = parseInt(item.created_on.split("-")[1]) - 1;
          if (item?.label === "POSITIVE") {
            p_count++;
            positiveList[getCurrMonthIndex] = p_count;
          } else {
            n_count++;
            negativeList[getCurrMonthIndex] = n_count;
          }
        });
        for (let i = 0; i < 12; i++) {
          userData.push({
            name: monthNames[i],
            positive: positiveList[i] ? positiveList[i] : 0,
            negative: negativeList[i] ? negativeList[i] : 0,
          });
        }
        setChartData(userData);
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

  useEffect(() => {
    const itemList = [];
    allData.forEach((item) => {
      const listItem = item?.entity[0];
      itemList.push(...Object.values(listItem));
    });
    setCategories([...new Set(itemList)]);
    // const filteredYearData = allData.filter((item) => {
    //   if (checkedCategoryList[0] === 'all') return true;
    //   return checkedCategoryList.some((r) => listItem.includes(r));
    // });
    // setFilterData(filteredYearData);
  }, [allData, checkedCategoryList]);

  return (
    <>
      <Topbar />
      <div className="container">
        <Sidebar
          setSelectedYearData={setSelectedYear}
          checkedMonthList={checkedMonthList}
          setMonthCheckedList={setMonthCheckedList}
          checkedCategoryList={checkedCategoryList}
          setCheckedCategoryList={setCheckedCategoryList}
          categories={categories}
          setCategories={setCategories}
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
    </>
  );
};

export default Home;
