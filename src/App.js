import React from "react";
// Import pages
import AboutSection from "./Pages/AboutSection";
import OurWork from "./Pages/OurWork";
import ContactUs from "./Pages/ContactUs";

import Nav from "./components/Nav";
// import global style
import GlobalStyle from "./components/GlobalStyle";
//Import from react-router-dom
import { Switch, Route, useLocation } from "react-router-dom";
//import moviedetail (useHistory)
import MovieDetial from "./Pages/MovieDetail";
//Animate
import { AnimatePresence } from "framer-motion";

function App() {
	const location = useLocation();
	return (
		<div>
			<GlobalStyle />
			<Nav />
			<AnimatePresence exitBeforeEnter>
				<Switch location={location} key={location.pathname}>
					<Route path="/" exact>
						<AboutSection />
					</Route>
					<Route path="/work" exact>
						<OurWork />
					</Route>
					<Route path="/work/:id">
						<MovieDetial />
					</Route>
					<Route path="/contact">
						<ContactUs />
					</Route>
				</Switch>
			</AnimatePresence>
		</div>
	);
}

export default App;
