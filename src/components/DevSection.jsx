import React from "react";
import dev from "../assets/dev.svg";
import "../styles/DevSection.css";

const DevSection = () => {
	return (
		<div className="dev-container">
			<h1 className="dev-title">
				Building Cross*Chain <span className="highlighted">Together</span>
			</h1>
			<div className="dev-wrapper">
				<div className="dev-text">
					<h2>API SDK</h2>
					<p className="dev-description">
						Our goal is to provide a full ecosystem that makes it easy for
						developers to create and deploy cross-chain applications
					</p>
					<div className="btn-wrapper">
						<button className="primary">
							<span>Learn More</span>
						</button>
						<div className="secondary">
							<span>Get in Touch</span>
						</div>
					</div>
				</div>
				<div className="dev-image">
					<img src={dev} alt="dev tools" />
				</div>
			</div>
		</div>
	);
};

export default DevSection;
