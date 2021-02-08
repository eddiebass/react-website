import React from "react";
import Home1 from "../img/home1.png";
//import styled-components
import { About, Description, Image, Hide } from "../styles";
//import framer motion
import { motion } from "framer-motion";

const AboutUs = () => {
	return (
		<About>
			<Description>
				<motion.div>
					<Hide>
						<motion.h2>We work to make</motion.h2>
					</Hide>
					<Hide>
						<motion.h2>
							your <span>dreams</span> come
						</motion.h2>
					</Hide>
					<Hide>
						<motion.h2>true.</motion.h2>
					</Hide>
				</motion.div>
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
