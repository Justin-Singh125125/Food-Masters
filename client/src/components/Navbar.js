import React from "react";

const test = props => {
  return (
    <div className="navbar">
      <div className="navbar__logo">Logo</div>
      <div className="navbar__search">
        <input type="text" className="navbar__search--input" />
      </div>

      <div className="navbar__links">
        <a href="#" className="navbar__links--link">
          Home
        </a>
      </div>

      <div className="navbar__user">
        <p>User</p>
      </div>
    </div>
  );
};

export default test;
