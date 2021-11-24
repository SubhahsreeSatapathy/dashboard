import React from "react";
import "./Topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo"></span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            
          </div>
          <div className="topbarIconContainer">
            <Language />
            
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          
        </div>
      </div>
    </div>
  );
};
export default Topbar;
