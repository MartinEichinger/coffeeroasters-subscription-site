import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import About from "./components/About/About";
import Plan from "./components/Plan/Plan";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";

function App() {
	return (
		<div>
			<Nav />

			<Routes>
				<Route path="/about" element={<About />} />
				<Route path="/plan" element={<Plan />} />
				<Route path="/" element={<Home />} />
			</Routes>

			<Footer />
		</div>
	);
}

export default App;
