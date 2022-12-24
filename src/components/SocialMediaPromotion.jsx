import React from "react";
import Card from "./Card";
import discord from "../assets/discord2.svg";
import youtube2 from "../assets/youtube2.svg";
import paper from "../assets/paper.svg";
import blog from "../assets/blog.svg";
import "../styles/SocialMedia.css";

const SocialMediaPromotion = () => {
	return (
		<div className="social-media-container">
			<Card>
				<>
					<div className="social-media-text">
						<h2>
							<span className="highlighted" style={{ color: "#fff" }}>
								Join
							</span>{" "}
							our community
						</h2>
					</div>
					<div className="social-media-icons">
						<a href="/">
							<img src={discord} alt="discord" />
						</a>
						<a href="/">
							<img src={youtube2} alt="youtube" />
						</a>
						<a href="/">
							<img src={paper} alt="whitepaper" />
						</a>
						<a href="/">
							<img src={blog} alt="blog" />
						</a>
					</div>
				</>
			</Card>
		</div>
	);
};

export default SocialMediaPromotion;
