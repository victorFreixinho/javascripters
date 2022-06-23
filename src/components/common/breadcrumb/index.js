import React, { Fragment } from "react";
import { Home } from "react-feather";
import { Link, useHistory } from "react-router-dom";
//import Bookmark from "./bookmark";

const Breadcrumb = ({ title, parent, current }) => {
  let history = useHistory();
  return (
    <Fragment>
      <div className="container-fluid">
        <div className="page-header">
          <div className="row mt-5 mx-2">
            <div className="col">
              <div className="page-header-left">
                <h3>{title}</h3>
                <ol className="breadcrumb pull-right fs-6">
                  <li className="breadcrumb-item">
                    <Link to="/">
                      <Home size={19} />
                    </Link>
                  </li>
                  {parent && (
                    <li
                      className="breadcrumb-item"
                      onClick={() => history.goBack()}
                      style={{ cursor: "pointer" }}
                    >
                      {parent}
                    </li>
                  )}
                  {current && (
                    <li className="breadcrumb-item active">{current}</li>
                  )}
                </ol>
              </div>
            </div>
            {/* <!-- Bookmark Start--> */}
            {/* <Bookmark /> */}
            {/* <!-- Bookmark Ends--> */}
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Breadcrumb;
