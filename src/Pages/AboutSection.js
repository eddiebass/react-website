import React from "react";
// Import components
import AboutUs from "../components/AboutUs";
import Services from "../components/Services";
import Faq from "../components/Faq";

//import framer motion
import { motion } from "framer-motion";
//Animations
import { pageAnimation } from "../animation";

const AboutSection = () => {
	return (
		<motion.div
			variants={pageAnimation}
			initial="hidden"
			animate="show"
			exit="exit"
		>
			<AboutUs />
			<Services />
			<Faq />
		</motion.div>
	);
};

export default AboutSection;
