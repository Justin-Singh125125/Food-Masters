import React from "react";

//components
import SvgIcon from "./SvgIcon";

const test = props => {
  return (
    <div className="navbar">
      <div className="navbar__logo">Food Masters</div>
      <div className="navbar__search">
        <input type="text" className="navbar__search--input" placeholder="Search Item" />
        <SvgIcon svgClass="navbar__search--btn" svgSelection="icon-search" />
      </div>

      {/* <div className="navbar__links">
        <a href="#" className="navbar__links--link">
          Home
        </a>


      </div> */}

      <div className="navbar__user">

        <div className="navbar__user__profile">
          <SvgIcon svgClass="navbar__user__profile--img" svgSelection="icon-user-solid-circle" />
        </div>

      </div>
    </div>
  );
};

export default test;
