import React, { useState, useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
//import logo from "../../../assets/images/logo-blue.png";
//import UserMenu from "./userMenu";
import { Link } from "react-router-dom";
import { AlignLeft, MoreHorizontal, ChevronDown } from "react-feather";

const Header = () => {
  const [headerbar, setHeaderbar] = useState(true);

  return (
    <Fragment>
      <div className="page-main-header">
        <div className="main-header-right row">
          <div className="main-header-left d-lg-none"></div>
          <div className="nav-right col p-0">
            <ul className={`nav-menus ${headerbar ? "" : "open"}`}>
              <li />
              {/*insert components here*/}
              {/* Profile and user settings, logout etc...
              <UserMenu />
              */}
            </ul>
            <div
              className="d-lg-none mobile-toggle pull-right"
              onClick={() => setHeaderbar(!headerbar)}
            >
              <MoreHorizontal />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Header;
