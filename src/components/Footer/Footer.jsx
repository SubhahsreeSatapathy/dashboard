import * as React from "react";
import paginationFactory from "react-bootstrap-table2-paginator";
import BootstrapTable from "react-bootstrap-table-next";
import * as ReactBootStrap from "react-bootstrap";

const Footer = ({ alldata }) => {
  const columns = [
    { dataField: "_id", text: "_id" },
    { dataField: "news_type", text: "News" },
    { dataField: "label", text: "Sentiment" },
  ];
  return (
    <>
      <div>
        <BootstrapTable
          keyField="_id"
          data={alldata}
          columns={columns}
          pagination={paginationFactory()}
        />
      </div>
    </>
  );
};

export default Footer;
