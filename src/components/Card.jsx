import React from "react";
import "../styles/Card.css";

const Card = ({ title, imgUrl, children }) => {
	return (
		<div className="card-container">
			{imgUrl && <img src={imgUrl} alt={title} />}
			{title && <h1>{title}</h1>}
			{children}
		</div>
	);
};

export default Card;
