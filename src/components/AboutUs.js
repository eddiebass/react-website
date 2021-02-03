import React from "react";
import Home1 from "../img/home1.png";
//import styled-components
import { About, Description, Image, Hide } from "../styles";

const AboutUs = () => {
	return (
		<About>
			<Description>
				<div className="title">
					<Hide>
						<h2>We work to make</h2>
					</Hide>
					<Hide>
						<h2>
							your <span>dreams</span> come
						</h2>
					</Hide>
					<Hide>
						<h2>true.</h2>
					</Hide>
				</div>
				<p>
					Contact us for any photography or videography ideas you have, We have
					professionals with amazing skills
				</p>
				<button>Contact Us</button>
			</Description>
			<Image>
				<img src={Home1} alt="guy with a camera" />
			</Image>
		</About>
	);
};

export default AboutUs;
