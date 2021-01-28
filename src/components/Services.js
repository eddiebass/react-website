import React from "react";
// import icons
import Clock from "../img/clock.svg";
import Diaphragm from "../img/diaphragm.svg";
import Money from "../img/money.svg";
import Teamwork from "../img/teamwork.svg";
import Home2 from "../img/home2.png";

const Services = () => {
	return (
		<div className="services">
			<div className="description">
				<h2>
					High <span>quality</span> services
				</h2>
				<div className="cards">
					<div className="card">
						<div className="icon">
							<img src={Clock} alt="clock" />
							<h3>Efficient</h3>
							<p>Lorem ipsum dolor sit amet.</p>
						</div>
					</div>

					<div className="card">
						<div className="icon">
							<img src={Diaphragm} alt="diaphragm" />
							<h3>Diaphragm</h3>
							<p>Lorem ipsum dolor sit amet.</p>
						</div>
					</div>

					<div className="card">
						<div className="icon">
							<img src={Money} alt="money" />
							<h3>Affordable</h3>
							<p>Lorem ipsum dolor sit amet.</p>
						</div>
					</div>

					<div className="card">
						<div className="icon">
							<img src={Teamwork} alt="teamwork" />
							<h3>Teamwork</h3>
							<p>Lorem ipsum dolor sit amet.</p>
						</div>
					</div>
				</div>
			</div>
			<div className="image">
				<img src={Home2} alt="camera" />
			</div>
		</div>
	);
};

export default Services;
