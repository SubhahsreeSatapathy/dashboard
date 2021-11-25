import React from "react";
import "./FeaturedNews.css";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@material-ui/core";

export default function FeaturedNews({ positive, negative }) {
  console.log(positive);
  return (
    <div className="featured">
      <div className="featuredItem">
        <Card
          style={{
            width: 200,
            backgroundColor: "#5ba5b0",
          }}
        >
          <CardContent>
            <Typography
              style={{ fontSize: 14 }}
              color="textSecondary"
              gutterBottom
            ></Typography>
            <Typography variant="h5" component="h2" style={{ color: "white" }}>
              Total
            </Typography>
            <Typography
              style={{
                marginBottom: 12,
                color: "white",
                marginLeft: "1px",
              }}
            >
              {positive + negative}
            </Typography>
            <Typography variant="body2" component="p"></Typography>
          </CardContent>
          <CardActions>
            <Button size="small" style={{ color: "white" }}>
              Learn More
            </Button>
          </CardActions>
        </Card>
      </div>
      <div className="featuredItem">
        <Card
          style={{
            width: 200,
            backgroundColor: "#e85b51",
          }}
        >
          <CardContent>
            <Typography
              style={{ fontSize: 14 }}
              color="textSecondary"
              gutterBottom
            ></Typography>
            <Typography variant="h5" component="h2" style={{ color: "white" }}>
              Negative
            </Typography>
            <Typography
              style={{
                marginBottom: 12,
                color: "white",
                marginLeft: "1px",
              }}
            >
              {negative}
            </Typography>
            <Typography variant="body2" component="p"></Typography>
          </CardContent>
          <CardActions>
            <Button size="small" style={{ color: "white" }}>
              Learn More
            </Button>
          </CardActions>
        </Card>
      </div>
      <div className="featuredItem">
        <Card
          style={{
            width: 200,
            backgroundColor: "#38a662",
          }}
        >
          <CardContent>
            <Typography
              style={{ fontSize: 14 }}
              color="textSecondary"
              gutterBottom
            ></Typography>
            <Typography variant="h5" component="h2" style={{ color: "white" }}>
              Positive
            </Typography>
            <Typography
              style={{
                marginBottom: 12,
                color: "white",
                marginLeft: "1px",
              }}
            >
              {positive}
            </Typography>
            <Typography variant="body2" component="p"></Typography>
          </CardContent>
          <CardActions>
            <Button size="small" style={{ color: "white" }}>
              Learn More
            </Button>
          </CardActions>
        </Card>
      </div>
      <div className="featuredItem">
        <Card
          style={{
            width: 200,
            backgroundColor: "#f79448",
          }}
        >
          <CardContent>
            <Typography
              style={{ fontSize: 14 }}
              color="textSecondary"
              gutterBottom
            ></Typography>
            <Typography variant="h5" component="h2" style={{ color: "white" }}>
              Current
            </Typography>
            <Typography
              style={{
                marginBottom: 12,
                color: "white",
                marginLeft: "1px",
              }}
            >
              2000+
            </Typography>
            <Typography variant="body2" component="p"></Typography>
          </CardContent>
          <CardActions>
            <Button size="small" style={{ color: "white" }}>
              Learn More
            </Button>
          </CardActions>
        </Card>
      </div>
    </div>
  );
}
