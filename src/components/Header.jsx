import React, { useState } from "react";
import "../styles/Header.css";
import { ReactComponent as MenuIcon } from "../assets/icons/menu.svg";

let headerContainer = {
	display: "flex",
	width: "100%",
	padding: "20px 40px",
};

const Header = () => {
	const [isExpanded, setIsExpanded] = useState(false);
	const toggleExpanded = () =>
		setIsExpanded((prevIsExpanded) => !prevIsExpanded);

	return (
		<>
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
				<button className="hamburger" onClick={toggleExpanded}>
					<MenuIcon />
				</button>
			</div>
			{isExpanded && (
				<div className="menu-overlay">
					<div className="menu-links">
						<a href="/">App</a>
						<a href="/">Products</a>
						<a href="/">Build</a>
						<a href="/">Careers</a>
						<a href="/">About</a>
						<a href="/">Enter App</a>
					</div>
				</div>
			)}
		</>
	);
};

export default Header;
