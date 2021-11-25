import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./WidgetLg.css";
import { Card, Button } from "react-bootstrap";
// import {cardImg} from "../../assets/cardImg.svg";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "grey" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "grey" }}
      onClick={onClick}
    />
  );
}

export default function WidgetLg({ alldata }) {
  console.log(alldata);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <>
      <div className="widgetLg">
        <Slider {...settings} style={{ marginRight: "20px" }}>
          {alldata &&
            alldata.map((curr, index) => {
              return (
                <>
                  <Card style={{ width: "30", height: "350px" }} key={index}>
                    <Card.Img variant="top" src={curr.news_image} />
                    <Card.Body style={{ width: "200px" }}>
                      <Card.Title>News Title</Card.Title>
                      <Card.Text>{curr.news_headline}</Card.Text>
                      {/* <Button variant="primary">Go somewhere</Button> */}
                    </Card.Body>
                  </Card>
                </>
              );
            })}
        </Slider>
      </div>
    </>
  );
}
