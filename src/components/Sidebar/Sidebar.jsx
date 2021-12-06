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
import { AddBox, IndeterminateCheckBox } from "@material-ui/icons";

export default function Sidebar({
  setSelectedYearData,
  checkedMonthList,
  setMonthCheckedList,
  checkedCategoryList,
  setCheckedCategoryList,
  categories,

  setCategories,
  setCompany,
}) {
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
  const [categoryCollapse, setCategoryCollapse] = useState(true);
  const [monthCollapse, setMonthCollapse] = useState(true);
  const [yearCollapse, setYearCollapse] = useState(true);
  const [companyCollapse, setCompanyCollapse] = useState(true);
  const [technologyCollapse, setTechnologyCollapse] = useState(true);
  const [partnerCollapse, setPartnerCollapse] = useState(true);
  const [selectedYear, setSelectedYear] = useState(2021);
  const [checkedMonth, setMonthChecked] = useState(new Date().getMonth() + 1);
  const [checkedCategory, setCheckedCategory] = useState("");
  const [companyList, setCompanyList] = useState([
    "Tech Mahindra",
    "Infosys",
    "Accenture",
    "Wipro",
    "TCS",
    "Infy",
  ]);
  const [technology, setTechnology] = useState(["Blockchain", "AI"]);
  const [partners, setPartners] = useState([
    "AWS",
    "Google",
    "IBM",
    "Microsoft",
  ]);
  const [yearList, setYearList] = useState(
    Array(new Date().getFullYear() - 2016 + 1)
      .fill()
      .map((_, idx) => 2016 + idx)
      .reverse()
  );
  const handleCategory = (e) => {
    const { value } = e.target;
    setCheckedCategory(value);
    setCompany(value);
    if (value === "all") {
      setCheckedCategoryList([value]);
      return;
    }
    if (checkedCategoryList.includes(value)) {
      let filteredArray = checkedCategoryList.filter((item) => item !== value);
      setCheckedCategoryList(filteredArray);
      return;
    }
    setCheckedCategory(value);
    setCheckedCategoryList([...checkedCategoryList, e.target.value]);
  };
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
          <div
            className={
              "collapse-header category-header  categoryCollapse " +
              (yearCollapse ? "active" : "inactive")
            }
          >
            <h3 className="sidebarTitle">Year</h3>
            {yearCollapse ? (
              <AddBox
                className="collapse-indicator"
                onClick={() => {
                  setYearCollapse(!yearCollapse);
                }}
              />
            ) : (
              <IndeterminateCheckBox
                className="collapse-indicator"
                onClick={() => {
                  setYearCollapse(!yearCollapse);
                }}
              />
            )}
          </div>
          <ul className="sidebarList category-sidebar">
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
          <div
            className={
              "collapse-header category-header  categoryCollapse " +
              (monthCollapse ? "active" : "inactive")
            }
          >
            <h3 className="sidebarTitle">Month</h3>
            {monthCollapse ? (
              <AddBox
                className="collapse-indicator"
                onClick={() => {
                  setMonthCollapse(!monthCollapse);
                }}
              />
            ) : (
              <IndeterminateCheckBox
                className="collapse-indicator"
                onClick={() => {
                  setMonthCollapse(!monthCollapse);
                }}
              />
            )}
          </div>
          <ul className="sidebarList category-sidebar">
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
          <div
            className={
              "collapse-header category-header  categoryCollapse " +
              (categoryCollapse ? "active" : "inactive")
            }
          >
            <h3 className="sidebarTitle">Entity</h3>
            {categoryCollapse ? (
              <AddBox
                className="collapse-indicator"
                onClick={() => {
                  setCategoryCollapse(!categoryCollapse);
                }}
              />
            ) : (
              <IndeterminateCheckBox
                className="collapse-indicator"
                onClick={() => {
                  setCategoryCollapse(!categoryCollapse);
                }}
              />
            )}
          </div>
          <ul className="sidebarList category-sidebar">
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    value={"all"}
                    checked={checkedCategory === "all"}
                    onChange={handleCategory}
                    style={{
                      color: "#000",
                    }}
                  />
                }
                label="Select all"
              />
              {categories.map((item, index) => {
                return (
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={
                          checkedCategory === "all"
                            ? true
                            : checkedCategoryList.includes(item)
                        }
                        value={item}
                        onChange={handleCategory}
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
          <div
            className={
              "collapse-header category-header  categoryCollapse " +
              (companyCollapse ? "active" : "inactive")
            }
          >
            <h3 className="sidebarTitle">Company</h3>
            {companyCollapse ? (
              <AddBox
                className="collapse-indicator"
                onClick={() => {
                  setCompanyCollapse(!companyCollapse);
                }}
              />
            ) : (
              <IndeterminateCheckBox
                className="collapse-indicator"
                onClick={() => {
                  setCompanyCollapse(!companyCollapse);
                }}
              />
            )}
          </div>
          <ul className="sidebarList category-sidebar">
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    value={"all"}
                    checked={checkedCategory === "all"}
                    onChange={handleCategory}
                    style={{
                      color: "#000",
                    }}
                  />
                }
                label="Select all"
              />
              {companyList.map((item, index) => {
                return (
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={
                          checkedCategory === "all"
                            ? true
                            : checkedCategoryList.includes(item)
                        }
                        value={item}
                        onChange={handleCategory}
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
          <div
            className={
              "collapse-header category-header  categoryCollapse " +
              (technologyCollapse ? "active" : "inactive")
            }
          >
            <h3 className="sidebarTitle">Technology</h3>
            {technologyCollapse ? (
              <AddBox
                className="collapse-indicator"
                onClick={() => {
                  setTechnologyCollapse(!technologyCollapse);
                }}
              />
            ) : (
              <IndeterminateCheckBox
                className="collapse-indicator"
                onClick={() => {
                  setTechnologyCollapse(!technologyCollapse);
                }}
              />
            )}
          </div>
          <ul className="sidebarList category-sidebar">
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    value={"all"}
                    checked={checkedCategory === "all"}
                    onChange={handleCategory}
                    style={{
                      color: "#000",
                    }}
                  />
                }
                label="Select all"
              />
              {technology.map((item, index) => {
                return (
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={
                          checkedCategory === "all"
                            ? true
                            : checkedCategoryList.includes(item)
                        }
                        value={item}
                        onChange={handleCategory}
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
          <div
            className={
              "collapse-header category-header  categoryCollapse " +
              (partnerCollapse ? "active" : "inactive")
            }
          >
            <h3 className="sidebarTitle">Partners</h3>
            {partnerCollapse ? (
              <AddBox
                className="collapse-indicator"
                onClick={() => {
                  setPartnerCollapse(!partnerCollapse);
                }}
              />
            ) : (
              <IndeterminateCheckBox
                className="collapse-indicator"
                onClick={() => {
                  setPartnerCollapse(!partnerCollapse);
                }}
              />
            )}
          </div>
          <ul className="sidebarList category-sidebar">
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    value={"all"}
                    checked={checkedCategory === "all"}
                    onChange={handleCategory}
                    style={{
                      color: "#000",
                    }}
                  />
                }
                label="Select all"
              />
              {partners.map((item, index) => {
                return (
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={
                          checkedCategory === "all"
                            ? true
                            : checkedCategoryList.includes(item)
                        }
                        value={item}
                        onChange={handleCategory}
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
      </div>
    </div>
  );
}
