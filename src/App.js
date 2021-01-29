import React from "react";
// Import pages
import AboutSection from "./Pages/AboutSection";
// import global style
import GlobalStyle from "./components/GlobalStyle";

function App() {
	return (
		<div>
			<GlobalStyle />
			<AboutSection />
		</div>
	);
}

export default App;
