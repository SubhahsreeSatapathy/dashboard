import React from "react";
import "./Sidebar.css";

import { Checkbox, FormControl, FormControlLabel, FormGroup, Radio, RadioGroup } from "@material-ui/core";


export default function Sidebar() {
  
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Year</h3>
          <ul className="sidebarList">
            <FormControl component="fieldset">
              <RadioGroup
                aria-label="gender"
                defaultValue="female"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value="2016"
                  control={
                    <Radio
                      style={{
                        color: "#000",
                      }}
                    />
                  }
                  label="2016"
                />
                <FormControlLabel
                  value="2017"
                  control={
                    <Radio
                      style={{
                        color: "#000",
                      }}
                    />
                  }
                  label="2017"
                />
                <FormControlLabel
                  value="2018"
                  control={
                    <Radio
                      style={{
                        color: "#000",
                      }}
                    />
                  }
                  label="2018"
                />
                <FormControlLabel
                  value="2019"
                  control={
                    <Radio
                      style={{
                        color: "#000",
                      }}
                    />
                  }
                  label="2019"
                />
                <FormControlLabel
                  value="2020"
                  control={
                    <Radio
                      style={{
                        color: "#000",
                      }}
                    />
                  }
                  label="2020"
                />
                <FormControlLabel
                  value="2021"
                  control={
                    <Radio
                      style={{
                        color: "#000",
                      }}
                    />
                  }
                  label="2021"
                />
              </RadioGroup>
            </FormControl>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Month</h3>
          <ul className="sidebarList">
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    style={{
                      color: "#000",
                    }}
                  />
                }
                label="Select all"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    style={{
                      color: "#000",
                    }}
                  />
                }
                label="January"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    style={{
                      color: "#000",
                    }}
                  />
                }
                label="February"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    style={{
                      color: "#000",
                    }}
                  />
                }
                label="March"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    style={{
                      color: "#000",
                    }}
                  />
                }
                label="April"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    style={{
                      color: "#000",
                    }}
                  />
                }
                label="May"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    style={{
                      color: "#000",
                    }}
                  />
                }
                label="June"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    style={{
                      color: "#000",
                    }}
                  />
                }
                label="July"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    style={{
                      color: "#000",
                    }}
                  />
                }
                label="August"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    style={{
                      color: "#000",
                    }}
                  />
                }
                label="September"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    style={{
                      color: "#000",
                    }}
                  />
                }
                label="November"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    style={{
                      color: "#000",
                    }}
                  />
                }
                label="December"
              />
            </FormGroup>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Category</h3>
          <ul className="sidebarList">
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    style={{
                      color: "#000",
                    }}
                  />
                }
                label="Select all"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    style={{
                      color: "#000",
                    }}
                  />
                }
                label="Categories"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    style={{
                      color: "#000",
                    }}
                  />
                }
                label="Categories"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    style={{
                      color: "#000",
                    }}
                  />
                }
                label="Categories"
              />
            </FormGroup>
          </ul>
        </div>
      </div>
    </div>
  );
}
