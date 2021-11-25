import React from 'react';
import Chart from '../../components/charts/Chart';
import FeaturedNews from '../../components/FeaturedNews/FeaturedNews';
import { userdata } from '../../dummydata';
import { useState, useEffect, useLayoutEffect } from 'react';
import WidgetSm from '../../components/widgetSm/WidgetSm';
import './Home.css';
import WidgetLg from '../../components/widgetLg/WidgetLg';
import Footer from '../../components/Footer/Footer';
import axios from 'axios';
const Home = () => {
  const [positive, setPositive] = useState(0);
  const [negative, setNegative] = useState(0);
  const [alldata, setData] = useState([]);
  useEffect(() => {
    axios
      .get('https://newerver.herokuapp.com/allNew')
      .then((response) => {
        setData(response?.data);
        console.log('all data ', response);

        let positiveData =
          response?.data &&
          !!response?.data.length &&
          response?.data.filter((item) => item?.label === 'POSITIVE');

        console.log('length of positive data', positiveData);
        setPositive(positiveData?.length);

        let negativeData =
          response?.data &&
          !!response?.data.length &&
          response?.data.filter((item) => item?.label === 'NEGATIVE');
        console.log('length of negative data', negativeData);
        setNegative(negativeData?.length);
      })
      .catch((error) => console.log(error.response));
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
  }, []);

  return (
    <div className='home'>
      <FeaturedNews positive={positive} negative={negative} />
      <Chart data={userdata} title=' ' grid dataKey='Data' />
      <div className='homeWidgets'>
        <WidgetLg alldata={alldata} />
        <WidgetSm />
      </div>
      <div className='homeFooter'>
        <Footer alldata={alldata} />
      </div>
    </div>
  );
};

export default Home;
