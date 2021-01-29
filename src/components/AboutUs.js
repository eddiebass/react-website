import React from "react";
import Home1 from "../img/home1.png";
// Import Styled-components
import styled from "styled-components";

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

//Styled-Components
const About = styled.div`
	min-height: 90vh;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 5rem 10rem;
	color: white;
`;

const Description = styled.div`
	flex: 1;
	padding-right: 5rem;
	h2 {
		font-weight: lighter;
	}
`;

const Image = styled.div`
	overflow: hidden;
	flex: 1;
	img {
		width: 100%;
		height: 80vh;
		object-fit: cover;
	}
`;

const Hide = styled.div`
	overflow: hidden;
`;

export default AboutUs;
