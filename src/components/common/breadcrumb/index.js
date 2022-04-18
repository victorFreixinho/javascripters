import React, { Fragment } from "react";
import { Home } from "react-feather";
import { Link, useNavigate } from "react-router-dom";
//import Bookmark from "./bookmark";

const Breadcrumb = ({ title, parent, current }) => {
	let navigate = useNavigate();
	return (
		<Fragment>
			<div className="container-fluid">
				<div className="page-header">
					<div className="row">
						<div className="col">
							<div className="page-header-left">
								<h3>{title}</h3>
								<ol className="breadcrumb pull-right">
									<li className="breadcrumb-item">
										<Link to="/">
											<Home />
										</Link>
									</li>
									{parent && (
										<li
											className="breadcrumb-item"
											onClick={() => navigate.goBack()}
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
