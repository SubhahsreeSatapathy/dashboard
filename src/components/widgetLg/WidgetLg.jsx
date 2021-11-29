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

export default function WidgetLg({ filteredData }) {
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
          {filteredData.length !== 0 ? (
            filteredData.map((curr, index) => {
              return (
                <Card className="card" key={index}>
                  <Card.Img
                    variant="top"
                    className="image-card"
                    src={curr.news_image}
                  />
                  <Card.Body style={{ width: "200px", overflowY: "auto" }}>
                    <Card.Title>News Title</Card.Title>
                    <Card.Text>{curr.news_headline}</Card.Text>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                  </Card.Body>
                </Card>
              );
            })
          ) : (
            <h1>No Data Available</h1>
          )}
        </Slider>
      </div>
    </>
  );
}
