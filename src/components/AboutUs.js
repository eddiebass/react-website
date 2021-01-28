import React from "react";
import Home1 from "../img/home1.png";

const AboutUs = () => {
	return (
		<div>
			ABOUT US
			<div className="description">
				<div className="title">
					<div className="hide">
						<h2>We work to make</h2>
					</div>
					<div className="hide">
						<h2>
							your <span>dreams</span> come
						</h2>
					</div>
					<div className="hide">
						<h2>true.</h2>
					</div>
				</div>
				<p>
					Contact us for any photography or videography ideas you have, We have
					professionals with amazing skills
				</p>
				<button>Contact Us</button>
			</div>
			<div className="image">
				<img src={Home1} alt="guy with a camera" />
			</div>
		</div>
	);
};

export default AboutUs;
