import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./WidgetLg.css";
import { Card,Button } from "react-bootstrap";
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


export default function WidgetLg() {
  const settings = {
    dots: true,
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
        <Slider {...settings} style={{marginRight:"20px"}}>
          <Card style={{ width: "30" }}>
            {/* <Card.Img variant="top" src={{cardImg}} /> */}
            <Card.Body style={{ width: "200px" }}>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            </Card>
         
          <Card style={{ width: "30" }}>
            {/* <Card.Img variant="top" src={{cardImg}} /> */}
            <Card.Body style={{ width: "200px" }}>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            </Card>
         
          <Card style={{ width: "30" }}>
            {/* <Card.Img variant="top" src={{cardImg}} /> */}
            <Card.Body style={{ width: "200px" }}>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            </Card>
         
          <Card style={{ width: "30" }}>
            {/* <Card.Img variant="top" src={{cardImg}} /> */}
            <Card.Body style={{ width: "200px" }}>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            </Card>
         
          <Card style={{ width: "30" }}>
            {/* <Card.Img variant="top" src={{cardImg}} /> */}
            <Card.Body style={{ width: "200px" }}>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            </Card>
         
          <Card style={{ width: "30" }}>
            {/* <Card.Img variant="top" src={{cardImg}} /> */}
            <Card.Body style={{ width: "200px" }}>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            </Card>
         
          <Card style={{ width: "30" }}>
            {/* <Card.Img variant="top" src={{cardImg}} /> */}
            <Card.Body style={{ width: "200px" }}>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            </Card>
         
          <Card style={{ width: "30" }}>
            {/* <Card.Img variant="top" src={{cardImg}} /> */}
            <Card.Body style={{ width: "200px" }}>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            </Card>
         
         
        </Slider>
      </div>
    </>
  );
}
