import * as React from "react";
import paginationFactory from "react-bootstrap-table2-paginator";
import BootstrapTable from "react-bootstrap-table-next";

const Footer = ({ alldata }) => {
  const myFormatter = (cell, row) => {
    if (row.entity[0]) {
      console.log(row);
      return Object.keys(row.entity[0]);
    }
  };
  const columns = [
    { dataField: "news_headline", text: "Headline" },
    { dataField: "label", text: "Sentiment" },
    {
      dataField: "entity[0]",
      text: "entity",
      formatter: (cell, row) => " " + Object.keys(row.entity[0]),
    },
    {
      dataField: "entity[0]",
      text: "entity-type",
      formatter: (cell, row) => " " + Object.values(row.entity[0]),
    },
  ];
  return (
    <>
      <div>
        <BootstrapTable
          keyField="news_headline"
          data={alldata}
          columns={columns}
          pagination={paginationFactory()}
        />
      </div>
    </>
  );
};

export default Footer;
