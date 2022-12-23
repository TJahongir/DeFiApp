import React from "react";
import "../styles/Header.css";

let headerContainer = {
	display: "flex",
	width: "100%",
	padding: "20px 40px",
};

const Header = () => {
	return (
		<div className="headerContainer" style={headerContainer}>
			<div className="logo">TOKNSWAP</div>
			<div className="menu">
				<div className="menu-links">
					<a href="/">App</a>
					<a href="/">Products</a>
					<a href="/">Build</a>
					<a href="/">Careers</a>
					<a href="/">About</a>
				</div>
			</div>
			<div className="wallet-btn">
				<button className="primary">Enter App</button>
			</div>
		</div>
	);
};

export default Header;
