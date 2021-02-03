import React from "react";
// import icons
import Clock from "../img/clock.svg";
import Diaphragm from "../img/diaphragm.svg";
import Money from "../img/money.svg";
import Teamwork from "../img/teamwork.svg";
import Home2 from "../img/home2.png";
//import styled-components
import { About, Description, Image } from "../styles";
import styled from "styled-components";

const Services = () => {
	return (
		<Service>
			<Description>
				<h2>
					High <span>quality</span> services
				</h2>
				<Cards>
					<Card>
						<div className="icon">
							<img src={Clock} alt="clock" />
							<h3>Efficient</h3>
						</div>
						<p>Lorem ipsum dolor sit amet.</p>
					</Card>

					<Card>
						<div className="icon">
							<img src={Diaphragm} alt="diaphragm" />
							<h3>Diaphragm</h3>
						</div>
						<p>Lorem ipsum dolor sit amet.</p>
					</Card>

					<Card>
						<div className="icon">
							<img src={Money} alt="money" />
							<h3>Affordable</h3>
						</div>
						<p>Lorem ipsum dolor sit amet.</p>
					</Card>

					<Card>
						<div className="icon">
							<img src={Teamwork} alt="teamwork" />
							<h3>Teamwork</h3>
						</div>
						<p>Lorem ipsum dolor sit amet.</p>
					</Card>
				</Cards>
			</Description>
			<Image>
				<img src={Home2} alt="camera" />
			</Image>
		</Service>
	);
};

const Service = styled(About)`
	h2 {
		padding-bottom: 5rem;
	}
	p {
		width: 70%;
		padding: 2rem 0rem 4rem 0rem;
	}
`;

const Cards = styled.div`
	display: flex;
	flex-wrap: wrap;
`;
const Card = styled.div`
	flex-basis: 20rem;
	.icon {
		display: flex;
		align-items: center;
		h3 {
			margin-left: 1rem;
			background: white;
			color: black;
			padding: 1rem;
		}
	}
`;

export default Services;
