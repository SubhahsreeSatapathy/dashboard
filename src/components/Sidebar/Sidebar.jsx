import React, { useState } from "react";
import "./Sidebar.css";

import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  Radio,
  RadioGroup,
} from "@material-ui/core";

export default function Sidebar({
  setSelectedYearData,
  checkedMonthList,
  setMonthCheckedList,
}) {
  const [categories,setCategories]=useState(["Tech Mahindra","Infosys","Accenture","Wipro","TCS","Infy"]);
  const [monthList, setAllMonths] = useState([
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]);
  const [dataList, setDataList] = useState([]);
  const [selectedYear, setSelectedYear] = useState(2021);
  // const [checkedMonthList, setMonthCheckedList] = useState([]);
  const [checkedMonth, setMonthChecked] = useState(new Date().getMonth() + 1);
  const [yearList, setYearList] = useState(
    Array(new Date().getFullYear() - 2016 + 1)
      .fill()
      .map((_, idx) => 2016 + idx)
      .reverse()
  );
  const handleCheckBoxMonth = (e) => {
    if (parseInt(e.target.value) === 0) {
      setMonthChecked(parseInt(e.target.value));
      setMonthCheckedList([0]);
      return;
    }
    if (checkedMonthList.includes(parseInt(e.target.value))) {
      let filteredArray = checkedMonthList.filter(
        (item) => item !== parseInt(e.target.value)
      );
      setMonthCheckedList(filteredArray);
      return;
    }
    setMonthChecked(parseInt(e.target.value));
    setMonthCheckedList([
      ...new Set([...checkedMonthList, parseInt(e.target.value)]),
    ]);
    // setMonthCheckedListData([...checkedMonthList]);
  };
  const handleRadioYear = (e) => {
    setSelectedYear(parseInt(e.target.value));
    setSelectedYearData(parseInt(e.target.value));
  };
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
                onChange={handleRadioYear}
                value={selectedYear}
              >
                {yearList.map((item, index) => {
                  return (
                    <FormControlLabel
                      value={item}
                      control={
                        <Radio
                          style={{
                            color: "#000",
                          }}
                        />
                      }
                      label={item}
                    />
                  );
                })}
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
                    onChange={handleCheckBoxMonth}
                    value="0"
                    checked={checkedMonth === 0}
                    style={{
                      color: "#000",
                    }}
                  />
                }
                label="Select all"
              />
              {monthList.map((item, index) => {
                return (
                  <FormControlLabel
                    key={index}
                    control={
                      <Checkbox
                        checked={
                          checkedMonth === 0
                            ? true
                            : checkedMonthList.includes(index + 1)
                        }
                        value={index + 1}
                        onChange={handleCheckBoxMonth}
                        style={{
                          color: "#000",
                        }}
                      />
                    }
                    label={item}
                  />
                );
              })}
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
               {categories.map((item, index) => {
                return(
              <FormControlLabel
                control={
                  <Checkbox
                    style={{
                      color: "#000",
                    }}
                  />
                }
                label={item}
              />)})}
            </FormGroup>
          </ul>
        </div>
      </div>
    </div>
  );
}
