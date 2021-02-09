import React from "react";
import Home1 from "../img/home1.png";
//import styled-components
import { About, Description, Image, Hide } from "../styles";
//import framer motion
import { motion } from "framer-motion";
//import animation
import { titleAnimation, fade, photoAnimation } from "../animation";
import Wave from "./Wave";

const AboutUs = () => {
	return (
		<About>
			<Description>
				<motion.div>
					<Hide>
						<motion.h2 variants={titleAnimation}>We work to make</motion.h2>
					</Hide>
					<Hide>
						<motion.h2 variants={titleAnimation}>
							your <span>dreams</span> come
						</motion.h2>
					</Hide>
					<Hide>
						<motion.h2 variants={titleAnimation}>true.</motion.h2>
					</Hide>
				</motion.div>
				<motion.p variants={fade}>
					Contact us for any photography or videography ideas you have, We have
					professionals with amazing skills
				</motion.p>
				<motion.button variants={fade}>Contact Us</motion.button>
			</Description>
			<Image>
				<motion.img
					variants={photoAnimation}
					src={Home1}
					alt="guy with a camera"
				/>
			</Image>
			<Wave />
		</About>
	);
};

export default AboutUs;
