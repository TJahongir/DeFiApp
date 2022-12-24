import React from "react";
import "../styles/DailyStats.css";

const DailyStats = () => {
	return (
		<div className="daily-stats-container gradient-border">
			<div className="metric-container">
				<span className="metric-title">Tokn Swap Price</span>
				<span className="metric-value">$0.11</span>
			</div>
			<div className="metric-container">
				<span className="metric-title">Supported</span>
				<span className="metric-value">9 chains</span>
			</div>
			<div className="metric-container">
				<span className="metric-title">Total Liquidity</span>
				<span className="metric-value">$100M</span>
			</div>
			<div className="metric-container">
				<span className="metric-title">Total Trades</span>
				<span className="metric-value">$9.25M</span>
			</div>
			<div className="metric-container">
				<span className="metric-title">Daily Active Users</span>
				<span className="metric-value">100K</span>
			</div>
		</div>
	);
};

export default DailyStats;
