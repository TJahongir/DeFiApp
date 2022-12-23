import React from "react";
import "../styles/Header.css";

const Header = () => {
	return (
		<div className="header-container">
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
				<button>Enter App</button>
			</div>
		</div>
	);
};

export default Header;
