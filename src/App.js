import React from "react";
// Import pages
import AboutSection from "./Pages/AboutSection";
import OurWork from "./Pages/OurWork";
import ContactUs from "./Pages/ContactUs";

import Nav from "./components/Nav";
// import global style
import GlobalStyle from "./components/GlobalStyle";
//Import from react-router-dom
import { Switch, Route } from "react-router-dom";

function App() {
	return (
		<div>
			<GlobalStyle />
			<Nav />
			<Switch>
				<Route path="/" exact>
					<AboutSection />
				</Route>
				<Route path="/work">
					<OurWork />
				</Route>
				<Route path="/contact">
					<ContactUs />
				</Route>
			</Switch>
		</div>
	);
}

export default App;
