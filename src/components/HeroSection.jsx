import React from "react";
import "../styles/HeroSection.css";
import search from "../assets/icons/search.svg";
import { ReactComponent as TelegramIcon } from "../assets/icons/telegram.svg";
import { ReactComponent as TwitterIcon } from "../assets/icons/twitter.svg";
import { ReactComponent as YouTubeIcon } from "../assets/icons/youtube.svg";
import { ReactComponent as DiscordIcon } from "../assets/icons/discord.svg";
import hero from "../assets/hero.svg";

const HeroSection = () => {
	return (
		<div className="hero-section-container">
			<div className="hero-info-wrapper">
				<div className="hero-info-text">
					<h1>
						The <span className="highlighted">Decentralized</span> Cross-Chain
						Exchange
					</h1>
					<p className="hero-info-description">
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus
						quasi molestias velit exercitationem quae corporis necessitatibus
						id?
					</p>
					<div className="search-container">
						<div className="search-input-wrapper">
							<img className="search" src={search} alt="src" />
							<input
								className="search-input"
								placeholder="Search 5500+ tokens across 9 chains"></input>
						</div>
						<button className="search-btn primary">
							<span className="start-swapping">Start Swapping</span>
						</button>
					</div>
					<div className="social-links-container">
						<div className="social-links">
							<a href="/" target="_blank">
								<TelegramIcon />
							</a>
							<a href="/" target="_blank">
								<TwitterIcon />
							</a>
							<a href="/" target="_blank">
								<YouTubeIcon />
							</a>
							<a href="/" target="_blank">
								<DiscordIcon />
							</a>
						</div>
					</div>
				</div>
			</div>
			<div className="hero-image-container">
				<div>
					<img src={hero} alt="blockchain" className="hero-img" />
				</div>
			</div>
		</div>
	);
};

export default HeroSection;
